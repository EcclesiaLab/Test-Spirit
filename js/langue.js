/*
  ============================================================
  LANGUE — gestion des trois langues (français / anglais / néerlandais)
  ============================================================

  Ce module gère la langue de l'application. Il :
    - retient la langue choisie sur l'appareil (localStorage) ;
    - détecte la langue du téléphone au tout premier lancement
      (français si la langue n'est ni le français, ni l'anglais,
      ni le néerlandais) ;
    - fournit les fonctions qui renvoient le bon texte.

  TROIS FAÇONS D'OBTENIR UN TEXTE TRADUIT :
    1. t("cle") : pour les textes d'interface, cherchés dans le
       dictionnaire TRADUCTIONS (voir traductions.js).
    2. tAvec("cle", { nombre: 3 }) : comme t(), pour un texte qui contient
       des repères à remplacer, écrits entre accolades (ex. {nombre}).
    3. tr(objet) : pour un objet { fr, en, nl } déjà en main (par ex. le
       titre d'un pilier), renvoie la bonne langue.
  Et localeDates() donne le format de date de la langue active.
  ============================================================
*/

// Clé de stockage de la langue choisie.
const CLE_LANGUE = "spirit_langue";

// Langues disponibles dans l'application.
const LANGUES_DISPONIBLES = ["fr", "en", "nl"];

// Langue active en mémoire (initialisée au démarrage).
let langueActive = "fr";


// Détermine la langue à utiliser au démarrage.
// Priorité : 1) langue déjà choisie et mémorisée ; 2) langue du téléphone ;
// 3) français par défaut.
function determinerLangueInitiale() {
  // 1. Une langue a-t-elle déjà été choisie ?
  try {
    const memorisee = localStorage.getItem(CLE_LANGUE);
    if (memorisee && LANGUES_DISPONIBLES.indexOf(memorisee) !== -1) {
      return memorisee;
    }
  } catch (e) { /* stockage indisponible : on continue */ }

  // 2. Langue du téléphone (navigator.language renvoie par ex. "fr-BE", "en-US").
  let langueTel = "";
  try {
    langueTel = (navigator.language || "").slice(0, 2).toLowerCase();
  } catch (e) { langueTel = ""; }

  if (LANGUES_DISPONIBLES.indexOf(langueTel) !== -1) {
    return langueTel;
  }

  // 3. Par défaut : français.
  return "fr";
}


// A-t-on déjà un choix de langue mémorisé ? (sert à savoir s'il faut
// proposer l'écran de choix au premier lancement)
function langueDejaChoisie() {
  try {
    const m = localStorage.getItem(CLE_LANGUE);
    return !!(m && LANGUES_DISPONIBLES.indexOf(m) !== -1);
  } catch (e) {
    return false;
  }
}


// Définit la langue active et la mémorise (= choix explicite de l'utilisateur).
function definirLangue(code) {
  if (LANGUES_DISPONIBLES.indexOf(code) === -1) return;
  langueActive = code;
  try {
    localStorage.setItem(CLE_LANGUE, code);
  } catch (e) { /* sans effet bloquant */ }
  // On met à jour l'attribut lang de la page (utile pour l'accessibilité).
  document.documentElement.setAttribute("lang", code);
}


// Fixe la langue active en mémoire SANS la mémoriser sur l'appareil.
// Sert au démarrage : on applique la langue détectée pour l'affichage, mais
// on ne la considère pas comme "choisie" tant que l'utilisateur n'a pas tranché
// (sinon l'écran de choix au premier lancement ne s'afficherait jamais).
function fixerLangueSansMemoriser(code) {
  if (LANGUES_DISPONIBLES.indexOf(code) === -1) return;
  langueActive = code;
  document.documentElement.setAttribute("lang", code);
}


// Renvoie la langue active.
function getLangue() {
  return langueActive;
}


// tr(objet) : renvoie la bonne langue d'un objet { fr, en, nl }.
// Tolère aussi une chaîne simple (renvoyée telle quelle) pour la robustesse.
function tr(objet) {
  if (objet === null || objet === undefined) return "";
  if (typeof objet === "string") return objet;
  return espacesInsecables(objet[langueActive] !== undefined ? objet[langueActive] : (objet.fr || ""));
}


/* ===========================================================
   TYPOGRAPHIE FRANÇAISE (constat F2 de l'audit v72)
   En français, on met une espace avant « : ; ? ! » et à l'intérieur des
   guillemets. Pour qu'un retour à la ligne ne laisse jamais ces signes
   seuls en début de ligne, cette espace devient une espace insécable
   (\u00a0) au moment de l'affichage. t() et tr() le font pour tous les
   textes ; les textes français écrits dans index.html sont traités une
   fois au démarrage (app.js). Les fichiers restent donc écrits normalement.
   =========================================================== */
function espacesInsecablesFr(texte) {
  return texte.replace(/ ([:;?!»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
}
// Deux-points après une étiquette : « Observation : » en français,
// « Observation: » en anglais et en néerlandais.
function deuxPoints() {
  return langueActive === "fr" ? "\u00a0: " : ": ";
}
function espacesInsecables(texte) {
  if (langueActive !== "fr" || typeof texte !== "string") return texte;
  return espacesInsecablesFr(texte);
}

/* ===========================================================
   NOMBRE DE THÉOLOGIENS DU PANEL DELPHI (constat M5 de l'audit v72)
   Une seule formulation, reprise partout (pages d'information, carte
   « Autre pratique », note du diagnostic, PDF). Pour la changer, il suffit
   de modifier ces trois lignes. Dans les textes, le repère {panel} est
   remplacé par cette formulation grâce à avecPanel().
   =========================================================== */
const PANEL_THEOLOGIENS = {
  fr: "près de 50 théologiens et théologiennes",
  en: "nearly 50 theologians",
  nl: "bijna 50 theologen en theologes"
};
function avecPanel(objet) {
  const resultat = {};
  Object.keys(objet).forEach((langue) => {
    resultat[langue] = objet[langue].split("{panel}").join(PANEL_THEOLOGIENS[langue] || PANEL_THEOLOGIENS.fr);
  });
  return resultat;
}


// t("cle") : renvoie un texte d'interface depuis le dictionnaire TRADUCTIONS.
// Si la clé est introuvable, renvoie la clé elle-même (pour repérer un oubli).
function t(cle) {
  if (typeof TRADUCTIONS === "undefined") return cle;
  const entree = TRADUCTIONS[cle];
  if (!entree) return cle;
  return espacesInsecables(entree[langueActive] !== undefined ? entree[langueActive] : (entree.fr || cle));
}


// tAvec("cle", valeurs) : comme t(), puis remplace chaque repère {nom}
// par la valeur correspondante.
// Ex. : tAvec("lecture_phrase", { nombre: 4 }) → « Sur 4 … »
function tAvec(cle, valeurs) {
  let texte = t(cle);
  Object.keys(valeurs || {}).forEach((nom) => {
    texte = texte.split("{" + nom + "}").join(valeurs[nom]);
  });
  return texte;
}


// Format des dates selon la langue active (ex. « 29 septembre 2026 »).
const LOCALES_DATES = { fr: "fr-FR", en: "en-GB", nl: "nl-BE" };

function localeDates() {
  return LOCALES_DATES[langueActive] || "fr-FR";
}

// Date longue dans la langue active (« 7 octobre 2026 »). Renvoie un texte
// vide si la date manque ou est illisible : on n'affiche plus jamais
// « Invalid Date » (constat F6 de l'audit v72).
function formaterDateLongue(valeur) {
  if (valeur === undefined || valeur === null || valeur === "") return "";
  const d = valeur instanceof Date ? valeur : new Date(valeur);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString(localeDates(), { day: "numeric", month: "long", year: "numeric" });
}

// Assemble des morceaux de texte avec « · » en sautant les morceaux vides.
function joindrePoints(morceaux) {
  return morceaux.filter((m) => m).join(" · ");
}
