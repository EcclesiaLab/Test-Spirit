/*
  ============================================================
  PICTOGRAMMES DES RÉPONSES (v80)
  ============================================================
  Une même maison, dessinée à quatre stades de construction, accompagne
  chaque réponse :
    - À bâtir            : le contour en pointillé, rien n'est construit ;
    - En chantier        : les murs montent, la grue est là ;
    - À consolider       : la maison est construite, un étai la soutient ;
    - Solidement établi  : la maison achevée, légèrement remplie de couleur.
  « Non applicable » n'est pas un degré de construction : un simple cercle
  en pointillé, barré.

  Les pictogrammes ACCOMPAGNENT le libellé, ils ne le remplacent jamais.
  Ils servent aussi à lire le PDF imprimé en noir et blanc, où les couleurs
  se confondent (une forme se lit sans couleur).

  Technique : de petits dessins SVG (32 × 32), tracés avec la couleur
  « currentColor », c'est-à-dire la couleur du texte de l'élément qui les
  contient. On leur donne donc la couleur de la réponse en mettant
  style="color: …" sur l'élément parent.
  ============================================================
*/

// Le sol, commun à plusieurs dessins.
const PICTO_SOL = '<path d="M3 27.5H29" stroke-width="1.8"/>';
// Le contour de la maison (murs et toit).
const PICTO_CONTOUR = "M7 27.5V15.5L16 7.5L25 15.5V27.5";

const PICTOGRAMMES = {
  "present":
    PICTO_SOL +
    '<path d="' + PICTO_CONTOUR + '" fill="currentColor" fill-opacity=".14" stroke-width="2"/>' +
    '<path d="M13.5 27.5V21.5H18.5V27.5" stroke-width="1.8"/>' +                      // porte
    '<rect x="14.4" y="13.4" width="3.2" height="3.2" rx=".4" stroke-width="1.6"/>',  // fenêtre

  "a-consolider":
    '<path d="M2 27.5H31" stroke-width="1.8"/>' +
    '<path d="M4.5 27.5V15.5L13.5 7.5L22.5 15.5V27.5" stroke-width="1.9"/>' +   // maison (décalée à gauche)
    '<path d="M11 27.5V21.5H16V27.5" stroke-width="1.7"/>' +                    // porte
    '<path d="M30 27.5L23.4 20" stroke-width="2.6"/>' +                          // étai
    '<path d="M27.6 27.5H31.4" stroke-width="2.6"/>',                            // pied de l'étai

  "a-developper":
    PICTO_SOL +
    '<path d="M7 15.5L16 7.5L25 15.5" stroke-dasharray="2.4 2.6" stroke-width="1.4" opacity=".55"/>' +  // toit à venir
    '<path d="M7 27.5V18.5H25V27.5" stroke-width="1.9"/>' +                                             // murs
    '<path d="M7 23H25M13 18.5V23M19 23V27.5" stroke-width="1.2" opacity=".8"/>' +                      // briques
    '<path d="M28.5 27.5V4.5M21 4.5H31M23.5 4.5V9" stroke-width="1.6"/>',                               // grue

  "non-present":
    PICTO_SOL +
    '<path d="' + PICTO_CONTOUR + '" stroke-dasharray="2.4 2.6" stroke-width="1.6" opacity=".9"/>',

  "non-applicable":
    '<circle cx="16" cy="17" r="9" stroke-dasharray="2.4 2.6" stroke-width="1.6"/>' +
    '<path d="M11.5 17H20.5" stroke-width="1.6"/>'
};

// Couleur du pictogramme « Non applicable » (gris neutre).
const COULEUR_PICTO_NA = "#888780";

/*
  Renvoie le code d'un pictogramme, prêt à insérer dans la page :
    pictogramme("a-consolider", 34)  →  <span class="picto" style="color:#3E6C9B"><svg …></svg></span>
  « taille » : largeur et hauteur en pixels (34 par défaut).
*/
function pictogramme(idModalite, taille) {
  const dessin = PICTOGRAMMES[idModalite];
  if (!dessin) return "";
  // v87 : cette variable s'appelait « t », comme la fonction de traduction
  // t() ; elle la masquait à l'intérieur de cette fonction (constat C6).
  const cote = taille || 34;
  const couleur = couleurModalite(idModalite) || COULEUR_PICTO_NA;
  return '<span class="picto" style="color:' + couleur + '">' +
         '<svg viewBox="0 0 32 32" width="' + cote + '" height="' + cote + '" fill="none" stroke="currentColor" ' +
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + dessin + '</svg></span>';
}
