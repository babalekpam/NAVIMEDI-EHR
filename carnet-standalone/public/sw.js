const CACHE_NAME = 'carnet-v1';
const urlsToCache = [
  '/',
  '/carnet-logo.png',
  '/icon-appointments.png',
  '/icon-billing.png',
  '/icon-doctors.png',
  '/icon-health-articles.png',
  '/icon-messages.png',
  '/icon-prescription.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
