# SPIRIT — Évaluation de la synodalité

**SPIRIT** (*Synodalité des Pratiques : Indicateurs pour le Renouveau, l'Implémentation et la Transformation*) est une application web installable (PWA) qui permet d'évaluer la synodalité d'une pratique, d'un projet ou d'une instance ecclésiale.

L'évaluation s'appuie sur **14 piliers** organisés autour de **trois pierres angulaires** — Communion, Participation, Mission — issus du *Document final du Synode sur la synodalité* (2024) et consolidés par une démarche de validation auprès d'experts théologiens.

L'application est un projet d'**EcclesiaLab**, laboratoire de recherche sur l'innovation et la transformation dans l'Église catholique, affilié à l'**UCLouvain** (Belgique).

---

## Ce que fait l'application

- **Évaluer** une pratique ecclésiale en répondant, pilier par pilier, à un questionnaire avec quatre modalités de réponse (*Présent / En construction / À bâtir / Non applicable*).
- **Visualiser** un diagnostic sous forme de trois jauges (une par pierre angulaire), accompagné d'une lecture textuelle.
- **Exporter** le résultat en PDF via la fonction d'impression du navigateur.
- **Conserver** l'historique des évaluations sur l'appareil (consultation, réouverture, suppression).
- **Choisir la langue** : interface et contenu bilingues français / anglais.

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
│   ├── traductions.js      Textes d'interface (FR / EN)
│   ├── langue.js           Gestion du basculement de langue
│   ├── app.js              Logique applicative (navigation, questionnaire, écrans)
│   ├── diagnostic.js       Calcul et affichage des trois jauges
│   ├── historique.js       Archivage des évaluations terminées
│   └── impression.js       Construction du document PDF
└── icons/
    ├── icon-192.png        Icône PWA (écran d'accueil)
    ├── icon-512.png        Icône PWA (splash screen)
    ├── logo-spirit.png     Logo affiché dans l'application
    └── logo-uclouvain.png  Logo institutionnel (page « À propos »)
```

---

## Modifier le contenu

Le contenu de l'évaluation — **piliers, pierres angulaires, sous-questions, modalités, et à venir les pistes d'action** — vit dans un seul fichier : **`js/donnees-spirit.js`**.

C'est là, et seulement là, qu'on modifie les textes. La mécanique de l'application (calcul, affichage, navigation) n'a pas besoin d'être touchée.

Quelques règles à respecter dans ce fichier :

- Chaque texte affiché existe en deux langues, sous la forme `{ fr: "texte français", en: "texte anglais" }`. Pour corriger une traduction, on modifie uniquement le texte entre guillemets de la bonne langue.
- **Ne jamais modifier les identifiants techniques** (`id`) : ils servent au code et au stockage des évaluations déjà enregistrées.
- Ne pas toucher à la ponctuation de structure (accolades, crochets, virgules) au risque de casser le fichier.

---

## ⚠️ Règle importante : le cache du service worker

À **chaque modification** d'un fichier (HTML, CSS, JS), il faut **incrémenter le numéro de version** du cache dans `service-worker.js` :

```js
const CACHE_VERSION = "spirit-v21";   // → passer à "spirit-v22", etc.
```

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

Conséquence : si l'utilisateur change d'appareil ou efface les données de son navigateur, ses évaluations sont perdues. *(Une fonction d'export/import est envisagée pour une version ultérieure.)*

---

## État du projet

Prototype fonctionnel, en cours de consolidation.

Reste notamment à finaliser : les **pistes d'action** associées à chaque pilier (travail éditorial de l'équipe), les tests sur appareils réels, et la validation du contenu bilingue.

---

## Crédits

- **Porteur du projet** : EcclesiaLab — UCLouvain.
- **Direction scientifique** : Arnaud Join-Lambert.
- **Collaborateurs** : Jens van Rompaey, Rick van Lier.
- **Référence** : *Document final du Synode sur la synodalité* (2024).

---

*Application développée en HTML/CSS/JavaScript natifs, sans framework, dans une logique de sobriété et de durabilité.*
