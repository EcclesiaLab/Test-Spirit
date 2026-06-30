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
  ============================================================
*/

// ---- Numéro de version du cache (à incrémenter à chaque mise à jour) ----
const CACHE_VERSION = "spirit-v57";

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
  "./js/diagnostic.js",
  "./js/impression.js",
  "./js/historique.js",
  "./js/app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/logo-spirit.png",
  "./icons/logo-uclouvain.png",
  "./icons/logo-ecclesialab.png"
];

/*
  ÉVÉNEMENT "install"
  Déclenché une seule fois, quand le navigateur installe le service worker.
  On en profite pour ouvrir le cache et y déposer les fichiers listés ci-dessus.
*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(FICHIERS_A_CACHER);
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
    au passage (utile par exemple pour les polices Google Fonts, qui ne sont
    pas dans la liste initiale mais seront mises en cache à la première visite
    en ligne).
*/
self.addEventListener("fetch", (event) => {
  // On ne gère que les requêtes GET (récupération de fichiers).
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((reponseEnCache) => {
      // Si le fichier est déjà en cache, on le renvoie.
      if (reponseEnCache) {
        return reponseEnCache;
      }

      // Sinon, on va sur le réseau.
      return fetch(event.request)
        .then((reponseReseau) => {
          // On met une copie en cache pour les prochaines fois,
          // mais seulement si la réponse est valide.
          if (reponseReseau && reponseReseau.status === 200) {
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
