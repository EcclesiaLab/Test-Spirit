/*
  ============================================================
  DONNÉES SPIRIT — le contenu de l'évaluation
  ============================================================

  CE FICHIER EST LE CŒUR ÉDITORIAL DE L'APPLICATION.
  C'est ici — et seulement ici — que vivent :
    - les trois pierres angulaires,
    - les 14 critères et leurs libellés,
    - les sous-questions d'aide à la réflexion,
    - (à venir) les pistes d'action.

  POUR MODIFIER LE CONTENU (libellés, sous-questions, pistes), c'est ICI
  qu'il faut intervenir. Le reste du code lit ce fichier automatiquement :
  tu n'as donc jamais besoin de toucher à la machinerie de l'app pour
  corriger un texte.

  Ce fichier peut être relu et amendé par l'équipe SPIRIT
  (François-Xavier, Jens, Rick, Arnaud) sans connaissance technique avancée :
  il suffit de modifier le texte entre guillemets, sans toucher à la
  ponctuation de structure (accolades, crochets, virgules).

  Source des contenus : SUPPORT_SPIRIT_14criteres_FR (EcclesiaLab),
  d'après le Document final du Synode 2024.
  ============================================================
*/


/* ===========================================================
   LES TROIS PIERRES ANGULAIRES
   - id        : identifiant interne (ne pas traduire, sert au code)
   - nom       : le mot simple affiché sur les jauges et dans le questionnaire
   - formule   : la formule complète et inspirante (réserve, pour usage futur)
   - sousTitre : la description courte de la pierre angulaire
   - couleur   : la couleur identitaire (réserve, pour le clin d'œil synodal éventuel)
   =========================================================== */
const PIERRES_ANGULAIRES = [
  {
    id: "communion",
    nom: "Communion",
    formule: "Pour vivre la communion",
    sousTitre: "Qualité des relations ecclésiales, racines spirituelles et ouverture aux autres",
    couleur: "#1D9E75"
  },
  {
    id: "participation",
    nom: "Participation",
    formule: "Pour réaliser la participation",
    sousTitre: "Permettre à chacun de contribuer à la vie de l'Église",
    couleur: "#7B4EA8"
  },
  {
    id: "mission",
    nom: "Mission",
    formule: "Pour s'ouvrir à la mission",
    sousTitre: "Rayonnement missionnaire et conversion ecclésiale",
    couleur: "#C0392B"
  }
];


/* ===========================================================
   LES 14 CRITÈRES
   Chaque critère contient :
   - id          : identifiant interne unique (sert au code et au stockage)
   - numero      : le numéro affiché (1 à 14)
   - pierre      : l'identifiant de la pierre angulaire de rattachement
   - titre       : le libellé court du critère
   - sousQuestions : les questions d'aide à la réflexion (l'utilisateur n'y
                     répond pas une par une ; elles l'aident à se positionner
                     sur le critère dans son ensemble)
   - pistes      : les pistes d'action, À RÉDIGER PAR L'ÉQUIPE SPIRIT.
                   Structure prévue :
                     {
                       fond            : le texte de fond de la piste (commun),
                       accrocheADevelopper : phrase d'introduction si "À développer",
                       accrocheNonPresent  : phrase d'introduction si "Non présent",
                       sourceDF        : référence facultative au Document final
                     }
                   Tant que ce n'est pas rédigé, on laisse les champs vides ("").
   =========================================================== */
const CRITERES = [

  /* ---------- PIERRE 1 — COMMUNION (critères 1 à 5) ---------- */
  {
    id: "hospitalite",
    numero: 1,
    pierre: "communion",
    titre: "Hospitalité et égale dignité",
    sousQuestions: [
      "Cette pratique accueille-t-elle chacun, en particulier ceux qui se sentent marginalisés, différents ou hésitants à participer ?",
      "La pratique respecte-t-elle l'égale dignité de chaque participant ?",
      "La pratique encourage-t-elle une écoute réciproque ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "diversite",
    numero: 2,
    pierre: "communion",
    titre: "Accueil de la diversité",
    sousQuestions: [
      "Cette pratique préserve-t-elle la riche diversité des expressions de la foi ?",
      "Invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir ?",
      "Renforce-t-elle les liens avec l'Église locale ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "parole-de-dieu",
    numero: 3,
    pierre: "communion",
    titre: "Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu",
    sousQuestions: [
      "La pratique est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
      "Est-elle inspirée par la prière ?",
      "La Parole de Dieu est-elle le fondement du discernement dans cette pratique ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "eucharistie",
    numero: 4,
    pierre: "communion",
    titre: "Source et sommet : l'Eucharistie",
    sousQuestions: [
      "La pratique est-elle nourrie par la célébration de l'Eucharistie ?",
      "Favorise-t-elle une participation active à la liturgie ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "oecumenisme",
    numero: 5,
    pierre: "communion",
    titre: "Dimension œcuménique et dialogue interreligieux dans le monde",
    sousQuestions: [
      "La pratique favorise-t-elle le dialogue avec d'autres Églises et communautés chrétiennes ?",
      "Favorise-t-elle le dialogue avec d'autres traditions religieuses, ainsi qu'avec les non-croyants ?",
      "Cette pratique résiste-t-elle à la tentation du repli sur soi ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },

  /* ---------- PIERRE 2 — PARTICIPATION (critères 6 à 9) ---------- */
  {
    id: "discernement-decision",
    numero: 6,
    pierre: "participation",
    titre: "Implication dans le discernement et la prise de décision",
    sousQuestions: [
      "La pratique favorise-t-elle la participation à la prise de décision ?",
      "Est-elle portée par une communauté plutôt que par un seul individu agissant seul ?",
      "Les personnes qui participent se sentent-elles libres de s'exprimer ouvertement et d'exprimer un désaccord ?",
      "Y a-t-il une conscience du risque qu'un groupe social ou culturel puisse dominer, et des mesures sont-elles prises pour l'empêcher ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "coresponsabilite",
    numero: 7,
    pierre: "participation",
    titre: "Coresponsabilité",
    sousQuestions: [
      "La pratique encourage-t-elle un partage plus large des tâches et des responsabilités au sein du Peuple de Dieu ?",
      "Reflète-t-elle la coresponsabilité différenciée des ministères ordonnés et non ordonnés au sein de la mission commune de tous les fidèles dans l'Église ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "transparence",
    numero: 8,
    pierre: "participation",
    titre: "Transparence, reddition de comptes et évaluation",
    sousQuestions: [
      "Les responsabilités au sein de cette pratique sont-elles clairement définies et comprises ?",
      "La gestion des ressources humaines et financières est-elle documentée ?",
      "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
      "Une évaluation périodique de la pratique est-elle prévue ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "formation",
    numero: 9,
    pierre: "participation",
    titre: "Ouverture à la formation et à l'apprentissage par l'expérience",
    sousQuestions: [
      "La pratique intègre-t-elle une dimension d'apprentissage ?",
      "Comprend-elle des moments de réflexion et d'évaluation continue sur les expériences vécues ?",
      "Favorise-t-elle l'apprentissage à partir des échecs et des résistances ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },

  /* ---------- PIERRE 3 — MISSION (critères 10 à 14) ---------- */
  {
    id: "centralite-christ",
    numero: 10,
    pierre: "mission",
    titre: "Centralité de Jésus-Christ",
    sousQuestions: [
      "La pratique témoigne-t-elle du Christ vivant ?",
      "Vise-t-elle à approfondir la relation de chacun avec le Christ ?",
      "Promeut-elle un mode de vie chrétien qui intègre la foi et la vie quotidienne ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "activite-missionnaire",
    numero: 11,
    pierre: "mission",
    titre: "Orientée vers l'activité missionnaire de l'Église",
    sousQuestions: [
      "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
      "S'inscrit-elle dans la dynamique missionnaire de l'Église locale ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "services-ministeres",
    numero: 12,
    pierre: "mission",
    titre: "Collaboration dans la mission par la reconnaissance des services et des ministères",
    sousQuestions: [
      "Les charismes de chacun sont-ils reconnus au service des besoins de la communauté et de la mission ?",
      "La pratique valorise-t-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
      "Les femmes ont-elles l'occasion d'assumer des rôles de responsabilité dans cette pratique ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "contextes-culturels",
    numero: 13,
    pierre: "mission",
    titre: "Prise en compte des contextes culturels et sociétaux",
    sousQuestions: [
      "La pratique manifeste-t-elle une attention aux réalités historiques, contemporaines, sociales, culturelles et numériques ?",
      "Prend-elle en compte les réalités de la mobilité culturelle et géographique ?",
      "Engage-t-elle un dialogue avec d'autres acteurs de la société ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  },
  {
    id: "conversion-transformations",
    numero: 14,
    pierre: "mission",
    titre: "Conversion synodale par des transformations concrètes",
    sousQuestions: [
      "Cette pratique conduit-elle à une conversion personnelle des participants ?",
      "Permet-elle une transformation communautaire ?",
      "Contribue-t-elle à une réforme concrète de l'Église ?"
    ],
    pistes: { fond: "", accrocheADevelopper: "", accrocheNonPresent: "", sourceDF: "" }
  }
];


/* ===========================================================
   LES QUATRE MODALITÉS DE RÉPONSE
   - id      : identifiant interne (sert au code, au calcul, au stockage)
   - libelle : le texte affiché sur le bouton
   - couleur : la couleur utilisée dans le diagnostic (jauges)
   L'ordre ci-dessous est l'ordre d'affichage des boutons.
   =========================================================== */
const MODALITES = [
  { id: "present",        libelle: "Présent",         couleur: "#1D9E75" },
  { id: "a-developper",   libelle: "En construction", couleur: "#EF9F27" },
  { id: "non-present",    libelle: "À bâtir",         couleur: "#444441" },
  { id: "non-applicable", libelle: "Non applicable",  couleur: null      }  // exclu des jauges (arc manquant)
];


/* ===========================================================
   LES TYPES D'OBJETS ÉVALUABLES (écran d'entrée)
   - id          : identifiant interne (sert au stockage)
   - libelle     : le nom affiché du type
   - description : exemples concrets, pour aider l'utilisateur à choisir
   =========================================================== */
const TYPES_OBJET = [
  {
    id: "action-ponctuelle",
    libelle: "Action ponctuelle",
    description: "Un événement, une célébration, une retraite, une mission ponctuelle"
  },
  {
    id: "projet-parcours",
    libelle: "Projet ou parcours",
    description: "Une initiative étalée dans le temps, avec une fin prévue"
  },
  {
    id: "groupe-instance",
    libelle: "Groupe",
    description: "Une équipe permanente, un conseil, un service"
  }
];
