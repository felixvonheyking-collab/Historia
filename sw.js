/*
 * Historia – Service Worker
 *
 * Legt die App vollständig im Browser ab, damit sie auch ohne Netz startet.
 *
 * WICHTIG bei Änderungen: VERSION hochzählen – und denselben Wert
 * in index.html hinter jedes ?v= schreiben. Beides muss übereinstimmen.
 *
 * Warum die Versionsmarke an den Dateien hängt:
 * Ohne sie konnte der Browser eine neue index.html laden, die Skripte
 * aber aus dem alten Zwischenspeicher nehmen. Da Code und Daten seit
 * der Aufteilung in getrennten Dateien liegen, passten sie dann nicht
 * mehr zusammen und die App startete gar nicht. Mit der Versionsmarke
 * verweist eine neue index.html zwangsläufig auf neue Dateien.
 */

const VERSION = '2026-09-10-2';
const CACHE = 'historia-' + VERSION;

// Dateien ohne Versionsmarke (Bilder, Schriften, Manifest ändern sich selten)
const UNVERSIONIERT = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './font-sourcesans3.woff2',
  './font-fraunces.woff2',
  './font-jetbrains.woff2'
];

// Dateien mit Versionsmarke – exakt so, wie index.html sie anfordert
const VERSIONIERT = [
  './tailwind.css',
  './react.js',
  './react-dom.js',
  './data-epochen.js',
  './data-sammlungen.js',
  './data-laender.js',
  './data-mythen.js',
  './data-vertiefungen.js',
  './data-themen.js',
  './data-mysterien.js',
  './data-dynastien.js',
  './app.js'
].map((p) => p + '?v=' + VERSION);

const DATEIEN = UNVERSIONIERT.concat(VERSIONIERT);

self.addEventListener('install', (event) => {
  // Sofort übernehmen: sonst liefert der alte Worker weiter alte Dateien aus.
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(DATEIEN.map(async (pfad) => {
      const antwort = await fetch(new Request(pfad, { cache: 'reload' }));
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

  // Seitenaufruf: zuerst aus dem Zwischenspeicher, damit index.html und
  // Skripte immer aus derselben Version stammen. Neue Fassungen kommen
  // über den Worker-Wechsel, nicht über einen halben Mischzustand.
  if (anfrage.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html')
        .then((treffer) => treffer || fetch(anfrage))
        .catch(() => fetch(anfrage))
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
