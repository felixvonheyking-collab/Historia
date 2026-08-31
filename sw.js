/*
 * Historia – Service Worker
 *
 * Legt die App vollständig im Browser ab, damit sie auch ohne Netz startet.
 * WICHTIG bei Änderungen: VERSION hochzählen.
 */

const VERSION = '2026-08-31-3';
const CACHE = 'historia-' + VERSION;

const DATEIEN = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './tailwind.css',
  './react.js',
  './react-dom.js',
  './app.js',
  './font-sourcesans3.woff2',
  './font-fraunces.woff2',
  './font-jetbrains.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(DATEIEN.map(async (pfad) => {
      const trenner = pfad.includes('?') ? '&' : '?';
      const antwort = await fetch(new Request(pfad + trenner + 'sw=' + VERSION, { cache: 'reload' }));
      if (!antwort.ok) throw new Error('Konnte ' + pfad + ' nicht laden (' + antwort.status + ')');
      await cache.put(pfad, antwort);
    }));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen.filter((n) => n.startsWith('historia-') && n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.typ === 'UEBERNIMM') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const anfrage = event.request;
  if (anfrage.method !== 'GET') return;
  if (new URL(anfrage.url).origin !== self.location.origin) return;

  if (anfrage.mode === 'navigate') {
    event.respondWith(
      fetch(anfrage)
        .then((antwort) => {
          const kopie = antwort.clone();
          caches.open(CACHE).then((cache) => cache.put('./index.html', kopie));
          return antwort;
        })
        .catch(() => caches.match('./index.html').then((t) => t || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(anfrage).then((treffer) => treffer || fetch(anfrage).then((antwort) => {
      if (antwort && antwort.status === 200 && antwort.type === 'basic') {
        const kopie = antwort.clone();
        caches.open(CACHE).then((cache) => cache.put(anfrage, kopie));
      }
      return antwort;
    }))
  );
});
