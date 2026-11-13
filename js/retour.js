/*
  ============================================================
  GESTE « RETOUR » DU TÉLÉPHONE — SPIRIT (v88)
  ============================================================
  LE PROBLÈME (constat A2 de l'audit v86)
  SPIRIT est une seule page : passer de l'accueil à un pilier ne change pas
  de page, cela montre seulement un autre « écran ». Le téléphone, lui, ne
  le sait pas : pour lui, on n'a jamais quitté la première page. Son geste
  ou son bouton « retour » faisait donc sortir de l'application, même en
  plein questionnaire.

  LE PRINCIPE
  Le navigateur tient une liste des pages visitées : son « historique ».
  « Retour » recule d'un cran dans cette liste. On y ajoute donc des crans
  de réserve : autant qu'il y a de pas en arrière possibles depuis l'écran
  affiché (au pilier 3 : pilier 2, pilier 1, écran d'entrée, accueil = 4).
  Quand le téléphone recule d'un cran, il nous prévient (événement
  « popstate ») au lieu de quitter l'application, et l'on fait alors
  exactement ce que fait le bouton « ‹ » de l'écran — ou, si une fenêtre
  est ouverte, ce que fait la touche Échap : on la ferme.

  Ce fichier ne décide donc PAS où mène le retour : il appuie sur le bouton
  qui existe déjà. Pour changer la destination d'un retour, c'est toujours
  dans app.js (brancherBoutons) que cela se passe.

  À l'accueil, sans fenêtre ouverte, la réserve est vide : « retour » fait
  ce qu'il a toujours fait, il quitte l'application.

  LIMITES CONNUES
  - Vérifié dans un navigateur piloté par programme, pas sur un vrai
    téléphone : à essayer sur Android et sur iPhone avant diffusion.
  - Le navigateur garde le dernier mot. Chrome, par exemple, peut ignorer
    des crans ajoutés sans que la personne ait touché l'écran. Au pire, un
    « retour » fait alors sortir de l'application comme avant ; rien n'est
    perdu, puisque les réponses sont enregistrées au fur et à mesure.
  ============================================================
*/

// Pour chaque écran, le bouton sur lequel « retour » appuie.
// (L'accueil n'y figure pas : depuis l'accueil, « retour » quitte l'app.)
const BOUTON_RETOUR = {
  "ecran-entree": "entree-retour",
  "ecran-critere": "critere-precedent",   // pilier précédent, puis écran d'entrée
  "ecran-diagnostic": "diagnostic-retour",
  "ecran-historique": "historique-retour",
  "ecran-comparer": "comparer-retour",
  "ecran-quest-ce-que": "quest-ce-que-retour",
  "ecran-lexique": "lexique-retour",
  "ecran-a-propos": "a-propos-retour"
};

// Nombre de crans de réserve actuellement « sous nos pieds ». Chaque cran
// porte son numéro : on le retrouve ainsi si la page est rechargée.
let positionRetour = (history.state && history.state.spiritRetour) || 0;

// Vrai pendant que l'on retire nous-mêmes les crans devenus inutiles : le
// navigateur nous prévient aussi de ce recul-là, et il ne faut pas le
// prendre pour un geste de la personne.
let retraitEnCours = false;

// Identifiant de l'écran affiché.
function ecranAffiche() {
  const actif = document.querySelector(".ecran--actif");
  return actif ? actif.id : "ecran-accueil";
}

// Combien de pas en arrière sont possibles d'ici ?
// Trop de crans ne gêne pas (ils sont retirés au retour à l'accueil) ; pas
// assez ferait sortir de l'app trop tôt. On compte donc large.
function profondeurRetour() {
  // Les fenêtres que la touche Échap peut fermer (le choix de la langue au
  // premier lancement n'en fait pas partie : il faut choisir).
  const fenetres = pileFenetres.filter((f) => f.surEchap).length;
  const ecran = ecranAffiche();
  let ecrans = 1;                                   // la plupart : écran → accueil
  if (ecran === "ecran-accueil") ecrans = 0;
  if (ecran === "ecran-critere") ecrans = indexCritereActuel + 2; // piliers précédents + écran d'entrée + accueil
  if (ecran === "ecran-comparer") ecrans = 2;       // peut ramener à « Mes évaluations »
  if (ecran === "ecran-diagnostic") ecrans = 3;     // peut ramener à « Rassembler », puis « Mes évaluations »
  return fenetres + ecrans;
}

// Met la réserve au bon niveau. Appelée chaque fois qu'un écran s'affiche
// (app.js) ou qu'une fenêtre s'ouvre ou se ferme (fenetres.js).
function ajusterReserve() {
  if (retraitEnCours) return; // on attend que le navigateur ait fini de reculer
  try {
    const voulu = profondeurRetour();
    if (voulu === 0 && positionRetour > 0) {
      // De retour à l'accueil : on retire tous les crans restants, pour que
      // le prochain « retour » quitte l'application du premier coup.
      retraitEnCours = true;
      history.go(-positionRetour);
      return;
    }
    while (positionRetour < voulu) {
      positionRetour++;
      history.pushState({ spiritRetour: positionRetour }, "");
    }
  } catch (e) {
    // Historique indisponible (cas très rare) : « retour » quittera l'app,
    // comme avant la v88.
    retraitEnCours = false;
  }
}

// Ce que fait « retour » : fermer la fenêtre du dessus, sinon appuyer sur
// le bouton « ‹ » de l'écran affiché.
function retourMateriel() {
  if (pileFenetres.length > 0) {
    const dessus = pileFenetres[pileFenetres.length - 1];
    if (dessus.surEchap) dessus.surEchap();
    return;
  }
  const idBouton = BOUTON_RETOUR[ecranAffiche()];
  const bouton = idBouton ? document.getElementById(idBouton) : null;
  if (bouton) bouton.click();
}

// Le navigateur vient de reculer (ou d'avancer) d'un ou plusieurs crans.
window.addEventListener("popstate", (evenement) => {
  const avant = positionRetour;
  positionRetour = (evenement.state && evenement.state.spiritRetour) || 0;

  if (retraitEnCours) {
    // C'est notre propre retrait des crans inutiles, pas un geste.
    retraitEnCours = false;
    ajusterReserve(); // au cas où l'on aurait quitté l'accueil entre-temps
    return;
  }
  if (positionRetour >= avant) {
    // Bouton « page suivante » du navigateur (sur ordinateur) : rien à faire,
    // sinon retirer ces crans s'ils ne servent plus.
    ajusterReserve();
    return;
  }
  // Un vrai « retour ». Le bouton sur lequel on appuie affiche un écran, et
  // tout affichage d'écran se termine par ajusterReserve(). On l'appelle
  // quand même ici, pour le cas où il n'y avait rien à fermer.
  retourMateriel();
  ajusterReserve();
});

// Au démarrage : si la page vient d'être rechargée en cours de route (mise à
// jour, geste « tirer pour actualiser »), il reste des crans d'une visite
// précédente alors que l'on repart de l'accueil. On les retire.
document.addEventListener("DOMContentLoaded", ajusterReserve);
