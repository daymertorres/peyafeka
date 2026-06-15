self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('yape-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './yape.html',
      './YAPE.GIF',
      './yape.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
