/*
  ============================================================
  DIAGNOSTIC — calcul et affichage des trois jauges
  ============================================================

  Ce fichier transforme les réponses de l'utilisateur en diagnostic visuel.
  Il est séparé de app.js pour rester lisible, car il contient à la fois :
    - le CALCUL de la composition de chaque pierre angulaire,
    - le DESSIN des jauges (en SVG),
    - la RÉDACTION du court texte de lecture par pierre.

  RAPPEL DE LA LOGIQUE (décidée au cadrage) :
  Chaque jauge ne montre pas une note, mais la COMPOSITION des réponses
  de sa pierre. Chaque critère vaut une part égale du cercle. Les critères
  "Non applicable" sont exclus : ils laissent un arc manquant (l'anneau ne
  fait pas le tour complet). Les portions s'affichent dans l'ordre :
  Présent (vert), puis À développer (ambre), puis Non présent (anthracite).
  ============================================================
*/


/* ===========================================================
   1. CALCUL DE LA COMPOSITION D'UNE PIERRE
   Renvoie le décompte par modalité, le total de critères, et le
   nombre de critères "applicables" (hors Non applicable).
   =========================================================== */
function calculerComposition(idPierre, reponses) {
  const criteresDeLaPierre = CRITERES.filter((c) => c.pierre === idPierre);

  const compte = {
    "present": 0,
    "a-developper": 0,
    "non-present": 0,
    "non-applicable": 0
  };

  criteresDeLaPierre.forEach((c) => {
    const rep = reponses[c.id];
    if (rep && compte.hasOwnProperty(rep)) {
      compte[rep]++;
    }
  });

  const total = criteresDeLaPierre.length;
  const applicables = total - compte["non-applicable"];

  return { compte: compte, total: total, applicables: applicables };
}


/* ===========================================================
   2. DESSIN D'UNE JAUGE (anneau d'une pierre)
   Construit le code SVG d'un anneau pour une pierre donnée, positionné
   au centre (cx, cy). Chaque critère occupe une part égale du cercle ;
   les segments colorés s'enchaînent, "Non applicable" laisse un vide.

   On utilise la technique du "stroke-dasharray" sur des cercles :
   - la circonférence du cercle = 2 × π × rayon,
   - chaque segment est un tronçon de trait de longueur proportionnelle,
   - on décale chaque segment avec "stroke-dashoffset".
   =========================================================== */
function dessinerJauge(idPierre, composition, cx, cy, rayon) {
  const circonference = 2 * Math.PI * rayon;
  const epaisseur = 9;

  // Longueur d'arc correspondant à UN critère (part égale du cercle entier)
  const longueurParCritere = circonference / composition.total;

  // Ordre d'affichage des segments + couleur de chaque modalité
  const segments = [
    { modalite: "present",      couleur: "#1D9E75" },
    { modalite: "a-developper", couleur: "#EF9F27" },
    { modalite: "non-present",  couleur: "#444441" }
  ];

  // Cercle de fond (gris clair) : repère visuel de l'anneau complet
  let svg = '<circle cx="' + cx + '" cy="' + cy + '" r="' + (rayon + 6) +
            '" fill="none" stroke="#E5E0D6" stroke-width="3"></circle>';

  // Groupe tourné de -90° pour que les arcs démarrent en haut du cercle
  svg += '<g transform="rotate(-90 ' + cx + ' ' + cy + ')" fill="none" stroke-width="' + epaisseur + '">';

  let offset = 0; // décalage cumulé (en longueur d'arc)
  segments.forEach((seg) => {
    const n = composition.compte[seg.modalite];
    if (n > 0) {
      const longueur = n * longueurParCritere;
      // dasharray = "longueur du trait, longueur du vide (le reste)"
      const reste = circonference - longueur;
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rayon + '" ' +
             'stroke="' + seg.couleur + '" ' +
             'stroke-dasharray="' + longueur.toFixed(2) + ' ' + reste.toFixed(2) + '" ' +
             'stroke-dashoffset="' + (-offset).toFixed(2) + '"></circle>';
      offset += longueur;
    }
  });

  svg += '</g>';

  // Pastille blanche au centre de l'anneau, avec le nom de la pierre
  const pierre = PIERRES_ANGULAIRES.find((p) => p.id === idPierre);
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (rayon - 8) + '" fill="#ffffff"></circle>';

  // Nom de la pierre, éventuellement sur deux lignes si long
  svg += texteCentreSurDeuxLignes(tr(pierre.nom), cx, cy);

  return svg;
}

// Place le nom d'une pierre au centre d'un anneau. Si le mot est long,
// on le coupe en deux lignes pour qu'il tienne dans la pastille.
function texteCentreSurDeuxLignes(nom, cx, cy) {
  const style = 'text-anchor="middle" font-family="Source Sans 3, sans-serif" font-size="10" font-weight="600" fill="#163458"';

  if (nom.length <= 8) {
    // Tient sur une ligne
    return '<text x="' + cx + '" y="' + (cy + 3.5) + '" ' + style + '>' + nom + '</text>';
  }

  // Coupe en deux : on essaie de couper proprement (ici simple : moitié/moitié)
  const milieu = Math.ceil(nom.length / 2);
  const ligne1 = nom.slice(0, milieu) + "-";
  const ligne2 = nom.slice(milieu);
  return '<text x="' + cx + '" y="' + (cy - 1) + '" ' + style + '>' + ligne1 + '</text>' +
         '<text x="' + cx + '" y="' + (cy + 10) + '" ' + style + '>' + ligne2 + '</text>';
}


/* ===========================================================
   3. CONSTRUCTION DU SCHÉMA RADIAL COMPLET
   Assemble : le cercle central, les trois branches, les trois jauges.
   Renvoie le code SVG complet à injecter dans la page.
   =========================================================== */
function construireSchemaRadial(reponses) {
  // Coordonnées du schéma (repère de 320 × 300)
  const centre = { x: 160, y: 150 };
  const rayonJauge = 28;

  // Positions des trois noeuds : haut, bas-gauche, bas-droite
  const positions = {
    communion:    { x: 160, y: 70 },
    participation:{ x: 91,  y: 230 },
    mission:      { x: 229, y: 230 }
  };

  let svg = '<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" ' +
            'aria-label="Diagramme radial des trois pierres angulaires de la synodalité">';

  // Lignes reliant le centre à chaque noeud
  Object.keys(positions).forEach((id) => {
    const p = positions[id];
    svg += '<line x1="' + centre.x + '" y1="' + centre.y + '" x2="' + p.x + '" y2="' + p.y +
           '" stroke="#C9C2B4" stroke-width="2"></line>';
  });

  // Les trois jauges
  PIERRES_ANGULAIRES.forEach((pierre) => {
    const compo = calculerComposition(pierre.id, reponses);
    const pos = positions[pierre.id];
    svg += dessinerJauge(pierre.id, compo, pos.x, pos.y, rayonJauge);
  });

  // Cercle central "SPIRIT"
  svg += '<circle cx="' + centre.x + '" cy="' + centre.y + '" r="26" fill="#163458"></circle>';
  svg += '<text x="' + centre.x + '" y="' + (centre.y - 3) + '" text-anchor="middle" ' +
         'font-family="Spectral, serif" font-size="11" font-weight="600" fill="#F7F4EE">SPIRIT</text>';
  svg += '<text x="' + centre.x + '" y="' + (centre.y + 9) + '" text-anchor="middle" ' +
         'font-family="Source Sans 3, sans-serif" font-size="7.5" fill="#C9D3E0">' +
         (getLangue() === "en" ? "synodality" : "synodalité") + '</text>';

  svg += '</svg>';
  return svg;
}


/* ===========================================================
   4. LÉGENDE DES COULEURS
   Construit la légende à partir des modalités (sauf qu'on affiche
   "Non applicable" avec une pastille à contour pointillé).
   =========================================================== */
function construireLegende() {
  let html = "";
  MODALITES.forEach((m) => {
    const classeVide = (m.couleur === null) ? " diagnostic__legende-pastille--vide" : "";
    const styleCouleur = (m.couleur === null) ? "" : ' style="background-color:' + m.couleur + '"';
    html += '<span class="diagnostic__legende-item">' +
              '<span class="diagnostic__legende-pastille' + classeVide + '"' + styleCouleur + '></span>' +
              tr(m.libelle) +
            '</span>';
  });
  return html;
}


/* ===========================================================
   5. TEXTE DE LECTURE PAR PIERRE
   Rédige un court texte d'interprétation pour une pierre, à partir de
   sa composition. Texte généré automatiquement (factuel et bienveillant),
   sans jugement sur les personnes.
   =========================================================== */
function redigerLecture(idPierre, composition) {
  const c = composition.compte;
  const applicables = composition.applicables;
  const en = (getLangue() === "en");

  // Cas particulier : aucune dimension applicable
  if (applicables === 0) {
    return en
      ? "No pillar in this dimension was considered applicable to the practice evaluated."
      : "Aucun pilier de cette dimension n'a été jugé applicable à la pratique évaluée.";
  }

  const parties = [];

  // On formule en nombre de piliers (libellés selon la langue).
  if (c["present"] > 0) {
    parties.push(formuler(c["present"],
      en ? "already well present" : "déjà bien présent",
      en ? "already well present" : "déjà bien présents"));
  }
  if (c["a-developper"] > 0) {
    parties.push(formuler(c["a-developper"],
      en ? "under construction" : "en construction",
      en ? "under construction" : "en construction"));
  }
  if (c["non-present"] > 0) {
    parties.push(formuler(c["non-present"],
      en ? "still to be built" : "encore à bâtir",
      en ? "still to be built" : "encore à bâtir"));
  }

  // Construction de la phrase
  let texte;
  if (en) {
    texte = "Out of " + applicables + " pillar" + (applicables > 1 ? "s" : "") +
            " considered: " + assemblerListe(parties) + ".";
  } else {
    texte = "Sur " + applicables + " pilier" + (applicables > 1 ? "s" : "") +
            " pris en compte : " + assemblerListe(parties) + ".";
  }

  // Une nuance d'encouragement selon la dominante
  if (c["present"] === applicables) {
    texte += en
      ? " This dimension is fully lived out in the practice evaluated."
      : " Cette dimension est pleinement vécue dans la pratique évaluée.";
  } else if (c["non-present"] > c["present"] + c["a-developper"]) {
    texte += en
      ? " This dimension is an important area for growth."
      : " Cette dimension constitue un axe de croissance important.";
  }

  return texte;
}

// Met un nombre + le bon singulier/pluriel.
function formuler(n, singulier, pluriel) {
  return n + " " + (n > 1 ? pluriel : singulier);
}

// Assemble une liste selon la langue : "a", "a et b", "a, b et c"
// (en anglais : "a", "a and b", "a, b and c").
function assemblerListe(parties) {
  const connecteur = (getLangue() === "en") ? " and " : " et ";
  if (parties.length === 1) return parties[0];
  if (parties.length === 2) return parties[0] + connecteur + parties[1];
  return parties.slice(0, -1).join(", ") + connecteur + parties[parties.length - 1];
}


/* ===========================================================
   6. CONSTRUCTION DES CARTES DE LECTURE
   Pour chaque pierre, une carte avec son nom (coloré) et son texte.
   =========================================================== */
function construireLectures(reponses) {
  let html = "";
  PIERRES_ANGULAIRES.forEach((pierre) => {
    const compo = calculerComposition(pierre.id, reponses);
    const texte = redigerLecture(pierre.id, compo);
    html += '<div class="lecture-pierre" style="border-left-color:' + pierre.couleur + '">' +
              '<div class="lecture-pierre__titre" style="color:' + pierre.couleur + '">' + tr(pierre.nom) + '</div>' +
              '<div class="lecture-pierre__texte">' + texte + '</div>' +
            '</div>';
  });
  return html;
}


/* ===========================================================
   7. AFFICHAGE COMPLET DU DIAGNOSTIC
   Fonction appelée par app.js quand le questionnaire est terminé.
   Remplit l'écran de diagnostic et l'affiche.
   =========================================================== */
function afficherDiagnostic(evaluation, reponses, dateISO) {
  // En-tête : nom de l'objet + type + date
  document.getElementById("diagnostic-objet").textContent = evaluation.nomObjet;

  const type = TYPES_OBJET.find((t) => t.id === evaluation.typeObjet);
  const typeLibelle = type ? tr(type.libelle) : "";
  // Si une date est fournie (évaluation archivée), on l'utilise ;
  // sinon, c'est une évaluation qui vient de se terminer → date du jour.
  const dateSource = dateISO ? new Date(dateISO) : new Date();
  const locale = (getLangue() === "en") ? "en-GB" : "fr-FR";
  const date = dateSource.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("diagnostic-meta").textContent = typeLibelle + " · " + date;

  // Schéma radial
  document.getElementById("diagnostic-schema").innerHTML = construireSchemaRadial(reponses);

  // Légende
  document.getElementById("diagnostic-legende").innerHTML = construireLegende();

  // Textes de lecture
  document.getElementById("diagnostic-lectures").innerHTML = construireLectures(reponses);

  // On affiche l'écran
  afficherEcran("ecran-diagnostic");
}
