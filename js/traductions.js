/*
  ============================================================
  TRADUCTIONS — textes d'interface (FR / EN)
  ============================================================

  Ce fichier contient les textes COURTS de l'interface : boutons, titres
  d'écrans, menus, libellés. Chaque texte a une CLÉ (identifiant) et ses
  versions { fr, en }.

  La fonction t("cle") (définie dans langue.js) renvoie le bon texte selon
  la langue active.

  Les textes LONGS (pages « Qu'est-ce que SPIRIT ? », « À propos », fenêtre
  de bienvenue) ne sont PAS ici : ils sont gérés directement dans le HTML,
  en blocs bilingues affichés/masqués selon la langue (plus lisible à éditer).

  Pour corriger une traduction : modifiez le texte entre guillemets de la
  bonne langue, sans toucher à la clé ni à la structure.
  ============================================================
*/

const TRADUCTIONS = {

  // --- Accueil ---
  "accueil_baseline":        { fr: "Évaluer la synodalité d'une pratique chrétienne",
                               en: "Assessing the synodality of a Christian practice", nl: "De synodaliteit van een geloofspraktijk evalueren" },
  "accueil_demarrer":        { fr: "Démarrer une évaluation", en: "Start an evaluation", nl: "Een evaluatie starten" },
  "accueil_mes_evaluations": { fr: "Mes évaluations",         en: "My evaluations", nl: "Mijn evaluaties" },
  "accueil_quest_ce_que":    { fr: "Qu'est-ce que SPIRIT ?",  en: "What is SPIRIT?", nl: "Wat is SPIRIT?" },
  "accueil_a_propos":        { fr: "À propos",                en: "About", nl: "Over" },
  "accueil_partager":        { fr: "Partager SPIRIT",         en: "Share SPIRIT", nl: "SPIRIT delen" },

  // --- Écran d'entrée ---
  "entree_titre":        { fr: "Nouvelle évaluation",          en: "New evaluation", nl: "Nieuwe evaluatie" },
  "entree_question_nom": { fr: "Quelle pratique évaluez-vous ?", en: "Which practice are you evaluating?", nl: "Welke geloofspraktijk evalueer je?" },
  "entree_aide_nom":     { fr: "Ce nom servira à retrouver l'évaluation et à titrer le document final.",
                           en: "This name will be used to find the evaluation and to title the final document.", nl: "Deze naam dient om de evaluatie terug te vinden en om het eindrapport een titel te geven." },
  "entree_placeholder":  { fr: "Ex. : Conseil pastoral, Retraite des confirmands…",
                           en: "E.g. Pastoral council, Confirmation retreat…", nl: "Bijv.: Pastorale raad, Vormselretraite…" },
  "entree_question_type":{ fr: "De quelle pratique s'agit-il ?", en: "What kind of practice is it?", nl: "Om welke soort geloofspraktijk gaat het?" },
  "entree_commencer":    { fr: "Commencer l'évaluation",      en: "Begin the evaluation", nl: "De evaluatie beginnen" },

  // --- Questionnaire (piliers) ---
  "pilier_compteur":   { fr: "Pilier",  en: "Pillar", nl: "Criterium" },   // suivi de "X / 14"
  "pilier_aide":       { fr: "Pour vous aider à répondre", en: "To help you answer", nl: "Om je te helpen antwoorden" },
  "pilier_suivant":    { fr: "Suivant", en: "Next", nl: "Volgende" },
  "pilier_voir_diagnostic": { fr: "Voir le diagnostic", en: "View the diagnosis", nl: "De diagnose bekijken" },
  "pilier_precedent":  { fr: "Pilier précédent", en: "Previous pillar", nl: "Vorig criterium" },

  // --- Diagnostic ---
  "diagnostic_titre":    { fr: "Diagnostic",          en: "Diagnosis", nl: "Diagnose" },
  "diagnostic_pdf":      { fr: "Exporter mon diagnostic en PDF", en: "Export my diagnosis as PDF", nl: "Mijn diagnose exporteren als pdf" },
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

  // --- Fenêtre de bienvenue ---
  "bienvenue_titre":     { fr: "Bienvenue dans SPIRIT", en: "Welcome to SPIRIT", nl: "Welkom bij SPIRIT" },
  "bienvenue_commencer": { fr: "Commencer",             en: "Get started", nl: "Beginnen" },

  // --- Fenêtre « Comment ça fonctionne ? » ---
  "fonctionnement_titre":   { fr: "Comment ça fonctionne ?", en: "How does it work?", nl: "Hoe werkt het?" },
  "fonctionnement_compris": { fr: "J'ai compris",            en: "Got it", nl: "Begrepen" },

  // --- Écran de choix de la langue (premier lancement) ---
  "choix_langue_titre": { fr: "Choisissez votre langue", en: "Choose your language", nl: "Kies je taal" },

  // --- Sélecteur de langue (accueil) ---
  "selecteur_langue": { fr: "Langue", en: "Language", nl: "Taal" },

  // --- Retour (bouton ‹ générique, libellé d'accessibilité) ---
  "retour_accueil": { fr: "Retour à l'accueil", en: "Back to home", nl: "Terug naar start" },

  // --- Messages (boîtes de dialogue) ---
  "msg_suppression": { fr: "Supprimer définitivement l'évaluation",
                       en: "Permanently delete the evaluation", nl: "De evaluatie definitief verwijderen" },
  "msg_suppression_fin": { fr: "Cette action est irréversible.",
                           en: "This action cannot be undone.", nl: "Deze actie kan niet ongedaan worden gemaakt." },
  "msg_reprise": { fr: "Une évaluation est en cours",
                   en: "An evaluation is in progress", nl: "Er is een evaluatie bezig" },
  "msg_reprise_detail": { fr: "Cliquez sur OK pour la reprendre, ou sur Annuler pour en commencer une nouvelle (l'évaluation en cours sera alors perdue).",
                          en: "Click OK to resume it, or Cancel to start a new one (the evaluation in progress will then be lost).", nl: "Klik op OK om ze te hervatten, of op Annuleren om een nieuwe te beginnen (de lopende evaluatie gaat dan verloren)." },
  "msg_reprendre": { fr: "Reprendre", en: "Resume", nl: "Hervatten" },
  "msg_nouvelle":  { fr: "Nouvelle",  en: "New", nl: "Nieuwe" },
  "msg_partage_texte": { fr: "Découvrez SPIRIT, un outil pour évaluer la synodalité d'une pratique chrétienne.",
                         en: "Discover SPIRIT, a tool to evaluate the synodality of a Christian practice.", nl: "Ontdek SPIRIT, een instrument om de synodaliteit van een geloofspraktijk te evalueren." },
  "msg_lien_copie": { fr: "Lien copié : vous pouvez maintenant le coller et l'envoyer.",
                      en: "Link copied: you can now paste and send it.", nl: "Link gekopieerd: je kunt hem nu plakken en versturen." },
  "msg_lien_partager": { fr: "Pour partager SPIRIT, copiez ce lien :",
                         en: "To share SPIRIT, copy this link:", nl: "Kopieer deze link om SPIRIT te delen:" },

  // --- PDF ---
  "pdf_titre":        { fr: "Évaluer la synodalité des pratiques", en: "Assessing the synodality of practices", nl: "De synodaliteit van geloofspraktijken evalueren" },
  "pdf_ref_titre":    { fr: "Pour aller plus loin", en: "Going deeper", nl: "Verder verdiepen" },
  "pdf_sous_titre":   { fr: "Cadre SPIRIT — d'après le <em>Document final</em> du Synode 2024",
                        en: "SPIRIT framework — based on the 2024 Synod <em>Final Document</em>", nl: "SPIRIT-kader — gebaseerd op het <em>Slotdocument</em> van de Synode 2024" },
  "pdf_objet_label":  { fr: "Pratique évaluée", en: "Practice evaluated", nl: "Geëvalueerde geloofspraktijk" },
  "pdf_evaluation_du":{ fr: "Évaluation du", en: "Evaluation of", nl: "Evaluatie van" },
  "pdf_diagnostic":   { fr: "Diagnostic", en: "Diagnosis", nl: "Diagnose" },
  "pdf_lecture":      { fr: "Lecture par pierre angulaire", en: "Reading by cornerstone", nl: "Lezing per pijler" },
  "pdf_detail":       { fr: "Détail des piliers", en: "Pillar details", nl: "Detail van de criteria" },
  "pdf_pistes":       { fr: "Pistes de progression", en: "Pathways for progress", nl: "Groeimogelijkheden" },
  "pdf_pistes_destinataire": { fr: "(À destination des personnes qui ont testé l'outil SPIRIT)",
                               en: "(For those who have tried out the SPIRIT tool)", nl: "(Bestemd voor wie het SPIRIT-instrument heeft uitgetest)" },
  "pdf_pistes_attente": { fr: "Les pistes de progression personnalisées seront proposées dans une prochaine version de SPIRIT, à partir des piliers en chantier ou à bâtir.",
                          en: "Personalised pathways for progress will be offered in a future version of SPIRIT, based on the pillars under construction or to be built.", nl: "De gepersonaliseerde groeimogelijkheden worden aangeboden in een volgende versie van SPIRIT, op basis van de criteria ‘in opbouw’ of ‘nog op te bouwen’." },
  "pdf_pistes_validation": { fr: "En attendant, toutes les phrases issues du <em>Document final</em> du Synode sur la synodalité ont été réunies comme pistes de réflexion, accessibles via le bouton « Pour aller plus loin » de l'application. Elles ont été validées par un panel de 50 théologiens et théologiennes issus du monde entier lors de la phase théorique de création de l'outil.",
                             en: "In the meantime, all the phrases drawn from the <em>Final Document</em> of the Synod on Synodality have been gathered as prompts for reflection, available via the 'Going deeper' button in the app. They were validated by a panel of 50 theologians from around the world during the theoretical phase of the tool's creation.", nl: "In afwachting daarvan zijn alle zinnen uit het <em>Slotdocument</em> van de Synode over synodaliteit samengebracht als denkpistes, toegankelijk via de knop ‘Verder verdiepen’ in de applicatie. Ze werden gevalideerd door een panel van 50 theologen en theologes uit de hele wereld tijdens de theoretische fase van de ontwikkeling van het instrument." },
  "pdf_pistes_groupe": { fr: "Pour une utilisation en groupe, chacun fait sa propre évaluation sur SPIRIT, puis les PDF individuels peuvent être confrontés afin d'en tirer des pistes d'action.",
                         en: "For group use, each person carries out their own evaluation on SPIRIT; the individual PDFs can then be compared to draw out shared pathways for progress.", nl: "Voor gebruik in groep maakt ieder zijn eigen evaluatie op SPIRIT; de individuele pdf’s kunnen daarna naast elkaar worden gelegd om er gezamenlijke groeimogelijkheden uit af te leiden." },
  "diagnostic_pistes_note": { fr: "Les pistes de progression personnalisées sont en cours de développement. En attendant, des phrases issues du <em>Document final</em> du Synode — validées par un panel de 50 théologiens et théologiennes — sont proposées comme pistes de réflexion via le bouton « Pour aller plus loin ».",
                              en: "Personalised pathways for progress are still in development. In the meantime, phrases from the Synod <em>Final Document</em> — validated by a panel of 50 theologians — are offered as prompts for reflection via the 'Going deeper' button.", nl: "De gepersonaliseerde groeimogelijkheden zijn in ontwikkeling. In afwachting daarvan worden zinnen uit het <em>Slotdocument</em> van de Synode — gevalideerd door een panel van 50 theologen en theologes — aangeboden als denkpistes via de knop ‘Verder verdiepen’." },

  // Dernière feuille du PDF : les 14 piliers et leurs fondements (Document final du Synode)
  "pdf_fondements_titre": { fr: "Références dans le <em>Document final</em> du Synode",
                            en: "References in the Synod <em>Final Document</em>", nl: "Verwijzingen in het <em>Slotdocument</em> van de Synode" },
  "pdf_fondements_intro": { fr: "Voici les passages références servant de fondement à l'outil, validés par un panel de 50 théologiens et théologiennes :",
                            en: "Here are the reference passages that serve as the foundation of the tool, validated by a panel of 50 theologians:", nl: "Hier volgen de referentiepassages die als basis voor het instrument dienen, gevalideerd door een panel van 50 theologen en theologes:" }

};
