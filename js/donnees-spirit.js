/*
  ============================================================
  DONNÉES SPIRIT — le contenu de l'évaluation (FR / EN / NL)
  ============================================================

  CE FICHIER EST LE CŒUR ÉDITORIAL DE L'APPLICATION.
  C'est ici — et seulement ici — que vivent :
    - les trois pierres angulaires,
    - les 14 piliers et leurs libellés,
    - les sous-questions d'aide à la réflexion,
    - les modalités de réponse,
    - (champ « pistes » : non utilisé, voir plus bas).
  v91 : un seul questionnaire pour toutes les pratiques. Les 4 domaines
  (Annoncer la foi, Célébrer la foi, Gouverner, Servir) et leurs questions
  propres (ancien fichier questions-domaines.js) ont été retirés, sur
  décision de l'équipe (18 novembre 2026).

  TROIS LANGUES : chaque texte affiché existe en français, en anglais et
  en néerlandais, sous la forme
  { fr: "texte français", en: "texte anglais", nl: "texte néerlandais" }.
  Pour corriger une traduction, modifiez le texte entre guillemets de la
  bonne langue, sans toucher à la structure (accolades, crochets, virgules).

  Les identifiants techniques (id) ne sont JAMAIS traduits : ils servent au
  code et au stockage des évaluations. Ne pas les modifier.

  Source : SUPPORT_SPIRIT_14criteres (FR) et Criteria for SPIRIT May 2026 (EN),
  d'après le Document final du Synode 2024 ; version néerlandaise : document
  transmis par l'équipe.
  Questions de référence : anglais = « 14 criteria according to 3
  cornerstones — FINAL VERSION » (validé par le Delphi) ; français = colonne
  « question originelle » du tableau comparatif validé par l'équipe
  (v70, 1er octobre 2026), reprise mot pour mot (espace manquante avant
  un point d'interrogation ajoutée en v71).
  v91 : questions françaises remplacées par la version adaptée par l'équipe
  pour le terrain (18 novembre 2026) : ordre revu (piliers 1 et 9), deux
  questions retirées (pilier 4 : participation active à la liturgie ;
  pilier 13 : mobilité), plusieurs reformulées (notamment « La manière de
  mener la pratique… », piliers 6, 7, 10, 11, 12 et 14), titres des piliers
  5 et 8 modifiés. L'équipe considère que cette adaptation ne change rien à
  la validation Delphi.
  ⚠ ANGLAIS ET NÉERLANDAIS des passages modifiés : traductions de Claude,
  au plus près des formulations validées, PROVISOIRES — à revérifier à la
  fin de la phase 3 (néerlandais : Jens ou Rick). Les passages inchangés en
  français gardent leur traduction validée.
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
    nom: { fr: "Communion", en: "Communion", nl: "Gemeenschap" },
    formule: { fr: "Pour vivre la communion", en: "To live communion" },
    sousTitre: {
      fr: "Qualité des relations ecclésiales, racines spirituelles et ouverture aux autres",
      en: "Quality of ecclesial relationships, their spiritual roots, and openness to others", nl: "Kwaliteit van de kerkelijke relaties, hun spirituele wortels en openheid naar anderen"
    },
    // v80 : olive (avant : #1D9E75, le même vert que « Solidement établi »,
    // ce qui pouvait faire croire que le vert du diagnostic désignait Communion).
    couleur: "#626A00"
  },
  {
    id: "participation",
    nom: { fr: "Participation", en: "Participation", nl: "Participatie" },
    formule: { fr: "Pour réaliser la participation", en: "To achieve participation" },
    sousTitre: {
      fr: "Permettre à chacun de contribuer à la vie de l'Église",
      en: "Enabling everyone to contribute to the life of the Church", nl: "Iedereen in staat stellen bij te dragen aan het leven van de Kerk"
    },
    couleur: "#7B4EA8"
  },
  {
    id: "mission",
    nom: { fr: "Mission", en: "Mission", nl: "Zending" },
    formule: { fr: "Pour s'ouvrir à la mission", en: "To open itself to mission" },
    sousTitre: {
      fr: "Rayonnement missionnaire et conversion ecclésiale",
      en: "Missionary outreach and ecclesial conversion", nl: "Missionaire uitstraling en kerkelijke bekering"
    },
    couleur: "#C0392B"
  }
];


/* ===========================================================
   LES 14 PILIERS
   - id          : identifiant interne unique (NE PAS traduire ni modifier)
   - numero      : le numéro affiché (1 à 14)
   - pierre      : l'identifiant de la pierre angulaire de rattachement
   - titre       : libellé court { fr, en, nl }
   - sousQuestions : tableau de questions d'aide, chacune { fr, en, nl }
   - pistes      : pistes d'action, vides et NON UTILISÉES. v82 : l'équipe a
                   renoncé pour le moment aux pistes de progression ; le champ
                   est gardé pour pouvoir y revenir.
   =========================================================== */
const CRITERES = [

  /* ---------- PIERRE 1 — COMMUNION (piliers 1 à 5) ---------- */
  {
    id: "hospitalite",
    numero: 1,
    pierre: "communion",
    titre: { fr: "Hospitalité et égale dignité", en: "Hospitality and Equal Dignity", nl: "Gastvrijheid en gelijkwaardigheid" },
    // v91 : ordre revu par l'équipe (l'accueil passe en troisième).
    sousQuestions: [
      { fr: "La pratique respecte-t-elle l'égale dignité de chaque participant ?",
        en: "Does the practice respect the equal dignity of every participant?", nl: "Wordt de gelijkwaardigheid van elke deelnemer gerespecteerd in deze kerkelijke praktijk?" },
      { fr: "La pratique encourage-t-elle une écoute réciproque ?",
        en: "Does the practice encourage reciprocal listening?", nl: "Wordt er in de kerkelijke praktijk aangemoedigd om wederzijds naar elkaar te luisteren?" },
      { fr: "La pratique accueille-t-elle chacun, en particulier ceux qui se sentent marginalisés, différents ou hésitants à participer ?",
        en: "Does the practice you are evaluating welcome everyone, especially those who may feel marginalised, different, or hesitant to participate?", nl: "Is iedereen welkom bij de kerkelijke praktijk die je evalueert, met name mensen die zich misschien gemarginaliseerd of anders voelen of die zich terughoudend opstellen?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "diversite",
    numero: 2,
    pierre: "communion",
    titre: { fr: "Accueil de la différence et de la diversité", en: "Embracing difference and diversity", nl: "Omarmen van verschil en diversiteit" },
    sousQuestions: [
      { fr: "La pratique invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir ?",
        en: "Does the practice invite each person to open themselves to otherness in order to grow and mature?", nl: "Moedigt de kerkelijke praktijk iedereen aan om zich open te stellen voor anders-zijn, om zo te groeien en te komen tot volwassenheid?" },
      { fr: "Valorise-t-elle la diversité des expressions de la foi ?",
        en: "Does the practice value the diversity of expressions of faith?", nl: "Wordt in de kerkelijke praktijk waarde gehecht aan de diversiteit in geloofsuitingen?" },
      { fr: "Reflète-t-elle les liens avec l'Église locale ?",
        en: "Does the practice reflect bonds with the local Church?", nl: "Weerspiegelt deze kerkelijke praktijk de band met de lokale Kerk?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "parole-de-dieu",
    numero: 3,
    pierre: "communion",
    titre: { fr: "Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu",
             en: "Embedded in prayer and nourished by listening to the Word of God", nl: "Geworteld in gebed en gevoed door het luisteren naar het Woord van God" },
    sousQuestions: [
      { fr: "La pratique est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the practice rooted in attentive listening to the Word of God?", nl: "Is deze kerkelijke praktijk geworteld in het aandachtig luisteren naar het Woord van God?" },
      { fr: "Est-elle inspirée par la prière ?",
        en: "Is the practice inspired by prayer?", nl: "Wordt deze kerkelijke praktijk geïnspireerd door gebed?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement dans la pratique ?",
        en: "Is the Word of God the foundation for discernment in the practice?", nl: "Vormt het Woord van God de basis voor onderscheiding in deze kerkelijke praktijk?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "eucharistie",
    numero: 4,
    pierre: "communion",
    titre: { fr: "Source et sommet : l'Eucharistie", en: "Source and summit in the Eucharist", nl: "De Eucharistie als bron en hoogtepunt" },
    sousQuestions: [
      { fr: "La pratique est-elle nourrie par la célébration de l'Eucharistie ?",
        en: "Is the practice nourished by the celebration of the Eucharist?", nl: "Wordt deze kerkelijke praktijk gevoed door de viering van de eucharistie?" }
      // v91 : question « Favorise-t-elle une participation active à la
      // liturgie ? » retirée par l'équipe.
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "oecumenisme",
    numero: 5,
    pierre: "communion",
    // v91 : titre et deux premières questions modifiés par l'équipe
    // (« ouverte aux membres » au lieu de « favorise le dialogue »).
    // EN et NL : traductions provisoires de Claude.
    // Titre validé jusqu'à la v90 : « Dimension œcuménique et dialogue
    // interreligieux dans le monde » / « Considering the ecumenical dimension
    // and interfaith dialogue in the world ».
    titre: { fr: "Dimension œcuménique ou interreligieuse",
             en: "Ecumenical or interfaith dimension", nl: "Oecumenische of interreligieuze dimensie" },
    sousQuestions: [
      { fr: "La pratique est-elle ouverte aux membres d'autres Églises et communautés chrétiennes ?",
        en: "Is the practice open to members of other Churches and Christian communities?", nl: "Staat deze kerkelijke praktijk open voor leden van andere Kerken en christelijke gemeenschappen?" },
      { fr: "Est-elle ouverte aux membres d'autres traditions religieuses, ainsi qu'aux personnes sans religion ?",
        en: "Is the practice open to members of other religious traditions, and to those of no faith?", nl: "Staat deze kerkelijke praktijk open voor leden van andere religieuze tradities en voor mensen zonder geloof?" },
      { fr: "La pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does the practice resist the temptation of self-centredness?", nl: "Weerstaat deze kerkelijke praktijk de verleiding tot egocentrisme?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },

  /* ---------- PIERRE 2 — PARTICIPATION (piliers 6 à 9) ---------- */
  {
    id: "discernement-decision",
    numero: 6,
    pierre: "participation",
    titre: { fr: "Implication dans le discernement et la prise de décision",
             en: "Involvement in discernment and decision-making", nl: "Betrokkenheid in onderscheiden en besluitvorming" },
    // v91 : deux premières questions reformulées par l'équipe.
    sousQuestions: [
      { fr: "La manière de mener la pratique favorise-t-elle la participation à la prise de décision ?",
        en: "Does the way the practice is carried out foster participation in decision-making?", nl: "Moedigt de manier waarop deze kerkelijke praktijk wordt vormgegeven het deelnemen aan besluitvorming aan?" },
      { fr: "La pratique est-elle portée par une communauté plutôt que par une personne agissant seule ?",
        en: "Is the practice carried out by a community rather than by a single individual acting alone?", nl: "Wordt deze kerkelijke praktijk uitgevoerd door een gemeenschap in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les personnes qui participent se sentent-elles libres de parler ouvertement et d'exprimer un désaccord ?",
        en: "Do people who participate feel free to speak openly and express disagreement?", nl: "Voelen de deelnemers zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le processus de discernement ou de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?", nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "coresponsabilite",
    numero: 7,
    pierre: "participation",
    titre: { fr: "Coresponsabilité", en: "Co-responsibility", nl: "Medeverantwoordelijkheid" },
    // v91 : première question reformulée par l'équipe.
    sousQuestions: [
      { fr: "La manière de mener la pratique encourage-t-elle un partage plus large des tâches et des responsabilités au sein du Peuple de Dieu ?",
        en: "Does the way the practice is carried out encourage a wider sharing of the tasks and responsibilities of the People of God?", nl: "Bevordert de manier waarop deze kerkelijke praktijk wordt vormgegeven een bredere verdeling van de taken en verantwoordelijkheden binnen het Volk van God?" },
      { fr: "Reflète-t-elle la coresponsabilité différenciée des ministères ordonnés et non ordonnés au sein de la mission commune de tous les fidèles dans l'Église ?",
        en: "Does the practice reflect the differentiated co-responsibility of ordained and non-ordained ministries within the shared mission of all the faithful in the Church?", nl: "Weerspiegelt deze kerkelijke praktijk de gedifferentieerde medeverantwoordelijkheid van gewijde en niet-gewijde ambten binnen de gezamenlijke zending van alle gelovigen in de Kerk?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "transparence",
    numero: 8,
    pierre: "participation",
    // v91 : « reddition de comptes » devient « rendre compte » (équipe).
    // EN et NL inchangés (accountability / verantwoording).
    titre: { fr: "Transparence, rendre compte et évaluation",
             en: "Transparency, accountability, and evaluation", nl: "Transparantie, verantwoording en evaluatie" },
    sousQuestions: [
      { fr: "Les responsabilités au sein de la pratique sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within the practice clearly defined and understood?", nl: "Zijn de verantwoordelijkheden binnen de kerkelijke praktijk duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée ?",
        en: "Is the management of human and financial resources in the practice documented?", nl: "Wordt het beheer van de mensen en financiële middelen binnen de kerkelijke praktijk gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in the practice?", nl: "Wordt essentiële informatie binnen de kerkelijke praktijk openlijk en tijdig gedeeld?" },
      { fr: "Une évaluation régulière de la pratique est-elle prévue ?",
        en: "Is there a regular evaluation of the practice?", nl: "Wordt de kerkelijke praktijk regelmatig geëvalueerd?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "formation",
    numero: 9,
    pierre: "participation",
    titre: { fr: "Ouverture à la formation et à l'apprentissage par l'expérience",
             en: "Openness for formation and learning from experience", nl: "Openheid voor vorming en leren van ervaring" },
    // v91 : ordre revu par l'équipe (les moments de réflexion passent en premier).
    sousQuestions: [
      { fr: "La pratique comprend-elle des moments de réflexion et d'évaluation continue sur les expériences vécues ?",
        en: "Does the practice include moments of reflection and continuous evaluation on the lived experiences?", nl: "Zijn er binnen de kerkelijke praktijk momenten van reflectie en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "Intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?", nl: "Maakt (bij)leren deel uit van de kerkelijke praktijk?" },
      { fr: "Favorise-t-elle l'apprentissage à partir des échecs et des résistances ?",
        en: "Does the practice foster learning from failures and resistance?", nl: "Bevordert de kerkelijke praktijk het leren van mislukkingen en weerstand?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },

  /* ---------- PIERRE 3 — MISSION (piliers 10 à 14) ---------- */
  {
    id: "centralite-christ",
    numero: 10,
    pierre: "mission",
    titre: { fr: "Centralité de Jésus-Christ", en: "Centrality of Jesus Christ", nl: "Centraliteit van Jezus Christus" },
    // v91 : première et troisième questions reformulées par l'équipe (la
    // troisième rejoint désormais la formulation anglaise validée).
    sousQuestions: [
      { fr: "La manière de mener la pratique témoigne-t-elle du Christ vivant ?",
        en: "Does the way the practice is carried out bear witness of the living Christ?", nl: "Legt de manier waarop de kerkelijke praktijk wordt vormgegeven getuigenis af van de levende Christus?" },
      { fr: "Vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the practice aim to deepen each person's relationship with Christ?", nl: "Is het doel van de kerkelijke praktijk om de relatie van ieder individu met Christus te verdiepen?" },
      { fr: "Promeut-elle un mode de vie chrétien qui intègre la foi et la vie quotidienne ?",
        en: "Does the practice promote a Christian way of life that integrates faith and daily life?", nl: "Bevordert de kerkelijke praktijk een christelijke levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "activite-missionnaire",
    numero: 11,
    pierre: "mission",
    titre: { fr: "Orientée vers l'activité missionnaire de l'Église",
             en: "Aimed at the missionary activity of the Church", nl: "Gericht op de missionaire activiteit van de Kerk" },
    // v91 : première question reformulée par l'équipe.
    sousQuestions: [
      { fr: "La manière de mener la pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the way the practice is carried out contribute to a new impulse to mission?", nl: "Draagt de manier waarop deze kerkelijke praktijk wordt vormgegeven bij aan een nieuwe impuls voor zending/missie?" },
      { fr: "S'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?", nl: "Is deze kerkelijke praktijk verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "services-ministeres",
    numero: 12,
    pierre: "mission",
    titre: { fr: "Collaboration dans la mission par la reconnaissance des services et des ministères",
             en: "Collaboration in mission through a recognition of services and ministries", nl: "Samenwerking in de missie van de Kerk door de erkenning van diensttaken en ambten" },
    // v91 : deuxième et troisième questions reformulées par l'équipe (la
    // troisième rejoint désormais la formulation anglaise validée).
    sousQuestions: [
      { fr: "Les charismes de chacun sont-ils reconnus au service des besoins de la communauté et de la mission ?",
        en: "Are the charisms of each individual recognised for the needs of the community and the mission?", nl: "Worden de charisma’s van elk individu erkend in het licht van de behoeften van de gemeenschap en de zending?" },
      { fr: "La manière de mener la pratique soutient-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
        en: "Does the way the practice is carried out support a variety of services and ministries in response to the pastoral needs?", nl: "Maakt de manier waarop de kerkelijke praktijk wordt vormgegeven verschillende diensttaken en ambten mogelijk om tegemoet te komen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles l'occasion d'assumer des rôles de responsabilité dans la pratique ?",
        en: "Do women have opportunities to take on roles of responsibility in the practice?", nl: "Hebben vrouwen mogelijkheden om verantwoordelijke functies binnen de kerkelijke praktijk te bekleden?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "contextes-culturels",
    numero: 13,
    pierre: "mission",
    titre: { fr: "Prise en compte des contextes culturels et sociétaux",
             en: "Considering cultural and societal contexts", nl: "Rekening houden met culturele en maatschappelijke contexten" },
    // v91 : « digitales » devient « numériques » ; question sur la mobilité
    // culturelle et géographique retirée ; « engage un dialogue » devient
    // « engage à un dialogue » (texte de l'équipe, gardé tel quel).
    sousQuestions: [
      { fr: "La pratique manifeste-t-elle une attention aux réalités historiques, contemporaines, sociales, culturelles et numériques ?",
        en: "Does the practice pay attention to historical, contemporary, social, cultural, and digital realities?", nl: "Wordt er in de kerkelijke praktijk rekening gehouden met historische, hedendaagse, sociale, culturele en digitale omstandigheden?" },
      { fr: "Engage-t-elle à un dialogue avec d'autres acteurs de la société, de la culture, de la politique, etc. ?",
        en: "Does the practice engage in dialogue with other actors in society, culture, politics etc.?", nl: "Gaat de kerkelijke praktijk de dialoog aan met andere actoren uit de samenleving, de cultuur, de politiek enz.?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  },
  {
    id: "conversion-transformations",
    numero: 14,
    pierre: "mission",
    titre: { fr: "Conversion synodale par des transformations concrètes",
             en: "Synodal conversion through concrete transformations", nl: "Synodale bekering door concrete transformaties" },
    // v91 : questions reformulées par l'équipe (« des participants », comme
    // l'anglais validé ; « La manière de mener la pratique… »).
    sousQuestions: [
      { fr: "La manière de mener la pratique conduit-elle à une conversion personnelle des participants ?",
        en: "Does the way the practice is carried out lead to a personal conversion of the participants?", nl: "Leidt de manier waarop deze kerkelijke praktijk wordt vormgegeven tot een persoonlijke bekering van de deelnemers?" },
      { fr: "Rend-elle possible une transformation communautaire ?",
        en: "Does the practice enable communal transformation?", nl: "Zorgt deze kerkelijke praktijk voor een gemeenschappelijke transformatie?" },
      // v88 : « indirectement » retiré du français (décision du 12 novembre 2026 :
      // pour ce questionnaire de référence, la formulation anglaise validée fait foi).
      { fr: "Contribue-t-elle à un renouveau spirituel et à une réforme structurelle de l'Église ?",
        en: "Does the practice contribute to a spiritual renewal and structural reform of the Church?", nl: "Draagt deze kerkelijke praktijk bij aan een spirituele vernieuwing en structurele hervorming van de Kerk?" }
    ],
    pistes: { fond: { fr: "", en: "" }, accrocheADevelopper: { fr: "", en: "" }, accrocheNonPresent: { fr: "", en: "" }, sourceDF: "" }
  }
];


/* ===========================================================
   LES MODALITÉS DE RÉPONSE (4 niveaux + « Non applicable », v80)
   id technique inchangé ; seul le libellé est traduit.
   v80 : nouveau niveau « À consolider », entre « Solidement établi » et
   « En chantier » (décision de l'équipe, 14 octobre 2026). Les évaluations
   enregistrées avant la v80 restent valables : elles n'utilisent
   simplement pas ce niveau.
   ⚠ Traductions EN/NL de « À consolider » : propositions à valider.
   =========================================================== */
const MODALITES = [
  { id: "present",        libelle: { fr: "Solidement établi", en: "Well established", nl: "Stevig verankerd" }, couleur: "#1D9E75" },
  { id: "a-consolider",   libelle: { fr: "À consolider", en: "To be consolidated", nl: "Te consolideren" }, couleur: "#3E6C9B" },
  { id: "a-developper",   libelle: { fr: "En chantier", en: "Under development", nl: "In opbouw" }, couleur: "#EF9F27" },
  { id: "non-present",    libelle: { fr: "À bâtir",         en: "To be built", nl: "Nog op te bouwen" },    couleur: "#444441" },
  { id: "non-applicable", libelle: { fr: "Non applicable",  en: "Not applicable", nl: "Niet van toepassing" }, couleur: null }
];

// Couleur d'une réponse. Les couleurs ne sont définies qu'ici (dans
// MODALITES) : les jauges, les mini-jauges de l'historique et le PDF les
// lisent par cette fonction (constat F7 de l'audit v72).
function couleurModalite(id) {
  const modalite = MODALITES.find((m) => m.id === id);
  return modalite ? modalite.couleur : null;
}

// Les réponses qui comptent dans le diagnostic (tout sauf « Non applicable »),
// de la plus construite à la moins construite. C'est l'ordre des segments
// dans les anneaux et les mini-jauges.
const REPONSES_APPLICABLES = ["present", "a-consolider", "a-developper", "non-present"];

// Un décompte vide : { "present": 0, "a-consolider": 0, …, "non-applicable": 0 }.
function decompteVide() {
  const vide = {};
  MODALITES.forEach((m) => { vide[m.id] = 0; });
  return vide;
}


/* ===========================================================
   LE TYPE DE PRATIQUE
   v91 : plus de choix de domaine. Toute évaluation utilise le même
   questionnaire (celui des CRITERES ci-dessus) ; une nouvelle évaluation
   reçoit le type « autre », qui est l'ancien « Autre pratique ».
   Les anciens identifiants (« annoncer », « celebrer », « gouverner »,
   « servir », « autre », et ceux d'avant la v65) restent lisibles : les
   évaluations et les codes de comparaison déjà enregistrés s'ouvrent
   normalement, avec les questions actuelles. Le type n'est plus affiché
   nulle part.
   =========================================================== */
const TYPE_OBJET_UNIQUE = "autre";

/* ============================================================
   JUSTIFICATIONS DES PILIERS (Document final du Synode, 2024)
   Affichées dans le PDF « Pour aller plus loin », regroupées par
   pierre angulaire. Clé = identifiant du pilier (voir CRITERES).
   Chaque citation : { num, fr, en, nl }. La référence s'affiche
   "DF <num>" en français, "FD <num>" en anglais et "SD <num>" en
   néerlandais.
   ⚠ Citations issues du Document final du Synode sur la
   synodalité — ne pas modifier le texte sans validation.
   ============================================================ */
const JUSTIFICATIONS = {
  "hospitalite": [
    { num: "115", fr: "« La relation entre le lieu et l’espace suggère également une réflexion sur l’Église en tant que “ maison ”. Lorsqu’elle n’est pas comprise comme un espace fermé et inaccessible, à défendre à tout prix, l’image de la maison évoque des possibilités d’accueil, d’hospitalité et d’inclusion. »",
      en: "“The relation between place and space leads us also to reflect on the Church as ‘home’. When it is not thought of as a closed space, inaccessible, to be defended at all costs, the image of home evokes the possibility of welcome, hospitality, and inclusion.”", nl: "“De manier waarop plaats en ruimte zich tot elkaar verhouden nodigt ons ook uit om te reflecteren over de Kerk als ‘huis’. Als het beeld van het huis niet wordt gezien als een gesloten en ontoegankelijke ruimte die kost wat kost moet verdedigd worden, dan roept het heel wat mogelijkheden op voor opvang, gastvrijheid en inclusie.”" },
    { num: "35", fr: "« Nous apprenons que nous avons la même dignité, que nous sommes créés pour la réciprocité, que nous avons besoin d’être écoutés et que nous sommes capables d’écouter. »",
      en: "“We learn that we are equal in dignity and created for reciprocity, that we need to be listened to, and that we are able to listen.”", nl: "“In het gezin ontdekken we dat we dezelfde waardigheid hebben, dat we geschapen zijn voor wederkerigheid, dat we behoefte hebben om gehoord te worden en dat we in staat zijn om te luisteren, samen te onderscheiden en te beslissen.”" }
  ],
  "diversite": [
    { num: "110", fr: "« La dimension locale de l’Église préserve la riche diversité des expressions de foi enracinées dans des contextes culturels et historiques spécifiques, et la communion des Églises manifeste la communion des fidèles au sein de l’Église unique. La conversion synodale invite donc chacun à élargir l’espace de son cœur, premier « lieu » où résonnent toutes nos relations, enracinées dans la relation personnelle de chacun avec le Christ Jésus et son Église. »",
      en: "“This local dimension to our Church preserves the rich diversity of expressions of faith that are grounded in a specific cultural and historical milieu. The communion of local Churches is the expression of the unity of the faithful within the one Church. Thus, synodal conversion calls each person to enlarge the space of their heart, the heart being the first place where all our relationships resonate, grounded in each believer’s personal relationship with Jesus Christ and His Church.”", nl: "“De Kerk kan niet worden begrepen zonder haar verworteling in een concreet gebied, in die ruimte en tijd waar een gedeelde ervaring van ontmoeting met de reddende God vorm krijgt. Deze lokale dimensie van de Kerk waarborgt de rijke diversiteit van geloofsuitingen die geworteld zijn in specifieke culturele en historische contexten. De gemeenschap van Kerken manifesteert de gemeenschap van gelovigen binnen de ene Kerk. Synodale bekering nodigt zo iedereen uit om meer ruimte te maken in eigen hart, de eerste ‘plaats’ waar al onze relaties weerklinken. Deze relaties zijn geworteld in ieders persoonlijke relatie met Christus Jezus en zijn Kerk.”" },
    { num: "34", fr: "« Les différences de vocation, d’âge, de sexe, de profession, de condition et d’appartenance sociale, présentes dans toute communauté chrétienne, offrent à chacun la rencontre avec l’altérité indispensable à la maturation personnelle. »",
      en: "“Differences that are found in every Christian community with respect to age, vocation, sex, profession and social belonging provide an opportunity for an encounter with otherness that is indispensable to personal growth and maturity.”", nl: "“In elke christelijke gemeenschap zijn er verschillen in roeping, leeftijd, geslacht, beroep, maatschappelijke positie en sociale achtergrond. Deze verschillen maken voor ieder een ontmoeting met het anders-zijn mogelijk, die onmisbaar is voor de persoonlijke ontwikkeling.”" }
  ],
  "parole-de-dieu": [
    { num: "27", fr: "« Les assemblées synodales sont des événements qui célèbrent l’union du Christ avec son Église par l’action de l’Esprit. C’est Lui qui assure l’unité du corps ecclésial du Christ dans l’assemblée eucharistique comme dans l’assemblée synodale. La liturgie est une écoute de la Parole de Dieu et une réponse à son initiative d’alliance. L’assemblée synodale, elle aussi, est une écoute de cette même Parole, qui résonne aussi bien dans les signes des temps que dans le cœur des fidèles, et une réponse de l’assemblée qui discerne la volonté de Dieu pour la mettre en pratique. »",
      en: "“Synodal assemblies are events that celebrate the union of Christ with His Church through the action of the Spirit. It is the Spirit who ensures the unity of the ecclesial body of Christ in the Eucharistic assembly as well as in the synodal assembly. The liturgy is a listening to the Word of God and a response to His covenantal initiative. Similarly, the synodal assembly is a listening to this same Word, which resounds as much in the signs of the times as in the hearts of the faithful, and also a response of the assembly that is discerning God’s will in order to put it into practice.”", nl: "“Synodale bijeenkomsten zijn momenten waarop de eenheid van Christus met zijn Kerk gevierd wordt door de werking van de Geest. Hij is het die de eenheid van Christus’ kerkelijke Lichaam waarborgt, zowel in de eucharistische als in de synodale assemblee. De liturgie is een luisteren naar Gods Woord en een antwoord op zijn verbondsinitiatief. Ook de synodale assemblee is een luisteren naar hetzelfde Woord, dat zowel in de tekenen des tijds als in het hart van de gelovigen weerklinkt. De synodale assemblee is ook een antwoord op Gods Woord door het onderscheiden van zijn wil en het in praktijk brengen ervan.”" },
    { num: "83", fr: "« L’écoute de la Parole de Dieu est le point de départ et le critère de tout discernement ecclésial. Les Écritures Saintes, en effet, attestent que Dieu a parlé à son peuple, jusqu’à nous donner en Jésus la plénitude de toute la Révélation (cf. DV 2), et indiquent les lieux où nous pouvons entendre sa voix. »",
      en: "“Listening to the Word of God is the starting point and criterion for all ecclesial discernment. The Scriptures testify that God has spoken to His People to the point of giving us in Jesus the fullness of all Revelation (cf. DV 2). They indicate the places where we can hear His voice.”", nl: "“Luisteren naar Gods Woord is zowel het vertrekpunt als het criterium van elke kerkelijke onderscheiding. De Heilige Schrift getuigt dat God tot zijn Volk heeft gesproken, tot Hij ons in Jezus de volheid van de hele openbaring schonk (cf. DV 2). De Schriften wijzen ons de plaatsen aan waar we Gods stem kunnen horen.”" }
  ],
  "eucharistie": [
    { num: "26", fr: "« La célébration de l’Eucharistie, surtout le dimanche, est la modalité première et fondamentale selon laquelle le peuple saint de Dieu se réunit et se rencontre. (…) l’Église, Corps du Christ, apprend de l’Eucharistie à articuler unité et pluralité : unité de l’Église et multiplicité des assemblées eucharistiques ; unité du mystère sacramentel et variété des traditions liturgiques ; unité de la célébration et diversité des vocations, des charismes et des ministères. »",
      en: "“The celebration of the Eucharist, especially on Sundays, is the first and fundamental way the holy People of God gather and meet. (…) the Church, the Body of Christ, learns from the Eucharist how to combine unity and plurality: the unity of the Church and the multiplicity of Eucharistic assemblies; unity of the sacramental mystery and variety of liturgical traditions; unity of celebration and plurality of vocations, charisms and ministries.”", nl: "“De viering van de eucharistie, vooral op zondag, is de eerste en fundamentele manier waarop het heilige volk van God samenkomt en elkaar ontmoet. (…) Daarom leert de Kerk, het Lichaam van Christus, door de eucharistie eenheid en veelheid te verenigen: eenheid van de Kerk en veelheid van eucharistische assemblees; eenheid van het sacramentele mysterie en verscheidenheid van liturgische tradities; eenheid van de viering en diversiteit van roepingen, charisma’s en diensttaken.”" }
  ],
  "oecumenisme": [
    { num: "138", fr: "« Le dialogue œcuménique est fondamental pour développer une compréhension de la synodalité et de l’unité de l’Église. Il nous pousse à imaginer des pratiques synodales œcuméniques, y compris des formes de consultation et de discernement sur des questions urgentes d’intérêt commun, telles que la célébration d’un synode œcuménique sur l’évangélisation. »",
      en: "“Ecumenical dialogue is fundamental to developing an understanding of synodality and the unity of the Church. It urges us to develop ecumenical synodal practices, including forms of consultation and discernment on questions of shared and urgent interest, as the celebration of an ecumenical Synod on evangelisation could be.”", nl: "“De oecumenische dialoog is essentieel om de synodaliteit en eenheid van de Kerk beter te begrijpen. Deze dialoog spoort ons aan om na te denken over oecumenische synodale praktijken: vormen van raadpleging en onderscheiding over gemeenschappelijke en urgente kwesties zoals de viering van een oecumenische synode over evangelisatie.”" },
    { num: "42", fr: "« La pluralité des religions et des cultures, la multiplicité des traditions spirituelles et théologiques, la variété des dons de l’Esprit et des tâches dans la communauté, ainsi que la diversité des âges, des sexes et des appartenances sociales au sein de l’Église, constituent une invitation pour chacun à reconnaître et à assumer sa propre partialité, en renonçant à la prétention d’être au centre et en s’ouvrant à l’accueil d’autres perspectives. »",
      en: "“The plurality of religions and cultures, the diversity of spiritual and theological traditions, the variety of the gifts of the Spirit and of the tasks of the community, as well as the diversity of age, sex and social affiliation within the Church, are an invitation to each person to recognise their particular situatedness, resist the temptation of being at the centre, and open oneself to the acceptance of other perspectives.”", nl: "“De veelheid aan religies en culturen in de wereld, de rijkdom aan spirituele en theologische tradities, de diversiteit aan gaven van de Geest en taken in de gemeenschap, evenals de verschillen in leeftijd, geslacht en sociale achtergrond binnen de Kerk, vormen voor iedereen een uitnodiging om de eigen beperktheid te erkennen en te aanvaarden. Het is een oproep om af te zien van de neiging zichzelf centraal te stellen en om open te staan voor andere perspectieven.”" }
  ],
  "discernement-decision": [
    { num: "87", fr: "« Dans l’Église synodale, « la communauté tout entière, dans la libre et riche diversité de ses membres, est convoquée pour prier, écouter, analyser, dialoguer, discerner et conseiller afin de prendre des décisions » (CTI, n. 68) pour la mission. Favoriser la participation la plus large possible de l’ensemble du Peuple de Dieu aux processus décisionnels est le moyen le plus efficace de promouvoir une Église synodale. S’il est vrai, en effet, que la synodalité définit le modus vivendi et operandi qui qualifie l’Église, elle indique en même temps une pratique essentielle à l’accomplissement de sa mission : discerner, atteindre un consensus, décider à travers le recours aux différentes structures et institutions de la synodalité. »",
      en: "“In the synodal Church ‘the whole community, in the free and rich diversity of its members, is called together to pray, listen, analyse, dialogue, discern and offer advice on taking pastoral decisions’ (ITC 68) for mission. The way to promote a synodal Church is to foster as great a participation of all the People of God as possible in decision-making processes. If it is indeed true that the Church’s very way of living and operating is synodal, then this practice is essential to the Church’s mission, requiring discernment, the reaching of consensus, and decision-making through the use of the various structures and institutions of synodality.”", nl: "“In de synodale Kerk ‘is de hele gemeenschap, in de vrije en rijke verscheidenheid van haar leden, geroepen om te bidden, te luisteren, te analyseren, te dialogeren, te onderscheiden en te adviseren, zodat pastorale beslissingen meer in overeenstemming met Gods wil worden genomen’ (CTI, nr. 68), in dienst van de zending. Een zo breed mogelijke deelname van het hele Volk van God aan besluitvormingsprocessen is de meest effectieve manier om een synodale Kerk te versterken. Synodaliteit [definieert] de modus vivendi et operandi van de Kerk. Daarom is de praktijk van synodaliteit onmisbaar voor haar zending: onderscheiden, consensus bereiken en beslissingen nemen door de werking van de verschillende synodale structuren en instellingen.”" }
  ],
  "coresponsabilite": [
    { num: "36", fr: "« De même, l’aspiration à élargir les possibilités de participation et d’exercice de la coresponsabilité différenciée de tous les baptisés, hommes et femmes, est apparue. À cet égard, cependant, une tristesse a été exprimée. Elle provient du manque de participation de nombreux membres du peuple de Dieu à ce chemin de renouveau ecclésial. »",
      en: "“Equally, a desire emerged to expand possibilities for participation and for the exercise of differentiated co-responsibility by all the Baptised, men and women. In this regard, however, the lack of participation by so many members of the People of God in this journey of ecclesial renewal was a source of sadness.”", nl: "“Tegelijk is de wens naar voren gekomen om de mogelijkheden tot participatie en tot uitoefening van gedifferentieerde medeverantwoordelijkheid van alle gedoopten, mannen en vrouwen, te verruimen. Toch was er ook droefheid over het gebrek aan participatie van vele leden van het volk van God aan deze weg van kerkelijke vernieuwing.”" },
    { num: "74", fr: "« L’expérience du Synode peut aider les évêques, les prêtres et les diacres à redécouvrir la coresponsabilité dans l’exercice de leur ministère, qui requiert également la collaboration avec d’autres membres du peuple de Dieu. Une répartition plus articulée des tâches et des responsabilités, un discernement plus courageux de ce qui appartient en propre au ministère ordonné et de ce qui peut et doit être délégué à d’autres, favoriseront son exercice d’une manière spirituellement plus saine et pastoralement plus dynamique. »",
      en: "“The experience of the Synod can be a response to this reality, helping Bishops, Priests and Deacons to rediscover co-responsibility in the exercise of ministry, which includes collaboration with other members of the People of God. A wider distribution of tasks and responsibilities and a more courageous discernment of what properly belongs to the ordained ministry and what can and must be delegated to others will enable each ministry to be exercised in a more spiritually sound and pastorally dynamic manner.”", nl: "“De synodale ervaring kan bisschoppen, priesters en diakens helpen om de medeverantwoordelijkheid in de uitoefening van het ambt opnieuw te ontdekken, wat ook samenwerking met de andere leden van het volk van God vereist. Een betere verdeling van taken en verantwoordelijkheden is noodzakelijk, evenals een moedige onderscheiding van wat eigen is aan het gewijde ambt en wat aan anderen kan en moet worden gedelegeerd. Dit zal de uitoefening van het ambt in elk van zijn graden spiritueel gezonder en pastoraal dynamischer maken.”" }
  ],
  "transparence": [
    { num: "80", fr: "« Les processus décisionnels nécessitent un discernement ecclésial, qui requiert une écoute dans un climat de confiance, celle-ci étant soutenue par la transparence et le rendre compte. La confiance doit être mutuelle : ceux qui prennent les décisions doivent pouvoir faire confiance au peuple de Dieu et l’écouter. »",
      en: "“Decision-making processes need ecclesial discernment, which requires listening in a climate of trust that is supported by transparency and accountability. Trust must be mutual: decision-makers need to be able to trust and listen to the People of God. The latter, in turn, needs to be able to trust those in authority.”", nl: "“Besluitvormingsprocessen vereisen kerkelijke onderscheiding. Dit vereist een luisteren in een sfeer van vertrouwen, gedragen door transparantie en verantwoording. Vertrouwen moet wederzijds zijn. Wie beslissingen nemen moeten vertrouwen schenken aan het Volk van God en ernaar luisteren. Het Volk van God moet op zijn beurt vertrouwen kunnen geven aan de gezagsdragers.”" },
    { num: "97", fr: "« Là où l’Église jouit de la confiance, les pratiques de transparence, de rendre-compte et d’évaluation contribuent à la consolider, et elles sont un élément encore plus critique là où la crédibilité de l’Église doit être reconstruite. »",
      en: "“Wherever the Church enjoys trust, the practice of transparency, accountability, and evaluation helps to strengthen its credibility. These practices are even more critical where the Church’s credibility needs rebuilding.”", nl: "“Door transparantie, verantwoording en evaluatie te bevorderen, versterkt de Kerk haar betrouwbaarheid waar die reeds bestaat. Deze elementen zijn cruciaal waar de geloofwaardigheid van de Kerk hersteld dient te worden, vooral in het kader van de bescherming van minderjarigen en kwetsbare volwassenen (safeguarding).”" }
  ],
  "formation": [
    { num: "143", fr: "« Au long du processus synodal, de toutes parts, une des demandes qui a émergé avec le plus de force est que la formation soit intégrale, continue et partagée. Son but n’est pas seulement l’acquisition de connaissances théoriques, mais la promotion de capacités d’ouverture et de rencontre, de partage et de collaboration, de réflexion et de discernement en commun, de lecture théologique des expériences concrètes. Elle doit donc interpeller toutes les dimensions de la personne (intellectuelle, affective, relationnelle et spirituelle) et comprendre des expériences concrètes accompagnées correctement. »",
      en: "“One of the requests that emerged most strongly and from all contexts during the synodal process is that the formation provided by the Christian community be integral, ongoing and shared. Such formation must aim not only at acquiring theoretical knowledge but also at promoting the capacity for openness and encounter, sharing and collaboration, reflection and discernment in common. Formation must consequently engage all the dimensions of the human person (intellectual, affective, relational and spiritual) and include concrete experiences that are appropriately accompanied.”", nl: "“Een van de meest gehoorde wensen in alle fasen van het synodale proces, is de vraag naar een integrale, permanente en gemeenschappelijke vorming. Deze vorming beoogt niet enkel het verwerven van theoretische kennis, maar ook het ontwikkelen van vaardigheden tot openheid en ontmoeting, delen en samenwerking, gemeenschappelijke reflectie en onderscheiding, en theologische duiding van concrete ervaringen. Daarom dient de vorming alle dimensies van de persoon aan te spreken (intellectueel, affectief, relationeel en spiritueel) en stil te staan bij concrete ervaringen die op passende wijze worden begeleid.”" },
    { num: "100", fr: "« [L’évaluation] aide l’Église à tirer les leçons de l’expérience, à recalibrer les plans d’action et à rester attentive à la voix de l’Esprit Saint, en focalisant l’attention sur les résultats des décisions en rapport avec la mission. »",
      en: "“The evaluation also assists the local Church in learning from experience, adjusting plans of action, determining the outcomes of its decisions in relation to its mission, and remaining attentive to the voice of the Holy Spirit.”", nl: "“[Evaluatie] stelt de Kerk in staat om te leren van ervaringen, haar actieplannen bij te sturen en aandachtig te blijven voor de stem van de Heilige Geest, met bijzondere aandacht voor de vruchten van de genomen beslissingen met het oog op de zending van de Kerk.”" }
  ],
  "centralite-christ": [
    { num: "14", fr: "« L’Église existe pour témoigner au monde de l’événement décisif de l’histoire : la résurrection de Jésus. Le Ressuscité apporte la paix au monde et nous donne son Esprit. Le Christ vivant est source de la vraie liberté, fondement d’une espérance inébranlable, et révélation tant du véritable visage de Dieu que de la destinée ultime de l’être humain. »",
      en: "“The Church exists to bear witness in the world to the most decisive moment in history: the Resurrection of Jesus. The Risen Christ brings peace to the world and gives us the gift of His Spirit. The living Christ is the source of true freedom, the foundation for a hope that does not disappoint, the revelation of the true face of God and humanity’s ultimate destiny.”", nl: "“De Kerk bestaat om aan de wereld te getuigen van de beslissende gebeurtenis in de geschiedenis: de verrijzenis van Jezus. De Verrezene brengt vrede in de wereld en schenkt ons de gave van zijn Geest. De levende Christus is de bron van ware vrijheid, het fundament van de hoop die niet teleurstelt. Hij is de openbaring van het ware gezicht van God en van de ultieme bestemming van de mens.”" }
  ],
  "activite-missionnaire": [
    { num: "32", fr: "« La synodalité n’est pas une fin en soi : elle est orientée vers la mission que le Christ a confiée à l’Église dans l’Esprit. (…) La synodalité et la mission sont intimement liées : la mission éclaire la synodalité et la synodalité pousse à la mission. »",
      en: "“Synodality is not an end in itself. Rather, it serves the mission that Christ entrusted to the Church in the Spirit. (...) Synodality and mission are intimately linked: mission illuminates synodality and synodality spurs to mission.”", nl: "“Synodaliteit is geen doel op zich, maar staat in dienst van de zending die Christus aan de Kerk heeft toevertrouwd in de Geest. (...) Synodaliteit en zending zijn onlosmakelijk met elkaar verbonden: de zending verlicht de synodaliteit, en synodaliteit geeft de zending nieuwe impulsen.”" },
    { num: "59", fr: "« Dans une Église synodale missionnaire, sous la conduite de leurs pasteurs, les communautés seront capables d’envoyer des personnes et de soutenir celles qu’elles auront envoyées. »",
      en: "“In a missionary synodal Church, under the leadership of their pastors, communities will be able to send people out in mission and support those they have sent.”", nl: "“In een synodaal-missionaire Kerk zullen gemeenschappen, onder leiding van hun herders, mensen kunnen uitzenden en in hun zending blijven ondersteunen. Gemeenschappen zullen zich zo in de eerste plaats richten op dienst aan de zending die gelovigen vormgeven in de samenleving, in hun gezinsleven en in hun werk.”" }
  ],
  "services-ministeres": [
    { num: "75", fr: "« Au fil de son histoire, l’Église a institué des ministères spécifiques, distincts des ministères ordonnés, pour répondre aux besoins de la communauté et de la mission. »",
      en: "“Throughout its history, the Church has adopted other ministries apart from those of the ordained in response to the needs of the community and the mission.”", nl: "“Om tegemoet te komen aan de noden van de gemeenschap en de zending heeft de Kerk doorheen haar geschiedenis een aantal diensttaken ingesteld, die zich onderscheiden van de gewijde ambten.”" },
    { num: "77", fr: "« Les fidèles laïcs, hommes et femmes, doivent se voir offrir davantage de possibilités de participation, en explorant également d’autres formes de service et de ministères en réponse aux besoins pastoraux de notre temps, dans un esprit de collaboration et de coresponsabilité différenciée. En particulier, certains besoins concrets ont émergé du processus synodal. »",
      en: "“The lay faithful, both men and women, should be given greater opportunities for participation, also exploring new forms of service and ministry in response to the pastoral needs of our time in a spirit of collaboration and differentiated co-responsibility. In particular, some concrete needs have emerged from the synodal process.”", nl: "“Lekengelovigen, zowel mannen als vrouwen, moeten meer kansen krijgen om deel te nemen aan het leven van de Kerk, door ook nieuwe vormen van dienstbaarheid en diensttaken te ontwikkelen. Dit moet gebeuren als antwoord op de pastorale noden van onze tijd, in een geest van samenwerking en gedifferentieerde medeverantwoordelijkheid.”" }
  ],
  "contextes-culturels": [
    { num: "53", fr: "« L’appel au renouvellement des relations dans le Seigneur Jésus résonne dans la pluralité des contextes où ses disciples vivent et réalisent la mission de l’Église. Chacun de ces contextes présente des richesses particulières, liées au pluralisme des cultures, dont il est indispensable de tenir compte. »",
      en: "“The call to renewed relationships in the Lord Jesus flourishes in the different contexts in which His disciples live and carry out the Church’s mission. The plurality of cultures requires that the uniqueness of each cultural context is taken into account.”", nl: "“De oproep tot vernieuwing van relaties in de Heer Jezus weerklinkt in de veelheid van contexten, waarin zijn leerlingen leven en de zending van de Kerk behartigen. We dienen rekening te houden met de unieke rijkdom die elk van deze contexten in zich draagt, verbonden met het pluralisme van culturen.”" },
    { num: "110", fr: "« L’Église ne peut être comprise sans être enracinée dans un territoire concret, dans un espace et un temps où se forme une expérience partagée de la rencontre avec Dieu Sauveur. »",
      en: "“The Church cannot be understood apart from its roots in a specific territory, in that space and time where a shared experience of encounter with the saving God occurs.”", nl: "“De Kerk kan niet worden begrepen zonder haar verworteling in een concreet gebied, in die ruimte en tijd waar een gedeelde ervaring van ontmoeting met de reddende God vorm krijgt.”" }
  ],
  "conversion-transformations": [
    { num: "28", fr: "« En termes simples et synthétiques, on peut dire que la synodalité est un chemin de renouveau spirituel et de réforme structurelle pour rendre l’Église plus participative et missionnaire, c’est-à-dire pour la rendre plus capable de marcher avec chaque homme et chaque femme en rayonnant la lumière du Christ. »",
      en: "“In simple and concise terms, synodality is a path of spiritual renewal and structural reform that enables the Church to be more participatory and missionary so that it can walk with every man and woman, radiating the light of Christ.”", nl: "“Eenvoudig en samenvattend gezegd is synodaliteit een weg van geestelijke vernieuwing en structurele hervorming om de Kerk meer participatief en missionair te maken. Zo kan zij beter met iedere man en vrouw op weg gaan en het licht van Christus uitstralen.”" },
    { num: "44", fr: "« Le renouveau de la communauté chrétienne n’est possible qu’en reconnaissant la primauté de la grâce. Si la profondeur spirituelle personnelle et communautaire fait défaut, la synodalité se réduit à une logique d’organisation. Nous sommes appelés non seulement à traduire les fruits de l’expérience spirituelle personnelle dans des processus communautaires, mais à expérimenter comment la pratique du nouveau commandement de l’amour mutuel est un lieu et une forme d’une rencontre authentique avec Dieu. »",
      en: "“The renewal of the Christian community is possible only by recognising the primacy of grace. If spiritual depth at both personal and communal levels is lacking, synodality is reduced to organisational expediency. We are called not only to translate the fruits of a personal spiritual experience into community processes. We are also called to experience how practising the new commandment of reciprocal love is the place and form of encounter with God.”", nl: "“De vernieuwing van de christelijke gemeenschap is alleen mogelijk wanneer we de voorrang van de genade erkennen. Zonder persoonlijke en gemeenschappelijke spirituele diepgang wordt synodaliteit herleid tot een organisatorisch instrument. We zijn niet alleen geroepen om de vruchten van een persoonlijke spirituele ervaring te vertalen in gemeenschapsprocessen, maar om vooral te ervaren hoe de beoefening van het nieuwe gebod van wederzijdse liefde een plaats en vorm van authentieke ontmoeting met God kan zijn.”" }
  ]
};
