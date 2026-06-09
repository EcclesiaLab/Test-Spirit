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
  "accueil_baseline":        { fr: "Évaluer la synodalité d'une pratique ecclésiale",
                               en: "Evaluating the synodality of an ecclesial practice" },
  "accueil_demarrer":        { fr: "Démarrer une évaluation", en: "Start an evaluation" },
  "accueil_mes_evaluations": { fr: "Mes évaluations",         en: "My evaluations" },
  "accueil_quest_ce_que":    { fr: "Qu'est-ce que SPIRIT ?",  en: "What is SPIRIT?" },
  "accueil_a_propos":        { fr: "À propos",                en: "About" },
  "accueil_partager":        { fr: "Partager SPIRIT",         en: "Share SPIRIT" },

  // --- Écran d'entrée ---
  "entree_titre":        { fr: "Nouvelle évaluation",          en: "New evaluation" },
  "entree_question_nom": { fr: "Quelle pratique évaluez-vous ?", en: "Which practice are you evaluating?" },
  "entree_aide_nom":     { fr: "Ce nom servira à retrouver l'évaluation et à titrer le document final.",
                           en: "This name will be used to find the evaluation and to title the final document." },
  "entree_placeholder":  { fr: "Ex. : Conseil pastoral, Retraite des confirmands…",
                           en: "E.g. Pastoral council, Confirmation retreat…" },
  "entree_question_type":{ fr: "De quelle pratique s'agit-il ?", en: "What kind of practice is it?" },
  "entree_commencer":    { fr: "Commencer l'évaluation",      en: "Begin the evaluation" },

  // --- Questionnaire (piliers) ---
  "pilier_compteur":   { fr: "Pilier",  en: "Pillar" },   // suivi de "X / 14"
  "pilier_aide":       { fr: "Pour vous aider à répondre", en: "To help you answer" },
  "pilier_suivant":    { fr: "Suivant", en: "Next" },
  "pilier_voir_diagnostic": { fr: "Voir le diagnostic", en: "View the diagnosis" },
  "pilier_precedent":  { fr: "Pilier précédent", en: "Previous pillar" },

  // --- Diagnostic ---
  "diagnostic_titre":    { fr: "Diagnostic",          en: "Diagnosis" },
  "diagnostic_pdf":      { fr: "Exporter en PDF",     en: "Export as PDF" },
  "diagnostic_accueil":  { fr: "Revenir à l'accueil", en: "Back to home" },

  // --- Historique ---
  "historique_titre": { fr: "Mes évaluations", en: "My evaluations" },
  "historique_vide":  { fr: "Vous n'avez pas encore d'évaluation enregistrée. Les évaluations terminées apparaîtront ici.",
                        en: "You don't have any saved evaluations yet. Completed evaluations will appear here." },
  "historique_rouvrir":   { fr: "Rouvrir",   en: "Open" },
  "historique_supprimer": { fr: "Supprimer", en: "Delete" },

  // --- Titres des pages d'information ---
  "page_quest_titre":  { fr: "Qu'est-ce que SPIRIT ?", en: "What is SPIRIT?" },
  "page_apropos_titre":{ fr: "À propos",               en: "About" },

  // --- Fenêtre de bienvenue ---
  "bienvenue_titre":     { fr: "Bienvenue dans SPIRIT", en: "Welcome to SPIRIT" },
  "bienvenue_commencer": { fr: "Commencer",             en: "Get started" },

  // --- Écran de choix de la langue (premier lancement) ---
  "choix_langue_titre": { fr: "Choisissez votre langue", en: "Choose your language" },

  // --- Sélecteur de langue (accueil) ---
  "selecteur_langue": { fr: "Langue", en: "Language" },

  // --- Retour (bouton ‹ générique, libellé d'accessibilité) ---
  "retour_accueil": { fr: "Retour à l'accueil", en: "Back to home" },

  // --- Messages (boîtes de dialogue) ---
  "msg_suppression": { fr: "Supprimer définitivement l'évaluation",
                       en: "Permanently delete the evaluation" },
  "msg_suppression_fin": { fr: "Cette action est irréversible.",
                           en: "This action cannot be undone." },
  "msg_reprise": { fr: "Une évaluation est en cours",
                   en: "An evaluation is in progress" },
  "msg_reprise_detail": { fr: "Cliquez sur OK pour la reprendre, ou sur Annuler pour en commencer une nouvelle (l'évaluation en cours sera alors perdue).",
                          en: "Click OK to resume it, or Cancel to start a new one (the evaluation in progress will then be lost)." },
  "msg_reprendre": { fr: "Reprendre", en: "Resume" },
  "msg_nouvelle":  { fr: "Nouvelle",  en: "New" },
  "msg_partage_texte": { fr: "Découvrez SPIRIT, un outil pour évaluer la synodalité d'une pratique ecclésiale.",
                         en: "Discover SPIRIT, a tool to evaluate the synodality of an ecclesial practice." },
  "msg_lien_copie": { fr: "Lien copié : vous pouvez maintenant le coller et l'envoyer.",
                      en: "Link copied: you can now paste and send it." },
  "msg_lien_partager": { fr: "Pour partager SPIRIT, copiez ce lien :",
                         en: "To share SPIRIT, copy this link:" },

  // --- PDF ---
  "pdf_titre":        { fr: "Évaluation de la synodalité", en: "Synodality evaluation" },
  "pdf_sous_titre":   { fr: "Cadre SPIRIT — d'après le Document final du Synode 2024",
                        en: "SPIRIT framework — based on the 2024 Synod Final Document" },
  "pdf_objet_label":  { fr: "Objet évalué", en: "Practice evaluated" },
  "pdf_evaluation_du":{ fr: "Évaluation du", en: "Evaluation of" },
  "pdf_diagnostic":   { fr: "Diagnostic", en: "Diagnosis" },
  "pdf_lecture":      { fr: "Lecture par dimension", en: "Reading by dimension" },
  "pdf_detail":       { fr: "Détail des piliers", en: "Pillar details" },
  "pdf_pistes":       { fr: "Pistes d'action", en: "Action steps" },
  "pdf_pistes_attente": { fr: "Les pistes d'action personnalisées seront proposées dans une prochaine version de SPIRIT, à partir des piliers en construction ou à bâtir.",
                          en: "Personalised action steps will be offered in a future version of SPIRIT, based on the pillars under construction or to be built." },
  "pdf_pistes_validation": { fr: "En attendant, toutes les phrases issues du Document final du Synode sur la synodalité ont été réunies dans les pages suivantes comme pistes de réflexion. Elles ont été validées par un panel de 50 théologiens lors de la phase théorique de création de l'outil.",
                             en: "In the meantime, all the phrases drawn from the Final Document of the Synod on Synodality have been gathered on the following pages as prompts for reflection. They were validated by a panel of 50 theologians during the theoretical phase of the tool's creation." },
  "diagnostic_pistes_note": { fr: "Les pistes d'action personnalisées sont en cours de développement. En attendant, des phrases issues du Document final du Synode — validées par un panel de 50 théologiens — sont proposées comme pistes de réflexion dans le PDF (dernière page).",
                              en: "Personalised action steps are still in development. In the meantime, phrases from the Synod Final Document — validated by a panel of 50 theologians — are offered as prompts for reflection in the PDF (last page)." },
  "pdf_pied": { fr: "Généré par SPIRIT — EcclesiaLab — ecclesialab.org",
                en: "Generated by SPIRIT — EcclesiaLab — ecclesialab.org" },

  // Dernière feuille du PDF : les 14 piliers et leurs fondements (Document final du Synode)
  "pdf_fondements_titre": { fr: "Fondements — Les 14 piliers et le Document final du Synode",
                            en: "Foundations — The 14 pillars and the Synod Final Document" },
  "pdf_fondements_source": { fr: "Citations extraites du Document final du Synode sur la synodalité (2024). © Secrétariat général du Synode des évêques.",
                             en: "Quotations from the Final Document of the Synod on Synodality (2024). © General Secretariat of the Synod of Bishops." }

};
