/*
  ============================================================
  QUESTIONS D'AIDE PAR DOMAINE — VERSION D'ESSAI
  ============================================================

  Pour chacun des 4 domaines (Annoncer la foi, Gouverner, Servir,
  Célébrer la foi), ce fichier donne les questions d'aide propres à
  chacun des 14 piliers. Les piliers, leurs titres, l'échelle de réponse
  et le diagnostic ne changent pas : seules les questions d'aide varient.

  Le choix « Autre pratique » (et les évaluations faites avec les anciens
  types de pratique) utilise les questions de référence, qui restent
  dans donnees-spirit.js.

  SOURCE (français) : « SPIRIT — Tableau comparatif des questions par
  pilier », version validée par l'équipe, reçue le 1er octobre 2026
  (v70). Textes reproduits MOT POUR MOT, à la demande de l'équipe ;
  seules quelques coquilles ont été corrigées en v71, avec l'accord de
  FX : « vécue », « reflète », « digitales », « contribue-t-elle à »,
  « l'apprentissage à partir des échecs » (comme dans la question de
  référence) et espaces manquantes avant les points d'interrogation. Un « / » dans le tableau signifie : pas de
  question pour ce domaine (Servir : piliers 4 et 14, une question en
  moins chacun).

  ⚠ ANGLAIS ET NÉERLANDAIS — PROVISOIRES, à faire valider par l'équipe
  (néerlandais : Jens ou Rick) :
    - quand la question d'un domaine reprend la question de référence,
      on reprend la formulation validée par le Delphi (anglais) et la
      version officielle (néerlandais), mot pour mot ;
    - sinon, traduction de Claude, alignée sur le vocabulaire de ces
      versions validées.

  Structure : QUESTIONS_PAR_DOMAINE[domaine][identifiant du pilier] =
  liste de questions { fr, en, nl }. Les identifiants des domaines sont
  ceux de TYPES_OBJET (donnees-spirit.js), ceux des piliers ceux de
  CRITERES. Pour corriger une question : modifiez le texte entre
  guillemets, sans toucher à la structure.
  ============================================================
*/

const QUESTIONS_PAR_DOMAINE = {

  /* ---------- Formulaire 1 — Annoncer la foi ---------- */
  annoncer: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "L'annonce s'adresse-t-elle à tous, en particulier à celles et ceux qui se sentent éloignés de l'Église, différents, marginalisés ou hésitants à participer ?",
        en: "Is the proclamation addressed to everyone, especially those who may feel distant from the Church, different, marginalised, or hesitant to participate?",
        nl: "Richt de verkondiging zich tot iedereen, met name tot mensen die zich misschien ver van de Kerk, gemarginaliseerd of anders voelen of die zich terughoudend opstellen?" },
      { fr: "La pratique respecte-t-elle l'égale dignité de chaque participant ?",
        en: "Does the practice respect the equal dignity of every participant?",
        nl: "Wordt de gelijkwaardigheid van elke deelnemer gerespecteerd in deze geloofspraktijk?" },
      { fr: "La pratique encourage-t-elle une écoute réciproque des questions, des doutes et des expériences de chacun ?",
        en: "Does the practice encourage reciprocal listening to each person's questions, doubts and experiences?",
        nl: "Wordt er in de geloofspraktijk aangemoedigd om wederzijds te luisteren naar ieders vragen, twijfels en ervaringen?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "L'annonce invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir dans la foi ?",
        en: "Does the proclamation invite each person to open themselves to otherness in order to grow and mature in faith?",
        nl: "Nodigt de verkondiging iedereen uit om zich open te stellen voor anders-zijn, om zo te groeien en tot volwassenheid te komen in het geloof?" },
      { fr: "L'annonce valorise-t-elle la diversité des expressions de la foi ?",
        en: "Does the proclamation value the diversity of expressions of faith?",
        nl: "Wordt in de verkondiging waarde gehecht aan de diversiteit in geloofsuitingen?" },
      { fr: "L'annonce est-elle vécue en lien avec l'Église locale (paroisse, diocèse) ?",
        en: "Is the proclamation lived in connection with the local Church (parish, diocese)?",
        nl: "Wordt de verkondiging beleefd in verbondenheid met de lokale Kerk (parochie, bisdom)?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "L'annonce est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the proclamation rooted in attentive listening to the Word of God?",
        nl: "Is de verkondiging geworteld in het aandachtig luisteren naar het Woord van God?" },
      { fr: "La pratique est-elle inspirée par la prière ?",
        en: "Is the practice inspired by prayer?",
        nl: "Wordt deze geloofspraktijk geïnspireerd door gebed?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement sur les contenus et les manières d'annoncer ?",
        en: "Is the Word of God the foundation for discernment about the content and ways of proclaiming?",
        nl: "Vormt het Woord van God de basis voor onderscheiding over de inhoud en de manieren van verkondigen?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "L'annonce se nourrit-elle de la célébration de l'Eucharistie et conduit-elle vers elle ?",
        en: "Does the proclamation draw nourishment from the celebration of the Eucharist and lead towards it?",
        nl: "Put de verkondiging uit de viering van de eucharistie en leidt ze ernaartoe?" },
      { fr: "La pratique favorise-t-elle une participation active à la liturgie ?",
        en: "Does the practice foster active participation in the liturgy?",
        nl: "Bevordert deze geloofspraktijk actieve deelname aan de liturgie?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "L'annonce favorise-t-elle le dialogue et le témoignage commun avec les autres Églises et communautés chrétiennes ?",
        en: "Does the proclamation foster dialogue and common witness with other Churches and Christian communities?",
        nl: "Bevordert de verkondiging de dialoog en het gemeenschappelijk getuigenis met andere Kerken en christelijke gemeenschappen?" },
      { fr: "L'annonce se fait-elle dans le respect et le dialogue avec les autres traditions religieuses et avec les personnes sans religion ?",
        en: "Is the proclamation carried out with respect and in dialogue with other religious traditions and with people of no faith?",
        nl: "Gebeurt de verkondiging met respect en in dialoog met andere religieuze tradities en met mensen zonder geloof?" },
      { fr: "La pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does the practice resist the temptation of self-centredness?",
        nl: "Weerstaat deze geloofspraktijk de verleiding tot egocentrisme?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les choix concernant l'annonce (contenus, publics, méthodes) font-ils l'objet d'une prise de décision participative ?",
        en: "Are choices concerning the proclamation (content, audiences, methods) the subject of participatory decision-making?",
        nl: "Worden keuzes over de verkondiging (inhoud, doelgroepen, methoden) op een participatieve manier genomen?" },
      { fr: "L'annonce est-elle portée par une communauté plutôt que par une personne agissant seule ?",
        en: "Is the proclamation carried out by a community rather than by a single individual acting alone?",
        nl: "Wordt de verkondiging gedragen door een gemeenschap in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les personnes impliquées se sentent-elles libres de parler ouvertement et d'exprimer un désaccord ?",
        en: "Do the people involved feel free to speak openly and express disagreement?",
        nl: "Voelen de betrokkenen zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "La pratique encourage-t-elle un partage plus large des tâches et des responsabilités entre tous les baptisés ?",
        en: "Does the practice encourage a wider sharing of tasks and responsibilities among all the baptised?",
        nl: "Bevordert de geloofspraktijk een bredere verdeling van de taken en verantwoordelijkheden onder alle gedoopten?" },
      { fr: "La pratique reflète-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs dans l’annonce de la foi ?",
        en: "Does the practice reflect the differentiated co-responsibility of ordained ministers and lay faithful in proclaiming the faith?",
        nl: "Weerspiegelt de geloofspraktijk de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen in de verkondiging van het geloof?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités au sein de la pratique sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within the practice clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden binnen de geloofspraktijk duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée ?",
        en: "Is the management of human and financial resources in the practice documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen binnen de geloofspraktijk gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in the practice?",
        nl: "Wordt essentiële informatie binnen de geloofspraktijk openlijk en tijdig gedeeld?" },
      { fr: "Une évaluation régulière de la pratique est-elle prévue ?",
        en: "Is there a regular evaluation of the practice?",
        nl: "Wordt de geloofspraktijk regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "La pratique intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?",
        nl: "Maakt (bij)leren deel uit van de geloofspraktijk?" },
      { fr: "La pratique comprend-elle des temps de relecture et d'évaluation continue des expériences vécues ?",
        en: "Does the practice include moments of reflection and continuous evaluation on the lived experiences?",
        nl: "Zijn er binnen de geloofspraktijk momenten van reflectie en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "La pratique favorise-t-elle l’apprentissage à partir des échecs et des résistances ?",
        en: "Does the practice foster learning from failures and resistance?",
        nl: "Bevordert de geloofspraktijk het leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "La pratique témoigne-t-elle du Christ vivant et ressuscité ?",
        en: "Does the practice bear witness to the living and risen Christ?",
        nl: "Legt de geloofspraktijk getuigenis af van de levende en verrezen Christus?" },
      { fr: "La pratique vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the practice aim to deepen each person's relationship with Christ?",
        nl: "Is het doel van de geloofspraktijk om de relatie van ieder individu met Christus te verdiepen?" },
      { fr: "La pratique promeut-elle une manière de vivre qui intègre la foi dans la vie quotidienne ?",
        en: "Does the practice promote a way of life that integrates faith into daily life?",
        nl: "Bevordert de geloofspraktijk een levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the practice contribute to a new impulse to mission?",
        nl: "Draagt deze geloofspraktijk bij aan een nieuwe impuls voor zending/missie?" },
      { fr: "La pratique s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?",
        nl: "Is deze geloofspraktijk verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus au service des besoins de la communauté et de la mission ?",
        en: "Are the charisms of each individual recognised for the needs of the community and the mission?",
        nl: "Worden de charisma’s van elk individu erkend in het licht van de behoeften van de gemeenschap en de zending?" },
      { fr: "La pratique soutient-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
        en: "Does the practice support a variety of services and ministries in response to the pastoral needs?",
        nl: "Maakt de geloofspraktijk verschillende diensttaken en ambten mogelijk om tegemoet te komen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles l'occasion d'accéder aux postes de responsabilités ?",
        en: "Do women have opportunities to take on roles of responsibility in the practice?",
        nl: "Hebben vrouwen mogelijkheden om verantwoordelijke functies binnen de geloofspraktijk te bekleden?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La pratique tient-elle compte des réalités historiques, contemporaines, sociales, culturelles et digitales de celles et ceux à qui elle s'adresse ?",
        en: "Does the practice take into account the historical, contemporary, social, cultural, and digital realities of those it addresses?",
        nl: "Houdt de geloofspraktijk rekening met de historische, hedendaagse, sociale, culturele en digitale omstandigheden van de mensen tot wie ze zich richt?" },
      { fr: "Prend-elle en compte les réalités de mobilité culturelle et géographique (migrants, personnes déplacées ou de passage, etc.) ?",
        en: "Does the practice take the realities of cultural and geographic mobility into account (migrants, displaced people or people passing through, etc.)?",
        nl: "Houdt de geloofspraktijk rekening met de realiteit van culturele en geografische mobiliteit (migranten, ontheemden of mensen op doortocht enz.)?" },
      { fr: "Engage-t-elle un dialogue avec d'autres acteurs de la société, de la culture, de la politique, etc. ?",
        en: "Does the practice engage in dialogue with other actors in society, culture, politics etc.?",
        nl: "Gaat de geloofspraktijk de dialoog aan met andere actoren uit de samenleving, de cultuur, de politiek enz.?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La pratique conduit-elle à une conversion personnelle de tous les participants ?",
        en: "Does the practice lead to a personal conversion of all the participants?",
        nl: "Leidt deze geloofspraktijk tot een persoonlijke bekering van alle deelnemers?" },
      { fr: "La pratique rend-elle possible une transformation communautaire ?",
        en: "Does the practice enable communal transformation?",
        nl: "Zorgt deze geloofspraktijk voor een gemeenschappelijke transformatie?" },
      { fr: "La pratique contribue-t-elle à un renouveau spirituel et indirectement à une réforme structurelle de l'Église ?",
        en: "Does the practice contribute to a spiritual renewal and, indirectly, to a structural reform of the Church?",
        nl: "Draagt deze geloofspraktijk bij aan een spirituele vernieuwing en indirect aan een structurele hervorming van de Kerk?" }
    ]
  },

  /* ---------- Formulaire 2 — Gouverner ---------- */
  gouverner: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "La pratique accueille-t-elle chacun, en particulier ceux qui se sentent marginalisés, différents ou hésitants à participer ?",
        en: "Does the practice you are evaluating welcome everyone, especially those who may feel marginalised, different, or hesitant to participate?",
        nl: "Is iedereen welkom bij de geloofspraktijk die je evalueert, met name mensen die zich misschien gemarginaliseerd of anders voelen of die zich terughoudend opstellen?" },
      { fr: "La pratique respecte-t-elle l'égale dignité de chaque participant ?",
        en: "Does the practice respect the equal dignity of every participant?",
        nl: "Wordt de gelijkwaardigheid van elke deelnemer gerespecteerd in deze geloofspraktijk?" },
      { fr: "Les modes de gouvernance favorisent-ils une écoute réciproque entre responsables et membres du groupe ?",
        en: "Do the ways of governing foster reciprocal listening between those in charge and members of the group?",
        nl: "Bevorderen de manieren van besturen het wederzijds luisteren tussen verantwoordelijken en leden van de groep?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "La gouvernance accueille-t-elle les différents points de vue comme une occasion de grandir et de mûrir ensemble ?",
        en: "Does governance welcome different points of view as an opportunity to grow and mature together?",
        nl: "Verwelkomt het bestuur verschillende standpunten als een kans om samen te groeien en tot volwassenheid te komen?" },
      { fr: "La pratique valorise-t-elle la diversité des expressions de la foi ?",
        en: "Does the practice value the diversity of expressions of faith?",
        nl: "Wordt in de geloofspraktijk waarde gehecht aan de diversiteit in geloofsuitingen?" },
      { fr: "La gouvernance s'exerce-t-elle en lien avec l'Église locale et ses orientations pastorales ?",
        en: "Is governance exercised in connection with the local Church and its pastoral orientations?",
        nl: "Wordt het bestuur uitgeoefend in verbondenheid met de lokale Kerk en haar pastorale beleidslijnen?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "La pratique de gouvernance est-elle enracinée dans l'écoute de la Parole de Dieu ?",
        en: "Is the practice of governance rooted in listening to the Word of God?",
        nl: "Is de bestuurspraktijk geworteld in het luisteren naar het Woord van God?" },
      { fr: "Les temps de discernement et de décision sont-ils portés par la prière ?",
        en: "Are times of discernment and decision-making carried by prayer?",
        nl: "Worden de momenten van onderscheiding en besluitvorming door gebed gedragen?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement dans les décisions prises ?",
        en: "Is the Word of God the foundation for discernment in the decisions that are taken?",
        nl: "Vormt het Woord van God de basis voor onderscheiding bij de beslissingen die genomen worden?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "La pratique est-elle nourrie par la célébration de l'Eucharistie ?",
        en: "Is the practice nourished by the celebration of the Eucharist?",
        nl: "Wordt deze geloofspraktijk gevoed door de viering van de eucharistie?" },
      { fr: "La pratique favorise-t-elle une participation active à la liturgie ?",
        en: "Does the practice foster active participation in the liturgy?",
        nl: "Bevordert deze geloofspraktijk actieve deelname aan de liturgie?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "La pratique favorise-t-elle le dialogue avec d'autres Églises et communautés chrétiennes ?",
        en: "Does the practice foster dialogue with other Churches and Christian communities?",
        nl: "Bevordert deze geloofspraktijk de dialoog met andere Kerken en christelijke gemeenschappen?" },
      { fr: "La pratique de gouvernance tient-elle compte du dialogue avec les autres traditions religieuses et avec les personnes sans religion ?",
        en: "Does the practice of governance take into account dialogue with other religious traditions and with people of no faith?",
        nl: "Houdt de bestuurspraktijk rekening met de dialoog met andere religieuze tradities en met mensen zonder geloof?" },
      { fr: "La pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does the practice resist the temptation of self-centredness?",
        nl: "Weerstaat deze geloofspraktijk de verleiding tot egocentrisme?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les processus de décision favorisent-ils la participation la plus large possible du peuple de Dieu ?",
        en: "Do decision-making processes foster the widest possible participation of the People of God?",
        nl: "Bevorderen de besluitvormingsprocessen een zo breed mogelijke deelname van het Volk van God?" },
      { fr: "Les décisions sont-elles élaborées en communauté plutôt que par une personne agissant seule ?",
        en: "Are decisions developed in community rather than by a single individual acting alone?",
        nl: "Worden beslissingen in gemeenschap uitgewerkt in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les membres des instances de gouvernance se sentent-ils libres de parler ouvertement et d'exprimer un désaccord ?",
        en: "Do members of governing bodies feel free to speak openly and express disagreement?",
        nl: "Voelen de leden van de bestuursorganen zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le processus de discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "La pratique encourage-t-elle un partage plus large des tâches et des responsabilités entre les personnes impliquées ?",
        en: "Does the practice encourage a wider sharing of tasks and responsibilities among the people involved?",
        nl: "Bevordert de geloofspraktijk een bredere verdeling van de taken en verantwoordelijkheden onder de betrokkenen?" },
      { fr: "La gouvernance reflète-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs ?",
        en: "Does governance reflect the differentiated co-responsibility of ordained ministers and lay faithful?",
        nl: "Weerspiegelt het bestuur de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités au sein de la pratique sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within the practice clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden binnen de geloofspraktijk duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée ?",
        en: "Is the management of human and financial resources in the practice documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen binnen de geloofspraktijk gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in the practice?",
        nl: "Wordt essentiële informatie binnen de geloofspraktijk openlijk en tijdig gedeeld?" },
      { fr: "Une évaluation régulière de la pratique est-elle prévue ?",
        en: "Is there a regular evaluation of the practice?",
        nl: "Wordt de geloofspraktijk regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "La pratique intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?",
        nl: "Maakt (bij)leren deel uit van de geloofspraktijk?" },
      { fr: "La pratique comprend-elle des temps de relecture et d'évaluation continue des expériences vécues ?",
        en: "Does the practice include moments of reflection and continuous evaluation on the lived experiences?",
        nl: "Zijn er binnen de geloofspraktijk momenten van reflectie en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "La pratique favorise-t-elle l’apprentissage à partir des échecs et des résistances ?",
        en: "Does the practice foster learning from failures and resistance?",
        nl: "Bevordert de geloofspraktijk het leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "La manière de gouverner témoigne-t-elle du Christ vivant, venu non pour être servi mais pour servir ?",
        en: "Does the way of governing bear witness to the living Christ, who came not to be served but to serve?",
        nl: "Legt de manier van besturen getuigenis af van de levende Christus, die niet gekomen is om gediend te worden, maar om te dienen?" },
      { fr: "La pratique vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the practice aim to deepen each person's relationship with Christ?",
        nl: "Is het doel van de geloofspraktijk om de relatie van ieder individu met Christus te verdiepen?" },
      { fr: "La pratique promeut-elle une manière de vivre qui intègre la foi dans la vie quotidienne ?",
        en: "Does the practice promote a way of life that integrates faith into daily life?",
        nl: "Bevordert de geloofspraktijk een levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the practice contribute to a new impulse to mission?",
        nl: "Draagt deze geloofspraktijk bij aan een nieuwe impuls voor zending/missie?" },
      { fr: "La pratique s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?",
        nl: "Is deze geloofspraktijk verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus au service des besoins de la communauté et de la mission ?",
        en: "Are the charisms of each individual recognised for the needs of the community and the mission?",
        nl: "Worden de charisma’s van elk individu erkend in het licht van de behoeften van de gemeenschap en de zending?" },
      { fr: "La pratique soutient-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
        en: "Does the practice support a variety of services and ministries in response to the pastoral needs?",
        nl: "Maakt de geloofspraktijk verschillende diensttaken en ambten mogelijk om tegemoet te komen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles l'occasion d'accéder aux postes de responsabilités ?",
        en: "Do women have opportunities to take on roles of responsibility in the practice?",
        nl: "Hebben vrouwen mogelijkheden om verantwoordelijke functies binnen de geloofspraktijk te bekleden?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La pratique manifeste-t-elle une attention aux réalités historiques, contemporaines, sociales, culturelles et digitales ?",
        en: "Does the practice pay attention to historical, contemporary, social, cultural, and digital realities?",
        nl: "Wordt er in de geloofspraktijk rekening gehouden met historische, hedendaagse, sociale, culturele en digitale omstandigheden?" },
      { fr: "Prend-elle en compte les réalités de mobilité culturelle et géographique (migrants, personnes déplacées ou de passage, etc.) ?",
        en: "Does the practice take the realities of cultural and geographic mobility into account (migrants, displaced people or people passing through, etc.)?",
        nl: "Houdt de geloofspraktijk rekening met de realiteit van culturele en geografische mobiliteit (migranten, ontheemden of mensen op doortocht enz.)?" },
      { fr: "Engage-t-elle un dialogue avec d'autres acteurs de la société, de la culture, de la politique, etc. ?",
        en: "Does the practice engage in dialogue with other actors in society, culture, politics etc.?",
        nl: "Gaat de geloofspraktijk de dialoog aan met andere actoren uit de samenleving, de cultuur, de politiek enz.?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La manière de gouverner contribue-t-elle à une conversion personnelle de tous les participants ?",
        en: "Does the way of governing contribute to a personal conversion of all the participants?",
        nl: "Draagt de manier van besturen bij aan een persoonlijke bekering van alle deelnemers?" },
      { fr: "La pratique rend-elle possible une transformation communautaire ?",
        en: "Does the practice enable communal transformation?",
        nl: "Zorgt deze geloofspraktijk voor een gemeenschappelijke transformatie?" },
      { fr: "La pratique contribue-t-elle au renouveau spirituel et à une réforme structurelle de l'Église ?",
        en: "Does the practice contribute to a spiritual renewal and structural reform of the Church?",
        nl: "Draagt deze geloofspraktijk bij aan een spirituele vernieuwing en structurele hervorming van de Kerk?" }
    ]
  },

  /* ---------- Formulaire 3 — Servir ---------- */
  servir: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "La pratique s’adresse-t-elle à tous, en particulier les personnes pauvres, marginalisées, différentes ou hésitantes à participer ?",
        en: "Is the practice addressed to everyone, especially people who are poor, marginalised, different, or hesitant to participate?",
        nl: "Richt de geloofspraktijk zich tot iedereen, met name tot mensen die arm, gemarginaliseerd of anders zijn of die zich terughoudend opstellen?" },
      { fr: "La pratique respecte-t-elle l'égale dignité des personnes servies et de celles qui servent ?",
        en: "Does the practice respect the equal dignity of those who are served and of those who serve?",
        nl: "Wordt de gelijkwaardigheid van wie gediend wordt en van wie dient gerespecteerd in deze geloofspraktijk?" },
      { fr: "La pratique favorise-t-elle une écoute réciproque, où les personnes aidées sont aussi reconnues comme porteuses d'une parole et de dons ?",
        en: "Does the practice foster reciprocal listening, in which the people being helped are also recognised as having a voice and gifts of their own?",
        nl: "Bevordert de geloofspraktijk het wederzijds luisteren, waarbij de mensen die geholpen worden ook erkend worden als mensen met een eigen stem en eigen gaven?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "La pratique invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir ?",
        en: "Does the practice invite each person to open themselves to otherness in order to grow and mature?",
        nl: "Moedigt de geloofspraktijk iedereen aan om zich open te stellen voor anders-zijn, om zo te groeien en te komen tot volwassenheid?" },
      { fr: "La pratique valorise-t-elle la diversité des personnes, de leurs cultures et de leurs expressions de foi ?",
        en: "Does the practice value the diversity of people, their cultures and their expressions of faith?",
        nl: "Wordt in de geloofspraktijk waarde gehecht aan de diversiteit van mensen, hun culturen en hun geloofsuitingen?" },
      { fr: "La pratique est-elle vécue en lien avec l'Église locale ?",
        en: "Is the practice lived in connection with the local Church?",
        nl: "Wordt de geloofspraktijk beleefd in verbondenheid met de lokale Kerk?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "La pratique est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the practice rooted in attentive listening to the Word of God?",
        nl: "Is deze geloofspraktijk geworteld in het aandachtig luisteren naar het Woord van God?" },
      { fr: "Le service est-il inspiré et soutenu par la prière ?",
        en: "Is the service inspired and sustained by prayer?",
        nl: "Wordt de dienst geïnspireerd en gedragen door gebed?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement sur les besoins auxquels répondre et la manière d'y répondre ?",
        en: "Is the Word of God the foundation for discernment about which needs to meet and how to meet them?",
        nl: "Vormt het Woord van God de basis voor onderscheiding over de noden waarop geantwoord moet worden en de manier waarop?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "Le service est-il nourri par la célébration de l'Eucharistie ?",
        en: "Is the service nourished by the celebration of the Eucharist?",
        nl: "Wordt de dienst gevoed door de viering van de eucharistie?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "Le service est-il l'occasion d'une collaboration avec d'autres Églises et communautés chrétiennes ?",
        en: "Is the service an opportunity for collaboration with other Churches and Christian communities?",
        nl: "Is de dienst een gelegenheid tot samenwerking met andere Kerken en christelijke gemeenschappen?" },
      { fr: "Le service s'ouvre-t-il au dialogue et à la collaboration avec d'autres traditions religieuses et avec des personnes sans religion ?",
        en: "Is the service open to dialogue and collaboration with other religious traditions and with people of no faith?",
        nl: "Staat de dienst open voor dialoog en samenwerking met andere religieuze tradities en met mensen zonder geloof?" },
      { fr: "La pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does the practice resist the temptation of self-centredness?",
        nl: "Weerstaat deze geloofspraktijk de verleiding tot egocentrisme?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les personnes servies sont-elles associées au discernement et aux décisions qui les concernent ?",
        en: "Are the people served involved in the discernment and decisions that concern them?",
        nl: "Worden de mensen die gediend worden betrokken bij de onderscheiding en de beslissingen die hen aanbelangen?" },
      { fr: "Le service est-il porté par une équipe plutôt que par une personne agissant seule ?",
        en: "Is the service carried out by a team rather than by a single individual acting alone?",
        nl: "Wordt de dienst gedragen door een team in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les participants (bénévoles, personnes accompagnées, responsables) se sentent-ils libres de parler ouvertement et d'exprimer un désaccord ?",
        en: "Do participants (volunteers, people being accompanied, those in charge) feel free to speak openly and express disagreement?",
        nl: "Voelen de deelnemers (vrijwilligers, begeleide personen, verantwoordelijken) zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "Le service encourage-t-il un partage plus large des tâches et des responsabilités entre les personnes impliquées ?",
        en: "Does the service encourage a wider sharing of tasks and responsibilities among the people involved?",
        nl: "Bevordert de dienst een bredere verdeling van de taken en verantwoordelijkheden onder de betrokkenen?" },
      { fr: "La pratique témoigne-t-elle de la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs dans la mission commune ?",
        en: "Does the practice bear witness to the differentiated co-responsibility of ordained ministers and lay faithful within the shared mission?",
        nl: "Getuigt de geloofspraktijk van de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen binnen de gezamenlijke zending?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités au sein de la pratique sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within the practice clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden binnen de geloofspraktijk duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée ?",
        en: "Is the management of human and financial resources in the practice documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen binnen de geloofspraktijk gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in the practice?",
        nl: "Wordt essentiële informatie binnen de geloofspraktijk openlijk en tijdig gedeeld?" },
      { fr: "Une évaluation régulière de la pratique est-elle prévue ?",
        en: "Is there a regular evaluation of the practice?",
        nl: "Wordt de geloofspraktijk regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "La pratique intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?",
        nl: "Maakt (bij)leren deel uit van de geloofspraktijk?" },
      { fr: "Le service bénéficie-t-il de temps de relecture et d'évaluation continue des expériences vécues ?",
        en: "Does the service benefit from moments of reflection and continuous evaluation on the lived experiences?",
        nl: "Zijn er binnen de dienst momenten van reflectie en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "La pratique favorise-t-elle l’apprentissage à partir des échecs et des résistances ?",
        en: "Does the practice foster learning from failures and resistance?",
        nl: "Bevordert de geloofspraktijk het leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "Le service témoigne-t-il du Christ vivant, présent dans les plus humbles ?",
        en: "Does the service bear witness to the living Christ, present in the humblest?",
        nl: "Legt de dienst getuigenis af van de levende Christus, aanwezig in de geringsten?" },
      { fr: "La pratique vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the practice aim to deepen each person's relationship with Christ?",
        nl: "Is het doel van de geloofspraktijk om de relatie van ieder individu met Christus te verdiepen?" },
      { fr: "La pratique reflète-t-elle une manière de vivre qui intègre la foi dans la vie quotidienne ?",
        en: "Does the practice reflect a way of life that integrates faith into daily life?",
        nl: "Weerspiegelt de geloofspraktijk een levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the practice contribute to a new impulse to mission?",
        nl: "Draagt deze geloofspraktijk bij aan een nieuwe impuls voor zending/missie?" },
      { fr: "La pratique s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?",
        nl: "Is deze geloofspraktijk verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun, y compris ceux des personnes servies, sont-ils reconnus pour les besoins de la mission ?",
        en: "Are the charisms of each individual, including those of the people served, recognised for the needs of the mission?",
        nl: "Worden de charisma’s van elk individu, ook die van de mensen die gediend worden, erkend in het licht van de behoeften van de zending?" },
      { fr: "La pratique soutient-elle une diversité de services et de ministères en réponse aux besoins pastoraux ?",
        en: "Does the practice support a variety of services and ministries in response to the pastoral needs?",
        nl: "Maakt de geloofspraktijk verschillende diensttaken en ambten mogelijk om tegemoet te komen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles l'occasion d'accéder aux postes de responsabilités dans ce service ?",
        en: "Do women have opportunities to take on roles of responsibility in this service?",
        nl: "Hebben vrouwen mogelijkheden om verantwoordelijke functies binnen deze dienst te bekleden?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La pratique est-elle attentive aux réalités historiques, contemporaines, sociales, culturelles et digitales, y compris aux causes de la pauvreté et de l'exclusion ?",
        en: "Does the practice pay attention to historical, contemporary, social, cultural, and digital realities, including the causes of poverty and exclusion?",
        nl: "Wordt er in de geloofspraktijk rekening gehouden met historische, hedendaagse, sociale, culturele en digitale omstandigheden, ook met de oorzaken van armoede en uitsluiting?" },
      { fr: "Prend-elle en compte les réalités de mobilité culturelle et géographique (migrants, personnes déplacées ou de passage, etc.) ?",
        en: "Does the practice take the realities of cultural and geographic mobility into account (migrants, displaced people or people passing through, etc.)?",
        nl: "Houdt de geloofspraktijk rekening met de realiteit van culturele en geografische mobiliteit (migranten, ontheemden of mensen op doortocht enz.)?" },
      { fr: "Le service bénéficie-t-il du dialogue avec d’autres acteurs de la société (associations, services publics, monde politique, etc.) ?",
        en: "Does the service benefit from dialogue with other actors in society (associations, public services, the political world, etc.)?",
        nl: "Heeft de dienst baat bij de dialoog met andere actoren uit de samenleving (verenigingen, openbare diensten, de politiek enz.)?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La pratique conduit-elle à une conversion personnelle des participants ?",
        en: "Does the practice lead to a personal conversion of the participants?",
        nl: "Leidt deze geloofspraktijk tot een persoonlijke bekering van de deelnemers?" },
      { fr: "Le service rend-il possible une transformation communautaire ?",
        en: "Does the service enable communal transformation?",
        nl: "Maakt de dienst een gemeenschappelijke transformatie mogelijk?" }
    ]
  },

  /* ---------- Formulaire 4 — Célébrer la foi ---------- */
  celebrer: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "La célébration accueille-t-elle chacun, en particulier celles et ceux qui se sentent marginalisés, différents, éloignés ou hésitants à participer ?",
        en: "Does the celebration welcome everyone, especially those who may feel marginalised, different, distant, or hesitant to participate?",
        nl: "Is iedereen welkom in de viering, met name mensen die zich misschien gemarginaliseerd, anders of ver weg voelen of die zich terughoudend opstellen?" },
      { fr: "La célébration respecte-t-elle l'égale dignité de tous les baptisés qui y participent ?",
        en: "Does the celebration respect the equal dignity of all the baptised who take part in it?",
        nl: "Wordt in de viering de gelijkwaardigheid van alle gedoopten die eraan deelnemen gerespecteerd?" },
      { fr: "La célébration favorise-t-elle une écoute réciproque, dans sa préparation comme dans son déroulement ?",
        en: "Does the celebration foster reciprocal listening, both in its preparation and in the way it unfolds?",
        nl: "Bevordert de viering het wederzijds luisteren, zowel bij de voorbereiding als tijdens het verloop?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "La pratique invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir ?",
        en: "Does the practice invite each person to open themselves to otherness in order to grow and mature?",
        nl: "Moedigt de geloofspraktijk iedereen aan om zich open te stellen voor anders-zijn, om zo te groeien en te komen tot volwassenheid?" },
      { fr: "La célébration valorise-t-elle la diversité des expressions de la foi (chants, cultures, piété populaire) ?",
        en: "Does the celebration value the diversity of expressions of faith (songs, cultures, popular piety)?",
        nl: "Wordt in de viering waarde gehecht aan de diversiteit in geloofsuitingen (gezangen, culturen, volksvroomheid)?" },
      { fr: "La célébration manifeste-t-elle les liens avec l'Église locale ?",
        en: "Does the celebration express the bonds with the local Church?",
        nl: "Brengt de viering de band met de lokale Kerk tot uitdrukking?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "La célébration accorde-t-elle une place centrale à l'écoute attentive de la Parole de Dieu ?",
        en: "Does the celebration give a central place to attentive listening to the Word of God?",
        nl: "Geeft de viering een centrale plaats aan het aandachtig luisteren naar het Woord van God?" },
      { fr: "La célébration est-elle préparée dans un climat de prière ?",
        en: "Is the celebration prepared in an atmosphere of prayer?",
        nl: "Wordt de viering voorbereid in een sfeer van gebed?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement dans les choix liturgiques ?",
        en: "Is the Word of God the foundation for discernment in liturgical choices?",
        nl: "Vormt het Woord van God de basis voor onderscheiding bij de liturgische keuzes?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "La célébration est-elle nourrie par l'Eucharistie et orientée vers elle ?",
        en: "Is the celebration nourished by the Eucharist and oriented towards it?",
        nl: "Wordt de viering gevoed door de eucharistie en is ze erop gericht?" },
      { fr: "La célébration favorise-t-elle une participation active de tous les baptisés, proportionnée à leur âge, leur condition, leur genre de vie et leur degré de culture religieuse ?",
        en: "Does the celebration foster the active participation of all the baptised, in keeping with their age, condition, way of life and degree of religious culture?",
        nl: "Bevordert de viering de actieve deelname van alle gedoopten, naargelang hun leeftijd, hun situatie, hun levenswijze en de mate van hun religieuze vorming?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "La vie liturgique laisse-t-elle place à des temps de prière avec des membres d'autres Églises et communautés chrétiennes ?",
        en: "Does liturgical life leave room for times of prayer with members of other Churches and Christian communities?",
        nl: "Laat het liturgisch leven ruimte voor gebedsmomenten met leden van andere Kerken en christelijke gemeenschappen?" },
      { fr: "La célébration est-elle attentive aux personnes d'autres traditions religieuses ou sans religion qui sont présentes (mariages, funérailles, fêtes) ?",
        en: "Is the celebration attentive to people of other religious traditions or of no faith who are present (weddings, funerals, festivals)?",
        nl: "Heeft de viering aandacht voor aanwezigen van andere religieuze tradities of zonder geloof (huwelijken, uitvaarten, feesten)?" },
      { fr: "La pratique résiste-t-elle à la tentation du repli sur soi ?",
        en: "Does the practice resist the temptation of self-centredness?",
        nl: "Weerstaat deze geloofspraktijk de verleiding tot egocentrisme?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "La préparation des célébrations associe-t-elle largement la communauté aux choix et aux décisions ?",
        en: "Does the preparation of celebrations widely involve the community in choices and decisions?",
        nl: "Betrekt de voorbereiding van de vieringen de gemeenschap ruim bij de keuzes en beslissingen?" },
      { fr: "La célébration est-elle préparée et animée par un groupe plutôt que par une personne agissant seule ?",
        en: "Is the celebration prepared and led by a group rather than by a single individual acting alone?",
        nl: "Wordt de viering voorbereid en geleid door een groep in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les personnes qui participent se sentent-elles libres de parler ouvertement et d'exprimer un désaccord ?",
        en: "Do people who participate feel free to speak openly and express disagreement?",
        nl: "Voelen de deelnemers zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine les choix liturgiques ?",
        en: "Are steps taken to ensure that no social or cultural group dominates liturgical choices?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep de liturgische keuzes domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "La célébration encourage-t-elle un partage plus large des tâches et des responsabilités (accueil, lecture, chant, service de la messe, etc.) ?",
        en: "Does the celebration encourage a wider sharing of tasks and responsibilities (welcoming, reading, singing, serving at Mass, etc.)?",
        nl: "Bevordert de viering een bredere verdeling van de taken en verantwoordelijkheden (onthaal, lezen, zang, misdienen enz.)?" },
      { fr: "La célébration manifeste-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs, chacun selon sa vocation et sa mission ?",
        en: "Does the celebration express the differentiated co-responsibility of ordained ministers and lay faithful, each according to their vocation and mission?",
        nl: "Brengt de viering de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen tot uitdrukking, ieder volgens de eigen roeping en zending?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités dans la préparation et l'animation des célébrations sont-elles clairement définies et comprises ?",
        en: "Are responsibilities for preparing and leading celebrations clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden bij de voorbereiding en het leiden van de vieringen duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières liées aux célébrations (quêtes, offrandes, matériel, etc.) est-elle documentée ?",
        en: "Is the management of human and financial resources related to celebrations (collections, offerings, equipment, etc.) documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen die met de vieringen verbonden zijn (collectes, offergaven, materiaal enz.) gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner in the practice?",
        nl: "Wordt essentiële informatie binnen de geloofspraktijk openlijk en tijdig gedeeld?" },
      { fr: "Une évaluation régulière de la pratique est-elle prévue ?",
        en: "Is there a regular evaluation of the practice?",
        nl: "Wordt de geloofspraktijk regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "La pratique intègre-t-elle une dimension d'apprentissage ?",
        en: "Does the practice include a learning dimension?",
        nl: "Maakt (bij)leren deel uit van de geloofspraktijk?" },
      { fr: "La pratique bénéficie-t-elle de temps de relecture et d'évaluation continue des célébrations vécues ?",
        en: "Does the practice benefit from moments of reflection and continuous evaluation on the celebrations that have taken place?",
        nl: "Zijn er binnen de geloofspraktijk momenten van reflectie en voortdurende evaluatie van de beleefde vieringen?" },
      { fr: "L’accompagnement des célébrations permet-il d'apprendre des échecs et des résistances ?",
        en: "Does the follow-up of celebrations make it possible to learn from failures and resistance?",
        nl: "Maakt de begeleiding van de vieringen het mogelijk te leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "La célébration témoigne-t-elle du Christ vivant et ressuscité ?",
        en: "Does the celebration bear witness to the living and risen Christ?",
        nl: "Legt de viering getuigenis af van de levende en verrezen Christus?" },
      { fr: "La célébration vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the celebration aim to deepen each person's relationship with Christ?",
        nl: "Heeft de viering tot doel ieders relatie met Christus te verdiepen?" },
      { fr: "La célébration aide-t-elle à relier la foi et la vie quotidienne ?",
        en: "Does the celebration help to connect faith and daily life?",
        nl: "Helpt de viering om geloof en dagelijks leven met elkaar te verbinden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "La pratique contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the practice contribute to a new impulse to mission?",
        nl: "Draagt deze geloofspraktijk bij aan een nieuwe impuls voor zending/missie?" },
      { fr: "La pratique s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the practice embedded in the missionary dynamic of the local Church?",
        nl: "Is deze geloofspraktijk verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus et mis au service de la célébration ?",
        en: "Are the charisms of each person recognised and placed at the service of the celebration?",
        nl: "Worden de charisma’s van ieder erkend en ingezet ten dienste van de viering?" },
      { fr: "La pratique s’appuie-t-elle sur une diversité de services et de ministères ?",
        en: "Does the practice rely on a variety of services and ministries?",
        nl: "Steunt de geloofspraktijk op verschillende diensttaken en ambten?" },
      { fr: "Les femmes ont-elles la possibilité d'accomplir tous les rôles non-ordonnés dans la préparation et la célébration ?",
        en: "Do women have the opportunity to carry out all non-ordained roles in preparing and celebrating?",
        nl: "Hebben vrouwen de mogelijkheid om alle niet-gewijde taken op te nemen bij de voorbereiding en de viering?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La célébration tient-elle compte des réalités historiques, contemporaines, sociales, culturelles et digitales de l'assemblée ?",
        en: "Does the celebration take into account the historical, contemporary, social, cultural, and digital realities of the assembly?",
        nl: "Houdt de viering rekening met de historische, hedendaagse, sociale, culturele en digitale omstandigheden van de verzamelde gemeenschap?" },
      { fr: "La célébration prend-elle en compte les réalités de mobilité culturelle et géographique (communautés d'origines diverses, migrants, personnes de passage, etc.) ?",
        en: "Does the celebration take the realities of cultural and geographic mobility into account (communities of diverse origins, migrants, people passing through, etc.)?",
        nl: "Houdt de viering rekening met de realiteit van culturele en geografische mobiliteit (gemeenschappen van uiteenlopende herkomst, migranten, mensen op doortocht enz.)?" },
      { fr: "La célébration laisse-t-elle place au dialogue avec la culture et la société environnantes (patrimoine, arts, événements locaux, etc.) ?",
        en: "Does the celebration leave room for dialogue with the surrounding culture and society (heritage, the arts, local events, etc.)?",
        nl: "Laat de viering ruimte voor dialoog met de omringende cultuur en samenleving (erfgoed, kunst, lokale evenementen enz.)?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La célébration est-elle pensée pour conduire à une conversion personnelle des participants ?",
        en: "Is the celebration designed to lead to a personal conversion of the participants?",
        nl: "Is de viering erop gericht te leiden tot een persoonlijke bekering van de deelnemers?" },
      { fr: "La pratique rend-elle possible une transformation communautaire ?",
        en: "Does the practice enable communal transformation?",
        nl: "Zorgt deze geloofspraktijk voor een gemeenschappelijke transformatie?" },
      { fr: "La pratique contribue-t-elle à un renouveau spirituel et indirectement à une réforme structurelle de l'Église ?",
        en: "Does the practice contribute to a spiritual renewal and, indirectly, to a structural reform of the Church?",
        nl: "Draagt deze geloofspraktijk bij aan een spirituele vernieuwing en indirect aan een structurele hervorming van de Kerk?" }
    ]
  }
};


/* ===========================================================
   QUESTIONS À AFFICHER POUR UN PILIER
   Renvoie les questions du domaine choisi pour ce pilier ; à défaut
   (choix « Autre pratique », ancien type de pratique, pilier absent),
   les questions de référence du pilier.
   =========================================================== */
function sousQuestionsPour(critere, idType) {
  const domaine = QUESTIONS_PAR_DOMAINE[idType];
  if (domaine && domaine[critere.id] && domaine[critere.id].length > 0) {
    return domaine[critere.id];
  }
  return critere.sousQuestions;
}
