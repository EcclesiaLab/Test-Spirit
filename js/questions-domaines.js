/*
  ============================================================
  QUESTIONS D'AIDE PAR DOMAINE — VERSION D'ESSAI (PROVISOIRE)
  ============================================================

  Pour chacun des 4 domaines (Annoncer la foi, Gouverner, Servir,
  Célébrer la foi), ce fichier donne les questions d'aide propres à
  chacun des 14 piliers. Les piliers, leurs titres, l'échelle de réponse
  et le diagnostic ne changent pas : seules les questions d'aide varient.

  Le choix « Autre pratique » (et les évaluations faites avec les anciens
  types de pratique) utilise les questions de référence, qui restent
  dans donnees-spirit.js.

  SOURCE (français) : « SPIRIT — Tableau comparatif des questions par
  pilier », document de travail EcclesiaLab du 24 septembre 2026,
  textes reproduits mot pour mot.

  ⚠ ANGLAIS ET NÉERLANDAIS : TRADUCTIONS PROVISOIRES, rédigées pour
  l'essai (29 septembre 2026), à faire valider par l'équipe avant toute
  diffusion.

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
      { fr: "L'annonce s'adresse-t-elle à tous, en particulier à celles et ceux qui se sentent éloignés de l'Église, marginalisés ou hésitants ?",
        en: "Is the proclamation addressed to everyone, especially those who feel distant from the Church, marginalised or hesitant?",
        nl: "Richt de verkondiging zich tot iedereen, in het bijzonder tot wie zich ver van de Kerk voelt, gemarginaliseerd is of aarzelt?" },
      { fr: "Les personnes à qui la foi est annoncée sont-elles considérées comme des interlocuteurs d'égale dignité, et non comme de simples destinataires ?",
        en: "Are the people to whom the faith is proclaimed regarded as partners in dialogue of equal dignity, and not merely as recipients?",
        nl: "Worden de mensen aan wie het geloof verkondigd wordt beschouwd als gesprekspartners met een gelijke waardigheid, en niet louter als ontvangers?" },
      { fr: "L'annonce laisse-t-elle place à une écoute réciproque des questions, des doutes et des expériences de chacun ?",
        en: "Does the proclamation leave room for reciprocal listening to each person's questions, doubts and experiences?",
        nl: "Laat de verkondiging ruimte voor wederzijds luisteren naar ieders vragen, twijfels en ervaringen?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "L'annonce invite-t-elle chacun à s'ouvrir à l'altérité pour grandir et mûrir dans la foi ?",
        en: "Does the proclamation invite each person to open themselves to otherness in order to grow and mature in faith?",
        nl: "Nodigt de verkondiging iedereen uit om zich open te stellen voor anders-zijn, om zo te groeien en tot volwassenheid te komen in het geloof?" },
      { fr: "L'annonce valorise-t-elle la diversité des expressions de la foi (âges, cultures, parcours spirituels) ?",
        en: "Does the proclamation value the diversity of expressions of faith (ages, cultures, spiritual journeys)?",
        nl: "Hecht de verkondiging waarde aan de diversiteit in geloofsuitingen (leeftijden, culturen, spirituele wegen)?" },
      { fr: "L'annonce est-elle vécue en lien avec l'Église locale (paroisse, diocèse) ?",
        en: "Is the proclamation lived in connection with the local Church (parish, diocese)?",
        nl: "Wordt de verkondiging beleefd in verbondenheid met de lokale Kerk (parochie, bisdom)?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "L'annonce est-elle enracinée dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the proclamation rooted in attentive listening to the Word of God?",
        nl: "Is de verkondiging geworteld in het aandachtig luisteren naar het Woord van God?" },
      { fr: "L'annonce est-elle préparée et portée dans la prière ?",
        en: "Is the proclamation prepared and carried in prayer?",
        nl: "Wordt de verkondiging in gebed voorbereid en gedragen?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement sur les contenus et les manières d'annoncer ?",
        en: "Is the Word of God the foundation for discernment about the content and ways of proclaiming?",
        nl: "Vormt het Woord van God de basis voor onderscheiding over de inhoud en de manieren van verkondigen?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "L'annonce se nourrit-elle de la célébration de l'Eucharistie et conduit-elle vers elle ?",
        en: "Does the proclamation draw nourishment from the celebration of the Eucharist and lead towards it?",
        nl: "Put de verkondiging uit de viering van de eucharistie en leidt ze ernaartoe?" },
      { fr: "L'annonce favorise-t-elle une participation active et consciente à la liturgie ?",
        en: "Does the proclamation foster active and conscious participation in the liturgy?",
        nl: "Bevordert de verkondiging een actieve en bewuste deelname aan de liturgie?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "L'annonce favorise-t-elle le dialogue et le témoignage commun avec les autres Églises et communautés chrétiennes ?",
        en: "Does the proclamation foster dialogue and common witness with other Churches and Christian communities?",
        nl: "Bevordert de verkondiging de dialoog en het gemeenschappelijk getuigenis met andere Kerken en christelijke gemeenschappen?" },
      { fr: "L'annonce se fait-elle dans le respect et le dialogue avec les autres traditions religieuses et avec les personnes sans religion ?",
        en: "Is the proclamation carried out with respect and in dialogue with other religious traditions and with people of no religion?",
        nl: "Gebeurt de verkondiging met respect en in dialoog met andere religieuze tradities en met mensen zonder religie?" },
      { fr: "L'annonce résiste-t-elle à la tentation de se placer au centre (autoréférentialité) ?",
        en: "Does the proclamation resist the temptation to put itself at the centre (self-referentiality)?",
        nl: "Weerstaat de verkondiging de verleiding om zichzelf centraal te stellen (zelfreferentialiteit)?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les choix concernant l'annonce (contenus, publics, méthodes) font-ils l'objet d'une prise de décision participative ?",
        en: "Are choices concerning the proclamation (content, audiences, methods) the subject of participatory decision-making?",
        nl: "Worden keuzes over de verkondiging (inhoud, doelgroepen, methoden) op een participatieve manier genomen?" },
      { fr: "L'annonce est-elle portée par une communauté plutôt que par une seule personne agissant seule ?",
        en: "Is the proclamation carried by a community rather than by a single person acting alone?",
        nl: "Wordt de verkondiging gedragen door een gemeenschap in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les personnes impliquées se sentent-elles libres de parler ouvertement et d'exprimer leur désaccord ?",
        en: "Do the people involved feel free to speak openly and express disagreement?",
        nl: "Voelen de betrokkenen zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "L'annonce encourage-t-elle un partage plus large des tâches et des responsabilités entre tous les baptisés ?",
        en: "Does the proclamation encourage a wider sharing of tasks and responsibilities among all the baptised?",
        nl: "Bevordert de verkondiging een bredere verdeling van taken en verantwoordelijkheden onder alle gedoopten?" },
      { fr: "L'annonce reflète-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs dans la mission commune d'évangéliser ?",
        en: "Does the proclamation reflect the differentiated co-responsibility of ordained ministers and lay faithful in the shared mission of evangelisation?",
        nl: "Weerspiegelt de verkondiging de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen in de gezamenlijke zending van de evangelisatie?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités de chacun dans l'annonce sont-elles clairement définies et comprises ?",
        en: "Are each person's responsibilities in the proclamation clearly defined and understood?",
        nl: "Zijn ieders verantwoordelijkheden in de verkondiging duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières consacrées à l'annonce est-elle documentée ?",
        en: "Is the management of the human and financial resources devoted to the proclamation documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen die aan de verkondiging besteed worden gedocumenteerd?" },
      { fr: "Les informations essentielles (propositions, calendriers, changements) sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information (activities on offer, schedules, changes) shared openly and in a timely manner?",
        nl: "Wordt essentiële informatie (aanbod, kalenders, wijzigingen) openlijk en tijdig gedeeld?" },
      { fr: "L'annonce fait-elle l'objet d'une évaluation régulière ?",
        en: "Is the proclamation regularly evaluated?",
        nl: "Wordt de verkondiging regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "Celles et ceux qui annoncent la foi bénéficient-ils d'une formation intégrale et continue (intellectuelle, affective, relationnelle, spirituelle) ?",
        en: "Do those who proclaim the faith receive integral and ongoing formation (intellectual, affective, relational, spiritual)?",
        nl: "Krijgen wie het geloof verkondigen een integrale en permanente vorming (intellectueel, affectief, relationeel, spiritueel)?" },
      { fr: "L'annonce comprend-elle des temps de relecture et d'évaluation continue des expériences vécues ?",
        en: "Does the proclamation include times of review and continuous evaluation of lived experiences?",
        nl: "Zijn er binnen de verkondiging momenten van terugblik en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "L'annonce permet-elle d'apprendre des échecs et des résistances ?",
        en: "Does the proclamation make it possible to learn from failures and resistance?",
        nl: "Maakt de verkondiging het mogelijk om te leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "L'annonce témoigne-t-elle du Christ vivant et ressuscité ?",
        en: "Does the proclamation bear witness to the living and risen Christ?",
        nl: "Legt de verkondiging getuigenis af van de levende en verrezen Christus?" },
      { fr: "L'annonce vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the proclamation aim to deepen each person's relationship with Christ?",
        nl: "Heeft de verkondiging tot doel ieders relatie met Christus te verdiepen?" },
      { fr: "L'annonce promeut-elle une manière de vivre chrétienne qui intègre la foi et la vie quotidienne ?",
        en: "Does the proclamation promote a Christian way of life that integrates faith and daily life?",
        nl: "Bevordert de verkondiging een christelijke levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "L'annonce contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the proclamation contribute to a new missionary impulse?",
        nl: "Draagt de verkondiging bij aan een nieuwe missionaire impuls?" },
      { fr: "L'annonce s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the proclamation embedded in the missionary dynamic of the local Church?",
        nl: "Is de verkondiging verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus et mis au service de l'annonce ?",
        en: "Are the charisms of each person recognised and placed at the service of the proclamation?",
        nl: "Worden de charisma’s van ieder erkend en ingezet ten dienste van de verkondiging?" },
      { fr: "L'annonce s'appuie-t-elle sur une variété de services et de ministères (catéchistes, accompagnateurs, ministère de la Parole…) répondant aux besoins pastoraux ?",
        en: "Does the proclamation rely on a variety of services and ministries (catechists, companions, ministry of the Word…) responding to pastoral needs?",
        nl: "Steunt de verkondiging op verschillende diensttaken en ambten (catechisten, begeleiders, bediening van het Woord…) die tegemoetkomen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles la possibilité d'exercer des responsabilités dans l'annonce ?",
        en: "Do women have the opportunity to exercise responsibilities in the proclamation?",
        nl: "Hebben vrouwen de mogelijkheid om verantwoordelijkheid op te nemen in de verkondiging?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "L'annonce tient-elle compte des réalités historiques, contemporaines, sociales, culturelles et numériques de celles et ceux à qui elle s'adresse ?",
        en: "Does the proclamation take into account the historical, contemporary, social, cultural and digital realities of those to whom it is addressed?",
        nl: "Houdt de verkondiging rekening met de historische, hedendaagse, sociale, culturele en digitale omstandigheden van wie ze aanspreekt?" },
      { fr: "L'annonce prend-elle en compte les réalités de mobilité culturelle et géographique ?",
        en: "Does the proclamation take the realities of cultural and geographic mobility into account?",
        nl: "Houdt de verkondiging rekening met de realiteit van culturele en geografische mobiliteit?" },
      { fr: "L'annonce entre-t-elle en dialogue avec d'autres acteurs de la société, de la culture, de la politique, etc. ?",
        en: "Does the proclamation engage in dialogue with other actors in society, culture, politics, etc.?",
        nl: "Gaat de verkondiging de dialoog aan met andere actoren uit de samenleving, de cultuur, de politiek enz.?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "L'annonce conduit-elle à une conversion personnelle des participants, y compris de celles et ceux qui annoncent ?",
        en: "Does the proclamation lead to a personal conversion of the participants, including those who proclaim?",
        nl: "Leidt de verkondiging tot een persoonlijke bekering van de deelnemers, ook van wie verkondigt?" },
      { fr: "L'annonce rend-elle possible une transformation communautaire ?",
        en: "Does the proclamation make communal transformation possible?",
        nl: "Maakt de verkondiging een gemeenschappelijke transformatie mogelijk?" },
      { fr: "L'annonce contribue-t-elle au renouveau spirituel et à la réforme structurelle de l'Église ?",
        en: "Does the proclamation contribute to the spiritual renewal and structural reform of the Church?",
        nl: "Draagt de verkondiging bij aan de spirituele vernieuwing en de structurele hervorming van de Kerk?" }
    ]
  },

  /* ---------- Formulaire 2 — Gouverner ---------- */
  gouverner: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "La gouvernance est-elle ouverte à tous, y compris à celles et ceux dont la voix est rarement entendue (personnes marginalisées, jeunes, nouveaux venus) ?",
        en: "Is governance open to everyone, including those whose voices are rarely heard (marginalised people, young people, newcomers)?",
        nl: "Staat het bestuur open voor iedereen, ook voor wie zelden gehoord wordt (gemarginaliseerde mensen, jongeren, nieuwkomers)?" },
      { fr: "Les instances de gouvernance respectent-elles l'égale dignité de chaque membre, quels que soient son statut ou sa fonction ?",
        en: "Do governing bodies respect the equal dignity of each member, whatever their status or function?",
        nl: "Respecteren de bestuursorganen de gelijke waardigheid van elk lid, ongeacht zijn of haar status of functie?" },
      { fr: "Les modes de gouvernance favorisent-ils une écoute réciproque entre responsables et membres de la communauté ?",
        en: "Do the ways of governing foster reciprocal listening between leaders and members of the community?",
        nl: "Bevordert de manier van besturen het wederzijds luisteren tussen verantwoordelijken en leden van de gemeenschap?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "La gouvernance accueille-t-elle les divergences de points de vue comme une occasion de grandir et de mûrir ensemble ?",
        en: "Does governance welcome differing points of view as an opportunity to grow and mature together?",
        nl: "Verwelkomt het bestuur uiteenlopende standpunten als een kans om samen te groeien en tot volwassenheid te komen?" },
      { fr: "La composition des instances reflète-t-elle la diversité de la communauté (âge, sexe, vocation, origine sociale et culturelle) ?",
        en: "Does the composition of the bodies reflect the diversity of the community (age, sex, vocation, social and cultural background)?",
        nl: "Weerspiegelt de samenstelling van de bestuursorganen de diversiteit van de gemeenschap (leeftijd, geslacht, roeping, sociale en culturele achtergrond)?" },
      { fr: "La gouvernance s'exerce-t-elle en communion avec l'Église locale et ses orientations pastorales ?",
        en: "Is governance exercised in communion with the local Church and its pastoral orientations?",
        nl: "Wordt er bestuurd in gemeenschap met de lokale Kerk en haar pastorale beleidslijnen?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "Les réunions et les instances de gouvernance sont-elles enracinées dans l'écoute de la Parole de Dieu ?",
        en: "Are meetings and governing bodies rooted in listening to the Word of God?",
        nl: "Zijn de vergaderingen en bestuursorganen geworteld in het luisteren naar het Woord van God?" },
      { fr: "Les temps de discernement et de décision sont-ils portés par la prière ?",
        en: "Are times of discernment and decision-making carried by prayer?",
        nl: "Worden de momenten van onderscheiding en besluitvorming door gebed gedragen?" },
      { fr: "La Parole de Dieu est-elle le point de départ et le critère du discernement dans les décisions prises ?",
        en: "Is the Word of God the starting point and the criterion of discernment in the decisions taken?",
        nl: "Is het Woord van God het vertrekpunt en de maatstaf van de onderscheiding bij de genomen beslissingen?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "La gouvernance puise-t-elle dans l'Eucharistie le sens de l'unité dans la diversité des vocations, des charismes et des ministères ?",
        en: "Does governance draw from the Eucharist a sense of unity in the diversity of vocations, charisms and ministries?",
        nl: "Put het bestuur uit de eucharistie de zin voor eenheid in de verscheidenheid van roepingen, charisma’s en ambten?" },
      { fr: "Les décisions prises favorisent-elles la vie liturgique et la participation active de la communauté à la liturgie ?",
        en: "Do the decisions taken foster liturgical life and the active participation of the community in the liturgy?",
        nl: "Bevorderen de genomen beslissingen het liturgisch leven en de actieve deelname van de gemeenschap aan de liturgie?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "Les instances consultent-elles les autres Églises et communautés chrétiennes, ou collaborent-elles avec elles, sur les questions d'intérêt commun ?",
        en: "Do the bodies consult or collaborate with other Churches and Christian communities on matters of common interest?",
        nl: "Raadplegen de bestuursorganen andere Kerken en christelijke gemeenschappen, of werken ze met hen samen, over zaken van gemeenschappelijk belang?" },
      { fr: "La gouvernance tient-elle compte du dialogue avec les autres traditions religieuses et avec les personnes sans religion présentes sur le territoire ?",
        en: "Does governance take into account dialogue with other religious traditions and with people of no religion present in the area?",
        nl: "Houdt het bestuur rekening met de dialoog met andere religieuze tradities en met mensen zonder religie die in de regio aanwezig zijn?" },
      { fr: "La gouvernance résiste-t-elle à la tentation de l'autoréférentialité et de la préservation de ses propres intérêts ?",
        en: "Does governance resist the temptation of self-referentiality and of protecting its own interests?",
        nl: "Weerstaat het bestuur de verleiding van zelfreferentialiteit en van het beschermen van de eigen belangen?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les processus de décision favorisent-ils la participation la plus large possible du peuple de Dieu ?",
        en: "Do decision-making processes foster the widest possible participation of the People of God?",
        nl: "Bevorderen de besluitvormingsprocessen een zo breed mogelijke deelname van het Volk van God?" },
      { fr: "Les décisions sont-elles élaborées en communauté plutôt que prises par une seule personne agissant seule ?",
        en: "Are decisions developed in community rather than taken by a single person acting alone?",
        nl: "Worden beslissingen in gemeenschap uitgewerkt in plaats van genomen door één persoon die op eigen houtje handelt?" },
      { fr: "Les membres des instances se sentent-ils libres de parler ouvertement et d'exprimer leur désaccord ?",
        en: "Do members of the bodies feel free to speak openly and express disagreement?",
        nl: "Voelen de leden van de bestuursorganen zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "La gouvernance encourage-t-elle un partage plus large des tâches et des responsabilités, y compris par la délégation ?",
        en: "Does governance encourage a wider sharing of tasks and responsibilities, including through delegation?",
        nl: "Bevordert het bestuur een bredere verdeling van taken en verantwoordelijkheden, ook door delegatie?" },
      { fr: "La gouvernance reflète-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs, en discernant ce qui relève du ministère ordonné et ce qui peut être confié à d'autres ?",
        en: "Does governance reflect the differentiated co-responsibility of ordained ministers and lay faithful, discerning what belongs to the ordained ministry and what can be entrusted to others?",
        nl: "Weerspiegelt het bestuur de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen, door te onderscheiden wat tot het gewijde ambt behoort en wat aan anderen kan worden toevertrouwd?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les rôles et responsabilités au sein des instances sont-ils clairement définis et compris ?",
        en: "Are roles and responsibilities within the bodies clearly defined and understood?",
        nl: "Zijn de rollen en verantwoordelijkheden binnen de bestuursorganen duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières est-elle documentée et communiquée à la communauté ?",
        en: "Is the management of human and financial resources documented and communicated to the community?",
        nl: "Wordt het beheer van de mensen en financiële middelen gedocumenteerd en aan de gemeenschap meegedeeld?" },
      { fr: "Les informations essentielles (ordres du jour, comptes rendus, décisions) sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information (agendas, minutes, decisions) shared openly and in a timely manner?",
        nl: "Wordt essentiële informatie (agenda’s, verslagen, beslissingen) openlijk en tijdig gedeeld?" },
      { fr: "Le fonctionnement des instances et les décisions prises font-ils l'objet d'une évaluation régulière ?",
        en: "Are the functioning of the bodies and the decisions taken regularly evaluated?",
        nl: "Worden de werking van de bestuursorganen en de genomen beslissingen regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "Les membres des instances reçoivent-ils une formation au discernement communautaire et à la gouvernance synodale ?",
        en: "Do members of the bodies receive formation in communal discernment and synodal governance?",
        nl: "Krijgen de leden van de bestuursorganen een vorming in gemeenschappelijke onderscheiding en synodaal bestuur?" },
      { fr: "La gouvernance prévoit-elle des temps de relecture et d'évaluation continue des décisions et de leurs effets ?",
        en: "Does governance provide for times of review and continuous evaluation of decisions and their effects?",
        nl: "Voorziet het bestuur momenten van terugblik en voortdurende evaluatie van de beslissingen en hun gevolgen?" },
      { fr: "La gouvernance permet-elle d'apprendre des échecs et des résistances ?",
        en: "Does governance make it possible to learn from failures and resistance?",
        nl: "Maakt het bestuur het mogelijk om te leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "La manière de gouverner témoigne-t-elle du Christ vivant, venu non pour être servi mais pour servir ?",
        en: "Does the way of governing bear witness to the living Christ, who came not to be served but to serve?",
        nl: "Legt de manier van besturen getuigenis af van de levende Christus, die niet gekomen is om gediend te worden, maar om te dienen?" },
      { fr: "La gouvernance aide-t-elle celles et ceux qui y participent à approfondir leur relation avec le Christ ?",
        en: "Does governance help those who take part in it to deepen their relationship with Christ?",
        nl: "Helpt het bestuur wie eraan deelneemt om de relatie met Christus te verdiepen?" },
      { fr: "Les décisions prises promeuvent-elles une manière de vivre chrétienne qui intègre la foi et la vie quotidienne ?",
        en: "Do the decisions taken promote a Christian way of life that integrates faith and daily life?",
        nl: "Bevorderen de genomen beslissingen een christelijke levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "Les décisions prises contribuent-elles à donner un nouvel élan à la mission ?",
        en: "Do the decisions taken contribute to giving a new impulse to mission?",
        nl: "Dragen de genomen beslissingen bij aan een nieuwe impuls voor de zending?" },
      { fr: "La gouvernance s'inscrit-elle dans la dynamique missionnaire de l'Église locale (projets pastoraux, orientations diocésaines) ?",
        en: "Is governance embedded in the missionary dynamic of the local Church (pastoral projects, diocesan orientations)?",
        nl: "Is het bestuur verankerd in de missionaire dynamiek van de lokale Kerk (pastorale projecten, diocesane beleidslijnen)?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus et sollicités dans la gouvernance, au service des besoins de la communauté et de la mission ?",
        en: "Are the charisms of each person recognised and called upon in governance, for the needs of the community and the mission?",
        nl: "Worden de charisma’s van ieder erkend en ingezet in het bestuur, in het licht van de behoeften van de gemeenschap en de zending?" },
      { fr: "La gouvernance soutient-elle une variété de services et de ministères répondant aux besoins pastoraux ?",
        en: "Does governance support a variety of services and ministries responding to pastoral needs?",
        nl: "Ondersteunt het bestuur verschillende diensttaken en ambten die tegemoetkomen aan de pastorale behoeften?" },
      { fr: "Les femmes ont-elles la possibilité d'assumer des rôles de responsabilité et de décision dans la gouvernance ?",
        en: "Do women have the opportunity to take on roles of responsibility and decision-making in governance?",
        nl: "Hebben vrouwen de mogelijkheid om verantwoordelijke en beslissende functies op te nemen in het bestuur?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La gouvernance tient-elle compte des réalités historiques, contemporaines, sociales, culturelles et numériques du territoire ?",
        en: "Does governance take into account the historical, contemporary, social, cultural and digital realities of the area?",
        nl: "Houdt het bestuur rekening met de historische, hedendaagse, sociale, culturele en digitale omstandigheden van de regio?" },
      { fr: "La gouvernance prend-elle en compte les réalités de mobilité culturelle et géographique ?",
        en: "Does governance take the realities of cultural and geographic mobility into account?",
        nl: "Houdt het bestuur rekening met de realiteit van culturele en geografische mobiliteit?" },
      { fr: "La gouvernance entre-t-elle en dialogue avec d'autres acteurs de la société (collectivités, associations, monde culturel et politique, etc.) ?",
        en: "Does governance engage in dialogue with other actors in society (local authorities, associations, the cultural and political world, etc.)?",
        nl: "Gaat het bestuur de dialoog aan met andere actoren uit de samenleving (lokale overheden, verenigingen, de culturele en politieke wereld enz.)?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La manière de gouverner suscite-t-elle une conversion personnelle chez celles et ceux qui y participent ?",
        en: "Does the way of governing prompt a personal conversion in those who take part in it?",
        nl: "Brengt de manier van besturen een persoonlijke bekering teweeg bij wie eraan deelneemt?" },
      { fr: "La gouvernance rend-elle possible une transformation communautaire ?",
        en: "Does governance make communal transformation possible?",
        nl: "Maakt het bestuur een gemeenschappelijke transformatie mogelijk?" },
      { fr: "La gouvernance contribue-t-elle au renouveau spirituel et à la réforme des structures de l'Église ?",
        en: "Does governance contribute to the spiritual renewal and the reform of the structures of the Church?",
        nl: "Draagt het bestuur bij aan de spirituele vernieuwing en de hervorming van de structuren van de Kerk?" }
    ]
  },

  /* ---------- Formulaire 3 — Servir ---------- */
  servir: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "Le service accueille-t-il chacun, en particulier les personnes pauvres, marginalisées ou hésitantes à demander de l'aide ?",
        en: "Does the service welcome everyone, especially people who are poor, marginalised or hesitant to ask for help?",
        nl: "Is iedereen welkom in de dienst, in het bijzonder mensen die arm of gemarginaliseerd zijn of die aarzelen om hulp te vragen?" },
      { fr: "Le service respecte-t-il l'égale dignité des personnes servies et de celles qui servent ?",
        en: "Does the service respect the equal dignity of those who are served and of those who serve?",
        nl: "Respecteert de dienst de gelijke waardigheid van wie gediend wordt en van wie dient?" },
      { fr: "Le service favorise-t-il une écoute réciproque, où les personnes aidées sont aussi reconnues comme porteuses d'une parole et de dons ?",
        en: "Does the service foster reciprocal listening, in which the people helped are also recognised as bearers of a word and of gifts?",
        nl: "Bevordert de dienst het wederzijds luisteren, waarbij de mensen die geholpen worden ook erkend worden als dragers van een eigen woord en eigen gaven?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "Le service invite-t-il chacun à s'ouvrir à l'altérité et à se laisser transformer par la rencontre ?",
        en: "Does the service invite each person to open themselves to otherness and to let themselves be transformed by the encounter?",
        nl: "Nodigt de dienst iedereen uit om zich open te stellen voor anders-zijn en zich door de ontmoeting te laten veranderen?" },
      { fr: "Le service valorise-t-il la diversité des personnes, de leurs cultures et de leurs expressions de foi ?",
        en: "Does the service value the diversity of people, of their cultures and of their expressions of faith?",
        nl: "Hecht de dienst waarde aan de diversiteit van de mensen, van hun culturen en van hun geloofsuitingen?" },
      { fr: "Le service est-il vécu en lien avec l'Église locale ?",
        en: "Is the service lived in connection with the local Church?",
        nl: "Wordt de dienst beleefd in verbondenheid met de lokale Kerk?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "Le service est-il enraciné dans une écoute attentive de la Parole de Dieu ?",
        en: "Is the service rooted in attentive listening to the Word of God?",
        nl: "Is de dienst geworteld in het aandachtig luisteren naar het Woord van God?" },
      { fr: "Le service est-il inspiré et soutenu par la prière ?",
        en: "Is the service inspired and sustained by prayer?",
        nl: "Wordt de dienst geïnspireerd en gedragen door gebed?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement sur les besoins auxquels répondre et la manière d'y répondre ?",
        en: "Is the Word of God the foundation for discernment about which needs to meet and how to meet them?",
        nl: "Vormt het Woord van God de basis voor onderscheiding over de noden waarop geantwoord moet worden en de manier waarop?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "Le service est-il nourri par la célébration de l'Eucharistie, sacrement du don de soi ?",
        en: "Is the service nourished by the celebration of the Eucharist, the sacrament of self-giving?",
        nl: "Wordt de dienst gevoed door de viering van de eucharistie, sacrament van de zelfgave?" },
      { fr: "Le service favorise-t-il la participation des personnes servies et de celles qui servent à la vie liturgique de la communauté ?",
        en: "Does the service foster the participation of those who are served and those who serve in the liturgical life of the community?",
        nl: "Bevordert de dienst de deelname van wie gediend wordt en van wie dient aan het liturgisch leven van de gemeenschap?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "Le service est-il l'occasion d'une collaboration avec d'autres Églises et communautés chrétiennes ?",
        en: "Is the service an opportunity for collaboration with other Churches and Christian communities?",
        nl: "Is de dienst een gelegenheid tot samenwerking met andere Kerken en christelijke gemeenschappen?" },
      { fr: "Le service s'ouvre-t-il au dialogue et à la collaboration avec d'autres traditions religieuses et avec des personnes sans religion ?",
        en: "Is the service open to dialogue and collaboration with other religious traditions and with people of no religion?",
        nl: "Staat de dienst open voor dialoog en samenwerking met andere religieuze tradities en met mensen zonder religie?" },
      { fr: "Le service résiste-t-il à la tentation de se placer au centre, en évitant notamment toute attitude paternaliste ?",
        en: "Does the service resist the temptation to put itself at the centre, in particular by avoiding any paternalistic attitude?",
        nl: "Weerstaat de dienst de verleiding om zichzelf centraal te stellen, met name door elke betuttelende houding te vermijden?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "Les personnes servies sont-elles associées au discernement et aux décisions qui les concernent ?",
        en: "Are the people served involved in the discernment and decisions that concern them?",
        nl: "Worden de mensen die gediend worden betrokken bij de onderscheiding en de beslissingen die hen aanbelangen?" },
      { fr: "Le service est-il porté par une communauté plutôt que par une seule personne agissant seule ?",
        en: "Is the service carried by a community rather than by a single person acting alone?",
        nl: "Wordt de dienst gedragen door een gemeenschap in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les participants (bénévoles, personnes accompagnées, responsables) se sentent-ils libres de parler ouvertement et d'exprimer leur désaccord ?",
        en: "Do participants (volunteers, people accompanied, leaders) feel free to speak openly and express disagreement?",
        nl: "Voelen de deelnemers (vrijwilligers, begeleide personen, verantwoordelijken) zich vrij om openlijk te spreken en hun onenigheid te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine le discernement ou la prise de décision ?",
        en: "Are steps taken to ensure that no social or cultural group dominates the discernment or decision-making process?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep het onderscheidings- of besluitvormingsproces domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "Le service encourage-t-il un partage plus large des tâches et des responsabilités au sein du peuple de Dieu ?",
        en: "Does the service encourage a wider sharing of tasks and responsibilities within the People of God?",
        nl: "Bevordert de dienst een bredere verdeling van de taken en verantwoordelijkheden binnen het Volk van God?" },
      { fr: "Le service reflète-t-il la coresponsabilité différenciée des ministres ordonnés (notamment des diacres) et des fidèles laïcs dans la mission commune ?",
        en: "Does the service reflect the differentiated co-responsibility of ordained ministers (especially deacons) and lay faithful in the shared mission?",
        nl: "Weerspiegelt de dienst de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers (in het bijzonder diakens) en lekengelovigen in de gezamenlijke zending?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités au sein du service sont-elles clairement définies et comprises ?",
        en: "Are responsibilities within the service clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden binnen de dienst duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines (bénévoles, salariés) et financières (dons, subventions) du service est-elle documentée ?",
        en: "Is the management of the service's human resources (volunteers, employees) and financial resources (donations, grants) documented?",
        nl: "Wordt het beheer van de mensen (vrijwilligers, medewerkers) en de financiële middelen (giften, subsidies) van de dienst gedocumenteerd?" },
      { fr: "Les informations essentielles sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information shared openly and in a timely manner?",
        nl: "Wordt essentiële informatie openlijk en tijdig gedeeld?" },
      { fr: "Le service fait-il l'objet d'une évaluation régulière, y compris de ses effets sur les personnes servies ?",
        en: "Is the service regularly evaluated, including its effects on the people served?",
        nl: "Wordt de dienst regelmatig geëvalueerd, ook wat betreft de gevolgen voor de mensen die gediend worden?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "Celles et ceux qui servent reçoivent-ils une formation et un accompagnement (humain, relationnel, spirituel) ?",
        en: "Do those who serve receive formation and accompaniment (human, relational, spiritual)?",
        nl: "Krijgen wie dienen een vorming en begeleiding (menselijk, relationeel, spiritueel)?" },
      { fr: "Le service comprend-il des temps de relecture et d'évaluation continue des expériences vécues ?",
        en: "Does the service include times of review and continuous evaluation of lived experiences?",
        nl: "Zijn er binnen de dienst momenten van terugblik en voortdurende evaluatie van de beleefde ervaringen?" },
      { fr: "Le service permet-il d'apprendre des échecs et des résistances ?",
        en: "Does the service make it possible to learn from failures and resistance?",
        nl: "Maakt de dienst het mogelijk om te leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "Le service témoigne-t-il du Christ vivant, présent dans les plus petits ?",
        en: "Does the service bear witness to the living Christ, present in the least of these?",
        nl: "Legt de dienst getuigenis af van de levende Christus, aanwezig in de minsten?" },
      { fr: "Le service aide-t-il chacun, celui qui sert comme celui qui est servi, à approfondir sa relation avec le Christ ?",
        en: "Does the service help each person, those who serve as well as those who are served, to deepen their relationship with Christ?",
        nl: "Helpt de dienst iedereen, wie dient én wie gediend wordt, om de relatie met Christus te verdiepen?" },
      { fr: "Le service promeut-il une manière de vivre chrétienne qui intègre la foi et la vie quotidienne ?",
        en: "Does the service promote a Christian way of life that integrates faith and daily life?",
        nl: "Bevordert de dienst een christelijke levenswijze waarin geloof en dagelijks leven met elkaar worden verbonden?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "Le service contribue-t-il à un nouvel élan missionnaire ?",
        en: "Does the service contribute to a new missionary impulse?",
        nl: "Draagt de dienst bij aan een nieuwe missionaire impuls?" },
      { fr: "Le service s'inscrit-il dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the service embedded in the missionary dynamic of the local Church?",
        nl: "Is de dienst verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun, y compris ceux des personnes servies, sont-ils reconnus pour les besoins de la communauté et de la mission ?",
        en: "Are the charisms of each person, including those of the people served, recognised for the needs of the community and the mission?",
        nl: "Worden de charisma’s van ieder, ook die van de mensen die gediend worden, erkend in het licht van de behoeften van de gemeenschap en de zending?" },
      { fr: "Le service soutient-il une variété de services et de ministères répondant aux besoins pastoraux et sociaux ?",
        en: "Does the service support a variety of services and ministries responding to pastoral and social needs?",
        nl: "Ondersteunt de dienst verschillende diensttaken en ambten die tegemoetkomen aan de pastorale en sociale behoeften?" },
      { fr: "Les femmes ont-elles la possibilité d'assumer des rôles de responsabilité dans ce service ?",
        en: "Do women have the opportunity to take on roles of responsibility in this service?",
        nl: "Hebben vrouwen de mogelijkheid om verantwoordelijke functies op te nemen in deze dienst?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "Le service est-il attentif aux réalités historiques, contemporaines, sociales, culturelles et numériques, y compris aux causes de la pauvreté et de l'exclusion ?",
        en: "Is the service attentive to historical, contemporary, social, cultural and digital realities, including the causes of poverty and exclusion?",
        nl: "Heeft de dienst aandacht voor de historische, hedendaagse, sociale, culturele en digitale omstandigheden, ook voor de oorzaken van armoede en uitsluiting?" },
      { fr: "Le service prend-il en compte les réalités de mobilité culturelle et géographique (migrants, personnes déplacées ou de passage) ?",
        en: "Does the service take the realities of cultural and geographic mobility into account (migrants, displaced people or people passing through)?",
        nl: "Houdt de dienst rekening met de realiteit van culturele en geografische mobiliteit (migranten, ontheemden of mensen op doortocht)?" },
      { fr: "Le service dialogue-t-il et collabore-t-il avec d'autres acteurs de la société (associations, services publics, monde politique, etc.) ?",
        en: "Does the service engage in dialogue and collaborate with other actors in society (associations, public services, the political world, etc.)?",
        nl: "Gaat de dienst de dialoog en de samenwerking aan met andere actoren uit de samenleving (verenigingen, openbare diensten, de politieke wereld enz.)?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "Le service conduit-il à une conversion personnelle des participants ?",
        en: "Does the service lead to a personal conversion of the participants?",
        nl: "Leidt de dienst tot een persoonlijke bekering van de deelnemers?" },
      { fr: "Le service rend-il possible une transformation communautaire ?",
        en: "Does the service make communal transformation possible?",
        nl: "Maakt de dienst een gemeenschappelijke transformatie mogelijk?" },
      { fr: "Le service contribue-t-il au renouveau spirituel et à la réforme structurelle de l'Église ?",
        en: "Does the service contribute to the spiritual renewal and structural reform of the Church?",
        nl: "Draagt de dienst bij aan de spirituele vernieuwing en de structurele hervorming van de Kerk?" }
    ]
  },

  /* ---------- Formulaire 4 — Célébrer la foi ---------- */
  celebrer: {
    // Pilier 1 — Hospitalité et égale dignité
    "hospitalite": [
      { fr: "La célébration accueille-t-elle chacun, en particulier celles et ceux qui se sentent marginalisés, différents, éloignés ou hésitants à participer ?",
        en: "Does the celebration welcome everyone, especially those who feel marginalised, different, distant or hesitant to participate?",
        nl: "Is iedereen welkom in de viering, in het bijzonder wie zich gemarginaliseerd, anders of ver weg voelt, of aarzelt om deel te nemen?" },
      { fr: "La célébration respecte-t-elle l'égale dignité de tous les baptisés qui y participent ?",
        en: "Does the celebration respect the equal dignity of all the baptised who take part in it?",
        nl: "Respecteert de viering de gelijke waardigheid van alle gedoopten die eraan deelnemen?" },
      { fr: "La célébration favorise-t-elle une écoute réciproque, dans sa préparation comme dans son déroulement ?",
        en: "Does the celebration foster reciprocal listening, both in its preparation and in the way it unfolds?",
        nl: "Bevordert de viering het wederzijds luisteren, zowel bij de voorbereiding als tijdens het verloop?" }
    ],
    // Pilier 2 — Accueil de la différence et de la diversité
    "diversite": [
      { fr: "La célébration invite-t-elle chacun à s'ouvrir à l'altérité pour grandir dans la foi ?",
        en: "Does the celebration invite each person to open themselves to otherness in order to grow in faith?",
        nl: "Nodigt de viering iedereen uit om zich open te stellen voor anders-zijn, om zo te groeien in het geloof?" },
      { fr: "La célébration valorise-t-elle la diversité des expressions de la foi (langues, chants, cultures, piété populaire) ?",
        en: "Does the celebration value the diversity of expressions of faith (languages, songs, cultures, popular piety)?",
        nl: "Hecht de viering waarde aan de diversiteit in geloofsuitingen (talen, liederen, culturen, volksvroomheid)?" },
      { fr: "La célébration manifeste-t-elle les liens avec l'Église locale ?",
        en: "Does the celebration express the bonds with the local Church?",
        nl: "Brengt de viering de band met de lokale Kerk tot uitdrukking?" }
    ],
    // Pilier 3 — Enracinée dans la prière et nourrie par l'écoute de la Parole de Dieu
    "parole-de-dieu": [
      { fr: "La célébration accorde-t-elle une place centrale à l'écoute attentive de la Parole de Dieu ?",
        en: "Does the celebration give a central place to attentive listening to the Word of God?",
        nl: "Geeft de viering een centrale plaats aan het aandachtig luisteren naar het Woord van God?" },
      { fr: "La célébration est-elle préparée et vécue dans un climat de prière ?",
        en: "Is the celebration prepared and lived in a climate of prayer?",
        nl: "Wordt de viering in een sfeer van gebed voorbereid en beleefd?" },
      { fr: "La Parole de Dieu est-elle le fondement du discernement dans les choix liturgiques ?",
        en: "Is the Word of God the foundation for discernment in liturgical choices?",
        nl: "Vormt het Woord van God de basis voor onderscheiding bij de liturgische keuzes?" }
    ],
    // Pilier 4 — Source et sommet : l'Eucharistie
    "eucharistie": [
      { fr: "La célébration est-elle nourrie par l'Eucharistie et orientée vers elle ?",
        en: "Is the celebration nourished by the Eucharist and oriented towards it?",
        nl: "Wordt de viering gevoed door de eucharistie en is ze erop gericht?" },
      { fr: "La célébration favorise-t-elle une participation pleine, consciente et active de l'assemblée ?",
        en: "Does the celebration foster the full, conscious and active participation of the assembly?",
        nl: "Bevordert de viering een volledige, bewuste en actieve deelname van de verzamelde gemeenschap?" }
    ],
    // Pilier 5 — Dimension œcuménique et dialogue interreligieux dans le monde
    "oecumenisme": [
      { fr: "La vie liturgique laisse-t-elle place à des temps de prière avec d'autres Églises et communautés chrétiennes ?",
        en: "Does liturgical life leave room for times of prayer with other Churches and Christian communities?",
        nl: "Laat het liturgisch leven ruimte voor momenten van gebed met andere Kerken en christelijke gemeenschappen?" },
      { fr: "La célébration est-elle attentive aux personnes d'autres traditions religieuses ou sans religion qui y sont présentes (mariages, funérailles, fêtes) ?",
        en: "Is the celebration attentive to people of other religious traditions or of no religion who are present (weddings, funerals, feasts)?",
        nl: "Heeft de viering aandacht voor aanwezigen uit andere religieuze tradities of zonder religie (huwelijken, uitvaarten, feesten)?" },
      { fr: "La célébration résiste-t-elle à la tentation de l'entre-soi et de l'autoréférentialité ?",
        en: "Does the celebration resist the temptation of insularity and self-referentiality?",
        nl: "Weerstaat de viering de verleiding om zich in eigen kring op te sluiten en zelfreferentieel te worden?" }
    ],
    // Pilier 6 — Implication dans le discernement et la prise de décision
    "discernement-decision": [
      { fr: "La préparation des célébrations associe-t-elle largement la communauté aux choix et aux décisions ?",
        en: "Does the preparation of celebrations widely involve the community in choices and decisions?",
        nl: "Betrekt de voorbereiding van de vieringen de gemeenschap ruim bij de keuzes en beslissingen?" },
      { fr: "La célébration est-elle préparée et animée par une communauté plutôt que par une seule personne agissant seule ?",
        en: "Is the celebration prepared and led by a community rather than by a single person acting alone?",
        nl: "Wordt de viering voorbereid en geleid door een gemeenschap in plaats van door één persoon die op eigen houtje handelt?" },
      { fr: "Les participants se sentent-ils libres d'exprimer ouvertement leurs avis et leurs désaccords sur la vie liturgique ?",
        en: "Do participants feel free to express their views and disagreements about liturgical life openly?",
        nl: "Voelen de deelnemers zich vrij om hun mening en hun onenigheid over het liturgisch leven openlijk te uiten?" },
      { fr: "Des mesures sont-elles prises pour qu'aucun groupe social ou culturel ne domine les choix liturgiques ?",
        en: "Are steps taken to ensure that no social or cultural group dominates liturgical choices?",
        nl: "Worden er maatregelen genomen om ervoor te zorgen dat geen enkele sociale of culturele groep de liturgische keuzes domineert?" }
    ],
    // Pilier 7 — Coresponsabilité
    "coresponsabilite": [
      { fr: "La célébration encourage-t-elle un partage plus large des tâches et des responsabilités (accueil, lecture, chant, service de l'autel, etc.) ?",
        en: "Does the celebration encourage a wider sharing of tasks and responsibilities (welcome, reading, singing, altar service, etc.)?",
        nl: "Bevordert de viering een bredere verdeling van taken en verantwoordelijkheden (onthaal, lezingen, zang, altaardienst enz.)?" },
      { fr: "La célébration manifeste-t-elle la coresponsabilité différenciée des ministres ordonnés et des fidèles laïcs, chacun selon sa vocation ?",
        en: "Does the celebration express the differentiated co-responsibility of ordained ministers and lay faithful, each according to their vocation?",
        nl: "Brengt de viering de gedifferentieerde medeverantwoordelijkheid van gewijde ambtsdragers en lekengelovigen tot uitdrukking, ieder volgens de eigen roeping?" }
    ],
    // Pilier 8 — Transparence, reddition de comptes et évaluation
    "transparence": [
      { fr: "Les responsabilités dans la préparation et l'animation des célébrations sont-elles clairement définies et comprises ?",
        en: "Are responsibilities for preparing and leading celebrations clearly defined and understood?",
        nl: "Zijn de verantwoordelijkheden bij de voorbereiding en het leiden van de vieringen duidelijk vastgelegd en worden ze begrepen?" },
      { fr: "La gestion des ressources humaines et financières liées aux célébrations (quêtes, offrandes, matériel) est-elle documentée ?",
        en: "Is the management of the human and financial resources related to celebrations (collections, offerings, equipment) documented?",
        nl: "Wordt het beheer van de mensen en financiële middelen die met de vieringen verbonden zijn (collectes, offergaven, materiaal) gedocumenteerd?" },
      { fr: "Les informations essentielles (horaires, changements, propositions) sont-elles partagées ouvertement et en temps utile ?",
        en: "Is essential information (times, changes, activities on offer) shared openly and in a timely manner?",
        nl: "Wordt essentiële informatie (uurroosters, wijzigingen, aanbod) openlijk en tijdig gedeeld?" },
      { fr: "La vie liturgique fait-elle l'objet d'une évaluation régulière ?",
        en: "Is liturgical life regularly evaluated?",
        nl: "Wordt het liturgisch leven regelmatig geëvalueerd?" }
    ],
    // Pilier 9 — Ouverture à la formation et à l'apprentissage par l'expérience
    "formation": [
      { fr: "Celles et ceux qui préparent et animent les célébrations bénéficient-ils d'une formation liturgique et spirituelle ?",
        en: "Do those who prepare and lead celebrations receive liturgical and spiritual formation?",
        nl: "Krijgen wie de vieringen voorbereiden en leiden een liturgische en spirituele vorming?" },
      { fr: "La pratique comprend-elle des temps de relecture et d'évaluation continue des célébrations vécues ?",
        en: "Does the practice include times of review and continuous evaluation of the celebrations experienced?",
        nl: "Zijn er binnen de geloofspraktijk momenten van terugblik en voortdurende evaluatie van de beleefde vieringen?" },
      { fr: "La pratique permet-elle d'apprendre des échecs et des résistances ?",
        en: "Does the practice make it possible to learn from failures and resistance?",
        nl: "Maakt de geloofspraktijk het mogelijk om te leren van mislukkingen en weerstand?" }
    ],
    // Pilier 10 — Centralité de Jésus-Christ
    "centralite-christ": [
      { fr: "La célébration témoigne-t-elle du Christ vivant et ressuscité ?",
        en: "Does the celebration bear witness to the living and risen Christ?",
        nl: "Legt de viering getuigenis af van de levende en verrezen Christus?" },
      { fr: "La célébration vise-t-elle à approfondir la relation de chacun avec le Christ ?",
        en: "Does the celebration aim to deepen each person's relationship with Christ?",
        nl: "Heeft de viering tot doel ieders relatie met Christus te verdiepen?" },
      { fr: "La célébration aide-t-elle à relier la foi célébrée et la vie quotidienne ?",
        en: "Does the celebration help to connect the faith celebrated with daily life?",
        nl: "Helpt de viering om het gevierde geloof te verbinden met het dagelijks leven?" }
    ],
    // Pilier 11 — Orientée vers l'activité missionnaire de l'Église
    "activite-missionnaire": [
      { fr: "La célébration envoie-t-elle en mission et contribue-t-elle à un nouvel élan missionnaire ?",
        en: "Does the celebration send people out on mission and contribute to a new missionary impulse?",
        nl: "Zendt de viering uit en draagt ze bij aan een nieuwe missionaire impuls?" },
      { fr: "La célébration s'inscrit-elle dans la dynamique missionnaire de l'Église locale ?",
        en: "Is the celebration embedded in the missionary dynamic of the local Church?",
        nl: "Is de viering verankerd in de missionaire dynamiek van de lokale Kerk?" }
    ],
    // Pilier 12 — Collaboration dans la mission par la reconnaissance des services et des ministères
    "services-ministeres": [
      { fr: "Les charismes de chacun sont-ils reconnus et mis au service de la célébration ?",
        en: "Are the charisms of each person recognised and placed at the service of the celebration?",
        nl: "Worden de charisma’s van ieder erkend en ingezet ten dienste van de viering?" },
      { fr: "La célébration s'appuie-t-elle sur une variété de services et de ministères (lecteurs, acolytes, musiciens, équipes d'accueil, ministres de la communion…) ?",
        en: "Does the celebration rely on a variety of services and ministries (readers, acolytes, musicians, welcome teams, ministers of Communion…)?",
        nl: "Steunt de viering op verschillende diensttaken en ambten (lectoren, acolieten, muzikanten, onthaalploegen, communiedienaars…)?" },
      { fr: "Les femmes ont-elles la possibilité d'assumer des rôles de responsabilité dans la célébration ?",
        en: "Do women have the opportunity to take on roles of responsibility in the celebration?",
        nl: "Hebben vrouwen de mogelijkheid om verantwoordelijke functies op te nemen in de viering?" }
    ],
    // Pilier 13 — Prise en compte des contextes culturels et sociétaux
    "contextes-culturels": [
      { fr: "La célébration tient-elle compte des réalités historiques, contemporaines, sociales, culturelles et numériques de l'assemblée ?",
        en: "Does the celebration take into account the historical, contemporary, social, cultural and digital realities of the assembly?",
        nl: "Houdt de viering rekening met de historische, hedendaagse, sociale, culturele en digitale omstandigheden van de verzamelde gemeenschap?" },
      { fr: "La célébration prend-elle en compte les réalités de mobilité culturelle et géographique (communautés d'origines diverses, personnes de passage) ?",
        en: "Does the celebration take the realities of cultural and geographic mobility into account (communities of diverse origins, people passing through)?",
        nl: "Houdt de viering rekening met de realiteit van culturele en geografische mobiliteit (gemeenschappen van diverse herkomst, mensen op doortocht)?" },
      { fr: "La célébration entre-t-elle en dialogue avec la culture et la société environnantes (patrimoine, arts, événements locaux, etc.) ?",
        en: "Does the celebration engage in dialogue with the surrounding culture and society (heritage, arts, local events, etc.)?",
        nl: "Gaat de viering de dialoog aan met de omringende cultuur en samenleving (erfgoed, kunst, lokale evenementen enz.)?" }
    ],
    // Pilier 14 — Conversion synodale par des transformations concrètes
    "conversion-transformations": [
      { fr: "La célébration conduit-elle à une conversion personnelle des participants ?",
        en: "Does the celebration lead to a personal conversion of the participants?",
        nl: "Leidt de viering tot een persoonlijke bekering van de deelnemers?" },
      { fr: "La célébration rend-elle possible une transformation communautaire ?",
        en: "Does the celebration make communal transformation possible?",
        nl: "Maakt de viering een gemeenschappelijke transformatie mogelijk?" },
      { fr: "La célébration contribue-t-elle au renouveau spirituel et à la réforme structurelle de l'Église ?",
        en: "Does the celebration contribute to the spiritual renewal and structural reform of the Church?",
        nl: "Draagt de viering bij aan de spirituele vernieuwing en de structurele hervorming van de Kerk?" }
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
