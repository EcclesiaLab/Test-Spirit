/*
  ============================================================
  LOGIQUE APPLICATIVE — SPIRIT
  ============================================================
  Le "cerveau" de l'application. Organisé en sections :
    1. Enregistrement du service worker (hors-ligne)
    2. Outils et constantes
    3. Navigation entre écrans
    4. Fenêtre de bienvenue (premier lancement)
    5. Écran d'entrée (nom de l'objet + type)
    6. État de l'évaluation en cours
    7. Branchement des boutons
    8. Démarrage

  S'y ajoutent : questionnaire, historique, partage, traductions de
  l'interface, installation sur smartphone. Le calcul et le dessin du
  diagnostic sont dans diagnostic.js, le PDF dans impression.js.
  ============================================================
*/


/* ===========================================================
   1. ENREGISTREMENT DU SERVICE WORKER
   =========================================================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("SPIRIT : service worker enregistré (mode hors-ligne actif)."))
      .catch((erreur) => console.log("SPIRIT : service worker non enregistré.", erreur));

    // --- Rechargement automatique lors d'une mise à jour ---
    // Problème résolu ici : avec une stratégie "cache d'abord", après une mise
    // à jour l'utilisateur voit encore l'ancienne version au premier lancement,
    // et devait fermer puis rouvrir l'app pour voir la nouvelle.
    //
    // Solution : si une version est DÉJÀ installée (utilisateur de retour), on
    // écoute l'événement "controllerchange", déclenché quand le nouveau service
    // worker prend le relais. À ce moment-là, on recharge la page UNE seule fois
    // pour afficher la nouvelle version, sans intervention de l'utilisateur.
    //
    // On ne le fait que si un service worker contrôle déjà la page : sinon
    // (toute première visite), il n'y a aucune ancienne version à remplacer.
    if (navigator.serviceWorker.controller) {
      let dejaRecharge = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (dejaRecharge) return; // garde-fou : on ne recharge qu'une fois
        dejaRecharge = true;
        window.location.reload();
      });
    }
  });
}


/* ===========================================================
   2. OUTILS ET CONSTANTES
   =========================================================== */

// Clé de mémoire locale : la bienvenue a-t-elle déjà été vue ?
const CLE_BIENVENUE_VUE = "spirit_bienvenue_vue";

// Raccourci : récupérer un élément par son identifiant.
function parId(id) {
  return document.getElementById(id);
}


/* ===========================================================
   3. NAVIGATION ENTRE ÉCRANS
   Affiche l'écran demandé et masque les autres. Chaque écran est
   un élément portant la classe "ecran" et un identifiant de la forme
   "ecran-xxx". On passe ici l'identifiant complet (ex. "ecran-entree").
   =========================================================== */
function afficherEcran(idEcran) {
  // On retire la classe active de tous les écrans...
  document.querySelectorAll(".ecran").forEach((ecran) => {
    ecran.classList.remove("ecran--actif");
  });
  // ... puis on l'ajoute à celui demandé.
  const cible = parId(idEcran);
  // On note l'écran affiché sur <body> : la feuille de style s'en sert pour
  // élargir la mise en page sur ordinateur, écran par écran.
  document.body.dataset.ecran = idEcran;
  if (cible) {
    cible.classList.add("ecran--actif");
    // On remonte en haut de l'écran (utile si l'écran précédent était défilé).
    cible.scrollTop = 0;
    window.scrollTo(0, 0);
  }
  // Remarque : la fenêtre « Comment ça fonctionne ? » n'est plus déclenchée
  // ici, mais au clic sur « Démarrer une évaluation » (voir brancherBoutons),
  // pour ne pas réapparaître quand on revient en arrière depuis le 1er pilier.
}


/* ===========================================================
   4. FENÊTRE DE BIENVENUE (premier lancement)
   =========================================================== */
function afficherBienvenue() {
  parId("bienvenue-voile").classList.remove("cache");
}

function fermerBienvenue() {
  parId("bienvenue-voile").classList.add("cache");
  try {
    localStorage.setItem(CLE_BIENVENUE_VUE, "oui");
  } catch (e) {
    console.log("SPIRIT : impossible d'enregistrer l'état de la bienvenue.");
  }
  // Sur smartphone, on enchaîne sur la proposition d'installation.
  proposerInstallationSiPremiereFois();
}

/* --- Fenêtre « Comment ça fonctionne ? » ---
   S'affiche au début des 5 premières évaluations lancées depuis l'accueil.
   Un compteur, gardé dans la mémoire locale du téléphone, retient combien
   de fois elle a déjà été montrée. Pour changer le nombre d'affichages,
   il suffit de modifier NB_AFFICHAGES_FONCTIONNEMENT. */
const CLE_FONCTIONNEMENT_COMPTE = "spirit_fonctionnement_compte";
const CLE_FONCTIONNEMENT_VU = "spirit_fonctionnement_vu"; // ancienne clé (jusqu'à la v60)
const NB_AFFICHAGES_FONCTIONNEMENT = 5;

// Renvoie le nombre de fois où la fenêtre a déjà été montrée.
function lireCompteFonctionnement() {
  try {
    const compte = parseInt(localStorage.getItem(CLE_FONCTIONNEMENT_COMPTE), 10);
    if (!isNaN(compte)) return compte;
    // Utilisateur d'une version précédente : s'il avait déjà vu la fenêtre
    // (ancienne clé), on compte ce premier affichage.
    return localStorage.getItem(CLE_FONCTIONNEMENT_VU) === "oui" ? 1 : 0;
  } catch (e) {
    return 0;
  }
}

// Montre la fenêtre si elle n'a pas encore été vue 5 fois, et incrémente
// le compteur. Le compteur augmente dès l'affichage (et non à la fermeture),
// pour qu'une fenêtre fermée en quittant l'app compte quand même.
function montrerFonctionnementSiBesoin() {
  const compte = lireCompteFonctionnement();
  if (compte >= NB_AFFICHAGES_FONCTIONNEMENT) return;
  parId("fonctionnement-voile").classList.remove("cache");
  try {
    localStorage.setItem(CLE_FONCTIONNEMENT_COMPTE, String(compte + 1));
  } catch (e) {
    console.log("SPIRIT : impossible d'enregistrer le compteur du mode d'emploi.");
  }
}

function fermerFonctionnement() {
  parId("fonctionnement-voile").classList.add("cache");
}

function gererBienvenueAuDemarrage() {
  // 1. Si la langue n'a jamais été choisie, on affiche d'abord l'écran de
  //    choix de langue. La bienvenue suivra une fois la langue choisie.
  if (!langueDejaChoisie()) {
    afficherChoixLangue();
    return;
  }
  // 2. Sinon, on affiche la bienvenue si elle n'a pas encore été vue.
  let dejaVue = false;
  try {
    dejaVue = localStorage.getItem(CLE_BIENVENUE_VUE) === "oui";
  } catch (e) {
    dejaVue = false;
  }
  if (!dejaVue) {
    afficherBienvenue();
  } else {
    // 3. Bienvenue déjà vue : sur smartphone, on propose l'installation
    //    si cela n'a pas encore été fait.
    proposerInstallationSiPremiereFois();
  }
}

// Affiche l'écran de choix de la langue (premier lancement).
function afficherChoixLangue() {
  parId("choix-langue-voile").classList.remove("cache");
}

// Appelé quand l'utilisateur choisit sa langue au premier lancement.
function choisirLangueInitiale(code) {
  changerLangue(code);                       // applique et mémorise la langue
  parId("choix-langue-voile").classList.add("cache");
  // On enchaîne sur la bienvenue (premier lancement = jamais vue).
  afficherBienvenue();
}


/* ===========================================================
   INSTALLATION SUR SMARTPHONE (fenêtre de première visite)
   Quand SPIRIT est ouvert dans le navigateur d'un smartphone, on propose
   une fois de l'ajouter à l'écran d'accueil. Rien n'est envoyé nulle part :
   tout se passe sur le téléphone.
   - iPhone : Apple ne permet pas d'installer en un geste ; on montre
     le visuel des étapes dans Safari.
   - Android : le navigateur (Chrome, Edge, Samsung Internet) fournit
     souvent une « invitation d'installation » ; on affiche alors un vrai
     bouton « Installer ». Sinon, on montre le visuel des étapes.
   Ordinateurs et tablettes : rien n'est proposé.
   =========================================================== */
const CLE_INSTALLATION_PROPOSEE = "spirit_installation_proposee";

// Invitation d'installation fournie par le navigateur (Android), gardée de
// côté pour être déclenchée au clic sur notre bouton « Installer ».
let invitationInstallation = null;

window.addEventListener("beforeinstallprompt", (event) => {
  // On remplace la petite bannière automatique du navigateur par notre fenêtre.
  event.preventDefault();
  invitationInstallation = event;
  // Si la fenêtre est déjà ouverte, on y fait apparaître le bouton.
  majContenuInstallation();
});

// L'app vient d'être installée : on ferme la fenêtre et on masque le rappel.
window.addEventListener("appinstalled", () => {
  invitationInstallation = null;
  fermerInstallation();
  majLienInstallationAPropos();
});

// SPIRIT est-il ouvert comme application installée (et non dans le navigateur) ?
function estAppInstallee() {
  const modeApp = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
  return modeApp || window.navigator.standalone === true; // 2e test : ancien iPhone
}

// Renvoie "iphone", "android", ou null (ordinateur, tablette).
function detecterTelephone() {
  const ua = navigator.userAgent || "";
  if (/iPhone|iPod/.test(ua)) return "iphone";
  if (/Android/.test(ua) && /Mobile/.test(ua)) return "android";
  return null;
}

// Sur iPhone, l'installation passe par Safari. On repère les autres
// navigateurs (Chrome, Firefox, Edge…) et les navigateurs intégrés
// aux applications (Facebook, Instagram, Gmail…).
function estSafariIphone() {
  const ua = navigator.userAgent || "";
  return !/CriOS|FxiOS|EdgiOS|OPiOS|GSA\/|FBAN|FBAV|Instagram|LinkedInApp/.test(ua);
}

// Faut-il proposer l'installation ici ? (smartphone + pas encore installée)
function installationPossibleIci() {
  return detecterTelephone() !== null && !estAppInstallee();
}

// Affiche la fenêtre une seule fois (première visite).
function proposerInstallationSiPremiereFois() {
  if (!installationPossibleIci()) return;
  let dejaProposee = false;
  try {
    dejaProposee = localStorage.getItem(CLE_INSTALLATION_PROPOSEE) === "oui";
  } catch (e) {
    dejaProposee = false;
  }
  if (!dejaProposee) afficherInstallation();
}

function afficherInstallation() {
  majContenuInstallation();
  parId("installation-voile").classList.remove("cache");
}

function fermerInstallation() {
  parId("installation-voile").classList.add("cache");
  try {
    localStorage.setItem(CLE_INSTALLATION_PROPOSEE, "oui");
  } catch (e) {
    console.log("SPIRIT : impossible d'enregistrer l'état de l'installation.");
  }
}

// Adapte le contenu de la fenêtre au téléphone et à la langue.
function majContenuInstallation() {
  const tel = detecterTelephone();
  if (!tel) return;
  const boutonNatif = (tel === "android" && invitationInstallation !== null);
  const visuel = parId("installation-visuel");

  // Android avec invitation : bouton « Installer » à la place du visuel.
  parId("installation-bouton-natif").classList.toggle("cache", !boutonNatif);
  visuel.classList.toggle("cache", boutonNatif);
  if (!boutonNatif) {
    // Ex. : images/installation-iphone-fr.png
    visuel.src = "images/installation-" + tel + "-" + getLangue() + ".png";
    visuel.alt = t("installation_alt_" + tel);
  }

  // Notes propres à l'iPhone.
  parId("installation-note-iphone").classList.toggle("cache", tel !== "iphone");
  parId("installation-note-safari").classList.toggle("cache", !(tel === "iphone" && !estSafariIphone()));

  // Bouton de fermeture : « Plus tard » face au bouton Installer,
  // « J'ai compris » quand on montre les étapes à suivre.
  parId("installation-fermer").textContent = boutonNatif ? t("installation_plus_tard") : t("fonctionnement_compris");
}

// Android : ouvre la fenêtre d'installation du navigateur.
function lancerInstallationNative() {
  if (!invitationInstallation) return;
  invitationInstallation.prompt();
  const apres = () => {
    // Une invitation ne peut servir qu'une fois.
    invitationInstallation = null;
    fermerInstallation();
    majLienInstallationAPropos();
  };
  invitationInstallation.userChoice.then(apres, apres);
}

// Montre le bouton de rappel dans « À propos » seulement quand c'est utile.
function majLienInstallationAPropos() {
  const bloc = parId("a-propos-installation");
  if (bloc) bloc.classList.toggle("cache", !installationPossibleIci());
}


/* ===========================================================
   6. ÉTAT DE L'ÉVALUATION EN COURS
   On garde en mémoire, le temps de la session, ce que l'utilisateur
   est en train de renseigner (nom et type de la pratique). Les réponses
   et observations sont plus bas ; tout est sauvegardé en mémoire locale.
   =========================================================== */
let evaluationEnCours = {
  nomObjet: "",
  typeObjet: null  // recevra l'id du type choisi (ex. "action-ponctuelle")
};


/* ===========================================================
   5. ÉCRAN D'ENTRÉE (nom de l'objet + type)
   =========================================================== */

// Génère les cartes de type d'objet à partir du fichier de données.
function genererCartesType() {
  const conteneur = parId("liste-types-objet");
  conteneur.innerHTML = ""; // on vide d'abord (au cas où)

  TYPES_OBJET.forEach((type) => {
    // On crée un bouton-carte pour chaque type.
    const carte = document.createElement("button");
    carte.type = "button";
    carte.className = "carte-type";
    carte.dataset.idType = type.id; // on retient l'id dans l'attribut data-id-type

    carte.innerHTML =
      '<span class="carte-type__titre">' + tr(type.libelle) + '</span>' +
      '<span class="carte-type__description">' + tr(type.description) + '</span>';

    // Au clic : on sélectionne cette carte.
    carte.addEventListener("click", () => choisirType(type.id));

    conteneur.appendChild(carte);
  });
}

// Marque une carte comme sélectionnée et met à jour l'état.
function choisirType(idType) {
  evaluationEnCours.typeObjet = idType;

  // Mise à jour visuelle : on enlève la sélection de toutes les cartes,
  // puis on la met sur celle choisie.
  document.querySelectorAll(".carte-type").forEach((carte) => {
    if (carte.dataset.idType === idType) {
      carte.classList.add("carte-type--active");
    } else {
      carte.classList.remove("carte-type--active");
    }
  });

  rafraichirBoutonCommencer();
}

// Active ou désactive le bouton "Commencer l'évaluation" selon que
// le formulaire est complet (un nom non vide ET un type choisi).
function rafraichirBoutonCommencer() {
  const nom = parId("champ-nom-objet").value.trim();
  const typeChoisi = evaluationEnCours.typeObjet !== null;
  const bouton = parId("bouton-commencer-evaluation");

  bouton.disabled = !(nom.length > 0 && typeChoisi);
}

// Réinitialise l'écran d'entrée (champ vide, aucun type sélectionné).
// Utile quand on démarre une nouvelle évaluation.
function reinitialiserEntree() {
  evaluationEnCours = { nomObjet: "", typeObjet: null };
  parId("champ-nom-objet").value = "";
  // On régénère les cartes de type pour qu'elles soient toujours dans la
  // langue courante (l'utilisateur a pu changer de langue depuis un autre
  // écran avant d'arriver ici).
  genererCartesType();
  rafraichirBoutonCommencer();
}

// Valide l'écran d'entrée et passe au questionnaire (1er pilier).
function validerEntree() {
  evaluationEnCours.nomObjet = parId("champ-nom-objet").value.trim();
  // Sécurité : on ne continue que si tout est bien rempli.
  if (!evaluationEnCours.nomObjet || !evaluationEnCours.typeObjet) {
    return;
  }

  // On démarre une nouvelle série de réponses, et on affiche le 1er critère.
  reponses = {};
  commentaires = {};
  afficherCritere(0);
}


// Reprend une évaluation en cours à partir des données sauvegardées :
// on restaure le nom, le type, les réponses et la position.
function reprendreEvaluation(donnees) {
  evaluationEnCours.nomObjet = donnees.nomObjet;
  evaluationEnCours.typeObjet = donnees.typeObjet;
  reponses = donnees.reponses || {};
  commentaires = donnees.commentaires || {};
  // On reprend au critère où l'utilisateur s'était arrêté (sécurité sur l'index).
  let index = donnees.indexCritere || 0;
  if (index < 0 || index >= CRITERES.length) index = 0;
  afficherCritere(index);
}


/* ===========================================================
   SAUVEGARDE LOCALE DE L'ÉVALUATION EN COURS
   Tout reste sur l'appareil (localStorage), rien n'est envoyé ailleurs.
   On enregistre l'évaluation en cours pour pouvoir la reprendre si
   l'utilisateur quitte l'app avant la fin (option de reprise).
   =========================================================== */

// Clé sous laquelle l'évaluation en cours est stockée.
const CLE_EVAL_EN_COURS = "spirit_eval_en_cours";

// Enregistre l'état actuel de l'évaluation (nom, type, réponses, position).
function sauvegarderEnCours() {
  const donnees = {
    nomObjet: evaluationEnCours.nomObjet,
    typeObjet: evaluationEnCours.typeObjet,
    reponses: reponses,
    commentaires: commentaires,
    indexCritere: indexCritereActuel,
    dateModification: new Date().toISOString()
  };
  try {
    localStorage.setItem(CLE_EVAL_EN_COURS, JSON.stringify(donnees));
  } catch (e) {
    // Si le stockage est indisponible, l'app continue de fonctionner,
    // mais sans pouvoir reprendre une évaluation interrompue.
    console.log("SPIRIT : sauvegarde locale impossible.", e);
  }
}

// Récupère l'évaluation en cours s'il y en a une, sinon renvoie null.
function lireEnCours() {
  try {
    const brut = localStorage.getItem(CLE_EVAL_EN_COURS);
    return brut ? JSON.parse(brut) : null;
  } catch (e) {
    return null;
  }
}

// Efface l'évaluation en cours (par ex. quand elle est terminée ou abandonnée).
function effacerEnCours() {
  try {
    localStorage.removeItem(CLE_EVAL_EN_COURS);
  } catch (e) {
    // sans effet bloquant
  }
}




// Index du critère actuellement affiché (0 = premier critère).
let indexCritereActuel = 0;

// Les réponses de l'utilisateur, sous la forme { idCritere: idModalite }.
let reponses = {};

// Observations libres saisies par l'utilisateur, par critère (id -> texte).
let commentaires = {};

// État de consultation d'une évaluation archivée.
// Quand on rouvre une évaluation depuis l'historique, on est en "consultation"
// (lecture seule) : ces variables gardent ses données le temps de l'affichage.
let consultationArchive = false;
let reponsesConsultation = {};
let commentairesConsultation = {};
let evaluationConsultation = {};
let dateConsultation = null;

// Construit les 3 segments de la barre de progression (un par pierre),
// avec une largeur proportionnelle au nombre de critères de chaque pierre.
function construireBarreProgression() {
  const barre = parId("progression-barre");
  barre.innerHTML = "";

  PIERRES_ANGULAIRES.forEach((pierre) => {
    const nbCriteres = CRITERES.filter((c) => c.pierre === pierre.id).length;

    const segment = document.createElement("div");
    segment.className = "progression__segment";
    // La largeur du segment est proportionnelle au nombre de critères.
    segment.style.flexGrow = nbCriteres;
    segment.dataset.pierre = pierre.id;

    const remplissage = document.createElement("div");
    remplissage.className = "progression__remplissage";
    remplissage.style.backgroundColor = pierre.couleur;
    remplissage.dataset.pierre = pierre.id;

    segment.appendChild(remplissage);

    // Navigation arrière : cliquer sur un segment ramène au premier critère
    // de cette pierre, à condition de l'avoir déjà atteinte (pas de saut avant).
    segment.addEventListener("click", () => allerAPierre(pierre.id));

    barre.appendChild(segment);
  });
}

// Met à jour le remplissage de la barre selon le critère en cours.
// Une pierre déjà terminée est remplie à 100 %, la pierre en cours est
// remplie au prorata des critères traités, les suivantes restent vides.
function majProgression(critere) {
  // Position du critère au sein de sa pierre (1er, 2e...) et total de la pierre
  const criteresPierre = CRITERES.filter((c) => c.pierre === critere.pierre);
  const positionDansPierre = criteresPierre.findIndex((c) => c.id === critere.id) + 1;

  // Ordre des pierres
  const ordrePierres = PIERRES_ANGULAIRES.map((p) => p.id);
  const indexPierreActuelle = ordrePierres.indexOf(critere.pierre);

  PIERRES_ANGULAIRES.forEach((pierre, i) => {
    const remplissage = document.querySelector('.progression__remplissage[data-pierre="' + pierre.id + '"]');
    if (!remplissage) return;

    if (i < indexPierreActuelle) {
      remplissage.style.width = "100%";       // pierre déjà passée
    } else if (i === indexPierreActuelle) {
      const nb = CRITERES.filter((c) => c.pierre === pierre.id).length;
      remplissage.style.width = (positionDansPierre / nb * 100) + "%";
    } else {
      remplissage.style.width = "0%";          // pierre à venir
    }
  });

  // Libellés : nom de la pierre + compteur global
  const pierreObj = PIERRES_ANGULAIRES.find((p) => p.id === critere.pierre);
  parId("progression-pierre").textContent = tr(pierreObj.nom);
  parId("progression-pierre").style.color = pierreObj.couleur;
  parId("progression-compteur").textContent = t("pilier_compteur") + " " + critere.numero + " / " + CRITERES.length;
}

// Génère les sous-questions d'aide pour un critère donné.
function genererSousQuestions(critere) {
  const zone = parId("critere-aide-zone");
  const liste = document.createElement("ul");
  critere.sousQuestions.forEach((q) => {
    const li = document.createElement("li");
    li.textContent = tr(q);
    liste.appendChild(li);
  });
  zone.innerHTML = "";
  zone.appendChild(liste);
}

// Génère les 4 boutons de modalité pour le critère, en surlignant
// éventuellement la réponse déjà donnée.
function genererModalites(critere) {
  const conteneur = parId("modalites");
  conteneur.innerHTML = "";

  const reponseActuelle = reponses[critere.id] || null;

  MODALITES.forEach((modalite) => {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "modalite";
    bouton.dataset.idModalite = modalite.id;

    // Pastille de couleur (ou contour pointillé pour "Non applicable")
    const pastille = document.createElement("span");
    pastille.className = "modalite__pastille";
    if (modalite.couleur === null) {
      pastille.classList.add("modalite__pastille--vide");
    } else {
      pastille.style.backgroundColor = modalite.couleur;
    }

    const texte = document.createElement("span");
    texte.textContent = tr(modalite.libelle);

    bouton.appendChild(pastille);
    bouton.appendChild(texte);

    // Si c'est la réponse déjà choisie, on la marque active.
    if (modalite.id === reponseActuelle) {
      activerModalite(bouton, modalite);
    }

    bouton.addEventListener("click", () => choisirModalite(critere, modalite, bouton));
    conteneur.appendChild(bouton);
  });
}

// Applique le style "actif" à un bouton de modalité (couleur de la modalité).
function activerModalite(bouton, modalite) {
  bouton.classList.add("modalite--active");
  const couleur = modalite.couleur || "#163458"; // marine si "Non applicable"
  bouton.style.borderColor = couleur;
  // Fond légèrement teinté : on utilise la couleur avec une transparence.
  bouton.style.backgroundColor = couleur + "14"; // "14" = ~8% d'opacité en hexa
  const texte = bouton.querySelector("span:last-child");
  if (texte) texte.style.color = couleur;
}

// Enregistre la modalité choisie pour le critère et met à jour l'affichage.
function choisirModalite(critere, modalite, boutonClique) {
  reponses[critere.id] = modalite.id;

  // On réinitialise tous les boutons, puis on active celui choisi.
  document.querySelectorAll("#modalites .modalite").forEach((b) => {
    b.classList.remove("modalite--active");
    b.style.borderColor = "";
    b.style.backgroundColor = "";
    const libelle = b.querySelector("span:last-child");
    if (libelle) libelle.style.color = "";
  });
  activerModalite(boutonClique, modalite);

  // Une réponse est donnée : on active le bouton "Suivant".
  parId("critere-suivant").disabled = false;

  // Le sommaire (ordinateur) affiche la nouvelle pastille.
  construireSommaire();

  // Sauvegarde automatique (pour pouvoir reprendre plus tard).
  sauvegarderEnCours();
}

// Affiche un critère donné (par son index dans CRITERES).
function afficherCritere(index) {
  const critere = CRITERES[index];
  if (!critere) return;
  indexCritereActuel = index;

  // Remplir les textes
  parId("critere-numero").textContent = t("pilier_compteur") + " " + critere.numero;
  parId("critere-titre").textContent = tr(critere.titre);

  // Sous-questions AFFICHÉES par défaut (déplié)
  const zone = parId("critere-aide-zone");
  zone.classList.remove("cache");
  parId("critere-aide-bouton").setAttribute("aria-expanded", "true");
  parId("critere-aide-fleche").textContent = "▾";
  parId("critere-aide-texte").textContent = t("pilier_aide");
  genererSousQuestions(critere);

  // Modalités
  genererModalites(critere);

  // Observation libre
  preparerCommentaire(critere);

  // Barre de progression
  majProgression(critere);

  // Sommaire des piliers (visible sur ordinateur)
  construireSommaire();

  // Le bouton "Suivant" est actif seulement si une réponse existe déjà.
  parId("critere-suivant").disabled = !reponses[critere.id];

  // Au dernier critère, le bouton invite à voir le diagnostic.
  if (index === CRITERES.length - 1) {
    parId("critere-suivant").textContent = t("pilier_voir_diagnostic");
  } else {
    parId("critere-suivant").textContent = t("pilier_suivant");
  }

  // On affiche l'écran de critère.
  afficherEcran("ecran-critere");
}

// --- Sommaire des piliers (ordinateur) ---
// Liste les 14 piliers par pierre angulaire, avec une pastille de la couleur
// de la réponse donnée. On peut revenir à un pilier déjà traité, ou aller au
// prochain pilier sans réponse, mais pas sauter plus loin.
// Sur téléphone, ce sommaire est masqué par la feuille de style.
function construireSommaire() {
  const nav = parId("critere-sommaire");
  if (!nav) return;
  nav.innerHTML = "";
  // Index du premier pilier sans réponse (-1 si tous ont une réponse).
  const premierSansReponse = CRITERES.findIndex((c) => !reponses[c.id]);

  PIERRES_ANGULAIRES.forEach((pierre) => {
    const titre = document.createElement("p");
    titre.className = "sommaire__pierre";
    titre.style.color = pierre.couleur;
    titre.textContent = tr(pierre.nom);
    nav.appendChild(titre);

    CRITERES.forEach((critere, index) => {
      if (critere.pierre !== pierre.id) return;
      const bouton = document.createElement("button");
      bouton.type = "button";
      bouton.className = "sommaire__pilier";

      // Pastille : couleur de la réponse (pointillés pour « non applicable »)
      const pastille = document.createElement("span");
      pastille.className = "sommaire__pastille";
      const modalite = MODALITES.find((m) => m.id === reponses[critere.id]);
      if (modalite && modalite.couleur) {
        pastille.style.backgroundColor = modalite.couleur;
        pastille.style.borderColor = modalite.couleur;
      } else if (modalite) {
        pastille.style.borderStyle = "dashed";
      }

      const numero = document.createElement("span");
      numero.className = "sommaire__numero";
      numero.textContent = critere.numero;
      const libelle = document.createElement("span");
      libelle.textContent = tr(critere.titre);

      bouton.appendChild(pastille);
      bouton.appendChild(numero);
      bouton.appendChild(libelle);

      if (index === indexCritereActuel) {
        bouton.classList.add("sommaire__pilier--actuel");
        bouton.setAttribute("aria-current", "step");
      }
      bouton.disabled = !(premierSansReponse === -1 || index <= premierSansReponse);
      bouton.addEventListener("click", () => afficherCritere(index));
      nav.appendChild(bouton);
    });
  });
}

// Croix de retour à l'accueil : on enregistre l'évaluation (position
// comprise), puis on revient à l'accueil. « Démarrer une évaluation »
// proposera ensuite de la reprendre là où on s'était arrêté.
function quitterQuestionnaire() {
  sauvegarderEnCours();
  afficherEcran("ecran-accueil");
}

// Déplie / replie la zone des sous-questions.
function basculerSousQuestions() {
  const zone = parId("critere-aide-zone");
  const estCache = zone.classList.contains("cache");
  // Le libellé reste le même dans les deux états ; c'est la flèche qui
  // indique si la zone est ouverte (▾) ou fermée (▸).
  if (estCache) {
    zone.classList.remove("cache");
    parId("critere-aide-bouton").setAttribute("aria-expanded", "true");
    parId("critere-aide-fleche").textContent = "▾";
    parId("critere-aide-texte").textContent = t("pilier_aide");
  } else {
    zone.classList.add("cache");
    parId("critere-aide-bouton").setAttribute("aria-expanded", "false");
    parId("critere-aide-fleche").textContent = "▸";
    parId("critere-aide-texte").textContent = t("pilier_aide");
  }
}


// --- Observation libre (facultative) par critère ---

// Prépare la zone d'observation à l'affichage d'un critère : on remplit le
// texte déjà saisi et on ouvre la zone si elle n'est pas vide.
function preparerCommentaire(critere) {
  const champ = parId("commentaire-champ");
  const zone = parId("commentaire-zone");
  const texte = commentaires[critere.id] || "";
  champ.value = texte;

  if (texte.trim() !== "") {
    zone.classList.remove("cache");
    parId("commentaire-bouton").setAttribute("aria-expanded", "true");
    parId("commentaire-fleche").textContent = "▾";
  } else {
    zone.classList.add("cache");
    parId("commentaire-bouton").setAttribute("aria-expanded", "false");
    parId("commentaire-fleche").textContent = "▸";
  }
  majEtatBoutonCommentaire();
}

// Ouvre ou ferme la zone d'observation (sans effacer le texte).
function basculerCommentaire() {
  const zone = parId("commentaire-zone");
  const ouvre = zone.classList.contains("cache");
  zone.classList.toggle("cache");
  parId("commentaire-bouton").setAttribute("aria-expanded", ouvre ? "true" : "false");
  parId("commentaire-fleche").textContent = ouvre ? "▾" : "▸";
  if (ouvre) parId("commentaire-champ").focus();
}

// Enregistre l'observation saisie pour le critère courant (sauvegarde auto).
function enregistrerCommentaire() {
  const critere = CRITERES[indexCritereActuel];
  if (!critere) return;
  const valeur = parId("commentaire-champ").value;
  if (valeur.trim() === "") {
    delete commentaires[critere.id];
  } else {
    commentaires[critere.id] = valeur;
  }
  majEtatBoutonCommentaire();
  sauvegarderEnCours();
}

// Met en évidence le bouton quand une observation est saisie pour ce critère.
function majEtatBoutonCommentaire() {
  const critere = CRITERES[indexCritereActuel];
  const rempli = critere && (commentaires[critere.id] || "").trim() !== "";
  parId("commentaire-bouton").classList.toggle("commentaire__bouton--rempli", rempli);
}

// Passe au critère suivant. Si on est au dernier critère, on termine
// le questionnaire et on affiche le diagnostic.
function allerCritereSuivant() {
  // Sécurité : il faut une réponse pour avancer (le bouton est normalement
  // désactivé sinon, mais on double la vérification).
  const critereActuel = CRITERES[indexCritereActuel];
  if (!reponses[critereActuel.id]) {
    return;
  }

  if (indexCritereActuel < CRITERES.length - 1) {
    // Critère suivant
    afficherCritere(indexCritereActuel + 1);
  } else {
    // Dernier critère atteint : le questionnaire est complet.
    terminerQuestionnaire();
  }
}

// Revient au critère précédent. Depuis le 1er critère, on retourne
// à l'écran d'entrée.
function allerCriterePrecedent() {
  if (indexCritereActuel === 0) {
    afficherEcran("ecran-entree");
  } else {
    afficherCritere(indexCritereActuel - 1);
  }
}

// Revient au premier critère d'une pierre angulaire donnée, en cliquant
// sur son segment dans la barre. Autorisé seulement vers une pierre déjà
// atteinte (navigation arrière libre, mais pas de saut en avant).
function allerAPierre(idPierre) {
  // Index du 1er critère de la pierre cliquée
  const indexPremierDeLaPierre = CRITERES.findIndex((c) => c.pierre === idPierre);
  if (indexPremierDeLaPierre === -1) return;

  // On n'autorise que de revenir en arrière (ou rester) : la cible doit être
  // à une position <= au critère actuel.
  if (indexPremierDeLaPierre <= indexCritereActuel) {
    afficherCritere(indexPremierDeLaPierre);
  }
  // Sinon (pierre pas encore atteinte), on ne fait rien.
}

// Appelé quand les 14 critères ont reçu une réponse.
// Archive l'évaluation puis affiche le diagnostic.
function terminerQuestionnaire() {
  // On n'est pas en consultation : c'est une vraie évaluation terminée.
  consultationArchive = false;

  // Archivage automatique dans l'historique (décidé au cadrage).
  archiverEvaluation(evaluationEnCours, reponses, commentaires);

  // L'évaluation "en cours" est terminée : on l'efface de la reprise.
  effacerEnCours();

  // On affiche le diagnostic à partir des réponses collectées.
  afficherDiagnostic(evaluationEnCours, reponses, undefined, commentaires);
}

// Affiche l'écran historique : construit la liste des évaluations archivées.
function afficherHistorique() {
  const liste = lireHistorique();
  const conteneur = parId("historique-liste");
  const messageVide = parId("historique-vide");

  conteneur.innerHTML = "";

  if (liste.length === 0) {
    messageVide.classList.remove("cache");
  } else {
    messageVide.classList.add("cache");
    liste.forEach((evaluation) => {
      conteneur.appendChild(construireCarteEvaluation(evaluation));
    });
  }

  afficherEcran("ecran-historique");
}

// Construit une carte pour une évaluation archivée.
function construireCarteEvaluation(evaluation) {
  const carte = document.createElement("div");
  carte.className = "eval-carte";

  const type = TYPES_OBJET.find((t) => t.id === evaluation.typeObjet);
  const typeLibelle = type ? tr(type.libelle) : "";
  const date = new Date(evaluation.dateFin).toLocaleDateString(localeDates(), {
    day: "numeric", month: "long", year: "numeric"
  });

  let html = '<div class="eval-carte__nom"></div>';
  html += '<div class="eval-carte__meta">' + typeLibelle + ' · ' + date + '</div>';

  html += '<div class="eval-carte__apercu">';
  PIERRES_ANGULAIRES.forEach((pierre) => {
    html += construireMiniJauge(pierre.id, evaluation.reponses);
  });
  html += '</div>';

  html += '<div class="eval-carte__actions">';
  html += '<button class="eval-carte__rouvrir">' + t("historique_rouvrir") + '</button>';
  html += '<button class="eval-carte__supprimer">' + t("historique_supprimer") + '</button>';
  html += '</div>';

  carte.innerHTML = html;

  // Nom via textContent (sécurité contre les caractères spéciaux).
  carte.querySelector(".eval-carte__nom").textContent = evaluation.nomObjet;

  carte.querySelector(".eval-carte__rouvrir").addEventListener("click", () => {
    rouvrirEvaluation(evaluation.id);
  });
  carte.querySelector(".eval-carte__supprimer").addEventListener("click", () => {
    demanderSuppression(evaluation);
  });

  return carte;
}

// Construit une mini-jauge (barre horizontale) pour une pierre.
function construireMiniJauge(idPierre, reponses) {
  const compo = calculerComposition(idPierre, reponses);

  let segments = '<div class="eval-carte__jauge">';
  if (compo.applicables === 0) {
    segments += '</div>';
    return segments;
  }

  const ordre = [
    { mod: "present",      couleur: "#1D9E75" },
    { mod: "a-developper", couleur: "#EF9F27" },
    { mod: "non-present",  couleur: "#444441" }
  ];

  ordre.forEach((seg) => {
    const n = compo.compte[seg.mod];
    if (n > 0) {
      const largeur = (n / compo.applicables * 100);
      segments += '<span class="eval-carte__segment" style="width:' + largeur + '%;background:' + seg.couleur + '"></span>';
    }
  });

  segments += '</div>';
  return segments;
}

// Rouvre une évaluation archivée : affiche son diagnostic, en consultation.
function rouvrirEvaluation(id) {
  const evaluation = trouverEvaluation(id);
  if (!evaluation) return;

  consultationArchive = true;
  reponsesConsultation = evaluation.reponses;
  commentairesConsultation = evaluation.commentaires || {};
  evaluationConsultation = { nomObjet: evaluation.nomObjet, typeObjet: evaluation.typeObjet };
  dateConsultation = evaluation.dateFin;

  afficherDiagnostic(evaluationConsultation, evaluation.reponses, evaluation.dateFin, evaluation.commentaires || {});
}

// Entoure un texte des guillemets adaptés à la langue active
// (« … » en français, “…” en anglais et en néerlandais : clé « guillemets »).
function entreGuillemets(texte) {
  return tAvec("guillemets", { texte: texte });
}

// Demande confirmation avant de supprimer une évaluation, puis rafraîchit.
function demanderSuppression(evaluation) {
  const ok = confirm(
    t("msg_suppression") + " " + entreGuillemets(evaluation.nomObjet) + " ?\n\n" +
    t("msg_suppression_fin")
  );
  if (ok) {
    supprimerEvaluation(evaluation.id);
    afficherHistorique();
  }
}


/* ===========================================================
   PARTAGE DE L'APPLICATION
   Permet à un utilisateur de transmettre SPIRIT à quelqu'un d'autre.
   Utilise le partage natif du téléphone (panneau Messages, Mail, WhatsApp…)
   quand il est disponible ; sinon, copie le lien dans le presse-papier.
   =========================================================== */
function partagerApplication() {
  // L'adresse partagée est celle de la page courante : ainsi le lien est
  // toujours correct, que l'app soit sur GitHub ou sur ecclesialab.org.
  const lien = window.location.href;
  const titre = "SPIRIT";
  const texte = t("msg_partage_texte");

  // 1re option : le partage natif du téléphone (API Web Share).
  if (navigator.share) {
    navigator.share({ title: titre, text: texte, url: lien })
      .catch(() => {
        // L'utilisateur a annulé le partage : on ne fait rien.
      });
    return;
  }

  // 2e option (repli) : copier le lien dans le presse-papier.
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(lien)
      .then(() => alert(t("msg_lien_copie") + "\n\n" + lien))
      .catch(() => alert(t("msg_lien_partager") + "\n\n" + lien));
    return;
  }

  // 3e option (dernier repli) : on affiche simplement le lien à recopier.
  alert(t("msg_lien_partager") + "\n\n" + lien);
}


/* ===========================================================
   APPLICATION DES TRADUCTIONS À L'INTERFACE
   Parcourt la page et met chaque texte dans la langue active :
   - les éléments [data-t] reçoivent le texte de la clé correspondante ;
   - les éléments [data-t-placeholder] reçoivent un placeholder traduit ;
   - les blocs [data-lang] sont affichés ou masqués selon la langue.
   Appelée au démarrage et à chaque changement de langue.
   =========================================================== */
function appliquerTraductions() {
  // 1. Textes simples (boutons, titres, libellés)
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-t"));
  });

  // 2. Placeholders de champs
  document.querySelectorAll("[data-t-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-t-placeholder")));
  });

  // 2 bis. Étiquettes d'accessibilité (aria-label) : pour les lecteurs d'écran.
  document.querySelectorAll("[data-t-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-t-aria")));
  });
  // Infobulles (texte qui apparaît au survol de la souris, sur ordinateur).
  document.querySelectorAll("[data-t-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-t-title")));
  });

  // 2 ter. Textes pouvant contenir une mise en forme (ex. <em>) : on injecte
  // en HTML. Réservé aux textes du dictionnaire (de confiance), jamais à des
  // saisies utilisateur.
  document.querySelectorAll("[data-t-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-t-html"));
  });

  // 3. Blocs de texte long (un bloc par langue) : on n'affiche que la langue active
  const active = getLangue();
  document.querySelectorAll("[data-lang]").forEach((bloc) => {
    bloc.style.display = (bloc.getAttribute("data-lang") === active) ? "" : "none";
  });

  // 4. Cas particuliers réécrits dynamiquement : on rafraîchit le sélecteur
  majSelecteurLangue();
}

// Met à jour le sélecteur de langue : les trois codes (FR, EN, NL) sont
// affichés, et celui de la langue active est mis en évidence.
function majSelecteurLangue() {
  const sel = parId("selecteur-langue");
  if (!sel) return;
  // On affiche les deux codes, en mettant en évidence l'actif.
  const active = getLangue();
  sel.querySelectorAll("[data-langue-code]").forEach((b) => {
    const code = b.getAttribute("data-langue-code");
    b.classList.toggle("selecteur-langue__option--actif", code === active);
  });
}

// Change la langue, mémorise, et rafraîchit toute l'interface.
function changerLangue(code) {
  definirLangue(code);
  appliquerTraductions();
  // Si un écran au contenu dynamique est affiché, on le régénère pour qu'il
  // passe dans la nouvelle langue.
  rafraichirEcranCourant();
}

// Régénère le contenu dynamique de l'écran actuellement affiché, si besoin.
function rafraichirEcranCourant() {
  const actif = document.querySelector(".ecran--actif");
  if (!actif) return;
  const id = actif.id;
  if (id === "ecran-critere") {
    // On réaffiche le pilier courant (titre, sous-questions, modalités traduits).
    afficherCritere(indexCritereActuel);
  } else if (id === "ecran-diagnostic") {
    // On régénère le diagnostic dans la bonne langue.
    if (consultationArchive) {
      afficherDiagnostic(evaluationConsultation, reponsesConsultation, dateConsultation, commentairesConsultation);
    } else {
      afficherDiagnostic(evaluationEnCours, reponses, undefined, commentaires);
    }
  } else if (id === "ecran-historique") {
    afficherHistorique();
  } else if (id === "ecran-entree") {
    genererCartesType();
  }
}


function brancherBoutons() {

  // --- Fenêtre de bienvenue ---
  parId("bouton-commencer-bienvenue").addEventListener("click", fermerBienvenue);
  parId("bouton-fermer-fonctionnement").addEventListener("click", fermerFonctionnement);

  // --- Fenêtre « Installer SPIRIT » ---
  parId("installation-fermer").addEventListener("click", fermerInstallation);
  parId("installation-bouton-natif").addEventListener("click", lancerInstallationNative);
  parId("a-propos-installer").addEventListener("click", afficherInstallation);

  // Lien "Qu'est-ce que SPIRIT ?" : affiche la page d'information dédiée.
  parId("lien-quest-ce-que").addEventListener("click", () => {
    afficherEcran("ecran-quest-ce-que");
  });

  // --- Écran d'accueil ---
  // "Démarrer une évaluation" : s'il existe une évaluation en cours,
  // on propose de la reprendre ; sinon on démarre une nouvelle entrée.
  parId("bouton-demarrer").addEventListener("click", () => {
    const enCours = lireEnCours();

    if (enCours && enCours.nomObjet) {
      // Une évaluation est en cours : on demande quoi faire.
      const reprendre = confirm(
        t("msg_reprise") + " : " + entreGuillemets(enCours.nomObjet) + ".\n\n" +
        t("msg_reprise_detail")
      );
      if (reprendre) {
        reprendreEvaluation(enCours);
      } else {
        effacerEnCours();
        reinitialiserEntree();
        afficherEcran("ecran-entree");
        montrerFonctionnementSiBesoin();
      }
    } else {
      // Aucune évaluation en cours : nouvelle entrée.
      reinitialiserEntree();
      afficherEcran("ecran-entree");
      montrerFonctionnementSiBesoin();
    }
  });

  // Lien "Mes évaluations" : affiche l'historique.
  parId("lien-mes-evaluations").addEventListener("click", afficherHistorique);

  // Lien "À propos" : affiche la page d'information dédiée.
  parId("lien-a-propos").addEventListener("click", () => {
    majLienInstallationAPropos();
    afficherEcran("ecran-a-propos");
  });

  // Lien "Partager SPIRIT" : ouvre le partage natif (ou copie le lien).
  parId("lien-partager").addEventListener("click", partagerApplication);

  // --- Sélecteur de langue sur l'accueil ---
  document.querySelectorAll("#selecteur-langue [data-langue-code]").forEach((b) => {
    b.addEventListener("click", () => changerLangue(b.getAttribute("data-langue-code")));
  });

  // --- Écran de choix de langue au premier lancement ---
  document.querySelectorAll("[data-choix-langue]").forEach((b) => {
    b.addEventListener("click", () => choisirLangueInitiale(b.getAttribute("data-choix-langue")));
  });

  // --- Pages d'information : boutons retour ---
  parId("quest-ce-que-retour").addEventListener("click", () => {
    afficherEcran("ecran-accueil");
  });
  parId("a-propos-retour").addEventListener("click", () => {
    afficherEcran("ecran-accueil");
  });

  // --- Écran d'entrée ---
  // Bouton retour : on revient à l'accueil.
  parId("entree-retour").addEventListener("click", () => {
    afficherEcran("ecran-accueil");
  });

  // À chaque frappe dans le champ nom : on réévalue l'état du bouton.
  parId("champ-nom-objet").addEventListener("input", rafraichirBoutonCommencer);

  // Bouton "Commencer l'évaluation".
  parId("bouton-commencer-evaluation").addEventListener("click", validerEntree);

  // --- Écran de critère ---
  // Déplier / replier les sous-questions d'aide.
  parId("critere-aide-bouton").addEventListener("click", basculerSousQuestions);
  parId("commentaire-bouton").addEventListener("click", basculerCommentaire);
  parId("commentaire-champ").addEventListener("input", enregistrerCommentaire);

  // Bouton "Suivant" (ou "Voir le diagnostic" au dernier critère).
  parId("critere-suivant").addEventListener("click", allerCritereSuivant);

  // Bouton "précédent".
  parId("critere-precedent").addEventListener("click", allerCriterePrecedent);

  // Croix : retour direct à l'accueil (évaluation enregistrée).
  parId("critere-quitter").addEventListener("click", quitterQuestionnaire);

  // --- Écran de diagnostic ---
  // Retour : en consultation d'archive, on revient à l'historique.
  // Après une évaluation qu'on vient de terminer, on NE retourne PAS au
  // questionnaire : revenir modifier ses réponses après avoir vu le score
  // fausserait l'évaluation (biais de confirmation) et créerait un doublon
  // dans l'historique, car l'évaluation est déjà archivée à ce stade.
  // On ramène donc à l'accueil, comme le bouton "Revenir à l'accueil".
  parId("diagnostic-retour").addEventListener("click", () => {
    if (consultationArchive) {
      afficherHistorique();
    } else {
      consultationArchive = false;
      afficherEcran("ecran-accueil");
    }
  });

  // Export PDF : on utilise les données de consultation si on consulte une
  // archive, sinon celles de l'évaluation en cours.
  parId("diagnostic-pdf").addEventListener("click", () => {
    if (consultationArchive) {
      lancerImpression(evaluationConsultation, reponsesConsultation, dateConsultation, commentairesConsultation);
    } else {
      lancerImpression(evaluationEnCours, reponses, undefined, commentaires);
    }
  });

  // Bouton « Pour aller plus loin » : génère un PDF séparé contenant
  // uniquement les citations du Document final (contenu générique).
  parId("diagnostic-references").addEventListener("click", () => {
    lancerImpressionReferences();
  });

  // Revenir à l'accueil.
  parId("diagnostic-accueil").addEventListener("click", () => {
    consultationArchive = false;
    afficherEcran("ecran-accueil");
  });

  // --- Écran historique ---
  parId("historique-retour").addEventListener("click", () => {
    afficherEcran("ecran-accueil");
  });
}


/* ===========================================================
   8. DÉMARRAGE
   =========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // On fixe la langue active AVANT de générer les contenus (qui utilisent tr()).
  // Au démarrage, on FIXE sans mémoriser : tant que l'utilisateur n'a pas choisi,
  // l'écran de choix doit pouvoir s'afficher au premier lancement.
  fixerLangueSansMemoriser(determinerLangueInitiale());
  appliquerTraductions();         // applique les textes d'interface à la page

  genererCartesType();            // cartes de type d'objet
  construireBarreProgression();   // segments de la barre de progression
  brancherBoutons();              // on relie tous les boutons
  majLienInstallationAPropos();   // rappel d'installation dans « À propos »
  gererBienvenueAuDemarrage();    // bienvenue au 1er lancement (puis installation)
});
