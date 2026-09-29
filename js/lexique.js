/*
  ============================================================
  LEXIQUE — mots de l'Église et de SPIRIT expliqués simplement
  ============================================================

  Contenu de l'écran « Lexique » (lien sur l'accueil). Les entrées sont
  affichées par ordre alphabétique dans la langue active : l'ordre de ce
  fichier n'a donc pas d'importance.

  ⚠ VERSION PROVISOIRE (v68, 29 septembre 2026) : définitions rédigées
  pour l'essai, en français, anglais et néerlandais, à faire valider par
  l'équipe (et par Jens ou Rick pour le néerlandais).
  Ce qui est repris de sources validées :
    - la définition de la synodalité : citation officielle du Document
      final (DF 28), reprise telle quelle de donnees-spirit.js ;
    - les trois pierres angulaires : leurs sous-titres (donnees-spirit.js) ;
    - les renvois « DF … » : paragraphes déjà cités dans l'app.

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
      fr: "Dans SPIRIT, chacune des trois dimensions que le Document final place au cœur de la synodalité (DF 142) : la communion, la participation et la mission. Chaque pierre angulaire regroupe plusieurs piliers.",
      en: "In SPIRIT, each of the three dimensions that the Final Document places at the heart of synodality (FD 142): communion, participation and mission. Each cornerstone groups several pillars.",
      nl: "In SPIRIT elk van de drie dimensies die het Slotdocument centraal stelt in de synodaliteit (SD 142): gemeenschap, participatie en zending. Elke pijler groepeert meerdere criteria."
    }
  },
  {
    terme: { fr: "Pilier", en: "Pillar", nl: "Criterium" },
    definition: {
      fr: "L'un des 14 critères d'évaluation de SPIRIT, répartis entre les trois pierres angulaires. Les piliers ont été validés par un panel de 50 théologiens et théologiennes selon la méthode Delphi.",
      en: "One of SPIRIT's 14 evaluation criteria, grouped under the three cornerstones. The pillars were validated by a panel of 50 theologians using the Delphi method.",
      nl: "Een van de 14 evaluatiecriteria van SPIRIT, verdeeld over de drie pijlers. De criteria werden gevalideerd door een panel van 50 theologen en theologes volgens de Delphi-methode."
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
    terme: { fr: "Discernement", en: "Discernment", nl: "Onderscheiding" },
    definition: {
      fr: "Démarche par laquelle une personne ou une communauté cherche, dans la prière et l'écoute de la Parole de Dieu et des autres, ce qu'elle est appelée à choisir ou à faire. Selon le Document final, l'écoute de la Parole de Dieu en est le point de départ et le critère (DF 83).",
      en: "The process by which a person or a community seeks, in prayer and in listening to the Word of God and to others, what they are called to choose or to do. According to the Final Document, listening to the Word of God is its starting point and criterion (FD 83).",
      nl: "Het proces waarbij een persoon of een gemeenschap, in gebed en in het luisteren naar Gods Woord en naar anderen, zoekt wat ze geroepen is te kiezen of te doen. Volgens het Slotdocument is het luisteren naar Gods Woord er zowel het vertrekpunt als het criterium van (SD 83)."
    }
  },
  {
    terme: { fr: "Coresponsabilité", en: "Co-responsibility", nl: "Medeverantwoordelijkheid" },
    definition: {
      fr: "Responsabilité partagée par tous les baptisés dans la vie et la mission de l'Église. Elle est « différenciée » : chacun y prend part selon sa vocation, son charisme et son ministère, ordonné ou non.",
      en: "Responsibility shared by all the baptised in the life and mission of the Church. It is “differentiated”: each person takes part according to their vocation, charism and ministry, ordained or not.",
      nl: "Verantwoordelijkheid die alle gedoopten delen in het leven en de zending van de Kerk. Ze is ‘gedifferentieerd’: ieder neemt deel volgens de eigen roeping, het eigen charisma en het eigen ambt, gewijd of niet."
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
    terme: { fr: "Fidèles laïcs", en: "Lay faithful", nl: "Lekengelovigen" },
    definition: {
      fr: "Baptisés qui n'ont pas reçu le sacrement de l'ordre. Ils forment la très grande majorité du peuple de Dieu.",
      en: "Baptised people who have not received the sacrament of Holy Orders. They make up the vast majority of the People of God.",
      nl: "Gedoopten die het sacrament van de wijding niet ontvangen hebben. Zij vormen de overgrote meerderheid van het Volk van God."
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
      fr: "Services confiés de manière stable par l'Église à des laïcs, hommes et femmes, comme ceux de lecteur, d'acolyte ou de catéchiste. Ils sont distincts des ministères ordonnés (voir DF 75).",
      en: "Services entrusted by the Church on a stable basis to lay men and women, such as reader (lector), acolyte or catechist. They are distinct from the ordained ministries (see FD 75).",
      nl: "Diensten die de Kerk op een duurzame manier toevertrouwt aan lekengelovigen, mannen en vrouwen, zoals lector, acoliet of catechist. Ze zijn onderscheiden van de gewijde ambten (zie SD 75)."
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
    terme: { fr: "Eucharistie", en: "Eucharist", nl: "Eucharistie" },
    definition: {
      fr: "La messe, où les chrétiens célèbrent la mort et la résurrection du Christ. Le concile Vatican II la présente comme la source et le sommet de toute la vie chrétienne (Lumen gentium 11).",
      en: "The Mass, in which Christians celebrate the death and resurrection of Christ. The Second Vatican Council presents it as the source and summit of the whole Christian life (Lumen Gentium 11).",
      nl: "De mis, waarin christenen de dood en de verrijzenis van Christus vieren. Het Tweede Vaticaans Concilie noemt ze de bron en het hoogtepunt van heel het christelijk leven (Lumen gentium 11)."
    }
  },
  {
    terme: { fr: "Liturgie", en: "Liturgy", nl: "Liturgie" },
    definition: {
      fr: "Prière publique et officielle de l'Église : célébration de l'Eucharistie et des autres sacrements, liturgie des heures, bénédictions…",
      en: "The public and official prayer of the Church: celebration of the Eucharist and the other sacraments, the Liturgy of the Hours, blessings…",
      nl: "Het publieke en officiële gebed van de Kerk: de viering van de eucharistie en de andere sacramenten, het getijdengebed, zegeningen…"
    }
  },
  {
    terme: { fr: "Œcuménisme", en: "Ecumenism", nl: "Oecumene" },
    definition: {
      fr: "Recherche de l'unité entre les Églises et communautés chrétiennes : catholique, orthodoxes, protestantes, anglicane…",
      en: "The search for unity among the Christian Churches and communities: Catholic, Orthodox, Protestant, Anglican…",
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
    terme: { fr: "Autoréférentialité", en: "Self-referentiality", nl: "Zelfreferentialiteit" },
    definition: {
      fr: "Tendance d'une communauté à se replier sur elle-même et à se prendre pour centre, au lieu de se tourner vers les autres et vers la mission. Le mot a souvent été employé par le pape François.",
      en: "The tendency of a community to turn in on itself and see itself as the centre, instead of turning towards others and towards mission. The word was often used by Pope Francis.",
      nl: "De neiging van een gemeenschap om zich in zichzelf op te sluiten en zichzelf centraal te stellen, in plaats van zich naar anderen en naar de zending te richten. Paus Franciscus gebruikte dit woord vaak."
    }
  },
  {
    terme: { fr: "Rendre compte", en: "Accountability", nl: "Verantwoording" },
    definition: {
      fr: "Le fait, pour ceux qui exercent une responsabilité, d'expliquer leurs décisions et l'usage des moyens qui leur sont confiés. Avec la transparence et l'évaluation, il nourrit la confiance au sein de la communauté (voir DF 97).",
      en: "The practice, for those who hold responsibility, of explaining their decisions and how they use the resources entrusted to them. Together with transparency and evaluation, it builds trust within the community (see FD 97).",
      nl: "Het feit dat wie verantwoordelijkheid draagt, uitleg geeft over de genomen beslissingen en over het gebruik van de toevertrouwde middelen. Samen met transparantie en evaluatie voedt het vertrouwen binnen de gemeenschap (zie SD 97)."
    }
  },
  {
    terme: { fr: "Conversion synodale", en: "Synodal conversion", nl: "Synodale bekering" },
    definition: {
      fr: "Changement des mentalités, des relations, des pratiques et des structures, pour que l'Église vive davantage la synodalité. Elle est à la fois personnelle et communautaire (voir DF 28 et 44).",
      en: "A change in mindsets, relationships, practices and structures so that the Church lives synodality more fully. It is both personal and communal (see FD 28 and 44).",
      nl: "Een verandering van mentaliteit, relaties, praktijken en structuren, opdat de Kerk de synodaliteit meer zou beleven. Ze is zowel persoonlijk als gemeenschappelijk (zie SD 28 en 44)."
    }
  },
  {
    terme: { fr: "Formation intégrale", en: "Integral formation", nl: "Integrale vorming" },
    definition: {
      fr: "Formation qui concerne toute la personne (l'intelligence, l'affectivité, les relations et la vie spirituelle) et qui se poursuit tout au long de la vie (voir DF 143).",
      en: "Formation that concerns the whole person (intellect, affectivity, relationships and spiritual life) and continues throughout life (see FD 143).",
      nl: "Vorming die de hele persoon aanbelangt (verstand, gevoelsleven, relaties en spiritueel leven) en die het hele leven doorgaat (zie SD 143)."
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
    terme: { fr: "Relecture", en: "Review (relecture)", nl: "Terugblik" },
    definition: {
      fr: "Temps pris, seul ou en groupe, pour revenir sur une expérience vécue, afin d'en discerner les fruits et d'en tirer des enseignements.",
      en: "Time taken, alone or as a group, to look back on a lived experience in order to discern its fruits and learn from it.",
      nl: "Tijd die je, alleen of in groep, neemt om terug te kijken op een beleefde ervaring, om er de vruchten van te onderscheiden en er lessen uit te trekken."
    }
  },
  {
    terme: { fr: "Échelle de réponse", en: "Answer scale", nl: "Antwoordschaal" },
    definition: {
      fr: "Pour chaque pilier, SPIRIT propose quatre réponses : « Solidement établi » (le pilier est bien vécu), « En chantier » (il est en train de se mettre en place), « À bâtir » (il concerne la pratique mais n'est pas encore vécu) et « Non applicable » (il ne concerne pas la pratique, compte tenu de sa nature).",
      en: "For each pillar, SPIRIT offers four answers: “Well established” (the pillar is well lived out), “Under development” (it is being put in place), “To be built” (it concerns the practice but is not yet lived out) and “Not applicable” (given the nature of the practice, it does not concern it).",
      nl: "Voor elk criterium biedt SPIRIT vier antwoorden: ‘Stevig verankerd’ (het criterium wordt goed beleefd), ‘In opbouw’ (het wordt uitgebouwd), ‘Nog op te bouwen’ (het heeft betrekking op de geloofspraktijk, maar wordt nog niet beleefd) en ‘Niet van toepassing’ (gezien de aard van de geloofspraktijk heeft het criterium er geen betrekking op)."
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
    terme: { fr: "Diagnostic", en: "Diagnosis", nl: "Diagnose" },
    definition: {
      fr: "Résultat de l'évaluation : pour chaque pierre angulaire, une jauge montre la part des piliers solidement établis, en chantier et à bâtir, parmi ceux qui sont pris en compte (les piliers « non applicables » en sont exclus).",
      en: "The result of the evaluation: for each cornerstone, a gauge shows the share of pillars that are well established, under development and to be built, among those taken into account (“not applicable” pillars are excluded).",
      nl: "Het resultaat van de evaluatie: voor elke pijler toont een meter het aandeel criteria dat stevig verankerd, in opbouw en nog op te bouwen is, onder de criteria die meetellen (criteria ‘niet van toepassing’ tellen niet mee)."
    }
  }
];


/* ===========================================================
   ENTRÉES DES TROIS PIERRES ANGULAIRES
   Construites à partir des noms et sous-titres validés
   (PIERRES_ANGULAIRES, dans donnees-spirit.js).
   =========================================================== */
function entreesPierresAngulaires() {
  return PIERRES_ANGULAIRES.map((pierre) => {
    const sousTitre = tr(pierre.sousTitre);
    return {
      terme: pierre.nom,
      definitionTexte: t("lexique_pierre_prefixe") + sousTitre.charAt(0).toLowerCase() + sousTitre.slice(1) + "."
    };
  });
}


/* ===========================================================
   TYPOGRAPHIE FRANÇAISE
   En français, on met une espace avant « : ; ? ! » et à l'intérieur
   des guillemets. Pour qu'un retour à la ligne ne laisse jamais ces
   signes seuls en début de ligne, on remplace cette espace par une
   espace insécable ( ) au moment de l'affichage. Les textes du
   fichier restent donc écrits normalement, avec des espaces ordinaires.
   =========================================================== */
function espacesInsecables(texte) {
  if (getLangue() !== "fr") return texte;
  return texte.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
}


/* ===========================================================
   AFFICHAGE DE L'ÉCRAN « LEXIQUE »
   Construit la liste dans la langue active, par ordre alphabétique.
   =========================================================== */
function construireLexique() {
  const conteneur = document.getElementById("lexique-liste");
  if (!conteneur) return;
  const langue = getLangue();

  const entrees = LEXIQUE.map((e) => ({ terme: e.terme, definitionTexte: tr(e.definition), citation: e.citation }))
    .concat(entreesPierresAngulaires());
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
