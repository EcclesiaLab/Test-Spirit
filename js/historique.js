/*
  ============================================================
  HISTORIQUE — archivage des évaluations terminées
  ============================================================

  Ce fichier gère la LISTE des évaluations terminées, conservées sur
  l'appareil (localStorage), distincte de l'évaluation "en cours".

  Tout reste 100 % local : rien n'est envoyé sur un serveur.

  Une évaluation archivée contient :
    - id          : identifiant unique (pour la rouvrir / supprimer)
    - nomObjet    : le nom donné par l'utilisateur
    - typeObjet   : l'identifiant du type d'objet
    - reponses    : les réponses aux 14 critères
    - commentaires: les observations éventuelles, par critère
    - mode        : "individuel" (absent = individuel)
    - comptes     : seulement dans les évaluations « en groupe » faites avec
                    les versions 73 à 80 (nombre d'avis par réponse et par
                    critère). v81 : ce mode a été retiré ; ces anciennes
                    évaluations restent lisibles, mais on n'en crée plus.
    - dateFin     : date à laquelle l'évaluation a été terminée (ISO)

  Décisions (validées au cadrage) :
    - archivage AUTOMATIQUE dès que le diagnostic est atteint ;
    - une évaluation archivée est CONSULTABLE mais pas ré-éditable.
  ============================================================
*/

// Clé de stockage de la liste des évaluations archivées.
const CLE_HISTORIQUE = "spirit_historique";


// Génère un identifiant unique pour une évaluation
// (date du moment + petit nombre aléatoire, pour éviter toute collision).
function genererIdEvaluation() {
  return "eval_" + Date.now() + "_" + Math.floor(Math.random() * 10000);
}


// Lit la liste complète des évaluations archivées (tableau, vide si rien).
function lireHistorique() {
  try {
    const brut = localStorage.getItem(CLE_HISTORIQUE);
    const liste = brut ? JSON.parse(brut) : [];
    // Sécurité : on s'assure que c'est bien un tableau.
    return Array.isArray(liste) ? liste : [];
  } catch (e) {
    return [];
  }
}


// Enregistre la liste complète (usage interne).
function ecrireHistorique(liste) {
  try {
    localStorage.setItem(CLE_HISTORIQUE, JSON.stringify(liste));
    return true;
  } catch (e) {
    console.log("SPIRIT : impossible d'écrire l'historique.", e);
    return false;
  }
}


// Archive une évaluation terminée : l'ajoute en tête de la liste.
// Renvoie l'identifiant attribué, ou null si l'écriture a échoué (mémoire de
// l'appareil pleine ou refusée) : l'appelant peut alors prévenir (v87, B4).
function archiverEvaluation(evaluation, reponses, commentaires) {
  const liste = lireHistorique();

  const entree = {
    id: genererIdEvaluation(),
    nomObjet: evaluation.nomObjet,
    typeObjet: evaluation.typeObjet,
    mode: "individuel",
    reponses: Object.assign({}, reponses), // copie, pour ne pas lier les références
    commentaires: Object.assign({}, commentaires || {}),
    dateFin: new Date().toISOString()
  };

  // On ajoute la nouvelle évaluation en tête (la plus récente en premier).
  liste.unshift(entree);
  if (!ecrireHistorique(liste)) {
    return null; // rien n'a été enregistré
  }
  // On demande au navigateur de ne pas effacer ces données (sauvegarde.js).
  protegerDonnees();

  return entree.id;
}


// Retrouve une évaluation archivée par son identifiant (ou null).
function trouverEvaluation(id) {
  return lireHistorique().find((e) => e.id === id) || null;
}


// Supprime une évaluation archivée par son identifiant.
function supprimerEvaluation(id) {
  const liste = lireHistorique().filter((e) => e.id !== id);
  ecrireHistorique(liste);
}
