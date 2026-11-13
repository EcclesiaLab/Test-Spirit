/*
  ============================================================
  SERVICE WORKER — SPIRIT
  ============================================================

  À QUOI ÇA SERT ?
  Un "service worker" est un petit programme qui tourne en arrière-plan,
  séparé de la page. Son rôle ici : garder une copie des fichiers de
  l'application sur l'appareil, pour que SPIRIT s'ouvre même sans connexion
  internet (par exemple dans le métro, ou une salle paroissiale mal couverte).

  COMMENT ÇA MARCHE, EN RÉSUMÉ ?
  1. À la première visite, le service worker "s'installe" et met en cache
     (= copie en local) les fichiers essentiels de l'app.
  2. Ensuite, à chaque fois que la page demande un fichier, le service worker
     répond d'abord avec la copie en cache (rapide, marche hors-ligne), et
     ne va sur le réseau que si le fichier n'est pas en cache.

  IMPORTANT — LE NUMÉRO DE VERSION CI-DESSOUS
  Quand tu modifieras les fichiers de l'app (HTML, CSS, JS...), il faudra
  changer ce numéro de version (par ex. passer de "v1" à "v2"). Cela force
  le téléphone à remplacer l'ancienne copie en cache par la nouvelle.
  Si tu oublies, les utilisateurs pourraient continuer à voir l'ancienne
  version. C'est l'erreur la plus courante avec les service workers.

  ⚠ À CHAQUE VERSION, DEUX NUMÉROS À CHANGER, et seulement deux (v87) :
     1. CACHE_VERSION ci-dessous ;
     2. VERSION_SPIRIT dans js/app.js (numéro affiché dans « À propos »).
  Ce fichier-ci DOIT changer à chaque version : c'est en le comparant à sa
  copie que le téléphone découvre qu'une mise à jour existe.
  ============================================================
*/

// ---- Numéro de version du cache (à incrémenter à chaque mise à jour) ----
const CACHE_VERSION = "spirit-v90";

// ---- Liste des fichiers à mettre en cache dès l'installation ----
// Ce sont les fichiers minimum pour que l'app s'affiche hors-ligne.
// NOTE : on utilise des chemins RELATIFS (commençant par "./") et non absolus
// (commençant par "/"), car sur GitHub Pages l'app vit dans un sous-dossier.
const FICHIERS_A_CACHER = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/langue.js",
  "./js/traductions.js",
  "./js/donnees-spirit.js",
  "./js/pictogrammes.js",
  "./js/questions-domaines.js",
  "./js/lexique.js",
  "./js/diagnostic.js",
  "./js/impression.js",
  "./js/historique.js",
  "./js/sauvegarde.js",
  "./js/fenetres.js",
  "./js/comparaison.js",
  "./js/retour.js",
  "./js/app.js",
  "./manifest.json",
  // v87 : les deux icônes de 512 px ne sont plus copiées ici (environ 90 Ko).
  // Elles ne servent qu'au téléphone, au moment de l'installation, qui se
  // fait en ligne ; l'app elle-même ne les affiche jamais.
  "./icons/icon-192.png",
  "./icons/icon-maskable-192.png",
  "./icons/logo-spirit.png",
  "./icons/logo-uclouvain.png",
  "./icons/logo-ecclesialab.png",
  // Polices (sous-ensemble « latin », utilisé pour le FR, l'EN et le NL)
  "./fonts/spectral-latin-400-normal.woff2",
  "./fonts/spectral-latin-500-normal.woff2",
  "./fonts/spectral-latin-600-normal.woff2",
  "./fonts/source-sans-3-latin-400-normal.woff2",
  "./fonts/source-sans-3-latin-600-normal.woff2"
];

/*
  ÉVÉNEMENT "install"
  Déclenché une seule fois, quand le navigateur installe le service worker.
  On en profite pour ouvrir le cache et y déposer les fichiers listés ci-dessus.
*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // { cache: "reload" } : on va chercher chaque fichier sur le serveur, sans
      // passer par le cache ordinaire du navigateur. Sinon (GitHub Pages garde
      // les fichiers 10 minutes), le nouveau cache pouvait se remplir avec les
      // ANCIENS fichiers juste après une mise à jour (constat E3 de l'audit v72).
      return cache.addAll(FICHIERS_A_CACHER.map((url) => new Request(url, { cache: "reload" })));
    })
  );
  // Demande au nouveau service worker de s'activer immédiatement,
  // sans attendre la fermeture des anciens onglets.
  self.skipWaiting();
});

/*
  ÉVÉNEMENT "activate"
  Déclenché quand le nouveau service worker prend le relais.
  On en profite pour supprimer les anciens caches (les versions précédentes),
  afin de ne pas accumuler de vieux fichiers inutiles sur l'appareil.
*/
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((noms) => {
      return Promise.all(
        noms
          .filter((nom) => nom !== CACHE_VERSION) // tout ce qui n'est pas la version actuelle
          .map((nom) => caches.delete(nom))       // est supprimé
      );
    })
  );
  // Permet au service worker de contrôler la page immédiatement.
  self.clients.claim();
});

/*
  ÉVÉNEMENT "fetch"
  Déclenché à chaque fois que la page demande une ressource (un fichier,
  une image, une police...). Stratégie utilisée ici : "cache d'abord".

  - On cherche d'abord le fichier dans le cache local.
  - Si on le trouve : on le renvoie tout de suite (rapide, marche hors-ligne).
  - Sinon : on va le chercher sur le réseau, et on en met une copie en cache
    au passage (utile par exemple pour les images de la fenêtre d'installation
    ou les polices « latin-ext », qui ne sont pas dans la liste initiale mais
    seront mises en cache à leur première utilisation en ligne).

  v87 — CAS DE LA PAGE ELLE-MÊME
  Les réseaux sociaux et certaines messageries ajoutent un « paramètre » à la
  fin des liens (par ex. « ?fbclid=… »). Pour le cache, c'était à chaque fois
  une adresse nouvelle : la page était redemandée au réseau (donc introuvable
  hors connexion) et une copie de plus s'empilait sur l'appareil. Quand c'est
  la page qui est demandée (« navigation »), on ignore donc ce paramètre.
*/
self.addEventListener("fetch", (event) => {
  // On ne gère que les requêtes GET (récupération de fichiers).
  if (event.request.method !== "GET") {
    return;
  }

  const estNavigation = event.request.mode === "navigate";

  event.respondWith(
    caches.match(event.request, { ignoreSearch: estNavigation }).then((reponseEnCache) => {
      // Si le fichier est déjà en cache, on le renvoie.
      if (reponseEnCache) {
        return reponseEnCache;
      }

      // Sinon, on va sur le réseau.
      return fetch(event.request)
        .then((reponseReseau) => {
          // On met une copie en cache pour les prochaines fois,
          // mais seulement si la réponse est valide.
          // (v87 : jamais de copie d'une page demandée avec un paramètre.)
          const pageAvecParametre = estNavigation && new URL(event.request.url).search !== "";
          if (reponseReseau && reponseReseau.status === 200 && !pageAvecParametre) {
            const copie = reponseReseau.clone();
            caches.open(CACHE_VERSION).then((cache) => {
              cache.put(event.request, copie);
            });
          }
          return reponseReseau;
        })
        .catch(() => {
          // En cas d'échec réseau total (hors-ligne et fichier absent du cache),
          // on renvoie au moins la page d'accueil pour les demandes de navigation.
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});
