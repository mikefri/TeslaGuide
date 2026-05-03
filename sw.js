const CACHE = 'TeslaGenie-v1';
const PRECACHE = [
  '/TeslaGenie/',
  '/TeslaGenie/blog/',
  '/TeslaGenie/assets/css/main.css',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Vérification avant de mettre en cache
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'opaque'
        ) {
          return response; // on retourne sans cacher
        }

        // On clone AVANT de consommer le body
        const responseToCache = response.clone();

        caches.open('TeslaGenie-v1').then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
