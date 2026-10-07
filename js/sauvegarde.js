/*
  ============================================================
  SAUVEGARDE — copie des évaluations dans un fichier (v75)
  ============================================================
  Constat E4 de l'audit v72 : les évaluations n'existaient qu'à un seul
  endroit (la mémoire du navigateur). Un changement de téléphone, une
  désinstallation ou un nettoyage du navigateur les effaçait.

  Ce fichier ajoute trois choses, toutes 100 % locales :
    1. protegerDonnees() : demande au navigateur de ne pas effacer de
       lui-même la mémoire de SPIRIT (navigator.storage.persist) ;
    2. « Exporter les évaluations » : un fichier .json contenant toutes les
       évaluations terminées (noms, réponses, observations, dates). Sur
       téléphone, il passe par le menu de partage (Enregistrer dans
       Fichiers, courriel à soi-même…) ; sur ordinateur, il est téléchargé ;
    3. « Importer un fichier » : relit ce fichier et AJOUTE les évaluations
       absentes de l'appareil, sans doublon et sans rien effacer.

  Rien ne passe par un serveur : le fichier va où l'utilisateur le décide.
  ============================================================
*/

// Signature du fichier : permet de reconnaître une sauvegarde SPIRIT.
const FORMAT_SAUVEGARDE = "spirit-sauvegarde";
const VERSION_FORMAT_SAUVEGARDE = 1;
// Taille maximale acceptée à l'import (largement suffisante : une
// évaluation pèse moins de 2 Ko).
const TAILLE_MAX_IMPORT = 5 * 1024 * 1024;


/* ===========================================================
   1. PROTECTION PAR LE NAVIGATEUR
   Appelée quand une évaluation est enregistrée ou importée (et non au
   démarrage : certains navigateurs posent alors une question, qui n'a de
   sens qu'une fois qu'il y a quelque chose à protéger).
   =========================================================== */
function protegerDonnees() {
  try {
    if (navigator.storage && navigator.storage.persist && navigator.storage.persisted) {
      navigator.storage.persisted()
        .then((deja) => { if (!deja) return navigator.storage.persist(); })
        .catch(() => {});
    }
  } catch (e) {
    // Navigateur ancien : rien à faire.
  }
}


/* ===========================================================
   2. EXPORT
   =========================================================== */
function exporterEvaluations() {
  const liste = lireHistorique();
  if (!liste.length) return;

  const contenu = {
    format: FORMAT_SAUVEGARDE,
    version: VERSION_FORMAT_SAUVEGARDE,
    versionApplication: VERSION_SPIRIT,
    dateExport: new Date().toISOString(),
    lisezMoi: "Sauvegarde des évaluations SPIRIT (EcclesiaLab, UCLouvain). " +
              "Pour les retrouver : SPIRIT → Mes évaluations → Importer un fichier.",
    evaluations: liste
  };
  const texte = JSON.stringify(contenu, null, 2);
  const nom = "SPIRIT-evaluations-" + new Date().toISOString().slice(0, 10) + ".json";
  const fichier = new File([texte], nom, { type: "application/json" });

  // Téléphone : le menu de partage propose « Enregistrer dans Fichiers »,
  // le courriel, le cloud… (seulement si le navigateur sait partager un fichier).
  if (detecterTelephone() && navigator.canShare && navigator.share) {
    let partageable = false;
    try { partageable = navigator.canShare({ files: [fichier] }); } catch (e) { partageable = false; }
    if (partageable) {
      navigator.share({ files: [fichier], title: t("sauvegarde_partage_titre") }).catch(() => {
        // Partage annulé : on ne fait rien.
      });
      return;
    }
  }

  // Sinon : téléchargement classique du fichier.
  const url = URL.createObjectURL(fichier);
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = nom;
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}


/* ===========================================================
   3. IMPORT
   =========================================================== */

// Ouvre le sélecteur de fichier du téléphone ou de l'ordinateur.
function choisirFichierImport() {
  const champ = parId("sauvegarde-fichier");
  champ.value = "";   // pour pouvoir réimporter le même fichier
  champ.click();
}

// Lit le fichier choisi, puis affiche le résultat.
function importerFichier(fichier) {
  if (!fichier) return;
  if (fichier.size > TAILLE_MAX_IMPORT) {
    afficherResultatImport(null);
    return;
  }
  const lecteur = new FileReader();
  lecteur.onload = () => afficherResultatImport(fusionnerSauvegarde(String(lecteur.result)));
  lecteur.onerror = () => afficherResultatImport(null);
  lecteur.readAsText(fichier);
}

/*
  Ajoute à l'historique les évaluations du fichier qui n'y sont pas encore.
  Renvoie { ajoutees, doublons, illisibles }, ou null si le fichier n'est
  pas une sauvegarde SPIRIT.
*/
function fusionnerSauvegarde(texte) {
  let donnees;
  try {
    donnees = JSON.parse(texte);
  } catch (e) {
    return null;
  }
  if (!donnees || donnees.format !== FORMAT_SAUVEGARDE || !Array.isArray(donnees.evaluations)) return null;

  const liste = lireHistorique();
  const dejaLa = new Set(liste.map((e) => e.id));
  const resultat = { ajoutees: 0, doublons: 0, illisibles: 0 };

  donnees.evaluations.forEach((brute) => {
    const evaluation = nettoyerEvaluation(brute);
    if (!evaluation) { resultat.illisibles++; return; }
    if (dejaLa.has(evaluation.id)) { resultat.doublons++; return; }
    liste.push(evaluation);
    dejaLa.add(evaluation.id);
    resultat.ajoutees++;
  });

  if (resultat.ajoutees > 0) {
    // La plus récente en premier, comme dans le reste de l'application.
    liste.sort((a, b) => String(b.dateFin).localeCompare(String(a.dateFin)));
    if (!ecrireHistorique(liste)) return null;
    protegerDonnees();
  }
  return resultat;
}

/*
  Recopie une évaluation lue dans un fichier en ne gardant que ce que
  SPIRIT connaît (identifiants de piliers et de réponses, textes, nombres).
  Un fichier modifié à la main ne peut donc rien introduire d'autre.
  Renvoie null si l'évaluation est incomplète ou illisible.
*/
function nettoyerEvaluation(brute) {
  if (!brute || typeof brute !== "object") return null;
  if (typeof brute.id !== "string" || !brute.id || typeof brute.nomObjet !== "string") return null;

  const idsModalites = MODALITES.map((m) => m.id);
  const date = new Date(brute.dateFin);
  const groupe = brute.mode === "groupe";
  const propre = {
    id: brute.id.slice(0, 100),
    nomObjet: brute.nomObjet.slice(0, 200),
    typeObjet: typeof brute.typeObjet === "string" ? brute.typeObjet.slice(0, 40) : null,
    mode: groupe ? "groupe" : "individuel",
    reponses: {},
    commentaires: {},
    dateFin: isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString()
  };

  const commentaires = (brute.commentaires && typeof brute.commentaires === "object") ? brute.commentaires : {};
  CRITERES.forEach((c) => {
    if (typeof commentaires[c.id] === "string" && commentaires[c.id].trim()) {
      propre.commentaires[c.id] = commentaires[c.id].slice(0, 2000);
    }
  });

  if (groupe) {
    // Évaluation en groupe : des nombres d'avis (0 à 999), au moins un par pilier.
    const comptes = (brute.comptes && typeof brute.comptes === "object") ? brute.comptes : {};
    propre.comptes = {};
    let complet = true;
    CRITERES.forEach((c) => {
      const source = (comptes[c.id] && typeof comptes[c.id] === "object") ? comptes[c.id] : {};
      propre.comptes[c.id] = {};
      let total = 0;
      idsModalites.forEach((m) => {
        const n = parseInt(source[m], 10);
        propre.comptes[c.id][m] = (n >= 0 && n <= 999) ? n : 0;
        total += propre.comptes[c.id][m];
      });
      if (total === 0) complet = false;
    });
    return complet ? propre : null;
  }

  // Évaluation faite seul : une réponse connue pour chacun des 14 piliers.
  const reponses = (brute.reponses && typeof brute.reponses === "object") ? brute.reponses : {};
  let complet = true;
  CRITERES.forEach((c) => {
    if (idsModalites.indexOf(reponses[c.id]) !== -1) {
      propre.reponses[c.id] = reponses[c.id];
    } else {
      complet = false;
    }
  });
  return complet ? propre : null;
}

// Fenêtre de résultat de l'import.
function afficherResultatImport(resultat) {
  if (!resultat) {
    afficherMessage(t("sauvegarde_importer"), t("import_invalide"));
    return;
  }
  const phrases = [];
  phrases.push(resultat.ajoutees === 0 ? t("import_ajoutees_zero")
    : resultat.ajoutees === 1 ? t("import_ajoutees_un")
    : tAvec("import_ajoutees", { nombre: resultat.ajoutees }));
  if (resultat.doublons === 1) phrases.push(t("import_doublons_un"));
  if (resultat.doublons > 1) phrases.push(tAvec("import_doublons", { nombre: resultat.doublons }));
  if (resultat.illisibles === 1) phrases.push(t("import_illisibles_un"));
  if (resultat.illisibles > 1) phrases.push(tAvec("import_illisibles", { nombre: resultat.illisibles }));
  afficherHistorique();
  afficherMessage(t("sauvegarde_importer"), phrases.join(" "));
}

// Le bouton « Exporter » n'apparaît que s'il y a quelque chose à exporter.
function majBoutonsSauvegarde() {
  const bouton = parId("sauvegarde-exporter");
  if (bouton) bouton.classList.toggle("cache", lireHistorique().length === 0);
}
