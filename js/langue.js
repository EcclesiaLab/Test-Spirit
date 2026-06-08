/*
  ============================================================
  LANGUE — gestion du bilingue (français / anglais)
  ============================================================

  Ce module gère la langue de l'application. Il :
    - retient la langue choisie sur l'appareil (localStorage) ;
    - détecte la langue du téléphone au tout premier lancement
      (français si la langue n'est ni le français ni l'anglais) ;
    - fournit la fonction t() qui renvoie le bon texte.

  DEUX FAÇONS D'OBTENIR UN TEXTE TRADUIT :
    1. t("cle") : pour les textes d'interface, cherchés dans le
       dictionnaire TRADUCTIONS (voir traductions.js).
    2. tr(objet) : pour un objet { fr, en } déjà en main (par ex. le
       titre d'un pilier), renvoie la bonne langue.
  ============================================================
*/

// Clé de stockage de la langue choisie.
const CLE_LANGUE = "spirit_langue";

// Langues disponibles dans l'application.
const LANGUES_DISPONIBLES = ["fr", "en"];

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


// tr(objet) : renvoie la bonne langue d'un objet { fr, en }.
// Tolère aussi une chaîne simple (renvoyée telle quelle) pour la robustesse.
function tr(objet) {
  if (objet === null || objet === undefined) return "";
  if (typeof objet === "string") return objet;
  return objet[langueActive] !== undefined ? objet[langueActive] : (objet.fr || "");
}


// t("cle") : renvoie un texte d'interface depuis le dictionnaire TRADUCTIONS.
// Si la clé est introuvable, renvoie la clé elle-même (pour repérer un oubli).
function t(cle) {
  if (typeof TRADUCTIONS === "undefined") return cle;
  const entree = TRADUCTIONS[cle];
  if (!entree) return cle;
  return entree[langueActive] !== undefined ? entree[langueActive] : (entree.fr || cle);
}
