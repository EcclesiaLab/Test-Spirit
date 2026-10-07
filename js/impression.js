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
    4. Le détail des 14 critères avec la modalité choisie, les questions
       d'aide de chaque pilier et l'observation éventuelle
    5. Les pistes d'action (emplacement réservé tant que non rédigées)
    6. Pied de page
  ============================================================
*/


/* ===========================================================
   CONSTRUCTION DU DOCUMENT IMPRIMABLE
   Remplit #document-impression à partir de l'évaluation et des réponses.
   =========================================================== */
function construireDocumentImpression(evaluation, reponses, dateISO, commentaires, comptes) {
  // Évaluation en groupe (v73) : document propre au groupe (voir plus bas).
  if (estModeGroupe(evaluation)) {
    construireDocumentImpressionGroupe(evaluation, comptes || {}, dateISO, commentaires);
    return;
  }
  const conteneur = document.getElementById("document-impression");

  const type = trouverTypeObjet(evaluation.typeObjet);
  const typeLibelle = type ? tr(type.libelle) : "";
  // Date fournie (archive) ou date du jour (évaluation qui vient de finir).
  const date = formaterDateLongue(dateISO || new Date());

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
  html += '<p class="pdf-objet-meta">' + joindrePoints([typeLibelle, date ? tAvec("pdf_evaluation_date", { date: date }) : ""]) + '</p>';
  html += ligneOrigineQuestions(evaluation);
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
      html += '<td class="pdf-td-critere"><strong>' + critere.numero + '.</strong> ' + echapper(tr(critere.titre));
      // Questions d'aide du pilier, listées sous son titre (dans la même
      // cellule, pour qu'elles restent sur la même page que le pilier).
      // Questions du domaine choisi (ou questions de référence).
      const questions = sousQuestionsPour(critere, evaluation.typeObjet) || [];
      if (questions.length > 0) {
        html += '<ul class="pdf-sq">';
        questions.forEach((q) => {
          html += '<li>' + echapper(tr(q)) + '</li>';
        });
        html += '</ul>';
      }
      html += '</td>';
      html += '<td class="pdf-td-reponse"><span class="pdf-pastille" style="background:' + couleurRep + '"></span>' + libelleRep + '</td>';
      html += '</tr>';
      const obs = (commentaires && commentaires[critere.id]) ? commentaires[critere.id].trim() : "";
      if (obs !== "") {
        html += '<tr><td class="pdf-obs" colspan="2"><span class="pdf-obs-label">' + t("pdf_observation") + deuxPoints() + '</span>' + echapper(obs) + '</td></tr>';
      }
    });
    html += '</table>';
  });
  html += '</div>';

  /* --- 5. Pistes de progression (emplacement réservé) + logos --- */
  html += sectionPistesEtLogos();

  /* Les citations du Document final ne sont plus dans ce PDF : elles sont
     désormais générées séparément par le bouton « Pour aller plus loin »
     (voir construireDocumentReferences ci-dessous). */

  conteneur.innerHTML = html;
}


/* Section « Pistes de progression » (emplacement réservé tant qu'elles ne
   sont pas rédigées), suivie des logos institutionnels. Commune au document
   habituel et au document du groupe. Les logos sont placés ici, en bas de
   cette section, pour éviter qu'ils se retrouvent seuls sur une page. */
function sectionPistesEtLogos() {
  let html = '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("pdf_pistes") + '</h2>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_attente") + '</p>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_validation") + '</p>';
  html += '<p class="pdf-pistes-attente">' + t("pdf_pistes_groupe") + '</p>';
  html += '<div class="pdf-logos">';
  html += '<img class="pdf-logo-fin" src="icons/logo-ecclesialab.png" alt="EcclesiaLab">';
  html += '<img class="pdf-logo-fin" src="icons/logo-uclouvain.png" alt="UCLouvain">';
  html += '</div>';
  html += piedVersion();
  html += '</div>';
  return html;
}

// Pied de page : numéro de version de SPIRIT (constat M10 de l'audit v72).
function piedVersion() {
  return '<p class="pdf-version">' + tAvec("version_libelle", { version: VERSION_SPIRIT }) + '</p>';
}

// Ligne qui dit d'où viennent les questions d'aide imprimées (constat M6) :
// questionnaire de référence validé par le Delphi, ou questions adaptées à
// un domaine (sans les attribuer au Delphi, qui ne les a pas validées).
function ligneOrigineQuestions(evaluation) {
  const type = evaluation.domainesMultiples ? null : trouverTypeObjet(evaluation.typeObjet);
  const questionsDomaine = !!(type && QUESTIONS_PAR_DOMAINE[type.id]);
  const texte = questionsDomaine
    ? tAvec("pdf_questions_domaine", { domaine: tr(type.libelle) })
    : t("pdf_questions_reference");
  return '<p class="pdf-objet-questions">' + texte + '</p>';
}


/* ===========================================================
   DOCUMENT DU GROUPE (v73)
   Même structure que le document habituel, mais sans schéma ni lecture
   par pierre : une synthèse des avis partagés, puis, pour chaque pilier,
   la répartition des avis (barre + nombres), les questions d'aide et
   l'observation éventuelle.
   =========================================================== */
function construireDocumentImpressionGroupe(evaluation, comptes, dateISO, commentaires) {
  const conteneur = document.getElementById("document-impression");
  const date = formaterDateLongue(dateISO || new Date());

  let html = "";

  /* --- En-tête --- */
  html += '<div class="pdf-entete">';
  html += '<img class="pdf-logo" src="icons/logo-spirit.png" alt="SPIRIT">';
  html += '<div class="pdf-entete-texte">';
  html += '<h1 class="pdf-titre">' + t("pdf_titre") + '</h1>';
  html += '<p class="pdf-sous-titre">' + t("pdf_sous_titre") + '</p>';
  html += '</div>';
  html += '</div>';

  /* --- Pratique évaluée --- */
  html += '<div class="pdf-objet-bloc">';
  html += '<p class="pdf-objet-label">' + t("pdf_objet_label") + '</p>';
  html += '<p class="pdf-objet-nom">' + echapper(evaluation.nomObjet || t("comparer_sans_nom")) + '</p>';
  html += '<p class="pdf-objet-meta">' + joindrePoints([descriptionGroupe(evaluation, comptes), date ? tAvec("pdf_evaluation_date", { date: date }) : ""]) + '</p>';
  html += ligneOrigineQuestions(evaluation);
  html += '</div>';

  /* --- Synthèse + légende --- */
  html += '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("diagnostic_groupe_titre") + '</h2>';
  html += construireSyntheseGroupe(comptes);
  html += '<div class="pdf-legende">' + construireLegendeTexte() + '</div>';
  html += '</div>';

  /* --- Répartition des avis, pilier par pilier --- */
  html += '<div class="pdf-section">';
  html += '<h2 class="pdf-section-titre">' + t("groupe_repartition_titre") + '</h2>';
  PIERRES_ANGULAIRES.forEach((pierre) => {
    html += '<h3 class="pdf-pierre-titre" style="color:' + pierre.couleur + '">' + tr(pierre.nom) + '</h3>';
    html += '<table class="pdf-table">';
    CRITERES.filter((c) => c.pierre === pierre.id).forEach((critere) => {
      const compte = comptes[critere.id] || {};
      html += '<tr>';
      html += '<td class="pdf-td-critere"><strong>' + critere.numero + '.</strong> ' + echapper(tr(critere.titre));
      if (estAvisPartage(compte)) {
        html += ' <span class="pdf-groupe-badge">' + t("groupe_badge") + '</span>';
      }
      const questions = sousQuestionsPour(critere, evaluation.typeObjet) || [];
      if (questions.length > 0) {
        html += '<ul class="pdf-sq">';
        questions.forEach((q) => { html += '<li>' + echapper(tr(q)) + '</li>'; });
        html += '</ul>';
      }
      html += '</td>';
      html += '<td class="pdf-td-reponse">' + construireBarreGroupe(compte, "pdf-groupe-barre", "pdf-groupe-seg") +
              '<span class="pdf-groupe-chiffres">' + MODALITES.map((m) => compte[m.id] || 0).join(" · ") + '</span></td>';
      html += '</tr>';
      const obs = (commentaires && commentaires[critere.id]) ? commentaires[critere.id].trim() : "";
      if (obs !== "") {
        html += '<tr><td class="pdf-obs" colspan="2"><span class="pdf-obs-label">' + t("pdf_observation") + deuxPoints() + '</span>' + echapper(obs) + '</td></tr>';
      }
    });
    html += '</table>';
  });
  html += '</div>';

  /* --- Pistes de progression + logos --- */
  html += sectionPistesEtLogos();

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
  const prefixeRef = t("pdf_prefixe_ref"); // DF, FD ou SD selon la langue
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
  html += piedVersion();

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
function lancerImpression(evaluation, reponses, dateISO, commentaires, comptes) {
  construireDocumentImpression(evaluation, reponses, dateISO, commentaires, comptes);

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
