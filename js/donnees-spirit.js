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
  { id: "present",        libelle: { fr: "Solidement établi", en: "Well established" }, couleur: "#1D9E75" },
  { id: "a-developper",   libelle: { fr: "En chantier", en: "Under development" }, couleur: "#EF9F27" },
  { id: "non-present",    libelle: { fr: "À bâtir",         en: "To be built" },    couleur: "#444441" },
  { id: "non-applicable", libelle: { fr: "Non applicable",  en: "Not applicable" }, couleur: null }
];


/* ===========================================================
   LES TYPES DE PRATIQUE (écran d'entrée)
   =========================================================== */
const TYPES_OBJET = [
  {
    id: "action-ponctuelle",
    libelle: { fr: "Activité ponctuelle", en: "One-time activity" },
    description: { fr: "Un événement, une célébration, une retraite, une mission ponctuelle, etc.",
                   en: "An event, a celebration, a retreat, a one-off mission, etc." }
  },
  {
    id: "projet-parcours",
    libelle: { fr: "Projet ou parcours", en: "Project or program" },
    description: { fr: "Parcours de formation spirituelle, projet de café chrétien, etc.",
                   en: "A spiritual formation journey, a Christian café project, etc." }
  },
  {
    id: "groupe-instance",
    libelle: { fr: "Dynamique de groupe", en: "Group dynamic" },
    description: { fr: "Au sein d'une équipe permanente, d'un conseil, d'un service, etc.",
                   en: "Within a permanent team, a council, a service, etc." }
  }
];

/* ============================================================
   JUSTIFICATIONS DES PILIERS (Document final du Synode, 2024)
   Affichées sur la dernière feuille du PDF, regroupées par
   pierre angulaire. Clé = identifiant du pilier (voir CRITERES).
   Chaque citation : { num, fr, en }. La référence s'affiche
   "DF <num>" en français et "FD <num>" en anglais.
   ⚠ Citations issues du Document final du Synode sur la
   synodalité — ne pas modifier le texte sans validation.
   ============================================================ */
const JUSTIFICATIONS = {
  "hospitalite": [
    { num: "115", fr: "« La relation entre le lieu et l’espace suggère également une réflexion sur l’Église en tant que “ maison ”. Lorsqu’elle n’est pas comprise comme un espace fermé et inaccessible, à défendre à tout prix, l’image de la maison évoque des possibilités d’accueil, d’hospitalité et d’inclusion. »",
      en: "“The relation between place and space leads us also to reflect on the Church as ‘home’. When it is not thought of as a closed space, inaccessible, to be defended at all costs, the image of home evokes the possibility of welcome, hospitality, and inclusion.”" },
    { num: "35", fr: "« Nous apprenons que nous avons la même dignité, que nous sommes créés pour la réciprocité, que nous avons besoin d’être écoutés et que nous sommes capables d’écouter. »",
      en: "“We learn that we are equal in dignity and created for reciprocity, that we need to be listened to, and that we are able to listen.”" }
  ],
  "diversite": [
    { num: "110", fr: "« La dimension locale de l’Église préserve la riche diversité des expressions de foi enracinées dans des contextes culturels et historiques spécifiques, et la communion des Églises manifeste la communion des fidèles au sein de l’Église unique. La conversion synodale invite donc chacun à élargir l’espace de son cœur. »",
      en: "“This local dimension to our Church preserves the rich diversity of expressions of faith that are grounded in a specific cultural and historical milieu. The communion of local Churches is the expression of the unity of the faithful within the one Church. Thus, synodal conversion calls each person to enlarge the space of their heart.”" },
    { num: "34", fr: "« Les différences de vocation, d’âge, de sexe, de profession, de condition et d’appartenance sociale, présentes dans toute communauté chrétienne, offrent à chacun la rencontre avec l’altérité indispensable à la maturation personnelle. »",
      en: "“Differences that are found in every Christian community with respect to age, vocation, sex, profession and social belonging provide an opportunity for an encounter with otherness that is indispensable to personal growth and maturity.”" }
  ],
  "parole-de-dieu": [
    { num: "27", fr: "« Les assemblées synodales sont des événements qui célèbrent l’union du Christ avec son Église par l’action de l’Esprit. La liturgie est une écoute de la Parole de Dieu et une réponse à son initiative d’alliance. L’assemblée synodale, elle aussi, est une écoute de cette même Parole, qui résonne aussi bien dans les signes des temps que dans le cœur des fidèles, et une réponse de l’assemblée qui discerne la volonté de Dieu pour la mettre en pratique. »",
      en: "“Synodal assemblies are events that celebrate the union of Christ with His Church through the action of the Spirit. The liturgy is a listening to the Word of God and a response to His covenantal initiative. Similarly, the synodal assembly is a listening to this same Word, which resounds as much in the signs of the times as in the hearts of the faithful, and also a response of the assembly that is discerning God’s will in order to put it into practice.”" }
  ],
  "eucharistie": [
    { num: "26", fr: "« La célébration de l’Eucharistie, surtout le dimanche, est la modalité première et fondamentale selon laquelle le peuple saint de Dieu se réunit et se rencontre. (…) l’Église, Corps du Christ, apprend de l’Eucharistie à articuler unité et pluralité : unité de l’Église et multiplicité des assemblées eucharistiques ; unité du mystère sacramentel et variété des traditions liturgiques ; unité de la célébration et diversité des vocations, des charismes et des ministères. »",
      en: "“The celebration of the Eucharist, especially on Sundays, is the first and fundamental way the holy People of God gather and meet. (…) the Church, the Body of Christ, learns from the Eucharist how to combine unity and plurality: the unity of the Church and the multiplicity of Eucharistic assemblies; unity of the sacramental mystery and variety of liturgical traditions; unity of celebration and plurality of vocations, charisms and ministries.”" }
  ],
  "oecumenisme": [
    { num: "138", fr: "« Le dialogue œcuménique est fondamental pour développer une compréhension de la synodalité et de l’unité de l’Église. Il nous pousse à imaginer des pratiques synodales œcuméniques, y compris des formes de consultation et de discernement sur des questions urgentes d’intérêt commun, telles que la célébration d’un synode œcuménique sur l’évangélisation. »",
      en: "“Ecumenical dialogue is fundamental to developing an understanding of synodality and the unity of the Church. It urges us to develop ecumenical synodal practices, including forms of consultation and discernment on questions of shared and urgent interest, as the celebration of an ecumenical Synod on evangelisation could be.”" },
    { num: "42", fr: "« La pluralité des religions et des cultures, la multiplicité des traditions spirituelles et théologiques, la variété des dons de l’Esprit et des tâches dans la communauté, ainsi que la diversité des âges, des sexes et des appartenances sociales au sein de l’Église, constituent une invitation pour chacun à reconnaître et à assumer sa propre partialité, en renonçant à la prétention d’être au centre et en s’ouvrant à l’accueil d’autres perspectives. »",
      en: "“The plurality of religions and cultures, the diversity of spiritual and theological traditions, the variety of the gifts of the Spirit and of the tasks of the community, as well as the diversity of age, sex and social affiliation within the Church, are an invitation to each person to recognise their particular situatedness, resist the temptation of being at the centre, and open oneself to the acceptance of other perspectives.”" }
  ],
  "discernement-decision": [
    { num: "87", fr: "« Dans l’Église synodale, “ la communauté tout entière, dans la libre et riche diversité de ses membres, est convoquée pour prier, écouter, analyser, dialoguer, discerner et conseiller afin de prendre des décisions ” (CTI, n. 68) pour la mission. Favoriser la participation la plus large possible de l’ensemble du peuple de Dieu aux processus décisionnels est le moyen le plus efficace de promouvoir une Église synodale. »",
      en: "“In the synodal Church ‘the whole community, in the free and rich diversity of its members, is called together to pray, listen, analyse, dialogue, discern and offer advice on taking pastoral decisions’ (ITC 68) for mission. The way to promote a synodal Church is to foster as great a participation of all the People of God as possible in decision-making processes.”" }
  ],
  "coresponsabilite": [
    { num: "36", fr: "« L’aspiration à élargir les possibilités de participation et d’exercice de la coresponsabilité différenciée de tous les baptisés, hommes et femmes, est apparue. »",
      en: "“A desire emerged to expand possibilities for participation and for the exercise of differentiated co-responsibility by all the Baptised, men and women.”" },
    { num: "74", fr: "« Une répartition plus articulée des tâches et des responsabilités, un discernement plus courageux de ce qui appartient en propre au ministère ordonné et de ce qui peut et doit être délégué à d’autres, favoriseront son exercice d’une manière spirituellement plus saine et pastoralement plus dynamique. »",
      en: "“A wider distribution of tasks and responsibilities and a more courageous discernment of what properly belongs to the ordained ministry and what can and must be delegated to others will enable each ministry to be exercised in a more spiritually sound and pastorally dynamic manner.”" }
  ],
  "transparence": [
    { num: "80", fr: "« Les processus décisionnels nécessitent un discernement ecclésial, qui requiert une écoute dans un climat de confiance, celle-ci étant soutenue par la transparence et le rendre compte. La confiance doit être mutuelle. »",
      en: "“Decision-making processes need ecclesial discernment, which requires listening in a climate of trust that is supported by transparency and accountability. Trust must be mutual.”" },
    { num: "97", fr: "« Là où l’Église jouit de la confiance, les pratiques de transparence, de rendre-compte et d’évaluation contribuent à la consolider, et elles sont un élément encore plus critique là où la crédibilité de l’Église doit être reconstruite. »",
      en: "“Wherever the Church enjoys trust, the practice of transparency, accountability, and evaluation helps to strengthen its credibility. These practices are even more critical where the Church’s credibility needs rebuilding.”" }
  ],
  "formation": [
    { num: "143", fr: "« [Que] la formation soit intégrale, continue et partagée. Son but n’est pas seulement l’acquisition de connaissances théoriques, mais la promotion de capacités d’ouverture et de rencontre, de partage et de collaboration, de réflexion et de discernement en commun. »",
      en: "“The formation provided by the Christian community [should] be integral, ongoing and shared. Such formation must aim not only at acquiring theoretical knowledge but also at promoting the capacity for openness and encounter, sharing and collaboration, reflection and discernment in common.”" },
    { num: "100", fr: "« [L’évaluation] aide l’Église à tirer les leçons de l’expérience, à recalibrer les plans d’action et à rester attentive à la voix de l’Esprit Saint, en focalisant l’attention sur les résultats des décisions en rapport avec la mission. »",
      en: "“The evaluation also assists the local Church in learning from experience, adjusting plans of action, determining the outcomes of its decisions in relation to its mission.”" }
  ],
  "centralite-christ": [
    { num: "14", fr: "« L’Église existe pour témoigner au monde de l’événement décisif de l’histoire : la résurrection de Jésus. Le Ressuscité apporte la paix au monde et nous donne son Esprit. Le Christ vivant est source de la vraie liberté, fondement d’une espérance inébranlable, et révélation tant du véritable visage de Dieu que de la destinée ultime de l’être humain. »",
      en: "“The Church exists to bear witness in the world to the most decisive moment in history: the Resurrection of Jesus. The Risen Christ brings peace to the world and gives us the gift of His Spirit. The living Christ is the source of true freedom, the foundation for a hope that does not disappoint, the revelation of the true face of God and humanity’s ultimate destiny.”" }
  ],
  "activite-missionnaire": [
    { num: "32", fr: "« La synodalité n’est pas une fin en soi : elle est orientée vers la mission que le Christ a confiée à l’Église dans l’Esprit. (…) La synodalité et la mission sont intimement liées : la mission éclaire la synodalité et la synodalité pousse à la mission. »",
      en: "“Synodality is not an end in itself. Rather, it serves the mission that Christ entrusted to the Church in the Spirit. (...) Synodality and mission are intimately linked: mission illuminates synodality and synodality spurs to mission.”" },
    { num: "59", fr: "« Dans une Église synodale missionnaire, sous la conduite de leurs pasteurs, les communautés seront capables d’envoyer des personnes et de soutenir celles qu’elles auront envoyées. »",
      en: "“In a missionary synodal Church, under the leadership of their pastors, communities will be able to send people out in mission and support those they have sent.”" }
  ],
  "services-ministeres": [
    { num: "75", fr: "« Au fil de son histoire, l’Église a institué des ministères spécifiques, distincts des ministères ordonnés, pour répondre aux besoins de la communauté et de la mission. »",
      en: "“Throughout its history, the Church has adopted other ministries apart from those of the ordained in response to the needs of the community and the mission.”" },
    { num: "77", fr: "« Les fidèles laïcs, hommes et femmes, doivent se voir offrir davantage de possibilités de participation, en explorant également d’autres formes de service et de ministères en réponse aux besoins pastoraux de notre temps, dans un esprit de collaboration et de coresponsabilité différenciée. »",
      en: "“The lay faithful, both men and women, should be given greater opportunities for participation, also exploring new forms of service and ministry in response to the pastoral needs of our time in a spirit of collaboration and differentiated co-responsibility.”" }
  ],
  "contextes-culturels": [
    { num: "53", fr: "« L’appel au renouvellement des relations dans le Seigneur Jésus résonne dans la pluralité des contextes où ses disciples vivent et réalisent la mission de l’Église. Chacun de ces contextes présente des richesses particulières, liées au pluralisme des cultures, dont il est indispensable de tenir compte. »",
      en: "“The call to renewed relationships in the Lord Jesus flourishes in the different contexts in which His disciples live and carry out the Church’s mission. The plurality of cultures requires that the uniqueness of each cultural context is taken into account.”" },
    { num: "110", fr: "« L’Église ne peut être comprise sans être enracinée dans un territoire concret, dans un espace et un temps où se forme une expérience partagée de la rencontre avec Dieu Sauveur. »",
      en: "“The Church cannot be understood apart from its roots in a specific territory, in that space and time where a shared experience of encounter with the saving God occurs.”" }
  ],
  "conversion-transformations": [
    { num: "28", fr: "« En termes simples et synthétiques, on peut dire que la synodalité est un chemin de renouveau spirituel et de réforme structurelle pour rendre l’Église plus participative et missionnaire, c’est-à-dire pour la rendre plus capable de marcher avec chaque homme et chaque femme en rayonnant la lumière du Christ. »",
      en: "“In simple and concise terms, synodality is a path of spiritual renewal and structural reform that enables the Church to be more participatory and missionary so that it can walk with every man and woman, radiating the light of Christ.”" },
    { num: "44", fr: "« Le renouveau de la communauté chrétienne n’est possible qu’en reconnaissant la primauté de la grâce. Si la profondeur spirituelle personnelle et communautaire fait défaut, la synodalité se réduit à une logique d’organisation. »",
      en: "“The renewal of the Christian community is possible only by recognising the primacy of grace. If spiritual depth at both personal and communal levels is lacking, synodality is reduced to organisational expediency.”" }
  ]
};
