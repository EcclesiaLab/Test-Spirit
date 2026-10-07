/*
  ============================================================
  FENÊTRES — SPIRIT (v75)
  ============================================================
  Toutes les fenêtres qui s'ouvrent par-dessus l'application (choix de la
  langue, bienvenue, mode d'emploi, installation, partage, questions)
  passent par ce fichier. Elles se comportent ainsi toutes de la même façon :

    - le reste de l'application devient inaccessible tant que la fenêtre
      est ouverte (attribut « inert ») : ni le doigt, ni le clavier, ni un
      lecteur d'écran ne peuvent atteindre ce qui est derrière ;
    - le focus (l'élément « actif » pour le clavier et les lecteurs
      d'écran) entre dans la fenêtre, puis revient à sa place à la fermeture ;
    - la touche Tab tourne à l'intérieur de la fenêtre ;
    - la touche Échap ferme la fenêtre (sauf le choix de la langue, où il
      faut choisir).

  On y trouve aussi poserQuestion(), qui remplace les fenêtres du téléphone
  (confirm, alert) — constat E2 de l'audit v72 : ces fenêtres-là affichent
  leurs boutons dans la langue du téléphone, avec « OK » et « Annuler », ce
  qui prêtait à confusion. Ici, les boutons disent exactement ce qu'ils font.
  ============================================================
*/

// Fenêtres ouvertes, de la plus ancienne à la plus récente (au-dessus).
// Chaque élément : { voile, retourFocus, surEchap }
const pileFenetres = [];

// Éléments sur lesquels on peut « tabuler » dans une fenêtre, s'ils sont visibles.
function elementsFocusables(conteneur) {
  const selecteur = "button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex='-1'])";
  return Array.from(conteneur.querySelectorAll(selecteur))
    .filter((el) => el.getClientRects().length > 0);
}

// Rend inerte tout ce qui n'est pas la fenêtre du dessus.
function majInertie() {
  const app = document.querySelector(".app");
  const ouverte = pileFenetres.length > 0;
  if (app) app.inert = ouverte;
  pileFenetres.forEach((f, i) => { f.voile.inert = (i < pileFenetres.length - 1); });
}

/*
  Ouvre une fenêtre. « idVoile » est l'identifiant du voile (fond grisé)
  qui l'entoure, par exemple "bienvenue-voile".
  options.surEchap : fonction appelée par la touche Échap (rien si absente).
*/
function ouvrirFenetre(idVoile, options) {
  options = options || {};
  const voile = document.getElementById(idVoile);
  if (!voile) return;
  const dejaOuverte = pileFenetres.find((f) => f.voile === voile);
  if (dejaOuverte) {
    // Fenêtre déjà affichée (son contenu a pu changer) : on met à jour.
    dejaOuverte.surEchap = options.surEchap || null;
  } else {
    pileFenetres.push({ voile: voile, retourFocus: document.activeElement, surEchap: options.surEchap || null });
    voile.classList.remove("cache");
  }
  majInertie();
  // Le focus va sur la fenêtre elle-même (et non sur son premier bouton) :
  // un lecteur d'écran lit ainsi le titre et le texte depuis le début, et
  // une longue fenêtre ne défile pas jusqu'à son bouton du bas.
  const boite = voile.querySelector("[role='dialog']") || voile;
  if (!boite.hasAttribute("tabindex")) boite.setAttribute("tabindex", "-1");
  boite.scrollTop = 0;
  boite.focus({ preventScroll: true });
}

// Ferme une fenêtre et rend le focus à l'élément qui l'avait avant.
function fermerFenetre(idVoile) {
  const voile = document.getElementById(idVoile);
  if (!voile) return;
  voile.classList.add("cache");
  voile.inert = false;
  const i = pileFenetres.findIndex((f) => f.voile === voile);
  if (i === -1) { majInertie(); return; }
  const fenetre = pileFenetres.splice(i, 1)[0];
  majInertie();
  // Une mise à jour attendait peut-être la fermeture de cette fenêtre (app.js).
  if (pileFenetres.length === 0 && typeof appliquerMiseAJourSiPossible === "function") {
    setTimeout(appliquerMiseAJourSiPossible, 0);
  }
  if (pileFenetres.length === 0) {
    const cible = fenetre.retourFocus;
    if (cible && cible !== document.body && document.contains(cible) && cible.getClientRects().length > 0) {
      cible.focus({ preventScroll: true });
    }
  }
}

// Une fenêtre est-elle ouverte ?
function fenetreOuverte(idVoile) {
  return pileFenetres.some((f) => f.voile.id === idVoile);
}

// Clavier : Échap ferme, Tab reste dans la fenêtre du dessus.
document.addEventListener("keydown", (e) => {
  if (!pileFenetres.length) return;
  const haut = pileFenetres[pileFenetres.length - 1];
  if (e.key === "Escape") {
    if (haut.surEchap) {
      e.preventDefault();
      haut.surEchap();
    }
    return;
  }
  if (e.key !== "Tab") return;
  const elements = elementsFocusables(haut.voile);
  if (!elements.length) { e.preventDefault(); return; }
  const premier = elements[0];
  const dernier = elements[elements.length - 1];
  const actif = document.activeElement;
  const dedans = elements.indexOf(actif) !== -1;
  if (e.shiftKey && (actif === premier || !dedans)) {
    e.preventDefault();
    dernier.focus();
  } else if (!e.shiftKey && (actif === dernier || !dedans)) {
    e.preventDefault();
    premier.focus();
  }
});


/* ===========================================================
   FENÊTRE DE QUESTION (remplace confirm() et alert())
   -----------------------------------------------------------
   poserQuestion({
     titre:   "Supprimer cette évaluation ?",
     texte:   "Cette action est définitive.",      (facultatif)
     detail:  "https://…",                         (facultatif : un lien à recopier)
     boutons: [
       { libelle: "Supprimer", style: "danger",  action: () => { … } },
       { libelle: "Annuler",   style: "contour" }  (sans action : ferme seulement)
     ],
     surAnnulation: () => { … }   (facultatif : touche Échap)
   });
   Styles possibles : "principal" (par défaut), "contour", "danger", "lien".
   =========================================================== */
function poserQuestion(question) {
  document.getElementById("question-titre").textContent = question.titre;

  const texte = document.getElementById("question-texte");
  texte.textContent = question.texte || "";
  texte.classList.toggle("cache", !question.texte);

  const detail = document.getElementById("question-detail");
  detail.textContent = question.detail || "";
  detail.classList.toggle("cache", !question.detail);

  const zone = document.getElementById("question-boutons");
  zone.innerHTML = "";
  question.boutons.forEach((b) => {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "bouton" + ({
      contour: " bouton--contour",
      danger: " bouton--danger",
      lien: " bouton--lien"
    }[b.style] || "");
    bouton.textContent = b.libelle;
    bouton.addEventListener("click", () => {
      fermerFenetre("question-voile");
      if (b.action) b.action();
    });
    zone.appendChild(bouton);
  });

  ouvrirFenetre("question-voile", {
    surEchap: () => {
      fermerFenetre("question-voile");
      if (question.surAnnulation) question.surAnnulation();
    }
  });
}

// Remplace alert() : un message et un seul bouton « Fermer ».
function afficherMessage(titre, texte, detail) {
  poserQuestion({
    titre: titre,
    texte: texte,
    detail: detail,
    boutons: [{ libelle: t("partage_fermer"), style: "contour" }]
  });
}
