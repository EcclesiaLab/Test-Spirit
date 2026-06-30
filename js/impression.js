/*
  ============================================================
  IMPRESSION — construction du document PDF
  ============================================================

  Ce fichier construit le DOCUMENT IMPRIMABLE (le PDF de 2-3 pages).
  Il ne dessine rien à l'écran : il remplit une section cachée
  (#document-impression) qui n'apparaît qu'au moment de l'impression,
  grâce à la feuille de style @media print (dans styles.css).

  Le PDF est obtenu via la fonction "Imprimer" du navigateur, qui propose
  "Enregistrer au format PDF". Aucune bibliothèque externe n'est utilisée.

  Contenu du document (scénario B, complet) :
    1. En-tête : logo, titre, nom de l'objet, type, date
    2. Le schéma radial + légende
    3. Les textes de lecture par pierre
    4. Le détail des 14 critères avec la modalité choisie
    5. Les pistes d'action (emplacement réservé tant que non rédigées)
    6. Pied de page
  ============================================================
*/


/* ===========================================================
   CONSTRUCTION DU DOCUMENT IMPRIMABLE
   Remplit #document-impression à partir de l'évaluation et des réponses.
   =========================================================== */
function construireDocumentImpression(evaluation, reponses, dateISO) {
  const conteneur = document.getElementById("document-impression");

  const type = TYPES_OBJET.find((t) => t.id === evaluation.typeObjet);
  const typeLibelle = type ? tr(type.libelle) : "";
  // Date fournie (archive) ou date du jour (évaluation qui vient de finir).
  const dateSource = dateISO ? new Date(dateISO) : new Date();
  const lgPdf = getLangue();
  const locale = (lgPdf === "en") ? "en-GB" : (lgPdf === "nl") ? "nl-BE" : "fr-FR";
  const date = dateSource.toLocaleDateString(locale, {
    day: "numeric", month: "long", year: "numeric"
  });

  let html = "";

  /* --- 1. En-tête --- */
  html += '<div class="pdf-entete">';
  html += '<img class="pdf-logo" src="icons/logo-spirit.png" alt="SPIRIT">';
  html += '<div class="pdf-entete-texte">';
  html += '<h1 class="pdf-titre">' + t("pdf_titre") + '</h1>';
  html += '<p class="pdf-sous-titre">' + t("pdf_sous_titre") + '</p>';
  html += '</div>';
  html += '</div>';

  /* --- Objet évalué --- */
  html += '<div class="pdf-objet-bloc">';
  html += '<p class="pdf-objet-label">' + t("pdf_objet_label") + '</p>';
  html += '<p class="pdf-objet-nom">' + echapper(evaluation.nomObjet) + '</p>';
  html += '<p class="pdf-objet-meta">' + typeLibelle + ' · ' + t("pdf_evaluation_du") + ' ' + date + '</p>';
  html += '</div>';

  /* --- 2. Schéma radial + légende --- */
  html += '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("pdf_diagnostic") + '</h2>';
  html += '<div class="pdf-schema">' + construireSchemaRadial(reponses) + '</div>';
  html += '<div class="pdf-legende">' + construireLegendeTexte() + '</div>';
  html += '</div>';

  /* --- 3. Textes de lecture par pierre --- */
  html += '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("pdf_lecture") + '</h2>';
  PIERRES_ANGULAIRES.forEach((pierre) => {
    const compo = calculerComposition(pierre.id, reponses);
    const texte = redigerLecture(pierre.id, compo);
    html += '<div class="pdf-lecture">';
    html += '<h3 class="pdf-lecture-titre" style="color:' + pierre.couleur + '">' + tr(pierre.nom) + '</h3>';
    html += '<p class="pdf-lecture-texte">' + texte + '</p>';
    html += '</div>';
  });
  html += '</div>';

  /* --- 4. Détail des 14 critères --- */
  html += '<div class="pdf-section pdf-saut-page">';
  html += '<h2 class="pdf-section-titre">' + t("pdf_detail") + '</h2>';
  PIERRES_ANGULAIRES.forEach((pierre) => {
    html += '<h3 class="pdf-pierre-titre" style="color:' + pierre.couleur + '">' + tr(pierre.nom) + '</h3>';
    const criteresPierre = CRITERES.filter((c) => c.pierre === pierre.id);
    html += '<table class="pdf-table">';
    criteresPierre.forEach((critere) => {
      const idRep = reponses[critere.id];
      const modalite = MODALITES.find((m) => m.id === idRep);
      const libelleRep = modalite ? tr(modalite.libelle) : "—";
      const couleurRep = (modalite && modalite.couleur) ? modalite.couleur : "#999999";
      html += '<tr>';
      html += '<td class="pdf-td-critere"><strong>' + critere.numero + '.</strong> ' + echapper(tr(critere.titre)) + '</td>';
      html += '<td class="pdf-td-reponse"><span class="pdf-pastille" style="background:' + couleurRep + '"></span>' + libelleRep + '</td>';
      html += '</tr>';
    });
    html += '</table>';
  });
  html += '</div>';

  /* --- 5. Pistes de progression (emplacement réservé) --- */
  html += '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("pdf_pistes") + '</h2>';
  html += '<p class="pdf-pistes-destinataire">' + t("pdf_pistes_destinataire") + '</p>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_attente") + '</p>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_validation") + '</p>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_groupe") + '</p>';
  /* Logos institutionnels placés ici, en bas de la section "Pistes de
     progression" (avant le saut de page vers les références), pour éviter
     qu'ils se retrouvent seuls sur une page. */
  html += '<div class="pdf-logos">';
  html += '<img class="pdf-logo-fin" src="icons/logo-ecclesialab.png" alt="EcclesiaLab">';
  html += '<img class="pdf-logo-fin" src="icons/logo-uclouvain.png" alt="UCLouvain">';
  html += '</div>';
  html += '</div>';

  /* Les citations du Document final ne sont plus dans ce PDF : elles sont
     désormais générées séparément par le bouton « Pour aller plus loin »
     (voir construireDocumentReferences ci-dessous). */

  conteneur.innerHTML = html;
}


/* ===========================================================
   DOCUMENT « POUR ALLER PLUS LOIN » (références seules)
   Construit, dans le même conteneur caché #document-impression, un document
   INDÉPENDANT ne contenant que les citations du Document final, organisées
   par pierre angulaire puis par pilier. C'est ce que produit le bouton
   « Pour aller plus loin » / « Going deeper ». Contenu générique (identique
   pour toutes les évaluations) : il ne dépend pas des réponses de l'utilisateur.
   =========================================================== */
function construireDocumentReferences() {
  const conteneur = document.getElementById("document-impression");
  const prefixeRef = (getLangue() === "en") ? "FD" : (getLangue() === "nl") ? "SD" : "DF";
  const langActive = getLangue();

  let html = "";

  /* En-tête propre : logo + titre « Pour aller plus loin » + sous-titre */
  html += '<div class="pdf-entete">';
  html += '<img class="pdf-logo" src="icons/logo-spirit.png" alt="SPIRIT">';
  html += '<div class="pdf-entete-texte">';
  html += '<h1 class="pdf-titre">' + t("pdf_ref_titre") + '</h1>';
  html += '<p class="pdf-sous-titre">' + t("pdf_fondements_titre") + '</p>';
  html += '</div>';
  html += '</div>';

  html += '<div class="pdf-section">';
  html += '<p class="pdf-fondements-intro">' + t("pdf_fondements_intro") + '</p>';

  PIERRES_ANGULAIRES.forEach((pierre) => {
    html += '<div class="pdf-fond-pierre" style="background:' + pierre.couleur + '">';
    html += '<div class="pdf-fond-pierre-nom">' + tr(pierre.nom) + '</div>';
    html += '<div class="pdf-fond-pierre-soustitre">' + echapper(tr(pierre.sousTitre)) + '</div>';
    html += '</div>';

    CRITERES.filter((c) => c.pierre === pierre.id).forEach((critere) => {
      const citations = JUSTIFICATIONS[critere.id] || [];
      html += '<div class="pdf-fond-pilier">';
      html += '<div class="pdf-fond-pilier-titre">' + critere.numero + '. ' + echapper(tr(critere.titre)) + '</div>';
      citations.forEach((cit) => {
        const texte = cit[langActive] || cit.fr;
        html += '<p class="pdf-fond-citation">';
        html += '<span class="pdf-fond-ref" style="color:' + pierre.couleur + '">' + prefixeRef + ' ' + cit.num + '</span> — ';
        html += echapper(texte) + '</p>';
      });
      html += '</div>';
    });
  });

  /* Logos institutionnels en fin de document */
  html += '<div class="pdf-logos">';
  html += '<img class="pdf-logo-fin" src="icons/logo-ecclesialab.png" alt="EcclesiaLab">';
  html += '<img class="pdf-logo-fin" src="icons/logo-uclouvain.png" alt="UCLouvain">';
  html += '</div>';

  html += '</div>';

  conteneur.innerHTML = html;
}

// Légende sous forme de texte simple (pour le PDF)
function construireLegendeTexte() {
  let html = "";
  MODALITES.forEach((m) => {
    const couleur = (m.couleur === null) ? "transparent" : m.couleur;
    const bordure = (m.couleur === null) ? "border:1.5px dashed #999;" : "";
    html += '<span class="pdf-legende-item">';
    html += '<span class="pdf-pastille" style="background:' + couleur + ';' + bordure + '"></span>';
    html += tr(m.libelle) + '</span>';
  });
  return html;
}

// Sécurise un texte saisi par l'utilisateur avant de l'insérer en HTML
// (évite tout problème si le nom de l'objet contient des caractères spéciaux).
function echapper(texte) {
  const div = document.createElement("div");
  div.textContent = texte;
  return div.innerHTML;
}


/* ===========================================================
   DÉCLENCHEMENT DE L'IMPRESSION
   On construit le document, puis on ouvre la boîte d'impression du
   navigateur (qui propose "Enregistrer au format PDF").
   =========================================================== */
function lancerImpression(evaluation, reponses, dateISO) {
  construireDocumentImpression(evaluation, reponses, dateISO);

  // L'en-tête d'impression du navigateur (celui qui affiche la date et l'heure)
  // reprend le titre du document. On le règle temporairement sur le titre
  // SPIRIT localisé, puis on le restaure une fois l'impression terminée.
  const titreOriginal = document.title;
  document.title = "SPIRIT — " + t("pdf_titre");
  function restaurerTitre() {
    document.title = titreOriginal;
    window.removeEventListener("afterprint", restaurerTitre);
  }
  window.addEventListener("afterprint", restaurerTitre);

  // Petit délai pour laisser le temps au navigateur d'afficher le contenu
  // (notamment le chargement du logo) avant d'ouvrir la boîte d'impression.
  setTimeout(function () {
    window.print();
  }, 200);
}


/* ===========================================================
   DÉCLENCHEMENT DE L'IMPRESSION « POUR ALLER PLUS LOIN »
   Même mécanisme que lancerImpression, mais sur le document des références
   (citations du Document final) construit par construireDocumentReferences.
   =========================================================== */
function lancerImpressionReferences() {
  construireDocumentReferences();

  const titreOriginal = document.title;
  document.title = "SPIRIT — " + t("pdf_ref_titre");
  function restaurerTitre() {
    document.title = titreOriginal;
    window.removeEventListener("afterprint", restaurerTitre);
  }
  window.addEventListener("afterprint", restaurerTitre);

  setTimeout(function () {
    window.print();
  }, 200);
}
