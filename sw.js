/* ============================================================
   OUATENI — service worker : coquille du site + notes en cache.
   Objectif : le téléphone doit pouvoir lire une analyse dans un
   bus sans réseau (et ça, au Tchad, c'est la vraie fonctionnalité).
   Stratégie : stale-while-revalidate sur le même origine.
   ============================================================ */
var VERSION = "ouateni-v3";

var SHELL = [
  "./",
  "index.html",
  "manifeste.html",
  "analyses.html",
  "agir.html",
  "styles.css",
  "app.js",
  "brand.js",
  "i18n.js",
  "darija.js",
  "content.js",
  "assets/icon.svg",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon-maskable-512.png",
  "assets/apple-touch-icon-180.png",
  "manifest.webmanifest"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // aucune donnée vers l'extérieur

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
