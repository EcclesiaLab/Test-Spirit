/*
  ============================================================
  LEXIQUE — mots de l'Église et de SPIRIT expliqués simplement
  ============================================================

  Contenu de l'écran « Lexique » (lien sur l'accueil). Les entrées sont
  affichées par ordre alphabétique dans la langue active : l'ordre de ce
  fichier n'a donc pas d'importance.

  ⚠ VERSION PROVISOIRE (v68, allégée en v69, 29 septembre 2026) : définitions rédigées
  pour l'essai, en français, anglais et néerlandais, à faire valider par
  l'équipe (et par Jens ou Rick pour le néerlandais).
  Ce qui est repris de sources validées :
    - la définition de la synodalité : citation officielle du Document
      final (DF 28), reprise telle quelle de donnees-spirit.js ;
    - « Discernement » et « Reddition de comptes » (v72) : définitions
      rédigées à partir des citations officielles du DF déjà présentes
      dans l'app (DF 80, 83, 87 et 97), sans renvoi chiffré.
  Relecture d'équipe intégrée en v72 : pas de renvoi au DF dans les
  définitions (sauf la citation DF 28 sous « Synodalité »).

  Structure d'une entrée :
    terme      : { fr, en, nl }
    definition : { fr, en, nl }
    citation   : (facultatif) { pilier, rang } → citation officielle prise
                 dans JUSTIFICATIONS (donnees-spirit.js), affichée sous la
                 définition avec sa référence.
  Pour corriger un texte : modifiez-le entre guillemets, sans toucher à la
  structure.
  ============================================================
*/

const LEXIQUE = [
  {
    terme: { fr: "Synodalité", en: "Synodality", nl: "Synodaliteit" },
    definition: {
      fr: "Manière d'être et d'agir de l'Église dans laquelle tous les baptisés « marchent ensemble » : ils s'écoutent, discernent et décident ensemble, chacun selon sa vocation, au service de la mission. Le Document final la définit ainsi :",
      en: "The Church's way of being and acting in which all the baptised “walk together”: they listen to one another, discern and decide together, each according to their vocation, in the service of mission. The Final Document defines it as follows:",
      nl: "De manier waarop de Kerk leeft en handelt, waarbij alle gedoopten ‘samen op weg gaan’: ze luisteren naar elkaar, onderscheiden en beslissen samen, ieder volgens de eigen roeping, ten dienste van de zending. Het Slotdocument omschrijft het zo:"
    },
    citation: { pilier: "conversion-transformations", rang: 0 }
  },
  {
    terme: { fr: "Synode sur la synodalité", en: "Synod on Synodality", nl: "Synode over synodaliteit" },
    definition: {
      fr: "Démarche mondiale lancée par le pape François en 2021. Les diocèses du monde entier ont d'abord été consultés, puis deux assemblées se sont réunies à Rome, en octobre 2023 et en octobre 2024. Pour la première fois, des laïcs, hommes et femmes, y ont pris part avec droit de vote.",
      en: "A worldwide process launched by Pope Francis in 2021. Dioceses all over the world were first consulted, then two assemblies met in Rome, in October 2023 and October 2024. For the first time, lay men and women took part with the right to vote.",
      nl: "Wereldwijd proces dat paus Franciscus in 2021 op gang bracht. Eerst werden de bisdommen over de hele wereld geraadpleegd, daarna kwamen in oktober 2023 en oktober 2024 twee assemblees in Rome samen. Voor het eerst namen er ook lekengelovigen, mannen en vrouwen, met stemrecht aan deel."
    }
  },
  {
    terme: { fr: "Document final (DF)", en: "Final Document (FD)", nl: "Slotdocument (SD)" },
    definition: {
      fr: "Texte adopté par l'assemblée du Synode en octobre 2024 et approuvé par le pape François. C'est le texte de référence de SPIRIT : les indications « DF 28 », « DF 83 »… renvoient à ses paragraphes.",
      en: "Text adopted by the Synod assembly in October 2024 and approved by Pope Francis. It is SPIRIT's reference text: the indications “FD 28”, “FD 83”… refer to its paragraphs.",
      nl: "Tekst die de synodevergadering in oktober 2024 aannam en die paus Franciscus goedkeurde. Het is de referentietekst van SPIRIT: de verwijzingen ‘SD 28’, ‘SD 83’… verwijzen naar de paragrafen ervan."
    }
  },
  {
    terme: { fr: "Pierre angulaire", en: "Cornerstone", nl: "Pijler" },
    definition: {
      fr: "Dans SPIRIT, chacune des trois dimensions qui figurent dans le titre du Synode : la communion, la participation et la mission. Chaque pierre angulaire regroupe plusieurs piliers.",
      en: "In SPIRIT, each of the three dimensions named in the title of the Synod: communion, participation and mission. Each cornerstone groups several pillars.",
      nl: "In SPIRIT elk van de drie dimensies uit de titel van de synode: gemeenschap, participatie en zending. Elke pijler groepeert meerdere criteria."
    }
  },
  {
    terme: { fr: "Méthode Delphi", en: "Delphi method", nl: "Delphi-methode" },
    definition: {
      fr: "Méthode de recherche dans laquelle un panel d'experts répond de façon anonyme, en plusieurs tours successifs. À chaque tour, chacun prend connaissance des réponses du groupe, jusqu'à ce qu'un consensus se dégage.",
      en: "A research method in which a panel of experts answers anonymously, in several successive rounds. At each round, everyone sees the group's answers, until a consensus emerges.",
      nl: "Onderzoeksmethode waarbij een panel van experts anoniem antwoordt, in meerdere opeenvolgende rondes. Na elke ronde krijgt iedereen de antwoorden van de groep te zien, tot er een consensus ontstaat."
    }
  },
  {
    terme: { fr: "Coresponsabilité différenciée", en: "Differentiated co-responsibility", nl: "Gedifferentieerde medeverantwoordelijkheid" },
    definition: {
      fr: "Responsabilité partagée par tous les baptisés dans la vie et la mission de l'Église. Elle est différenciée : chacun y prend part selon sa vocation, son charisme et son ministère, ordonné ou non.",
      en: "Responsibility shared by all the baptised in the life and mission of the Church. It is differentiated: each person takes part according to their vocation, charism and ministry, ordained or not.",
      nl: "Verantwoordelijkheid die alle gedoopten delen in het leven en de zending van de Kerk. Ze is gedifferentieerd: ieder neemt deel volgens de eigen roeping, het eigen charisma en het eigen ambt, gewijd of niet."
    }
  },
  {
    terme: { fr: "Peuple de Dieu", en: "People of God", nl: "Volk van God" },
    definition: {
      fr: "L'ensemble des baptisés (fidèles laïcs, personnes consacrées et ministres ordonnés) qui forment ensemble l'Église.",
      en: "All the baptised (lay faithful, consecrated persons and ordained ministers), who together form the Church.",
      nl: "Alle gedoopten (lekengelovigen, godgewijde personen en gewijde ambtsdragers), die samen de Kerk vormen."
    }
  },
  {
    terme: { fr: "Ministères ordonnés", en: "Ordained ministries", nl: "Gewijde ambten" },
    definition: {
      fr: "Ministères reçus par le sacrement de l'ordre : diacres, prêtres et évêques.",
      en: "Ministries received through the sacrament of Holy Orders: deacons, priests and bishops.",
      nl: "Ambten die ontvangen worden door het sacrament van de wijding: diakens, priesters en bisschoppen."
    }
  },
  {
    terme: { fr: "Ministères institués", en: "Instituted ministries", nl: "Ingestelde ambten" },
    definition: {
      fr: "Services confiés de manière stable par l'Église à des laïcs, hommes et femmes, comme ceux de lecteur, d'acolyte ou de catéchiste. Ils sont distincts des ministères ordonnés.",
      en: "Services entrusted by the Church on a stable basis to lay men and women, such as reader (lector), acolyte or catechist. They are distinct from the ordained ministries.",
      nl: "Diensten die de Kerk op een duurzame manier toevertrouwt aan lekengelovigen, mannen en vrouwen, zoals lector, acoliet of catechist. Ze zijn onderscheiden van de gewijde ambten."
    }
  },
  {
    terme: { fr: "Charisme", en: "Charism", nl: "Charisma" },
    definition: {
      fr: "Don particulier de l'Esprit Saint fait à une personne pour le bien de la communauté et de la mission.",
      en: "A particular gift of the Holy Spirit given to a person for the good of the community and of the mission.",
      nl: "Een bijzondere gave van de Heilige Geest aan een persoon, ten dienste van de gemeenschap en de zending."
    }
  },
  {
    terme: { fr: "Église locale", en: "Local Church", nl: "Lokale Kerk" },
    definition: {
      fr: "L'Église telle qu'elle vit en un lieu donné : avant tout le diocèse, rassemblé autour de son évêque, avec ses paroisses et ses communautés.",
      en: "The Church as it lives in a given place: above all the diocese, gathered around its bishop, with its parishes and communities.",
      nl: "De Kerk zoals ze leeft op een bepaalde plaats: in de eerste plaats het bisdom, verenigd rond de bisschop, met zijn parochies en gemeenschappen."
    }
  },
  {
    terme: { fr: "Œcuménisme", en: "Ecumenism", nl: "Oecumene" },
    definition: {
      fr: "Recherche d'unité entre les Églises et communions chrétiennes : catholique, orthodoxes, protestantes, anglicane…",
      en: "The search for unity among the Christian Churches and Communions: Catholic, Orthodox, Protestant, Anglican…",
      nl: "Het streven naar eenheid tussen de christelijke Kerken en gemeenschappen: katholiek, orthodox, protestants, anglicaans…"
    }
  },
  {
    terme: { fr: "Dialogue interreligieux", en: "Interreligious dialogue", nl: "Interreligieuze dialoog" },
    definition: {
      fr: "Rencontre, dialogue et collaboration avec les croyants d'autres religions.",
      en: "Encounter, dialogue and cooperation with believers of other religions.",
      nl: "Ontmoeting, dialoog en samenwerking met gelovigen van andere religies."
    }
  },
  {
    terme: { fr: "Conversion synodale", en: "Synodal conversion", nl: "Synodale bekering" },
    definition: {
      fr: "Changement des mentalités, des relations, des pratiques et des structures, pour que l'Église vive davantage la synodalité. Elle est à la fois personnelle et communautaire.",
      en: "A change in mindsets, relationships, practices and structures so that the Church lives synodality more fully. It is both personal and communal.",
      nl: "Een verandering van mentaliteit, relaties, praktijken en structuren, opdat de Kerk de synodaliteit meer zou beleven. Ze is zowel persoonlijk als gemeenschappelijk."
    }
  },
  {
    terme: { fr: "Formation intégrale", en: "Integral formation", nl: "Integrale vorming" },
    definition: {
      fr: "Formation qui concerne toute la personne (l'intelligence, l'affectivité, les relations et la vie spirituelle) et qui se poursuit tout au long de la vie.",
      en: "Formation that concerns the whole person (intellect, affectivity, relationships and spiritual life) and continues throughout life.",
      nl: "Vorming die de hele persoon aanbelangt (verstand, gevoelsleven, relaties en spiritueel leven) en die het hele leven doorgaat."
    }
  },
  {
    terme: { fr: "Piété populaire", en: "Popular piety", nl: "Volksvroomheid" },
    definition: {
      fr: "Formes de prière et de dévotion enracinées dans la culture d'un peuple : pèlerinages, processions, fêtes patronales, chapelet…",
      en: "Forms of prayer and devotion rooted in the culture of a people: pilgrimages, processions, patronal feasts, the rosary…",
      nl: "Vormen van gebed en devotie die geworteld zijn in de cultuur van een volk: bedevaarten, processies, patroonsfeesten, de rozenkrans…"
    }
  },
  {
    terme: { fr: "Non applicable", en: "Not applicable", nl: "Niet van toepassing" },
    definition: {
      fr: "Réponse à choisir quand le pilier ne concerne pas la pratique évaluée, compte tenu de sa nature. Le pilier n'est alors pas pris en compte dans le diagnostic. Si le pilier concerne la pratique mais n'est pas encore vécu, choisissez plutôt « À bâtir ».",
      en: "The answer to choose when the pillar does not concern the practice being evaluated, given its nature. The pillar is then not taken into account in the diagnosis. If the pillar does concern the practice but is not yet lived out, choose “To be built” instead.",
      nl: "Het antwoord dat je kiest wanneer het criterium, gezien de aard van de geloofspraktijk, er geen betrekking op heeft. Het criterium wordt dan niet meegeteld in de diagnose. Heeft het criterium wel betrekking op de geloofspraktijk, maar wordt het nog niet beleefd? Kies dan ‘Nog op te bouwen’."
    }
  },
  {
    terme: { fr: "Pilier", en: "Pillar", nl: "Criterium" },
    definition: {
      fr: "Dans SPIRIT, l'un des 14 critères qui servent à évaluer une pratique. Les piliers sont répartis entre les trois pierres angulaires (5 pour la communion, 4 pour la participation, 5 pour la mission). Chacun nomme un aspect concret de la synodalité, comme l'hospitalité, la coresponsabilité ou la transparence, et s'accompagne de questions pour aider à répondre. Les piliers ont été validés par un panel de théologiens et théologiennes selon la méthode Delphi.",
      en: "In SPIRIT, one of the 14 criteria used to evaluate a practice. The pillars are grouped under the three cornerstones (5 for communion, 4 for participation, 5 for mission). Each one names a concrete aspect of synodality, such as hospitality, co-responsibility or transparency, and comes with questions to help answer it. The pillars were validated by a panel of theologians using the Delphi method.",
      nl: "In SPIRIT een van de 14 criteria waarmee een geloofspraktijk geëvalueerd wordt. De criteria zijn verdeeld over de drie pijlers (5 voor gemeenschap, 4 voor participatie, 5 voor zending). Elk criterium benoemt een concreet aspect van synodaliteit, zoals gastvrijheid, medeverantwoordelijkheid of transparantie, en gaat vergezeld van vragen die helpen om te antwoorden. De criteria werden gevalideerd door een panel van theologen volgens de Delphi-methode."
    }
  },
  {
    terme: { fr: "Discernement", en: "Discernment", nl: "Onderscheiding" },
    definition: {
      fr: "Démarche spirituelle par laquelle une personne ou une communauté cherche, dans la prière et l'écoute, ce que Dieu l'appelle à choisir ou à faire. Le Document final en fait un élément central de la vie synodale : l'écoute de la Parole de Dieu en est « le point de départ et le critère », et le discernement en commun prépare les décisions prises pour la mission.",
      en: "A spiritual process by which a person or a community seeks, through prayer and listening, what God is calling them to choose or to do. The Final Document makes it central to synodal life: listening to the Word of God is its “starting point and criterion”, and discernment in common prepares the decisions taken for mission.",
      nl: "Een spiritueel proces waarbij een persoon of een gemeenschap in gebed en luisteren zoekt wat God haar vraagt te kiezen of te doen. Het Slotdocument maakt er een kern van het synodale leven van: het luisteren naar Gods Woord is er ‘zowel het vertrekpunt als het criterium’ van, en de gezamenlijke onderscheiding bereidt de beslissingen voor die met het oog op de zending worden genomen."
    }
  },
  {
    terme: { fr: "Reddition de comptes", en: "Accountability", nl: "Verantwoording" },
    definition: {
      fr: "Le fait, pour celles et ceux qui exercent une responsabilité, d'expliquer leurs décisions et l'usage des moyens qui leur sont confiés, et d'en répondre devant la communauté. Le Document final parle de « rendre compte » : avec la transparence et l'évaluation, cette pratique nourrit la confiance au sein de l'Église et renforce sa crédibilité.",
      en: "The practice, for those who hold responsibility, of explaining their decisions and how they use the resources entrusted to them, and of answering for them to the community. As the Final Document stresses, together with transparency and evaluation, it builds trust within the Church and strengthens its credibility.",
      nl: "Het feit dat wie verantwoordelijkheid draagt, uitleg geeft over de genomen beslissingen en over het gebruik van de toevertrouwde middelen, en zich daarover verantwoordt tegenover de gemeenschap. Zoals het Slotdocument benadrukt, voedt verantwoording samen met transparantie en evaluatie het vertrouwen binnen de Kerk en versterkt ze haar geloofwaardigheid."
    }
  }
];


/* La fonction espacesInsecables() (typographie française) est dans langue.js
   depuis la v75 : elle sert désormais à tous les textes de l'application. */


/* ===========================================================
   AFFICHAGE DE L'ÉCRAN « LEXIQUE »
   Construit la liste dans la langue active, par ordre alphabétique.
   =========================================================== */
function construireLexique() {
  const conteneur = document.getElementById("lexique-liste");
  if (!conteneur) return;
  const langue = getLangue();

  const entrees = LEXIQUE.map((e) => ({ terme: e.terme, definitionTexte: tr(e.definition), citation: e.citation }));
  entrees.sort((a, b) => tr(a.terme).localeCompare(tr(b.terme), langue, { sensitivity: "base" }));

  conteneur.innerHTML = "";
  entrees.forEach((e) => {
    const bloc = document.createElement("div");
    bloc.className = "lexique__entree";

    const terme = document.createElement("dt");
    terme.className = "lexique__terme";
    terme.textContent = tr(e.terme);

    const definition = document.createElement("dd");
    definition.className = "lexique__definition";
    const texte = document.createElement("p");
    texte.textContent = espacesInsecables(e.definitionTexte);
    definition.appendChild(texte);

    // Citation officielle du Document final, reprise de JUSTIFICATIONS
    if (e.citation && JUSTIFICATIONS[e.citation.pilier]) {
      const cit = JUSTIFICATIONS[e.citation.pilier][e.citation.rang];
      if (cit) {
        const citation = document.createElement("blockquote");
        citation.className = "lexique__citation";
        citation.textContent = (cit[langue] || cit.fr) + " (" + t("pdf_prefixe_ref") + " " + cit.num + ")";
        definition.appendChild(citation);
      }
    }

    bloc.appendChild(terme);
    bloc.appendChild(definition);
    conteneur.appendChild(bloc);
  });
}
