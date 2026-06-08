/*
  ============================================================
  DONNÉES SPIRIT — le contenu de l'évaluation (BILINGUE FR/EN)
  ============================================================

  CE FICHIER EST LE CŒUR ÉDITORIAL DE L'APPLICATION.
  C'est ici — et seulement ici — que vivent :
    - les trois pierres angulaires,
    - les 14 piliers et leurs libellés,
    - les sous-questions d'aide à la réflexion,
    - les modalités de réponse,
    - les types de pratique,
    - (à venir) les pistes d'action.

  BILINGUE : chaque texte affiché existe en deux langues, sous la forme
  { fr: "texte français", en: "texte anglais" }.
  Pour corriger une traduction, modifiez le texte entre guillemets de la
  bonne langue, sans toucher à la structure (accolades, crochets, virgules).

  Les identifiants techniques (id) ne sont JAMAIS traduits : ils servent au
  code et au stockage des évaluations. Ne pas les modifier.

  Source : SUPPORT_SPIRIT_14criteres (FR) et Criteria for SPIRIT May 2026 (EN),
  d'après le Document final du Synode 2024.
  ============================================================
*/


/* ===========================================================
   LES TROIS PIERRES ANGULAIRES
   - nom     : le mot simple affiché (Communion / Participation / Mission)
   - formule : la formule complète et inspirante (réserve)
   - sousTitre : description courte de la pierre angulaire
   - couleur : couleur identitaire (réserve)
   =========================================================== */
const PIERRES_ANGULAIRES = [
  {
    id: "communion",
    nom: { fr: "Communion", en: "Communion" },
    formule: { fr: "Pour vivre la communion", en: "To live communion" },
    sousTitre: {
      fr: "Qualité des relations ecclésiales, racines spirituelles et ouverture aux autres",
      en: "Quality of ecclesial relationships, their spiritual roots, and openness to others"
    },
    couleur: "#1D9E75"
  },
  {
    id: "participation",
    nom: { fr: "Participation", en: "Participation" },
    formule: { fr: "Pour réaliser la participation", en: "To achieve participation" },
    sousTitre: {
      fr: "Permettre à chacun de contribuer à la vie de l'Église",
      en: "Enabling everyone to contribute to the life of the Church"
    },
    couleur: "#7B4EA8"
  },
  {
    id: "mission",
    nom: { fr: "Mission", en: "Mission" },
    formule: { fr: "Pour s'ouvrir à la mission", en: "To open itself to mission" },
    sousTitre: {
      fr: "Rayonnement missionnaire et conversion ecclésiale",
      en: "Missionary outreach and ecclesial conversion"
    },
    couleur: "#C0392B"
  }
];


/* ===========================================================
   LES 14 PILIERS
   - id          : identifiant interne unique (NE PAS traduire ni modifier)
   - numero      : le numéro affiché (1 à 14)
   - pierre      : l'identifiant de la pierre angulaire de rattachement
   - titre       : libellé court { fr, en }
   - sousQuestions : tableau de questions d'aide, chacune { fr, en }
   - pistes      : pistes d'action, À RÉDIGER PAR L'ÉQUIPE SPIRIT (vides pour l'instant)
   =========================================================== */
const CRITERES = [

  /* ---------- PIERRE 1 — COMMUNION (piliers 1 à 5) ---------- */
  {
    id: "hospitalite",
    numero: 1,
    pierre: "communion",
    titre: { fr: "Hospitalité et égale dignité", en: "Hospitality and Equal Dignity" },
    sousQuestions: [
      { fr: "Cette pratique accueille-t-elle chacun, en particulier ceux qui se sentent marginalisés, différents ou hésitants à participer ?",
        en: "Does this practice welcome everyone, especially those who may feel marginalised, different, or hesitant to participate?" },
      { fr: "La pratique respecte-t-elle l'égale dignité de chaque participant ?",
        en: "Does the practice respect the equal dignity of every participant?" },
      { fr: "La pratique encourage-t-elle une écoute réciproque ?",
        en: "Does the practice encourage reciprocal listening?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "diversite",
    numero: 2,
    pierre: "communion",
    titre: { fr: "Accueil de la diversité", en: "Embracing diversity" },
    sousQuestions: [
      { fr: "Cette pratique préserve-t-elle la riche diversité des expressions de la foi ?",
        en: "Does this practice preserve the rich diversity of expressions of faith?" },
      { fr: "Invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir ?",
        en: "Does this practice invite each person to open themselves to alterity in order to grow and mature?" },
      { fr: "Renforce-t-elle les liens avec l'Église locale ?",
        en: "Does the practice strengthen bonds with the local Church?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "parole-de-dieu",
    numero: 3,
    pierre: "communion",
    titre: { fr: "Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu",
             en: "Embedded in prayer and nourished by listening to the Word of God" },
    sousQuestions: [
      { fr: "La pratique est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the practice rooted in attentive listening to the Word of God?" },
      { fr: "Est-elle inspirée par la prière ?",
        en: "Is the practice inspired by prayer?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement dans cette pratique ?",
        en: "Is the Word of God the foundation for discernment in this practice?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "eucharistie",
    numero: 4,
    pierre: "communion",
    titre: { fr: "Source et sommet : l'Eucharistie", en: "Source and summit in the Eucharist" },
    sousQuestions: [
      { fr: "La pratique est-elle nourrie par la célébration de l'Eucharistie ?",
        en: "Is the practice nourished by the celebration of the Eucharist?" },
      { fr: "Favorise-t-elle une participation active à la liturgie ?",
        en: "Does the practice foster active participation in the liturgy?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "oecumenisme",
    numero: 5,
    pierre: "communion",
    titre: { fr: "Dimension œcuménique et dialogue interreligieux dans le monde",
             en: "Considering the ecumenical dimension and interfaith dialogue in the world" },
    sousQuestions: [
      { fr: "La pratique favorise-t-elle le dialogue avec d'autres Églises et communautés chrétiennes ?",
        en: "Does the practice foster dialogue with other Churches and Christian communities?" },
      { fr: "Favorise-t-elle le dialogue avec d'autres traditions religieuses, ainsi qu'avec les non-croyants ?",
        en: "Does the practice foster dialogue with other religious traditions, and those of no faith?" },
      { fr: "Cette pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does this practice resist the temptation of self-centredness?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },

  /* ---------- PIERRE 2 — PARTICIPATION (piliers 6 à 9) ---------- */
  {
    id: "discernement-decision",
    numero: 6,
    pierre: "participation",
    titre: { fr: "Implication dans le discernement et la prise de décision",
             en: "Involvement in discernment and decision-making" },
    sousQuestions: [
      { fr: "La pratique favorise-t-elle la participation à la prise de décision ?",
        en: "Does the practice foster participation in decision-making?" },
      { fr: "Est-elle portée par une communauté plutôt que par un seul individu agissant seul ?",
        en: "Is the practice carried out by a community rather than by a single individual acting alone?" },
      { fr: "Les personnes qui participent se sentent-elles libres de s'exprimer ouvertement et d'exprimer un désaccord ?",
        en: "Do people who participate feel free to speak openly and express disagreement?" },
      { fr: "Y a-t-il une conscience du risque qu'un groupe social ou culturel puisse dominer, et des mesures sont-elles prises pour l'empêcher ?",
        en: "Is there an awareness of the risk that one social or cultural group might dominate, and are steps taken to prevent this?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "coresponsabilite",
    numero: 7,
    pierre: "participation",
    titre: { fr: "Coresponsabilité", en: "Co-responsibility" },
    sousQuestions: [
      { fr: "La pratique encourage-t-elle un partage plus large des tâches et des responsabilités au sein du Peuple de Dieu ?",
        en: "Does the practice encourage a wider sharing of the tasks and responsibilities of the People of God?" },
      { fr: "Reflète-t-elle la coresponsabilité différenciée des ministères ordonnés et non ordonnés au sein de la mission commune de tous les fidèles dans l'Église ?",
        en: "Does the practice reflect the differentiated co-responsibility of ordained and non-ordained ministries within the shared mission of all the faithful in the Church?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "transparence",
    numero: 8,
    pierre: "participation",
    titre: { fr: "Transparence, reddition de comptes et évaluation",
             en: "Transparency, accountability, and evaluation" },
    sousQuestions: [
      { fr: "Les responsabilités au sein de cette pratique sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within this practice clearly defined and understood?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée ?",
        en: "Is the management of human and financial resources in this practice documented?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in this practice?" },
      { fr: "Une évaluation périodique de la pratique est-elle prévue ?",
        en: "Is there a periodic evaluation of the practice?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "formation",
    numero: 9,
    pierre: "participation",
    titre: { fr: "Ouverture à la formation et à l'apprentissage par l'expérience",
             en: "Openness for formation and learning from experience" },
    sousQuestions: [
      { fr: "La pratique intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?" },
      { fr: "Comprend-elle des moments de réflexion et d'évaluation continue sur les expériences vécues ?",
        en: "Does the practice include moments of reflection and continuous evaluation on the lived experiences?" },
      { fr: "Favorise-t-elle l'apprentissage à partir des échecs et des résistances ?",
        en: "Does the practice foster learning from failures and resistance?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },

  /* ---------- PIERRE 3 — MISSION (piliers 10 à 14) ---------- */
  {
    id: "centralite-christ",
    numero: 10,
    pierre: "mission",
    titre: { fr: "Centralité de Jésus-Christ", en: "Centrality of Jesus Christ" },
    sousQuestions: [
      { fr: "La pratique témoigne-t-elle du Christ vivant ?",
        en: "Does the practice bear witness of the living Christ?" },
      { fr: "Vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the practice aim to deepen each person's relationship with Christ?" },
      { fr: "Promeut-elle un mode de vie chrétien qui intègre la foi et la vie quotidienne ?",
        en: "Does the practice promote a Christian way of life that integrates faith and daily life?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "activite-missionnaire",
    numero: 11,
    pierre: "mission",
    titre: { fr: "Orientée vers l'activité missionnaire de l'Église",
             en: "Aimed at the missionary activity of the Church" },
    sousQuestions: [
      { fr: "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the practice contribute to a new impulse to mission?" },
      { fr: "S'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "services-ministeres",
    numero: 12,
    pierre: "mission",
    titre: { fr: "Collaboration dans la mission par la reconnaissance des services et des ministères",
             en: "Collaboration in mission through a recognition of services and ministries" },
    sousQuestions: [
      { fr: "Les charismes de chacun sont-ils reconnus au service des besoins de la communauté et de la mission ?",
        en: "Are the charisms of each individual recognised for the needs of the community and the mission?" },
      { fr: "La pratique valorise-t-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
        en: "Does the practice valorise a variety of services and ministries in response to the pastoral needs?" },
      { fr: "Les femmes ont-elles l'occasion d'assumer des rôles de responsabilité dans cette pratique ?",
        en: "Do women have opportunities to take on roles of responsibility in this practice?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "contextes-culturels",
    numero: 13,
    pierre: "mission",
    titre: { fr: "Prise en compte des contextes culturels et sociétaux",
             en: "Considering cultural and societal contexts" },
    sousQuestions: [
      { fr: "La pratique manifeste-t-elle une attention aux réalités historiques, contemporaines, sociales, culturelles et numériques ?",
        en: "Does the practice exhibit attention to historical, contemporary, social, cultural, and digital realities?" },
      { fr: "Prend-elle en compte les réalités de la mobilité culturelle et géographique ?",
        en: "Does the practice take the realities of cultural and geographic mobility into account?" },
      { fr: "Engage-t-elle un dialogue avec d'autres acteurs de la société ?",
        en: "Does the practice engage in dialogue with other societal actors?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "conversion-transformations",
    numero: 14,
    pierre: "mission",
    titre: { fr: "Conversion synodale par des transformations concrètes",
             en: "Synodal conversion through concrete transformations" },
    sousQuestions: [
      { fr: "Cette pratique conduit-elle à une conversion personnelle des participants ?",
        en: "Does this practice lead to a personal conversion of the participants?" },
      { fr: "Permet-elle une transformation communautaire ?",
        en: "Does the practice enable communal transformation?" },
      { fr: "Contribue-t-elle à une réforme concrète de l'Église ?",
        en: "Does the practice contribute to a concrete reform of the Church?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  }
];


/* ===========================================================
   LES QUATRE MODALITÉS DE RÉPONSE
   id technique inchangé ; seul le libellé est bilingue.
   =========================================================== */
const MODALITES = [
  { id: "present",        libelle: { fr: "Présent",         en: "Present" },        couleur: "#1D9E75" },
  { id: "a-developper",   libelle: { fr: "En construction", en: "Under construction" }, couleur: "#EF9F27" },
  { id: "non-present",    libelle: { fr: "À bâtir",         en: "To be built" },    couleur: "#444441" },
  { id: "non-applicable", libelle: { fr: "Non applicable",  en: "Not applicable" }, couleur: null }
];


/* ===========================================================
   LES TYPES DE PRATIQUE (écran d'entrée)
   =========================================================== */
const TYPES_OBJET = [
  {
    id: "action-ponctuelle",
    libelle: { fr: "Action ponctuelle", en: "One-off action" },
    description: { fr: "Un événement, une célébration, une retraite, une mission ponctuelle",
                   en: "An event, a celebration, a retreat, a one-off mission" }
  },
  {
    id: "projet-parcours",
    libelle: { fr: "Projet ou parcours", en: "Project or journey" },
    description: { fr: "Une initiative étalée dans le temps, avec une fin prévue",
                   en: "An initiative spread over time, with a planned end" }
  },
  {
    id: "groupe-instance",
    libelle: { fr: "Groupe", en: "Group" },
    description: { fr: "Une équipe permanente, un conseil, un service",
                   en: "A permanent team, a council, a service" }
  }
];
