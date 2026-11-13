/*
  ============================================================
  TRADUCTIONS — textes d'interface (FR / EN / NL)
  ============================================================

  Ce fichier contient les textes COURTS de l'interface : boutons, titres
  d'écrans, menus, libellés, phrases du diagnostic. Chaque texte a une CLÉ
  (identifiant) et ses versions { fr, en, nl }.

  La fonction t("cle") (définie dans langue.js) renvoie le bon texte selon
  la langue active. Certains textes contiennent des repères entre accolades,
  comme {nombre} : ils sont remplacés par le programme (fonction tAvec).
  Ne les traduisez pas et ne les supprimez pas.

  Les textes LONGS (pages « Qu'est-ce que SPIRIT ? », « À propos », fenêtre
  de bienvenue) ne sont PAS ici : ils sont gérés directement dans le HTML,
  en blocs par langue affichés/masqués selon la langue (plus lisible à éditer).

  Pour corriger une traduction : modifiez le texte entre guillemets de la
  bonne langue, sans toucher à la clé ni à la structure.

  Vocabulaire néerlandais (v85) : la pratique évaluée se dit « kerkelijke
  praktijk » (pluriel « kerkelijke praktijken »), et non plus
  « geloofspraktijk ». Le changement a été fait dans tous les fichiers :
  ici, dans index.html, donnees-spirit.js, questions-domaines.js et
  lexique.js. Garder ce terme pour tout nouveau texte néerlandais.
  ============================================================
*/

const TRADUCTIONS = {

  // --- Accueil ---
  "accueil_baseline":        { fr: "Évaluer la synodalité d'une pratique ecclésiale",
                               en: "Assessing the synodality of an ecclesial practice", nl: "De synodaliteit van een kerkelijke praktijk evalueren" },
  "accueil_demarrer":        { fr: "Démarrer une évaluation", en: "Start an evaluation", nl: "Een evaluatie starten" },
  "accueil_mes_evaluations": { fr: "Mes évaluations",         en: "My evaluations", nl: "Mijn evaluaties" },
  "accueil_quest_ce_que":    { fr: "Qu'est-ce que SPIRIT ?",  en: "What is SPIRIT?", nl: "Wat is SPIRIT?" },
  "accueil_a_propos":        { fr: "À propos",                en: "About", nl: "Over" },
  "accueil_lexique":         { fr: "Lexique",                 en: "Glossary", nl: "Woordenlijst" },
  "accueil_partager":        { fr: "Partager SPIRIT",         en: "Share SPIRIT", nl: "SPIRIT delen" },

  // --- Écran d'entrée ---
  "entree_titre":        { fr: "Nouvelle évaluation",          en: "New evaluation", nl: "Nieuwe evaluatie" },
  "entree_question_nom": { fr: "Quelle pratique évaluez-vous ?", en: "Which practice are you evaluating?", nl: "Welke kerkelijke praktijk evalueer je?" },
  "entree_aide_nom":     { fr: "Ce nom servira à retrouver l'évaluation et à titrer le document final.",
                           en: "This name will be used to find the evaluation and to title the final document.", nl: "Deze naam dient om de evaluatie terug te vinden en om het eindrapport een titel te geven." },
  "entree_placeholder":  { fr: "Ex. : Conseil pastoral, Retraite des confirmands…",
                           en: "E.g. Pastoral council, Confirmation retreat…", nl: "Bijv.: Pastorale raad, Vormselretraite…" },
  "entree_question_type":{ fr: "Dans quel domaine s'inscrit la pratique ?", en: "Which area does the practice belong to?", nl: "Tot welk domein behoort de kerkelijke praktijk?" }, // v66 : provisoire
  "entree_commencer":    { fr: "Commencer l'évaluation",      en: "Begin the evaluation", nl: "De evaluatie beginnen" },

  // --- Questionnaire (piliers) ---
  "pilier_compteur":   { fr: "Pilier",  en: "Pillar", nl: "Criterium" },   // suivi de "X / 14"
  "pilier_aide":       { fr: "Pour vous aider à répondre", en: "To help you answer", nl: "Om je te helpen antwoorden" },
  "commentaire_ajouter": { fr: "Ajouter une observation", en: "Add an observation", nl: "Een opmerking toevoegen" },
  "commentaire_placeholder": { fr: "Vos observations sur la pratique (facultatif)…", en: "Your observations about the practice (optional)…", nl: "Je observaties over de kerkelijke praktijk (optioneel)…" },
  "pilier_suivant":    { fr: "Suivant", en: "Next", nl: "Volgende" },
  "pilier_voir_diagnostic": { fr: "Voir le diagnostic", en: "View the diagnosis", nl: "De diagnose bekijken" },
  "pilier_precedent":  { fr: "Pilier précédent", en: "Previous pillar", nl: "Vorig criterium" },

  // --- Diagnostic ---
  "diagnostic_titre":    { fr: "Diagnostic",          en: "Diagnosis", nl: "Diagnose" },
  "diagnostic_pdf":      { fr: "Exporter le diagnostic en PDF", en: "Export the diagnosis as PDF", nl: "De diagnose exporteren als pdf" },
  "diagnostic_references": { fr: "Pour aller plus loin", en: "Going deeper", nl: "Verder verdiepen" },
  "diagnostic_accueil":  { fr: "Revenir à l'accueil", en: "Back to home", nl: "Terug naar start" },

  // --- Historique ---
  "historique_titre": { fr: "Mes évaluations", en: "My evaluations", nl: "Mijn evaluaties" },
  "historique_vide":  { fr: "Vous n'avez pas encore d'évaluation enregistrée. Les évaluations terminées apparaîtront ici.",
                        en: "You don't have any saved evaluations yet. Completed evaluations will appear here.", nl: "Je hebt nog geen opgeslagen evaluatie. Voltooide evaluaties verschijnen hier." },
  "historique_rouvrir":   { fr: "Rouvrir",   en: "Open", nl: "Openen" },
  "historique_supprimer": { fr: "Supprimer", en: "Delete", nl: "Verwijderen" },

  // --- Titres des pages d'information ---
  "page_quest_titre":  { fr: "Qu'est-ce que SPIRIT ?", en: "What is SPIRIT?", nl: "Wat is SPIRIT?" },
  "page_apropos_titre":{ fr: "À propos",               en: "About", nl: "Over" },
  "apropos_site":      { fr: "Visiter le site d'EcclesiaLab", en: "Visit the EcclesiaLab website", nl: "Naar de website van EcclesiaLab" },

  // --- Lexique (v68, provisoire) ---
  "page_lexique_titre":     { fr: "Lexique", en: "Glossary", nl: "Woordenlijst" },
  "lexique_intro":          { fr: "Quelques mots de l'Église et de SPIRIT, expliqués simplement.",
                              en: "A few words from the Church and from SPIRIT, explained simply.",
                              nl: "Enkele woorden uit de Kerk en uit SPIRIT, eenvoudig uitgelegd." },
  // Sous les 4 réponses du premier pilier (v68, provisoire)
  // (\u00a0 = espace insécable : évite qu'un « ; » ou un « : » se retrouve seul en début de ligne)
  "critere_na_explication": { fr: "Le pilier ne concerne pas la pratique évaluée\u00a0; il n'est pas compté dans le diagnostic.",
                              en: "The pillar does not concern the practice being evaluated; it is not counted in the diagnosis.",
                              nl: "Het criterium heeft geen betrekking op de geëvalueerde kerkelijke praktijk; het wordt niet meegeteld in de diagnose." },

  // --- Diagnostic d'un groupe (v73) ---
  // Utilisé par « Rassembler des évaluations » (codes de comparaison) et pour
  // relire d'anciennes évaluations archivées. v81 : le mode « Évaluer en
  // groupe » (compteurs sur un seul appareil) a été retiré, avec ses textes.
  // EN et NL : traductions provisoires (Claude), à faire valider.
  // (\u00a0 = espace insécable, comme plus haut)
  "groupe_mode":            { fr: "En groupe", en: "In a group", nl: "In groep" },
  "groupe_avis_un":         { fr: "1 avis", en: "1 view", nl: "1 mening" },
  "groupe_avis":            { fr: "{nombre} avis", en: "{nombre} views", nl: "{nombre} meningen" },
  "groupe_avis_plage":      { fr: "{min} à {max} avis par pilier", en: "{min} to {max} views per pillar", nl: "{min} tot {max} meningen per criterium" },
  "diagnostic_groupe_titre":{ fr: "Diagnostic du groupe", en: "Group diagnosis", nl: "Diagnose van de groep" },
  "diagnostic_pdf_groupe":  { fr: "Exporter le diagnostic du groupe en PDF", en: "Export the group diagnosis as PDF", nl: "De diagnose van de groep exporteren als pdf" },
  // v83 : en français, « avis partagés » devient « avis divergents » (« partagés »
  // pouvait se lire « que tout le monde partage », le contraire du sens voulu).
  // L'anglais (« divided views ») et le néerlandais (« verdeelde meningen »)
  // n'avaient pas cette ambiguïté : inchangés. Les identifiants (groupe_partages…)
  // restent les mêmes, pour ne rien casser.
  "groupe_partages_zero":   { fr: "Aucun pilier aux avis divergents", en: "No pillar with divided views", nl: "Geen enkel criterium met verdeelde meningen" },
  "groupe_partages_un":     { fr: "1 pilier aux avis divergents", en: "1 pillar with divided views", nl: "1 criterium met verdeelde meningen" },
  "groupe_partages":        { fr: "{nombre} piliers aux avis divergents", en: "{nombre} pillars with divided views", nl: "{nombre} criteria met verdeelde meningen" },
  "groupe_partages_texte":  { fr: "À discuter en priorité\u00a0: au moins une personne y répond «\u00a0Solidement établi\u00a0» et une autre «\u00a0À bâtir\u00a0».",
                              en: "To discuss first: at least one person answered “Well established” and another “To be built”.",
                              nl: "Eerst te bespreken: minstens één persoon antwoordde ‘Stevig verankerd’ en een andere ‘Nog op te bouwen’." },
  "groupe_partages_aucun":  { fr: "Aucun pilier ne réunit à la fois des réponses «\u00a0Solidement établi\u00a0» et «\u00a0À bâtir\u00a0».",
                              en: "No pillar has both “Well established” and “To be built” answers.",
                              nl: "Geen enkel criterium kreeg tegelijk de antwoorden ‘Stevig verankerd’ en ‘Nog op te bouwen’." },
  "groupe_piliers_concernes": { fr: "Piliers concernés\u00a0: {liste}", en: "Pillars concerned: {liste}", nl: "Betrokken criteria: {liste}" },
  "groupe_badge":           { fr: "Avis divergents", en: "Divided views", nl: "Verdeelde meningen" },
  "groupe_repartition_titre": { fr: "Répartition des avis par pilier", en: "Distribution of views by pillar", nl: "Verdeling van de meningen per criterium" },
  "groupe_observations_titre": { fr: "Observations notées", en: "Recorded observations", nl: "Genoteerde observaties" },

  // --- Évaluer à plusieurs : code, lien et comparaison (v74) ---
  // EN et NL : traductions provisoires (Claude), à faire valider.
  "partage_bouton":         { fr: "Partager pour le groupe", en: "Share with the group", nl: "Delen met de groep" },
  "partage_texte":          { fr: "Ce code contient seulement le domaine et les réponses aux 14 piliers\u00a0: aucun nom de personne, aucune observation. Le lien y ajoute le nom de la pratique évaluée.",
                              en: "This code only contains the area and the answers to the 14 pillars: no personal names, no observations. The link also includes the name of the practice evaluated.",
                              nl: "Deze code bevat enkel het domein en de antwoorden op de 14 criteria: geen persoonsnamen, geen observaties. De link voegt daar de naam van de geëvalueerde praktijk aan toe." },
  "partage_code_label":     { fr: "Code de comparaison", en: "Comparison code", nl: "Vergelijkingscode" },
  "partage_envoyer":        { fr: "Envoyer le lien", en: "Send the link", nl: "De link versturen" },
  "partage_copier":         { fr: "Copier le code", en: "Copy the code", nl: "De code kopiëren" },
  "partage_code_copie":     { fr: "Code copié.", en: "Code copied.", nl: "Code gekopieerd." },
  "partage_lien_copie":     { fr: "Lien copié. Collez-le dans un message.", en: "Link copied. Paste it into a message.", nl: "Link gekopieerd. Plak hem in een bericht." },
  "partage_note":           { fr: "Le code ou le lien passe par le moyen que vous choisissez (message, courriel, de vive voix). SPIRIT ne transmet rien lui-même.",
                              en: "The code or link travels by whatever means you choose (message, email, word of mouth). SPIRIT itself sends nothing.",
                              nl: "De code of link gaat via het middel dat je kiest (bericht, e-mail, mondeling). SPIRIT verstuurt zelf niets." },
  "partage_fermer":         { fr: "Fermer", en: "Close", nl: "Sluiten" },
  "partage_message":        { fr: "Mon évaluation SPIRIT, pour une comparaison en groupe", en: "My SPIRIT evaluation, for a group comparison", nl: "Mijn SPIRIT-evaluatie, voor een vergelijking in groep" },
  "resultat_envoyer":       { fr: "Envoyer le résultat au groupe", en: "Send the result to the group", nl: "Het resultaat naar de groep sturen" },
  "resultat_message":       { fr: "Diagnostic du groupe SPIRIT", en: "SPIRIT group diagnosis", nl: "SPIRIT-diagnose van de groep" },
  "comparer_sans_nom":       { fr: "Pratique sans nom", en: "Unnamed practice", nl: "Naamloze praktijk" },
  "comparer_titre":         { fr: "Rassembler des évaluations", en: "Gather evaluations", nl: "Evaluaties bundelen" },
  "comparer_intro":         { fr: "Rassemblez les codes ou les liens reçus après chaque évaluation pour voir la répartition des avis du groupe.",
                              en: "Gather the codes or links received after each evaluation to see how the group's views are distributed.",
                              nl: "Verzamel de codes of links die je na elke evaluatie ontvangt, om de verdeling van de meningen in de groep te zien." },
  "comparer_nom_label":     { fr: "Pratique évaluée", en: "Practice evaluated", nl: "Geëvalueerde kerkelijke praktijk" },
  "comparer_code_label":    { fr: "Code ou lien reçu", en: "Code or link received", nl: "Ontvangen code of link" },
  "comparer_code_placeholder": { fr: "Ex.\u00a0: K7Q-M2X-PA4", en: "E.g. K7Q-M2X-PA4", nl: "Bijv.: K7Q-M2X-PA4" },
  "comparer_ajouter":       { fr: "Ajouter", en: "Add", nl: "Toevoegen" },
  "comparer_code_invalide": { fr: "Ce code n'est pas reconnu. Vérifiez-le\u00a0: il compte 9 caractères (lettres et chiffres).",
                              en: "This code is not recognised. Please check it: it has 9 characters (letters and digits).",
                              nl: "Deze code wordt niet herkend. Controleer hem: hij telt 9 tekens (letters en cijfers)." },
  "comparer_code_double":   { fr: "Ce code est déjà dans la liste. Il peut s'agir de la même évaluation envoyée deux fois, ou de deux personnes qui ont répondu exactement la même chose.",
                              en: "This code is already in the list. It may be the same evaluation sent twice, or two people who gave exactly the same answers.",
                              nl: "Deze code staat al in de lijst. Het kan om dezelfde evaluatie gaan die twee keer werd verstuurd, of om twee personen die precies hetzelfde hebben geantwoord." },
  "comparer_ajouter_quand_meme": { fr: "L'ajouter quand même", en: "Add it anyway", nl: "Toch toevoegen" },
  "comparer_ajout_un":      { fr: "1 évaluation ajoutée.", en: "1 evaluation added.", nl: "1 evaluatie toegevoegd." },
  "comparer_ajout":         { fr: "{nombre} évaluations ajoutées.", en: "{nombre} evaluations added.", nl: "{nombre} evaluaties toegevoegd." },
  "comparer_mes_evaluations": { fr: "Ajouter une de mes évaluations", en: "Add one of my evaluations", nl: "Een van mijn evaluaties toevoegen" },
  "comparer_aucune_locale": { fr: "Aucune évaluation faite seul n'est enregistrée sur cet appareil.", en: "No evaluation made alone is saved on this device.", nl: "Er is op dit toestel geen evaluatie opgeslagen die alleen werd gemaakt." },
  "comparer_liste_titre":   { fr: "Évaluations rassemblées ({nombre})", en: "Evaluations gathered ({nombre})", nl: "Verzamelde evaluaties ({nombre})" },
  "comparer_liste_vide":    { fr: "Aucune évaluation pour l'instant.", en: "No evaluations yet.", nl: "Nog geen evaluaties." },
  "comparer_evaluation":    { fr: "Évaluation {numero}", en: "Evaluation {numero}", nl: "Evaluatie {numero}" },
  "comparer_source_code":   { fr: "ajoutée par code", en: "added with a code", nl: "toegevoegd met een code" },
  "comparer_source_lien":   { fr: "ajoutée par lien", en: "added with a link", nl: "toegevoegd via een link" },
  "comparer_source_appareil": { fr: "sur cet appareil", en: "on this device", nl: "op dit toestel" },
  "comparer_retirer":       { fr: "Retirer l'évaluation {numero}", en: "Remove evaluation {numero}", nl: "Evaluatie {numero} verwijderen" },
  "comparer_voir":          { fr: "Voir le diagnostic du groupe", en: "View the group diagnosis", nl: "De diagnose van de groep bekijken" },
  "comparer_minimum":       { fr: "Ajoutez au moins deux évaluations pour les comparer.", en: "Add at least two evaluations to compare them.", nl: "Voeg minstens twee evaluaties toe om ze te vergelijken." },
  "comparer_vider":         { fr: "Vider la liste", en: "Clear the list", nl: "De lijst leegmaken" },
  "comparer_vider_confirmer": { fr: "Vider la liste des évaluations rassemblées\u00a0?", en: "Clear the list of gathered evaluations?", nl: "De lijst met verzamelde evaluaties leegmaken?" },
  "groupe_evaluations_comparees": { fr: "{nombre} évaluations comparées", en: "{nombre} evaluations compared", nl: "{nombre} vergeleken evaluaties" },
  "groupe_domaines_multiples": { fr: "Plusieurs domaines", en: "Several areas", nl: "Meerdere domeinen" },

  // --- Fenêtre de bienvenue ---
  "bienvenue_titre":     { fr: "Bienvenue dans SPIRIT", en: "Welcome to SPIRIT", nl: "Welkom bij SPIRIT" },
  "bienvenue_commencer": { fr: "Commencer",             en: "Get started", nl: "Beginnen" },

  // --- Fenêtre « Comment ça fonctionne ? » ---
  "fonctionnement_titre":   { fr: "Comment ça fonctionne ?", en: "How does it work?", nl: "Hoe werkt het?" },
  "fonctionnement_compris": { fr: "J'ai compris",            en: "Got it", nl: "Begrepen" },

  // --- Fenêtre « Installer SPIRIT » (smartphone, première visite) ---
  "installation_titre":  { fr: "Installer SPIRIT sur votre téléphone", en: "Install SPIRIT on your phone", nl: "SPIRIT op je telefoon installeren" },
  "installation_intro":  { fr: "Une fois sur votre écran d'accueil, SPIRIT s'ouvre comme une application, même hors connexion.",
                           en: "Once on your home screen, SPIRIT opens like an app, even without an internet connection.",
                           nl: "Eenmaal op je beginscherm opent SPIRIT als een app, ook zonder internetverbinding." },
  "installation_note_iphone": { fr: "Faites-le avant votre première évaluation : sur iPhone, ce qui est saisi dans Safari n'est pas repris dans l'application installée.",
                                en: "Do this before your first evaluation: on iPhone, what you enter in Safari is not carried over to the installed app.",
                                nl: "Doe dit vóór je eerste evaluatie: op een iPhone wordt wat je in Safari invult niet overgenomen in de geïnstalleerde app." },
  "installation_note_safari": { fr: "Pour installer SPIRIT, ouvrez d'abord cette page dans Safari.",
                                en: "To install SPIRIT, first open this page in Safari.",
                                nl: "Open deze pagina eerst in Safari om SPIRIT te installeren." },
  "installation_installer": { fr: "Installer", en: "Install", nl: "Installeren" },
  "installation_plus_tard": { fr: "Plus tard", en: "Later", nl: "Later" },
  "installation_rappel": { fr: "Vous retrouverez ces explications dans « À propos ».",
                           en: "You can find these instructions again under 'About'.",
                           nl: "Je vindt deze uitleg terug onder ‘Over’." },
  // Texte alternatif des visuels (lu par les lecteurs d'écran)
  "installation_alt_iphone": { fr: "1. Touchez ••• à droite de la barre d'adresse, puis Partager. 2. Choisissez Sur l'écran d'accueil. 3. Touchez Ajouter.",
                               en: "1. Tap ••• to the right of the address bar, then Share. 2. Choose Add to Home Screen. 3. Tap Add.",
                               nl: "1. Tik op ••• rechts van de adresbalk en daarna op Deel. 2. Kies Zet op beginscherm. 3. Tik op Voeg toe." },
  "installation_alt_android": { fr: "1. Touchez le menu à trois points, en haut à droite. 2. Choisissez Installer l'application (ou Ajouter à l'écran d'accueil). 3. Confirmez avec Installer.",
                                en: "1. Tap the three-dot menu at the top right. 2. Choose Install app (or Add to Home screen). 3. Confirm with Install.",
                                nl: "1. Tik rechtsboven op het menu met de drie puntjes. 2. Kies App installeren (of Toevoegen aan startscherm). 3. Bevestig met Installeren." },

  // --- Questionnaire : croix de retour à l'accueil, sommaire (ordinateur) ---
  "critere_quitter": { fr: "Revenir à l'accueil (votre évaluation est enregistrée)",
                       en: "Back to home (your evaluation is saved)",
                       nl: "Terug naar start (je evaluatie wordt bewaard)" },
  "sommaire_aria":   { fr: "Liste des piliers", en: "List of pillars", nl: "Lijst van de criteria" },

  // --- Retour (bouton ‹ générique, libellé d'accessibilité) ---
  "retour_accueil": { fr: "Retour à l'accueil", en: "Back to home", nl: "Terug naar start" },
  "retour_historique": { fr: "Retour à Mes évaluations", en: "Back to My evaluations", nl: "Terug naar Mijn evaluaties" },

  // --- Messages (boîtes de dialogue) ---
  // Guillemets autour d'un nom de pratique ({texte} = le nom)
  "guillemets": { fr: "\u00AB\u00a0{texte}\u00a0\u00BB", en: "\u201C{texte}\u201D", nl: "\u201C{texte}\u201D" },
  // Garder une copie des évaluations (v75, constat E4)
  "sauvegarde_titre":    { fr: "Garder une copie", en: "Keep a copy", nl: "Een kopie bewaren" },
  "sauvegarde_texte":    { fr: "Les évaluations ne sont enregistrées que sur cet appareil. Exportez-les dans un fichier pour en garder une copie ou les retrouver sur un autre appareil.",
                           en: "Evaluations are saved only on this device. Export them to a file to keep a copy or to find them again on another device.",
                           nl: "De evaluaties worden alleen op dit toestel bewaard. Exporteer ze naar een bestand om een kopie te bewaren of om ze op een ander toestel terug te vinden." },
  "sauvegarde_exporter": { fr: "Exporter les évaluations", en: "Export the evaluations", nl: "De evaluaties exporteren" },
  "sauvegarde_importer": { fr: "Importer un fichier", en: "Import a file", nl: "Een bestand importeren" },
  "sauvegarde_partage_titre": { fr: "Évaluations SPIRIT", en: "SPIRIT evaluations", nl: "SPIRIT-evaluaties" },
  "import_invalide":     { fr: "Ce fichier n'est pas une sauvegarde SPIRIT.", en: "This file is not a SPIRIT backup.", nl: "Dit bestand is geen SPIRIT-back-up." },
  "import_ajoutees_zero": { fr: "Aucune évaluation ajoutée.", en: "No evaluation added.", nl: "Geen evaluatie toegevoegd." },
  "import_ajoutees_un":  { fr: "1 évaluation ajoutée.", en: "1 evaluation added.", nl: "1 evaluatie toegevoegd." },
  "import_ajoutees":     { fr: "{nombre} évaluations ajoutées.", en: "{nombre} evaluations added.", nl: "{nombre} evaluaties toegevoegd." },
  "import_doublons_un":  { fr: "1 était déjà sur cet appareil.", en: "1 was already on this device.", nl: "1 stond al op dit toestel." },
  "import_doublons":     { fr: "{nombre} étaient déjà sur cet appareil.", en: "{nombre} were already on this device.", nl: "{nombre} stonden al op dit toestel." },
  "import_illisibles_un": { fr: "1 n'a pas pu être lue.", en: "1 could not be read.", nl: "1 kon niet gelezen worden." },
  "import_illisibles":   { fr: "{nombre} n'ont pas pu être lues.", en: "{nombre} could not be read.", nl: "{nombre} konden niet gelezen worden." },

  // Fenêtres de question (v75) : remplacent les fenêtres « OK / Annuler » du téléphone
  "msg_suppression_titre": { fr: "Supprimer cette évaluation\u00a0?", en: "Delete this evaluation?", nl: "Deze evaluatie verwijderen?" },
  "msg_suppression_fin": { fr: "Cette action est irréversible.", en: "This action cannot be undone.", nl: "Deze actie kan niet ongedaan worden gemaakt." },
  "msg_suppression_texte": { fr: "L'évaluation de {nom} ({date}) sera supprimée de cet appareil. Cette action est irréversible.",
                             en: "The evaluation of {nom} ({date}) will be deleted from this device. This action cannot be undone.",
                             nl: "De evaluatie van {nom} ({date}) wordt van dit toestel verwijderd. Deze actie kan niet ongedaan worden gemaakt." },
  "msg_annuler":     { fr: "Annuler", en: "Cancel", nl: "Annuleren" },
  "msg_reprise":     { fr: "Une évaluation est en cours",
                       en: "An evaluation is in progress", nl: "Er is een evaluatie bezig" },
  "msg_reprise_texte": { fr: "L'évaluation de {nom} n'est pas terminée. Vous pouvez la reprendre là où elle s'est arrêtée.",
                         en: "The evaluation of {nom} is not finished. You can pick it up where you left off.",
                         nl: "De evaluatie van {nom} is nog niet afgerond. Je kunt ze hervatten waar je gebleven was." },
  "msg_reprise_reprendre": { fr: "Reprendre l'évaluation", en: "Resume the evaluation", nl: "De evaluatie hervatten" },
  "msg_reprise_nouvelle":  { fr: "Commencer une nouvelle évaluation", en: "Start a new evaluation", nl: "Een nieuwe evaluatie beginnen" },
  "msg_nouvelle_titre":    { fr: "Commencer une nouvelle évaluation\u00a0?", en: "Start a new evaluation?", nl: "Een nieuwe evaluatie beginnen?" },
  "msg_nouvelle_texte":    { fr: "L'évaluation de {nom}, qui n'est pas terminée, sera supprimée de cet appareil.",
                             en: "The unfinished evaluation of {nom} will be deleted from this device.",
                             nl: "De onafgewerkte evaluatie van {nom} wordt van dit toestel verwijderd." },
  "msg_nouvelle_confirmer": { fr: "Supprimer et commencer", en: "Delete and start", nl: "Verwijderen en beginnen" },
  "msg_revenir":     { fr: "Revenir", en: "Go back", nl: "Terug" },
  "comparer_vider_texte": { fr: "Les évaluations enregistrées sur cet appareil ne sont pas touchées.",
                            en: "Evaluations saved on this device are not affected.",
                            nl: "De evaluaties die op dit toestel bewaard zijn, blijven behouden." },
  "resultat_lien_copier": { fr: "Copiez ce lien pour l'envoyer au groupe\u00a0:", en: "Copy this link to send it to the group:", nl: "Kopieer deze link om hem naar de groep te sturen:" },
  "msg_partage_texte": { fr: "Découvrez SPIRIT, un outil pour évaluer la synodalité d'une pratique ecclésiale.",
                         en: "Discover SPIRIT, a tool to evaluate the synodality of an ecclesial practice.", nl: "Ontdek SPIRIT, een instrument om de synodaliteit van een kerkelijke praktijk te evalueren." },
  "msg_lien_copie": { fr: "Lien copié\u00a0: vous pouvez maintenant le coller et l'envoyer.",
                      en: "Link copied: you can now paste and send it.", nl: "Link gekopieerd: je kunt hem nu plakken en versturen." },
  "msg_lien_partager": { fr: "Pour partager SPIRIT, copiez ce lien\u00a0:",
                         en: "To share SPIRIT, copy this link:", nl: "Kopieer deze link om SPIRIT te delen:" },

  // --- Diagnostic : schéma ---
  "schema_aria":   { fr: "Diagramme radial des trois pierres angulaires de la synodalité",
                     en: "Radial diagram of the three cornerstones of synodality",
                     nl: "Radiaal diagram van de drie pijlers van synodaliteit" },
  "schema_centre": { fr: "synodalité", en: "synodality", nl: "synodaliteit" },

  // --- Diagnostic : phrases de lecture par pierre angulaire ---
  // {nombre} = nombre de piliers pris en compte ; {piliers} = « pilier » ou
  // « piliers » (clés lecture_pilier / lecture_piliers) ; {liste} = détail
  // des réponses (ex. « 3 solidement établis et 1 en chantier »).
  "lecture_phrase":   { fr: "Sur {nombre} {piliers} pris en compte : {liste}.",
                        en: "Out of {nombre} {piliers} considered: {liste}.",
                        nl: "Van de {nombre} in aanmerking genomen {piliers}: {liste}." },
  "lecture_pilier":   { fr: "pilier",  en: "pillar",  nl: "criterium" },
  "lecture_piliers":  { fr: "piliers", en: "pillars", nl: "criteria" },
  "lecture_present":  { fr: "solidement établi",  en: "well established", nl: "stevig verankerd" },
  "lecture_presents": { fr: "solidement établis", en: "well established", nl: "stevig verankerd" },
  "lecture_consolider": { fr: "à consolider", en: "to be consolidated", nl: "te consolideren" },   // v80
  "lecture_chantier": { fr: "en chantier",    en: "under development", nl: "in opbouw" },
  "lecture_a_batir":  { fr: "encore à bâtir", en: "still to be built", nl: "nog op te bouwen" },
  "lecture_et":       { fr: "et", en: "and", nl: "en" },
  "lecture_aucun":    { fr: "Aucun pilier de cette dimension n'a été jugé applicable à la pratique évaluée.",
                        en: "No pillar in this dimension was considered applicable to the practice evaluated.",
                        nl: "Geen enkel criterium van deze pijler werd van toepassing geacht voor de geëvalueerde kerkelijke praktijk." },
  // M7 (audit v72) : phrase factuelle, avec le nombre de piliers
  "lecture_pleine":   { fr: "Les {nombre} piliers pris en compte sont solidement établis.",
                        en: "All {nombre} pillars taken into account are well established.",
                        nl: "De {nombre} criteria die in rekening werden gebracht, zijn stevig verankerd." },
  "lecture_pleine_un": { fr: "Le seul pilier pris en compte est solidement établi.",
                         en: "The only pillar taken into account is well established.",
                         nl: "Het enige criterium dat in rekening werd gebracht, is stevig verankerd." },
  "lecture_na_partiel": { fr: "{na} piliers sur {total} ont été jugés non applicables\u00a0: cette lecture ne porte que sur une partie de la dimension.",
                          en: "{na} of the {total} pillars were judged not applicable: this reading covers only part of the dimension.",
                          nl: "{na} van de {total} criteria van deze pijler werden als niet van toepassing beschouwd: deze lezing betreft er slechts een deel van." },
  "lecture_sans_reponse": { fr: "Aucune réponse n'a été enregistrée pour cette dimension.",
                            en: "No answer was recorded for this dimension.",
                            nl: "Voor deze pijler werd geen antwoord geregistreerd." },
  "lecture_croissance": { fr: "Cette dimension constitue un axe de croissance important.",
                          en: "This dimension is an important area for growth.",
                          nl: "Deze pijler is een belangrijk aandachtspunt voor groei." },

  // --- PDF ---
  // Abréviation du Document final devant les numéros de paragraphe
  "pdf_prefixe_ref":  { fr: "DF", en: "FD", nl: "SD" },
  "pdf_titre":        { fr: "Évaluer la synodalité des pratiques", en: "Assessing the synodality of practices", nl: "De synodaliteit van kerkelijke praktijken evalueren" },
  "pdf_ref_titre":    { fr: "Pour aller plus loin", en: "Going deeper", nl: "Verder verdiepen" },
  "pdf_sous_titre":   { fr: "Cadre SPIRIT — d'après le <em>Document final</em> du Synode 2024",
                        en: "SPIRIT framework — based on the 2024 Synod <em>Final Document</em>", nl: "SPIRIT-kader — gebaseerd op het <em>Slotdocument</em> van de Synode 2024" },
  // v84 : sous le sous-titre des deux PDF. La mention du panel se trouvait
  // dans l'ancienne section « Pistes de progression » (retirée en v82).
  // Formulation reprise du guide de l'animateur (section 1).
  "pdf_validation_panel": avecPanel({ fr: "Pierres angulaires et piliers validés selon la méthode Delphi par un panel de {panel}.",
                                      en: "Cornerstones and pillars validated using the Delphi method by a panel of {panel}.",
                                      nl: "Pijlers en criteria gevalideerd volgens de Delphi-methode door een panel van {panel}." }),
  "pdf_objet_label":  { fr: "Pratique évaluée", en: "Practice evaluated", nl: "Geëvalueerde kerkelijke praktijk" },
  // F5 (audit v72) : « Evaluation of 4 October » se lisait « l'évaluation d'une date »
  "pdf_evaluation_date": { fr: "Évaluation du {date}", en: "Evaluated on {date}", nl: "Evaluatie van {date}" },
  // v86 : PDF d'un rassemblement de codes (date du diagnostic du groupe)
  "pdf_diagnostic_date": { fr: "Diagnostic du {date}", en: "Diagnosis dated {date}", nl: "Diagnose van {date}" },
  // M6 (audit v72) : d'où viennent les questions d'aide imprimées dans le PDF
  "pdf_questions_reference": { fr: "Questions d'aide\u00a0: questionnaire de référence de SPIRIT (validé selon la méthode Delphi)",
                               en: "Guiding questions: SPIRIT reference questionnaire (validated using the Delphi method)",
                               nl: "Hulpvragen: referentievragenlijst van SPIRIT (gevalideerd volgens de Delphi-methode)" },
  "pdf_questions_domaine":   { fr: "Questions d'aide\u00a0: adaptées au domaine «\u00a0{domaine}\u00a0»",
                               en: "Guiding questions: adapted to the area \u201C{domaine}\u201D",
                               nl: "Hulpvragen: aangepast aan het domein \u201C{domaine}\u201D" },
  // v87 (audit v86, constats B4 et B5) — à valider par l'équipe (NL : Jens ou Rick)
  // B4 : l'évaluation terminée n'a pas pu être écrite dans la mémoire de l'appareil.
  "diagnostic_non_enregistre": { fr: "Cette évaluation n'a pas pu être enregistrée sur cet appareil. Exportez le diagnostic en PDF maintenant pour la conserver.",
                                 en: "This evaluation could not be saved on this device. Export the diagnosis as PDF now to keep it.",
                                 nl: "Deze evaluatie kon niet op dit toestel worden opgeslagen. Exporteer de diagnose nu als pdf om ze te bewaren." },
  // B5 : lien « résultat du groupe » qui ne contient pas au moins deux évaluations lisibles.
  "lien_incomplet_titre": { fr: "Ce lien est incomplet", en: "This link is incomplete", nl: "Deze link is onvolledig" },
  "lien_incomplet_texte": { fr: "Il ne contient pas au moins deux évaluations lisibles\u00a0: le diagnostic du groupe ne peut pas être affiché. Demandez à la personne qui l'a envoyé de le partager à nouveau.",
                            en: "It does not contain at least two readable evaluations, so the group diagnosis cannot be shown. Ask the person who sent it to share it again.",
                            nl: "Hij bevat geen twee leesbare evaluaties: de diagnose van de groep kan niet worden getoond. Vraag de persoon die de link stuurde om hem opnieuw te delen." },
  // M10 (audit v72) : numéro de version visible (À propos et PDF)
  "version_libelle": { fr: "SPIRIT, version {version}", en: "SPIRIT, version {version}", nl: "SPIRIT, versie {version}" },
  // F3 (audit v72) : titre de la page (onglet, lecteurs d'écran)
  "titre_page": { fr: "SPIRIT — Évaluation de la synodalité", en: "SPIRIT — Evaluating synodality", nl: "SPIRIT — Synodaliteit evalueren" },
  "pdf_diagnostic":   { fr: "Diagnostic", en: "Diagnosis", nl: "Diagnose" },
  "pdf_lecture":      { fr: "Lecture par pierre angulaire", en: "Reading by cornerstone", nl: "Lezing per pijler" },
  "pdf_detail":       { fr: "Détail des piliers", en: "Pillar details", nl: "Detail van de criteria" },
  "pdf_observation": { fr: "Observation", en: "Observation", nl: "Opmerking" },
  "diagnostic_observations_titre": { fr: "Vos observations", en: "Your observations", nl: "Je observaties" },
  // v82 : la section « Pistes de progression » du PDF est retirée (on
  // n'investit pas dessus pour le moment). Elle est remplacée par la section
  // « Évaluer à plusieurs, le temps d'une soirée », commune aux deux PDF.
  // FR validé par FX (19 octobre 2026) ; EN et NL : propositions à faire relire.
  // (\u00a0 = espace insécable, comme plus haut)
  "pdf_soiree_titre": { fr: "Évaluer à plusieurs, le temps d'une soirée",
                        en: "Evaluating with several people, over one evening",
                        nl: "Met meerdere personen evalueren, tijdens één avond" },
  "pdf_soiree_intro": { fr: "SPIRIT peut servir de point de départ à une rencontre. Chaque participant évalue la même pratique de son côté, puis le groupe découvre le diagnostic commun et en parle.",
                        en: "SPIRIT can serve as the starting point for a meeting. Each participant evaluates the same practice separately, then the group discovers the shared diagnosis and talks about it.",
                        nl: "SPIRIT kan het vertrekpunt zijn van een bijeenkomst. Elke deelnemer evalueert afzonderlijk dezelfde kerkelijke praktijk, waarna de groep de gezamenlijke diagnose ontdekt en erover in gesprek gaat." },
  "pdf_soiree_etape1_titre": { fr: "Avant la soirée, ou au début de celle-ci.", en: "Before the evening, or at its start.", nl: "Vóór de avond, of bij het begin ervan." },
  "pdf_soiree_etape1_texte": { fr: "Chacun évalue la pratique sur son propre téléphone, seul et sans se concerter. L'animateur indique la pratique à évaluer et le domaine à choisir, pour que tous répondent aux mêmes questions.",
                               en: "Each person evaluates the practice on their own phone, alone and without conferring. The facilitator states which practice is to be evaluated and which area to choose, so that everyone answers the same questions.",
                               nl: "Ieder evalueert de kerkelijke praktijk op zijn eigen telefoon, alleen en zonder overleg. De begeleider geeft aan welke kerkelijke praktijk geëvalueerd wordt en welk domein gekozen moet worden, zodat iedereen dezelfde vragen beantwoordt." },
  "pdf_soiree_etape2_titre": { fr: "Rassembler les codes.", en: "Gather the codes.", nl: "De codes verzamelen." },
  "pdf_soiree_etape2_texte": { fr: "Chacun transmet son code de comparaison\u00a0: il figure en haut de son PDF et dans «\u00a0Partager pour le groupe\u00a0». L'animateur les saisit dans «\u00a0Rassembler des évaluations\u00a0» et obtient le diagnostic du groupe. Celui-ci montre la répartition des réponses, sans moyenne et sans dire qui a répondu quoi.",
                               en: "Each person passes on their comparison code: it appears at the top of their PDF and under ‘Share with the group’. The facilitator enters the codes in ‘Gather evaluations’ and obtains the group diagnosis. It shows how the answers are distributed, without an average and without revealing who answered what.",
                               nl: "Ieder bezorgt zijn vergelijkingscode: die staat bovenaan zijn pdf en onder ‘Delen met de groep’. De begeleider voert de codes in bij ‘Evaluaties bundelen’ en verkrijgt de diagnose van de groep. Die toont hoe de antwoorden verdeeld zijn, zonder gemiddelde en zonder te zeggen wie wat heeft geantwoord." },
  "pdf_soiree_etape3_titre": { fr: "Commencer par les avis divergents.", en: "Start with the divided views.", nl: "Beginnen bij de verdeelde meningen." },
  "pdf_soiree_etape3_texte": { fr: "Les piliers où au moins une personne a répondu «\u00a0Solidement établi\u00a0» et une autre «\u00a0À bâtir\u00a0» sont signalés\u00a0: ce sont eux qui appellent le plus d'échange. Chacun peut dire ce qui fonde sa réponse, en écoutant les autres avant de chercher à convaincre.",
                               en: "Pillars where at least one person answered ‘Well established’ and another ‘To be built’ are flagged: these are the ones that call for the most discussion. Each person can say what lies behind their answer, listening to the others before trying to convince them.",
                               nl: "Criteria waarbij minstens één persoon ‘Stevig verankerd’ en een ander ‘Nog op te bouwen’ heeft geantwoord, worden aangeduid: daarover is het meeste gesprek nodig. Ieder kan zeggen waarop zijn antwoord steunt, en luistert naar de anderen voordat hij hen probeert te overtuigen." },
  "pdf_soiree_etape4_titre": { fr: "Choisir où avancer.", en: "Choose where to move forward.", nl: "Kiezen waaraan gewerkt wordt." },
  "pdf_soiree_etape4_texte": { fr: "Le groupe retient un ou deux piliers à travailler en priorité et formule ensemble des pistes d'action concrètes. Les extraits du <em>Document final</em> rassemblés pour chaque pilier dans le PDF «\u00a0Pour aller plus loin\u00a0» peuvent nourrir cette réflexion.",
                               en: "The group selects one or two pillars to work on first and together formulates concrete courses of action. The extracts from the <em>Final Document</em> gathered for each pillar in the ‘Going deeper’ PDF can nourish this reflection.",
                               nl: "De groep kiest één of twee criteria om eerst aan te werken en formuleert samen concrete actiepunten. De fragmenten uit het <em>Slotdocument</em> die per criterium zijn samengebracht in de pdf ‘Verder verdiepen’, kunnen deze reflectie voeden." },
  // Note sous le diagnostic. v82 : plus d'annonce de « pistes de progression
  // personnalisées » ; seul reste le renvoi à « Pour aller plus loin ».
  "diagnostic_pistes_note": avecPanel({ fr: "Des phrases issues du <em>Document final</em> du Synode, validées par un panel de {panel}, sont proposées comme pistes de réflexion via le bouton «\u00a0Pour aller plus loin\u00a0».",
                              en: "Phrases from the Synod <em>Final Document</em>, validated by a panel of {panel}, are offered as prompts for reflection via the ‘Going deeper’ button.", nl: "Zinnen uit het <em>Slotdocument</em> van de Synode, gevalideerd door een panel van {panel}, worden aangeboden als denkpistes via de knop ‘Verder verdiepen’." }),

  // Dernière feuille du PDF : les 14 piliers et leurs fondements (Document final du Synode)
  "panel_theologiens": PANEL_THEOLOGIENS,
  "pdf_fondements_titre": { fr: "Références dans le <em>Document final</em> du Synode",
                            en: "References in the Synod <em>Final Document</em>", nl: "Verwijzingen in het <em>Slotdocument</em> van de Synode" },
  "pdf_fondements_intro": avecPanel({ fr: "Voici les passages références servant de fondement à l'outil, validés par un panel de {panel} :",
                            en: "Here are the reference passages that serve as the foundation of the tool, validated by a panel of {panel}:", nl: "Hier volgen de referentiepassages die als basis voor het instrument dienen, gevalideerd door een panel van {panel}:" })

};
