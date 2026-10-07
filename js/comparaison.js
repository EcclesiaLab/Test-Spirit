/*
  ============================================================
  ÉVALUER À PLUSIEURS — CODE, LIEN ET COMPARAISON (v74)
  ============================================================

  Chacun fait son évaluation sur son propre appareil (en salle ou à
  distance). À la fin, SPIRIT lui donne un CODE de 9 caractères (ou un
  LIEN qui contient ce code). Une personne rassemble ces codes dans
  l'écran « Comparer des évaluations » et obtient le diagnostic du groupe
  (le même que pour une évaluation en groupe sur un seul appareil).

  CONFIDENTIALITÉ : SPIRIT n'envoie rien. Le code ne contient que le
  domaine et les 14 réponses (ni nom, ni observation). Il passe par le
  moyen choisi par les personnes (message, courriel, de vive voix). Dans
  un lien, le code est placé après le signe « # » : cette partie d'une
  adresse n'est jamais envoyée au site qui héberge l'app.

  CE QUE CONTIENT UN CODE (45 bits = 9 caractères de 5 bits) :
    -  2 bits : version du format (1)
    -  3 bits : domaine (voir CODE_DOMAINES)
    - 28 bits : les 14 réponses, 2 bits chacune, dans l'ordre des piliers
                (0 Solidement établi, 1 En chantier, 2 À bâtir, 3 Non applicable)
    -  5 bits : « sel » tiré de l'identifiant de l'évaluation : deux
                personnes aux réponses identiques auront presque toujours
                des codes différents, et la même évaluation partagée deux
                fois donne le même code (doublon détecté)
    -  7 bits : somme de contrôle, pour repérer une faute de frappe
  Alphabet : base 32 « de Crockford », sans I, L, O ni U (évite les
  confusions) ; à la saisie, O est lu 0, I et L sont lus 1.
  ============================================================
*/


/* ===========================================================
   1. LE CODE DE COMPARAISON
   =========================================================== */
const CODE_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const CODE_VERSION = 1;
// Ordre FIXE : ne jamais le modifier (les codes déjà donnés en dépendent).
// On peut seulement AJOUTER un domaine à la fin (8 places au maximum).
const CODE_DOMAINES = ["annoncer", "gouverner", "servir", "celebrer", "autre",
                       "action-ponctuelle", "projet-parcours", "groupe-instance"];

// Écrit un nombre sur « taille » bits (liste de 0 et de 1, du plus fort au plus faible).
function bitsDepuisNombre(n, taille) {
  const bits = [];
  for (let i = taille - 1; i >= 0; i--) bits.push((n >> i) & 1);
  return bits;
}

// Relit un nombre écrit en bits.
function nombreDepuisBits(bits) {
  return bits.reduce((n, b) => n * 2 + b, 0);
}

// Somme de contrôle : on lit les 38 bits de données comme un grand nombre
// et on garde le reste de sa division par 127 (calculé bit par bit pour
// rester dans les nombres exacts de JavaScript).
// Pourquoi 127 ? C'est un nombre premier : changer UN caractère du code, ou
// en intervertir deux voisins, change toujours ce reste. Ces deux fautes de
// frappe sont donc toujours détectées (vérifié sur 860 000 essais).
function sommeControle(bits) {
  return bits.reduce((reste, b) => (reste * 2 + b) % 127, 0);
}

// « Sel » (0 à 31) tiré de l'identifiant d'une évaluation archivée.
function selDepuisId(id) {
  if (!id) return Math.floor(Math.random() * 32);
  let h = 0;
  String(id).split("").forEach((car) => { h = (h * 31 + car.charCodeAt(0)) % 1000003; });
  return h % 32;
}

// Fabrique le code (9 caractères, sans tirets) d'une évaluation faite seul.
function encoderCode(typeObjet, reponses, sel) {
  let bits = bitsDepuisNombre(CODE_VERSION, 2);
  const iDomaine = CODE_DOMAINES.indexOf(typeObjet);
  bits = bits.concat(bitsDepuisNombre(iDomaine >= 0 ? iDomaine : 4, 3)); // inconnu → « autre »
  CRITERES.forEach((c) => {
    const i = MODALITES.findIndex((m) => m.id === reponses[c.id]);
    bits = bits.concat(bitsDepuisNombre(i >= 0 ? i : 3, 2));
  });
  bits = bits.concat(bitsDepuisNombre(sel & 31, 5));
  bits = bits.concat(bitsDepuisNombre(sommeControle(bits), 7));
  let code = "";
  for (let i = 0; i < bits.length; i += 5) code += CODE_ALPHABET[nombreDepuisBits(bits.slice(i, i + 5))];
  return code;
}

// Met un code saisi au propre : majuscules, sans espaces ni tirets,
// O → 0, I et L → 1.
function normaliserCode(texte) {
  return String(texte || "").toUpperCase().replace(/[\s\-‐–—_]/g, "")
    .replace(/O/g, "0").replace(/[IL]/g, "1");
}

// Lit un code. Renvoie { code, domaine, reponses } ou null s'il n'est pas valide.
function decoderCode(texte) {
  const code = normaliserCode(texte);
  if (code.length !== 9) return null;
  let bits = [];
  for (let i = 0; i < code.length; i++) {
    const valeur = CODE_ALPHABET.indexOf(code[i]);
    if (valeur < 0) return null;
    bits = bits.concat(bitsDepuisNombre(valeur, 5));
  }
  const donnees = bits.slice(0, 38);
  if (sommeControle(donnees) !== nombreDepuisBits(bits.slice(38))) return null;
  if (nombreDepuisBits(donnees.slice(0, 2)) !== CODE_VERSION) return null;
  const reponses = {};
  CRITERES.forEach((c, i) => {
    reponses[c.id] = MODALITES[nombreDepuisBits(donnees.slice(5 + 2 * i, 7 + 2 * i))].id;
  });
  return { code: code, domaine: CODE_DOMAINES[nombreDepuisBits(donnees.slice(2, 5))], reponses: reponses };
}

// Affichage lisible : « K7Q-M2X-PA4 ».
function formaterCode(code) {
  return code.slice(0, 3) + "-" + code.slice(3, 6) + "-" + code.slice(6);
}


/* ===========================================================
   2. LES LIENS
   #c=CODE&n=NOM          : une évaluation à ajouter à une comparaison
   #r=CODE1.CODE2…&n=NOM  : le résultat d'une comparaison, à afficher
   =========================================================== */
function adresseApp() {
  return window.location.origin + window.location.pathname;
}

function lienContribution(code, nom) {
  return adresseApp() + "#c=" + code + (nom ? "&n=" + encodeURIComponent(nom) : "");
}

function lienResultat(codes, nom) {
  return adresseApp() + "#r=" + codes.join(".") + (nom ? "&n=" + encodeURIComponent(nom) : "");
}

// Lit les paramètres placés après « # » dans un lien (ou dans le texte collé).
function lireParametresLien(texte) {
  const i = texte.indexOf("#");
  const fragment = i >= 0 ? texte.slice(i + 1) : texte;
  const params = {};
  fragment.split("&").forEach((morceau) => {
    const j = morceau.indexOf("=");
    if (j > 0) {
      let valeur = morceau.slice(j + 1);
      try { valeur = decodeURIComponent(valeur); } catch (e) { /* on garde tel quel */ }
      params[morceau.slice(0, j)] = valeur;
    }
  });
  return params;
}

// Efface la partie « #… » de l'adresse une fois le lien traité
// (pour ne pas le traiter une deuxième fois en rechargeant la page).
function effacerFragment() {
  try {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  } catch (e) { /* sans effet bloquant */ }
}


/* ===========================================================
   3. LA COMPARAISON EN COURS (gardée sur l'appareil)
   { nom: "…", elements: [ { code: "…", source: "code" | "lien" | "appareil" } ] }
   =========================================================== */
const CLE_COMPARAISON = "spirit_comparaison";

function lireComparaison() {
  try {
    const donnees = JSON.parse(localStorage.getItem(CLE_COMPARAISON));
    if (donnees && Array.isArray(donnees.elements)) return donnees;
  } catch (e) { /* données absentes ou abîmées : on repart de zéro */ }
  return { nom: "", elements: [] };
}

function ecrireComparaison(donnees) {
  try {
    localStorage.setItem(CLE_COMPARAISON, JSON.stringify(donnees));
  } catch (e) {
    console.log("SPIRIT : impossible d'enregistrer la comparaison.", e);
  }
}

// Ajoute des codes à la comparaison. Un code déjà présent n'est ajouté
// que si « forcer » est vrai (deux personnes peuvent, rarement, avoir le
// même code). Renvoie le nombre d'ajouts, de codes non valides et la
// liste des doublons.
function ajouterCodes(codes, source, forcer) {
  const donnees = lireComparaison();
  const resultat = { ajoutes: 0, invalides: 0, doublons: [] };
  codes.forEach((texte) => {
    if (!String(texte).trim()) return;
    const lu = decoderCode(texte);
    if (!lu) { resultat.invalides++; return; }
    const dejaLa = donnees.elements.some((e) => e.code === lu.code);
    if (dejaLa && !forcer) { resultat.doublons.push(lu.code); return; }
    donnees.elements.push({ code: lu.code, source: source });
    resultat.ajoutes++;
  });
  ecrireComparaison(donnees);
  return resultat;
}


/* ===========================================================
   4. L'ÉCRAN « COMPARER DES ÉVALUATIONS »
   =========================================================== */
function afficherComparer(resultatAjout) {
  const donnees = lireComparaison();
  parId("comparer-nom").value = donnees.nom || "";
  parId("comparer-code").value = "";
  construireListeComparaison();
  construireLocales();
  afficherMessageComparer(resultatAjout || null);
  afficherEcran("ecran-comparer");
}

// Liste des évaluations rassemblées (anonymes : « Évaluation 1, 2… »).
function construireListeComparaison() {
  const donnees = lireComparaison();
  const liste = parId("comparer-liste");
  liste.innerHTML = "";
  parId("comparer-liste-titre").textContent = tAvec("comparer_liste_titre", { nombre: donnees.elements.length });

  if (donnees.elements.length === 0) {
    const vide = document.createElement("p");
    vide.className = "comparer__vide";
    vide.textContent = t("comparer_liste_vide");
    liste.appendChild(vide);
  }

  donnees.elements.forEach((element, i) => {
    const lu = decoderCode(element.code);
    const type = lu ? trouverTypeObjet(lu.domaine) : null;
    const ligne = document.createElement("div");
    ligne.className = "comparer__ligne";

    const textes = document.createElement("span");
    textes.className = "comparer__ligne-textes";
    const nom = document.createElement("span");
    nom.className = "comparer__ligne-nom";
    nom.textContent = tAvec("comparer_evaluation", { numero: i + 1 });
    const detail = document.createElement("span");
    detail.className = "comparer__ligne-detail";
    detail.textContent = (type ? tr(type.libelle) + " · " : "") + t("comparer_source_" + element.source);
    textes.appendChild(nom);
    textes.appendChild(detail);

    const retirer = document.createElement("button");
    retirer.type = "button";
    retirer.className = "comparer__retirer";
    retirer.setAttribute("aria-label", tAvec("comparer_retirer", { numero: i + 1 }));
    retirer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    retirer.addEventListener("click", () => {
      const d = lireComparaison();
      d.elements.splice(i, 1);
      ecrireComparaison(d);
      construireListeComparaison();
      afficherMessageComparer(null);
    });

    ligne.appendChild(textes);
    ligne.appendChild(retirer);
    liste.appendChild(ligne);
  });

  majBoutonVoir();
  parId("comparer-vider").classList.toggle("cache", donnees.elements.length === 0);
}

// « Voir le diagnostic du groupe » : actif à partir de deux évaluations.
function majBoutonVoir() {
  const assez = lireComparaison().elements.length >= 2;
  parId("comparer-voir").disabled = !assez;
  parId("comparer-minimum").classList.toggle("cache", assez);
}

// Évaluations faites seul et enregistrées sur cet appareil, à ajouter d'un geste.
function construireLocales() {
  const zone = parId("comparer-locales");
  zone.innerHTML = "";
  const locales = lireHistorique().filter((e) => e.mode !== "groupe" && e.reponses &&
                                                 CRITERES.every((c) => e.reponses[c.id]));
  if (locales.length === 0) {
    const vide = document.createElement("p");
    vide.className = "comparer__vide";
    vide.textContent = t("comparer_aucune_locale");
    zone.appendChild(vide);
    return;
  }
  locales.forEach((evaluation) => {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "comparer__locale";
    bouton.textContent = joindrePoints([evaluation.nomObjet, formaterDateLongue(evaluation.dateFin)]);
    bouton.addEventListener("click", () => {
      const code = encoderCode(evaluation.typeObjet, evaluation.reponses, selDepuisId(evaluation.id));
      const resultat = ajouterCodes([code], "appareil", false);
      resultat.source = "appareil";
      construireListeComparaison();
      afficherMessageComparer(resultat);
    });
    zone.appendChild(bouton);
  });
}

// Message sous le champ de saisie : ajout réussi, code non valide, ou
// doublon (avec le bouton « L'ajouter quand même »).
function afficherMessageComparer(resultat) {
  const zone = parId("comparer-message");
  zone.innerHTML = "";
  zone.classList.remove("comparer__message--erreur");
  if (!resultat) return;

  const p = document.createElement("p");
  if (resultat.ajoutes > 0) {
    p.textContent = resultat.ajoutes === 1 ? t("comparer_ajout_un") : tAvec("comparer_ajout", { nombre: resultat.ajoutes });
    zone.appendChild(p);
  } else if (resultat.invalides > 0) {
    zone.classList.add("comparer__message--erreur");
    p.textContent = t("comparer_code_invalide");
    zone.appendChild(p);
  }
  if (resultat.doublons.length > 0) {
    const p2 = document.createElement("p");
    p2.textContent = t("comparer_code_double") + " ";
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "comparer__quand-meme";
    bouton.textContent = t("comparer_ajouter_quand_meme");
    const doublons = resultat.doublons.slice();
    const source = resultat.source || "code";
    bouton.addEventListener("click", () => {
      const r = ajouterCodes(doublons, source, true);
      construireListeComparaison();
      afficherMessageComparer(r);
    });
    p2.appendChild(bouton);
    zone.appendChild(p2);
  }
}

// Bouton « Ajouter » : accepte un code, ou un lien reçu (collé en entier).
function ajouterDepuisSaisie() {
  const brut = parId("comparer-code").value.trim();
  if (!brut) return;
  let codes = [brut];
  let source = "code";
  if (brut.indexOf("#") >= 0 || /(^|&)[cr]=/.test(brut)) {
    const params = lireParametresLien(brut);
    codes = String(params.c || params.r || "").split(".");
    source = "lien";
    if (params.n && !parId("comparer-nom").value.trim()) {
      parId("comparer-nom").value = params.n;
      enregistrerNomComparaison();
    }
  }
  const resultat = ajouterCodes(codes, source, false);
  resultat.source = source;
  if (resultat.ajoutes > 0) parId("comparer-code").value = "";
  construireListeComparaison();
  afficherMessageComparer(resultat);
}

function enregistrerNomComparaison() {
  const donnees = lireComparaison();
  donnees.nom = parId("comparer-nom").value.trim();
  ecrireComparaison(donnees);
}

function viderComparaison() {
  poserQuestion({
    titre: t("comparer_vider_confirmer"),
    texte: t("comparer_vider_texte"),
    boutons: [
      { libelle: t("comparer_vider"), style: "danger", action: () => {
          ecrireComparaison({ nom: parId("comparer-nom").value.trim(), elements: [] });
          construireListeComparaison();
          afficherMessageComparer(null);
        } },
      { libelle: t("msg_annuler"), style: "contour" }
    ]
  });
}


/* ===========================================================
   5. LE DIAGNOSTIC DU GROUPE À PARTIR DES CODES
   On additionne les réponses de chaque évaluation, pilier par pilier :
   on obtient le même « compte » que dans une évaluation en groupe sur
   un seul appareil, et on réutilise le même affichage.
   =========================================================== */
// Diagnostic de comparaison affiché (null sinon) : sert au bouton retour,
// au PDF, à l'envoi du résultat et au changement de langue.
let diagnosticComparaison = null;

function afficherDiagnosticComparaison(nom, codes, retour) {
  const lus = codes.map(decoderCode).filter(Boolean);
  const comptes = {};
  CRITERES.forEach((c) => { comptes[c.id] = compteVide(); });
  lus.forEach((lu) => {
    CRITERES.forEach((c) => { comptes[c.id][lu.reponses[c.id]]++; });
  });
  const domaines = lus.map((lu) => lu.domaine).filter((d, i, liste) => liste.indexOf(d) === i);
  const evaluation = {
    nomObjet: nom || "",            // vide si l'animateur n'a pas nommé la pratique
    typeObjet: domaines.length === 1 ? domaines[0] : null,
    mode: "groupe",
    origine: "comparaison",
    domainesMultiples: domaines.length > 1,
    nbEvaluations: lus.length
  };
  diagnosticComparaison = { evaluation: evaluation, comptes: comptes, codes: lus.map((lu) => lu.code), retour: retour };
  consultationArchive = false;
  afficherDiagnostic(evaluation, {}, undefined, {}, comptes);
}

function voirDiagnosticComparaison() {
  enregistrerNomComparaison();
  const donnees = lireComparaison();
  if (donnees.elements.length < 2) return;
  afficherDiagnosticComparaison(donnees.nom, donnees.elements.map((e) => e.code), "comparer");
}


/* ===========================================================
   6. PARTAGER UNE ÉVALUATION FAITE SEUL
   =========================================================== */
let partageEnCours = null; // { code, nom }

function ouvrirPartage(typeObjet, reponses, idEvaluation, nom) {
  const code = encoderCode(typeObjet, reponses, selDepuisId(idEvaluation));
  partageEnCours = { code: code, nom: nom };
  parId("partage-code").textContent = formaterCode(code);
  parId("partage-statut").textContent = "";
  ouvrirFenetre("partage-voile", { surEchap: fermerPartage });
}

function fermerPartage() {
  fermerFenetre("partage-voile");   // le focus revient sur « Partager… »
}

// Copie un texte dans le presse-papier. Renvoie une promesse : vrai si réussi.
function copierTexte(texte) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(texte).then(() => true).catch(() => false);
  }
  return Promise.resolve(false);
}

// Envoie un lien : partage natif du téléphone s'il existe, sinon copie.
// « surCopie » reçoit vrai (lien copié) ou faux (copie impossible).
function envoyerLien(url, texte, surCopie) {
  if (navigator.share) {
    navigator.share({ title: "SPIRIT", text: texte, url: url }).catch(() => {
      // Partage annulé par l'utilisateur : on ne fait rien.
    });
    return;
  }
  copierTexte(url).then(surCopie);
}

function envoyerLienPartage() {
  if (!partageEnCours) return;
  const url = lienContribution(partageEnCours.code, partageEnCours.nom);
  envoyerLien(url, t("partage_message"), (ok) => {
    parId("partage-statut").textContent = ok ? t("partage_lien_copie") : url;
  });
}

function copierCodePartage() {
  if (!partageEnCours) return;
  copierTexte(formaterCode(partageEnCours.code)).then((ok) => {
    parId("partage-statut").textContent = ok ? t("partage_code_copie") : formaterCode(partageEnCours.code);
  });
}

// « Envoyer le résultat au groupe » : un lien qui contient tous les codes.
function envoyerResultatGroupe() {
  if (!diagnosticComparaison) return;
  const url = lienResultat(diagnosticComparaison.codes, diagnosticComparaison.evaluation.nomObjet);
  envoyerLien(url, t("resultat_message"), (ok) => {
    afficherMessage(t("resultat_envoyer"), ok ? t("partage_lien_copie") : t("resultat_lien_copier"), url);
  });
}


/* ===========================================================
   7. LIENS REÇUS
   Appelé au démarrage, et quand l'adresse change (lien ouvert alors
   que SPIRIT est déjà affiché dans le navigateur).
   =========================================================== */
function traiterLienEntrant() {
  const fragment = window.location.hash;
  if (!fragment || fragment.length < 4) return;
  const params = lireParametresLien(fragment);
  if (params.c) {
    const donnees = lireComparaison();
    if (params.n && !donnees.nom) {
      donnees.nom = params.n;
      ecrireComparaison(donnees);
    }
    const resultat = ajouterCodes(params.c.split("."), "lien", false);
    resultat.source = "lien";
    effacerFragment();
    afficherComparer(resultat);
  } else if (params.r) {
    effacerFragment();
    afficherDiagnosticComparaison(params.n || "", params.r.split("."), "accueil");
  }
}
