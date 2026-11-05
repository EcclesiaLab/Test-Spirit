# SPIRIT — Évaluation de la synodalité

**SPIRIT** (*Synodalité des Pratiques : Indicateurs pour le Renouveau, l'Implémentation et la Transformation*) est une application web installable (PWA) qui permet d'évaluer la synodalité d'une pratique, d'un projet ou d'une instance ecclésiale.

L'évaluation s'appuie sur **14 piliers** organisés autour de **trois pierres angulaires** — Communion, Participation, Mission — issus du *Document final du Synode sur la synodalité* (2024) et consolidés par une démarche de validation auprès d'experts théologiens.

L'application est un projet d'**EcclesiaLab**, laboratoire de recherche sur l'innovation et la transformation dans l'Église catholique, affilié à l'**UCLouvain** (Belgique).

---

## Ce que fait l'application

- **Évaluer** une pratique ecclésiale (en néerlandais « kerkelijke praktijk » depuis la v85) en répondant, pilier par pilier, à un questionnaire avec quatre niveaux de réponse et « Non applicable » (*Solidement établi / À consolider / En chantier / À bâtir / Non applicable*). Le niveau « À consolider » et les pictogrammes de construction datent de la v80. Une évaluation se fait toujours seul (le mode « Évaluer en groupe » des versions 73 à 80 a été retiré en v81 ; les évaluations de groupe déjà enregistrées restent lisibles).
- **Rassembler des évaluations** (v74, appelé « Comparer des évaluations » jusqu'à la v78) : c'est la seule manière d'évaluer à plusieurs depuis la v81. Chaque personne évalue de son côté, puis transmet un code de 9 caractères (ou un lien) contenant uniquement le domaine et ses 14 réponses (bouton « Partager pour le groupe » du diagnostic) ; une personne rassemble ces codes dans l'écran « Rassembler des évaluations », accessible depuis l'accueil (v79) ou depuis *Mes évaluations*, et obtient le diagnostic du groupe : la répartition des avis par pilier, sans moyenne, avec les piliers aux avis divergents signalés. Fonctionne en salle comme à distance, sans serveur. Depuis la v80, le code suit un format 2 (5 réponses possibles par pilier) ; les codes donnés avant la v80 restent lisibles. Le lien « Envoyer le résultat au groupe » contient tous les codes ; depuis la v86, il porte aussi la date du diagnostic (`&d=AAAA-MM-JJ`), affichée quand on le rouvre, par exemple pour comparer avec une nouvelle évaluation à 6 ou 12 mois.
- **Visualiser** un diagnostic sous forme de trois jauges (une par pierre angulaire), accompagné d'une lecture textuelle.
- **Exporter** le résultat en PDF via la fonction d'impression du navigateur. Depuis la v82, le PDF d'une évaluation porte son code de comparaison en première page et se termine par une démarche « Évaluer à plusieurs, le temps d'une soirée ».
- **Conserver** l'historique des évaluations sur l'appareil (consultation, réouverture, suppression).
- **Garder une copie** (v75) : dans *Mes évaluations*, « Exporter les évaluations » crée un fichier `.json` (toutes les évaluations terminées) ; « Importer un fichier » les ajoute sur un autre appareil, sans doublon. Le fichier va où l'utilisateur le décide.
- **Choisir la langue** : interface et contenu en français, anglais et néerlandais.

L'utilisateur évalue toujours un **objet extérieur** (une pratique, un projet, une instance) — jamais lui-même.

---

## Choix techniques

- **HTML / CSS / JavaScript natifs**, sans aucun framework ni bibliothèque externe.
- **Application web progressive (PWA)** : installable sur l'écran d'accueil d'un smartphone, fonctionne hors-ligne grâce à un *service worker*.
- **100 % local** : toutes les données restent sur l'appareil de l'utilisateur (`localStorage`). Aucun serveur, aucune base de données distante, aucun compte, aucun traceur.
- **Hébergement** : GitHub Pages.

Ces choix sont volontaires : ils rendent l'application sobre, durable et maintenable par une seule personne.

---

## Structure du projet

```
.
├── index.html              Structure de tous les écrans de l'application
├── manifest.json           Carte d'identité de la PWA (nom, icône, couleurs)
├── service-worker.js        Cache hors-ligne — VERSION À INCRÉMENTER À CHAQUE MODIF
├── css/
│   └── styles.css          Toute la mise en forme
├── js/
│   ├── donnees-spirit.js   ★ CŒUR ÉDITORIAL : piliers, pierres angulaires, textes
│   ├── pictogrammes.js     Pictogrammes des réponses (maison en construction, v80)
│   ├── questions-domaines.js  Questions d'aide des 4 domaines (version d'essai)
│   ├── lexique.js          Lexique : mots de l'Église et de SPIRIT (provisoire)
│   ├── traductions.js      Textes d'interface (FR / EN / NL)
│   ├── langue.js           Gestion du basculement de langue
│   ├── app.js              Logique applicative (navigation, questionnaire, écrans)
│   ├── diagnostic.js       Calcul et affichage des trois jauges
│   ├── historique.js       Archivage des évaluations terminées
│   ├── sauvegarde.js       Export / import des évaluations dans un fichier (v75)
│   ├── fenetres.js         Fenêtres : ouverture, fermeture, accessibilité, questions (v75)
│   ├── comparaison.js      Codes et liens de partage, écran « Rassembler des évaluations »
│   └── impression.js       Construction du document PDF
├── icons/
│   ├── icon-192.png        Icône PWA (écran d'accueil)
│   ├── icon-512.png        Icône PWA (splash screen)
│   ├── icon-maskable-*.png Icônes « adaptatives » (Android) : marge de sécurité plus large
│   ├── logo-spirit.png     Logo affiché dans l'application
│   └── logo-uclouvain.png  Logo institutionnel (page « À propos »)
├── images/
│   └── installation-{iphone|android}-{fr|en|nl}.png
│                           Visuels de la fenêtre « Installer SPIRIT » (smartphone)
└── fonts/                  Polices Spectral et Source Sans 3 (licence SIL OFL),
                            hébergées avec l'app : rien n'est demandé à Google
```

---

## Modifier le contenu

Le contenu de l'évaluation — **piliers, pierres angulaires, sous-questions et modalités** — vit dans un seul fichier : **`js/donnees-spirit.js`**.

C'est là, et seulement là, qu'on modifie les textes. La mécanique de l'application (calcul, affichage, navigation) n'a pas besoin d'être touchée.

Quelques règles à respecter dans ce fichier :

- Chaque texte affiché existe en trois langues, sous la forme `{ fr: "texte français", en: "texte anglais", nl: "texte néerlandais" }`. Pour corriger une traduction, on modifie uniquement le texte entre guillemets de la bonne langue.
- En français, on écrit les espaces ordinaires devant `: ; ? !` : l'application les remplace d'elle-même par des espaces insécables à l'affichage.
- Le nombre de théologiens du panel Delphi ne s'écrit qu'à un seul endroit : `PANEL_THEOLOGIENS`, en tête de `js/langue.js`. Dans les textes, le repère `{panel}` le remplace.
- **Ne jamais modifier les identifiants techniques** (`id`) : ils servent au code et au stockage des évaluations déjà enregistrées.
- Ne pas toucher à la ponctuation de structure (accolades, crochets, virgules) au risque de casser le fichier.

---

## ⚠️ Règle importante : le cache du service worker

À **chaque modification** d'un fichier (HTML, CSS, JS), il faut **incrémenter le numéro de version** du cache dans `service-worker.js` :

```js
const CACHE_VERSION = "spirit-v86";   // → passer à "spirit-v87", etc.
```

Changer en même temps le numéro affiché dans « À propos » et en pied de PDF, en tête de `js/app.js` :

```js
const VERSION_SPIRIT = "80";          // → "81", etc.
```

Vérifier aussi que **chaque fichier listé dans `FICHIERS_A_CACHER` existe** : un seul fichier absent (un logo renommé, par exemple) fait échouer l'installation de la nouvelle version, et les utilisateurs restent sur l'ancienne sans que rien ne le signale.

Sans cette incrémentation, les navigateurs continuent de servir l'ancienne version en cache et la modification ne s'affiche pas. Après mise en ligne, toujours **tester en navigation privée** pour vérifier la nouvelle version.

---

## Lancer le projet en local

L'application peut s'ouvrir de deux manières.

**Ouverture directe du fichier (`file://`)** : on voit l'interface et on peut tester le questionnaire et la sauvegarde locale. En revanche, le *service worker* et l'installation PWA **ne fonctionnent pas** en `file://` (ils exigent une connexion sécurisée).

**Avec un petit serveur local** (pour tester la PWA complète) : depuis le dossier du projet, lancer par exemple

```bash
python3 -m http.server 8000
```

puis ouvrir `http://localhost:8000` dans le navigateur.

---

## Déploiement

Le projet est publié via **GitHub Pages**.

1. Déposer les fichiers dans le dépôt GitHub.
2. Activer GitHub Pages dans les réglages du dépôt (*Settings → Pages*), sur la branche principale.
3. L'application devient accessible à l'adresse fournie par GitHub Pages.

> Adresse de publication : _à compléter une fois GitHub Pages activé._

Pour mettre à jour un fichier sans risque de doublon, **éditer son contenu directement sur GitHub** (icône crayon) plutôt que de le glisser-déposer.

---

## Confidentialité

Aucune donnée n'est transmise à un serveur. Les évaluations sont stockées **uniquement sur l'appareil** de l'utilisateur, via le `localStorage` du navigateur. Il n'y a ni compte, ni cookie de suivi, ni traceur.

Pour la comparaison (v74), c'est l'utilisateur qui transmet lui-même un code ou un lien, par le moyen de son choix. Le code ne contient aucun nom de personne ni aucune observation ; le lien y ajoute seulement le nom de la pratique évaluée. Dans un lien, tout cela est placé après le signe `#` : cette partie de l'adresse n'est jamais envoyée au serveur qui héberge l'application, et SPIRIT l'efface de la barre d'adresse dès qu'il l'a lue.

Conséquence : si l'utilisateur change d'appareil ou efface les données de son navigateur, ses évaluations sont perdues, sauf s'il en a gardé une copie avec « Exporter les évaluations » (v75). Ce fichier ne quitte l'appareil que par le moyen que l'utilisateur choisit (enregistrement, courriel à soi-même…). Depuis la v75, SPIRIT demande aussi au navigateur de ne pas effacer ses données de lui-même (`navigator.storage.persist()`).

---

## État du projet

Prototype fonctionnel, en cours de consolidation.

Les pistes de progression par pilier ont été abandonnées pour le moment (v82) : le PDF propose à la place une démarche pour évaluer à plusieurs, le temps d'une soirée.

Reste notamment à finaliser : les tests sur appareils réels, et la relecture du néerlandais.

---

## Crédits

- **Porteur du projet** : EcclesiaLab — UCLouvain.
- **Direction scientifique** : Arnaud Join-Lambert.
- **Collaborateurs** : Jens van Rompaey, Rick van Lier.
- **Référence** : *Document final du Synode sur la synodalité* (2024).

---

*Application développée en HTML/CSS/JavaScript natifs, sans framework, dans une logique de sobriété et de durabilité.*
