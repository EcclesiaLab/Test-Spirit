/*
  ============================================================
  DOCUMENT FINAL EN FENÊTRE — SPIRIT (v92)
  ============================================================
  Sur l'écran d'un pilier, le bouton « Document final » (à côté de
  « Lexique ») ouvre une fenêtre avec les passages du Document final du
  Synode qui fondent CE pilier, chacun précédé de son numéro : « DF 115 »
  en français, « FD 115 » en anglais, « SD 115 » en néerlandais.

  Les passages ne sont écrits qu'à un seul endroit : JUSTIFICATIONS, dans
  donnees-spirit.js. Ce sont les mêmes que dans le PDF « Pour aller plus
  loin » du diagnostic. Pour corriger ou ajouter un passage, c'est là qu'il
  faut le faire : la fenêtre suit d'elle-même.

  La fenêtre se ferme par le bouton « Fermer », la touche Échap ou le geste
  « retour » du téléphone (fenetres.js et retour.js), comme le lexique.
  ============================================================
*/

// Remplit la fenêtre avec les passages du pilier affiché, dans la langue active.
function construireDocumentFinal(critere) {
  const langue = getLangue();
  const prefixe = t("pdf_prefixe_ref"); // DF, FD ou SD

  // Sous le titre : le numéro et le nom du pilier.
  document.getElementById("document-final-pilier").textContent =
    tAvec("df_pilier", { numero: critere.numero, titre: tr(critere.titre) });

  const liste = document.getElementById("document-final-liste");
  liste.innerHTML = "";
  (JUSTIFICATIONS[critere.id] || []).forEach((citation) => {
    const bloc = document.createElement("div");
    bloc.className = "document-final__passage";

    // Le numéro du passage, bien visible (ex. « DF 115 »).
    const reference = document.createElement("p");
    reference.className = "document-final__ref";
    reference.textContent = prefixe + " " + citation.num;

    // Le texte du passage (langue active, ou français à défaut).
    const texte = document.createElement("blockquote");
    texte.className = "lexique__citation";
    texte.textContent = espacesInsecables(citation[langue] || citation.fr);

    bloc.appendChild(reference);
    bloc.appendChild(texte);
    liste.appendChild(bloc);
  });
}

function ouvrirDocumentFinalFenetre() {
  const critere = CRITERES[indexCritereActuel]; // le pilier affiché (app.js)
  if (!critere) return;
  construireDocumentFinal(critere);
  ouvrirFenetre("document-final-voile", { surEchap: fermerDocumentFinalFenetre });
  // On repart du haut de la fenêtre (elle a pu défiler pour un autre pilier).
  const boite = document.querySelector("#document-final-voile .document-final-fenetre");
  if (boite) boite.scrollTop = 0;
}

function fermerDocumentFinalFenetre() {
  fermerFenetre("document-final-voile"); // le focus revient sur le bouton « Document final »
}
