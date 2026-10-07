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

  // On collecte d'abord les segments non vides (modalités effectivement présentes).
  const actifs = [];
  segments.forEach((seg) => {
    const n = composition.compte[seg.modalite];
    if (n > 0) {
      actifs.push({ couleur: seg.couleur, longueur: n * longueurParCritere });
    }
  });

  // Cas particulier : une seule modalité couvrant TOUT l'anneau → cercle plein
  // (pas de tirets), pour éviter une encoche inutile.
  if (actifs.length === 1 && actifs[0].longueur >= circonference - 0.5) {
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rayon + '" ' +
           'stroke="' + actifs[0].couleur + '"></circle>';
  } else {
    // Sinon, on dessine chaque segment avec un petit espace de part et d'autre.
    // Cet espace évite que les extrémités de segments tombent sur la "couture"
    // du tracé (à midi) et créent un bec disgracieux à la jonction.
    const espace = 3; // en longueur d'arc
    let offset = 0;
    actifs.forEach((seg) => {
      const longVisible = Math.max(seg.longueur - espace, 0.5);
      const reste = circonference - longVisible;
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rayon + '" ' +
             'stroke="' + seg.couleur + '" ' +
             'stroke-dasharray="' + longVisible.toFixed(2) + ' ' + reste.toFixed(2) + '" ' +
             'stroke-dashoffset="' + (-(offset + espace / 2)).toFixed(2) + '"></circle>';
      offset += seg.longueur;
    });
  }

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
            'aria-label="' + t("schema_aria") + '">';

  // Lignes reliant le centre à chaque noeud.
  // On raccourcit chaque ligne pour qu'elle parte du BORD du cercle central
  // (rayon 26) et s'arrête au BORD de la jauge (rayon rayonJauge), au lieu de
  // courir derrière les deux cercles.
  const rayonCentre = 26;
  Object.keys(positions).forEach((id) => {
    const p = positions[id];
    const dx = p.x - centre.x;
    const dy = p.y - centre.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;  // direction unitaire centre → noeud
    const uy = dy / dist;
    const x1 = (centre.x + ux * rayonCentre).toFixed(1); // bord du cercle central
    const y1 = (centre.y + uy * rayonCentre).toFixed(1);
    const x2 = (p.x - ux * rayonJauge).toFixed(1);       // bord de la jauge
    const y2 = (p.y - uy * rayonJauge).toFixed(1);
    svg += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 +
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
         t("schema_centre") + '</text>';

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
// Les mots et phrases viennent du dictionnaire (traductions.js, clés
// « lecture_… ») : on peut les corriger sans toucher à ce fichier.
function redigerLecture(idPierre, composition) {
  const c = composition.compte;
  const applicables = composition.applicables;

  // Cas particulier : aucune dimension applicable
  if (applicables === 0) {
    return t("lecture_aucun");
  }

  // Détail des réponses, en nombre de piliers (singulier ou pluriel).
  const parties = [];
  if (c["present"] > 0) {
    parties.push(formuler(c["present"], t("lecture_present"), t("lecture_presents")));
  }
  if (c["a-developper"] > 0) {
    parties.push(formuler(c["a-developper"], t("lecture_chantier"), t("lecture_chantier")));
  }
  if (c["non-present"] > 0) {
    parties.push(formuler(c["non-present"], t("lecture_a_batir"), t("lecture_a_batir")));
  }

  // Construction de la phrase
  let texte = tAvec("lecture_phrase", {
    nombre: applicables,
    piliers: (applicables > 1) ? t("lecture_piliers") : t("lecture_pilier"),
    liste: assemblerListe(parties)
  });

  // Une nuance d'encouragement selon la dominante
  if (c["present"] === applicables) {
    texte += " " + t("lecture_pleine");
  } else if (c["non-present"] > c["present"] + c["a-developper"]) {
    texte += " " + t("lecture_croissance");
  }

  return texte;
}

// Met un nombre + le bon singulier/pluriel.
function formuler(n, singulier, pluriel) {
  return n + " " + (n > 1 ? pluriel : singulier);
}

// Assemble une liste selon la langue : "a", "a et b", "a, b et c"
// (en anglais "a, b and c", en néerlandais "a, b en c").
function assemblerListe(parties) {
  const connecteur = " " + t("lecture_et") + " ";
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
// Construit la liste des observations libres (celles qui sont non vides),
// pour l'écran de diagnostic. Renvoie "" s'il n'y en a aucune.
function construireObservations(commentaires, cleTitre) {
  commentaires = commentaires || {};
  const items = CRITERES
    .filter((c) => (commentaires[c.id] || "").trim() !== "")
    .map((c) =>
      '<div class="diagnostic__obs-item">' +
      '<p class="diagnostic__obs-pilier">' + c.numero + '. ' + echapper(tr(c.titre)) + '</p>' +
      '<p class="diagnostic__obs-texte">' + echapper(commentaires[c.id].trim()) + '</p>' +
      '</div>'
    );
  if (items.length === 0) return "";
  return '<h3 class="diagnostic__obs-titre">' + t(cleTitre || "diagnostic_observations_titre") + '</h3>' + items.join("");
}

function afficherDiagnostic(evaluation, reponses, dateISO, commentaires, comptes) {
  // Évaluation en groupe (v73) : affichage propre au groupe (voir plus bas).
  if (estModeGroupe(evaluation)) {
    afficherDiagnosticGroupe(evaluation, comptes || {}, dateISO, commentaires);
    return;
  }
  // Titre et bouton du mode habituel (l'écran a pu servir à un groupe juste avant).
  document.getElementById("ecran-diagnostic").classList.remove("diagnostic--groupe");
  document.getElementById("diagnostic-titre").textContent = t("diagnostic_titre");
  document.getElementById("diagnostic-pdf").textContent = t("diagnostic_pdf");
  // v74 : une évaluation faite seul peut être partagée pour une comparaison.
  document.getElementById("diagnostic-partager").classList.remove("cache");
  document.getElementById("diagnostic-envoyer-resultat").classList.add("cache");

  // En-tête : nom de l'objet + type + date
  document.getElementById("diagnostic-objet").textContent = evaluation.nomObjet;

  const type = trouverTypeObjet(evaluation.typeObjet);
  const typeLibelle = type ? tr(type.libelle) : "";
  // Si une date est fournie (évaluation archivée), on l'utilise ;
  // sinon, c'est une évaluation qui vient de se terminer → date du jour.
  const dateSource = dateISO ? new Date(dateISO) : new Date();
  const date = dateSource.toLocaleDateString(localeDates(), { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("diagnostic-meta").textContent = typeLibelle + " · " + date;

  // Schéma radial
  document.getElementById("diagnostic-schema").innerHTML = construireSchemaRadial(reponses);

  // Légende
  document.getElementById("diagnostic-legende").innerHTML = construireLegende();

  // Textes de lecture
  document.getElementById("diagnostic-lectures").innerHTML = construireLectures(reponses);

  // Observations libres saisies par l'utilisateur
  document.getElementById("diagnostic-observations").innerHTML = construireObservations(commentaires);

  // On affiche l'écran
  afficherEcran("ecran-diagnostic");
}


/* ===========================================================
   8. DIAGNOSTIC DU GROUPE (v73)
   Quand l'évaluation se fait en comptant les avis d'un groupe, on ne
   calcule ni note ni moyenne : on montre, pilier par pilier, combien de
   personnes ont choisi chaque réponse, et on signale les piliers où les
   avis divergent fortement (« avis partagés »), comme matière à discernement.
   =========================================================== */

// Règle provisoire (à valider par l'équipe) : un pilier a des « avis
// partagés » quand au moins une personne répond « Solidement établi » et
// au moins une autre « À bâtir ».
function estAvisPartage(compte) {
  return !!compte && (compte["present"] || 0) > 0 && (compte["non-present"] || 0) > 0;
}

// Composition d'une pierre angulaire en mode groupe : somme des avis de ses
// piliers (sert aux mini-jauges de « Mes évaluations »).
function calculerCompositionGroupe(idPierre, comptes) {
  const compte = { "present": 0, "a-developper": 0, "non-present": 0, "non-applicable": 0 };
  CRITERES.filter((c) => c.pierre === idPierre).forEach((c) => {
    const cpt = comptes[c.id] || {};
    Object.keys(compte).forEach((m) => { compte[m] += cpt[m] || 0; });
  });
  const total = compte["present"] + compte["a-developper"] + compte["non-present"] + compte["non-applicable"];
  return { compte: compte, total: total, applicables: total - compte["non-applicable"] };
}

// « 6 avis », « 1 avis », ou « 5 à 6 avis par pilier » si le nombre varie.
function texteNombreAvis(comptes) {
  const totaux = CRITERES.map((c) => totalAvis((comptes || {})[c.id]));
  const min = Math.min.apply(null, totaux);
  const max = Math.max.apply(null, totaux);
  if (min !== max) return tAvec("groupe_avis_plage", { min: min, max: max });
  return max === 1 ? t("groupe_avis_un") : tAvec("groupe_avis", { nombre: max });
}

// Ligne de présentation d'un diagnostic de groupe (écran et PDF) :
// « Gouverner · En groupe (6 avis) », ou pour une comparaison de codes
// « Gouverner · 6 évaluations comparées » (« Plusieurs domaines » si besoin).
function descriptionGroupe(evaluation, comptes) {
  const type = trouverTypeObjet(evaluation.typeObjet);
  const domaine = evaluation.domainesMultiples ? t("groupe_domaines_multiples") : (type ? tr(type.libelle) : "");
  const mention = evaluation.origine === "comparaison"
    ? tAvec("groupe_evaluations_comparees", { nombre: evaluation.nbEvaluations })
    : t("groupe_mode") + " (" + texteNombreAvis(comptes) + ")";
  return (domaine ? domaine + " · " : "") + mention;
}

// Numéros des piliers aux avis partagés (ex. [1, 2, 6]).
function piliersPartages(comptes) {
  return CRITERES.filter((c) => estAvisPartage(comptes[c.id])).map((c) => c.numero);
}

// Encadré de synthèse : nombre de piliers aux avis partagés, explication,
// et liste des piliers concernés.
function construireSyntheseGroupe(comptes) {
  const partages = piliersPartages(comptes);
  const n = partages.length;
  const titre = n === 0 ? t("groupe_partages_zero")
              : n === 1 ? t("groupe_partages_un")
              : tAvec("groupe_partages", { nombre: n });
  let html = '<div class="groupe-synthese">';
  html += '<p class="groupe-synthese__titre">' + titre + '</p>';
  html += '<p class="groupe-synthese__texte">' + (n === 0 ? t("groupe_partages_aucun") : t("groupe_partages_texte")) + '</p>';
  if (n > 0) {
    html += '<p class="groupe-synthese__concernes">' +
            tAvec("groupe_piliers_concernes", { liste: assemblerListe(partages.map(String)) }) + '</p>';
  }
  html += '</div>';
  return html;
}

// Barre de répartition d'un pilier : un segment par réponse, de largeur
// proportionnelle au nombre d'avis (« Non applicable » en hachures).
function construireBarreGroupe(compte, classeBarre, classeSegment) {
  const total = totalAvis(compte);
  let html = '<span class="' + classeBarre + '">';
  if (total > 0) {
    MODALITES.forEach((m) => {
      const n = compte[m.id] || 0;
      if (n === 0) return;
      const largeur = (n / total * 100).toFixed(2);
      if (m.couleur) {
        html += '<span class="' + classeSegment + '" style="width:' + largeur + '%;background:' + m.couleur + '"></span>';
      } else {
        html += '<span class="' + classeSegment + ' ' + classeSegment + '--na" style="width:' + largeur + '%"></span>';
      }
    });
  }
  html += '</span>';
  return html;
}

// Texte lisible de la répartition (pour les lecteurs d'écran) :
// « 3 Solidement établi, 2 En chantier, 1 À bâtir, 0 Non applicable ».
function decrireRepartition(compte) {
  return MODALITES.map((m) => ((compte || {})[m.id] || 0) + " " + tr(m.libelle)).join(", ");
}

// Répartition des avis, pilier par pilier, regroupés par pierre angulaire.
function construireRepartitionGroupe(comptes) {
  let html = '<h3 class="groupe-repartition__titre">' + t("groupe_repartition_titre") + '</h3>';
  PIERRES_ANGULAIRES.forEach((pierre) => {
    html += '<div class="groupe-pierre">';
    html += '<h4 class="groupe-pierre__titre" style="color:' + pierre.couleur + '">' + tr(pierre.nom) + '</h4>';
    CRITERES.filter((c) => c.pierre === pierre.id).forEach((c) => {
      const compte = comptes[c.id] || {};
      html += '<div class="groupe-pilier">';
      html += '<div class="groupe-pilier__haut">';
      html += '<span class="groupe-pilier__titre"><span class="groupe-pilier__numero">' + c.numero + '.</span> ' + echapper(tr(c.titre)) + '</span>';
      if (estAvisPartage(compte)) {
        html += '<span class="groupe-badge">' + t("groupe_badge") + '</span>';
      }
      html += '</div>';
      html += '<div class="groupe-pilier__bas" role="img" aria-label="' + echapper(decrireRepartition(compte)) + '">';
      html += construireBarreGroupe(compte, "groupe-barre", "groupe-barre__seg");
      html += '<span class="groupe-chiffres" aria-hidden="true">' +
              MODALITES.map((m) => compte[m.id] || 0).join(" · ") + '</span>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
  });
  return html;
}

// Remplit l'écran de diagnostic pour une évaluation en groupe.
// On réutilise le même écran que le mode habituel (et sa mise en page en
// deux colonnes sur ordinateur) : à gauche la synthèse et la légende, à
// droite la répartition par pilier et les observations.
function afficherDiagnosticGroupe(evaluation, comptes, dateISO, commentaires) {
  document.getElementById("ecran-diagnostic").classList.add("diagnostic--groupe");
  document.getElementById("diagnostic-titre").textContent = t("diagnostic_groupe_titre");
  document.getElementById("diagnostic-pdf").textContent = t("diagnostic_pdf_groupe");

  // Boutons : pas de code à partager pour un groupe ; « Envoyer le résultat
  // au groupe » seulement pour une comparaison de codes (v74).
  document.getElementById("diagnostic-partager").classList.add("cache");
  document.getElementById("diagnostic-envoyer-resultat").classList.toggle("cache", evaluation.origine !== "comparaison");

  document.getElementById("diagnostic-objet").textContent = evaluation.nomObjet || t("comparer_sans_nom");
  const dateSource = dateISO ? new Date(dateISO) : new Date();
  const date = dateSource.toLocaleDateString(localeDates(), { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("diagnostic-meta").textContent = descriptionGroupe(evaluation, comptes) + " · " + date;

  document.getElementById("diagnostic-schema").innerHTML = construireSyntheseGroupe(comptes);
  document.getElementById("diagnostic-legende").innerHTML = construireLegende();
  document.getElementById("diagnostic-lectures").innerHTML = construireRepartitionGroupe(comptes);
  document.getElementById("diagnostic-observations").innerHTML = construireObservations(commentaires, "groupe_observations_titre");

  afficherEcran("ecran-diagnostic");
}
