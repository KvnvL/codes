const PRECACHE = 'precache-v10';
const RUNTIME = 'runtime';
 
// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
 'index.php',
 './',
 'styles.css',
 '/js/main.js',
];
 
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
 event.waitUntil(
 caches.open(PRECACHE)
 .then(cache => cache.addAll(PRECACHE_URLS))
 .then(self.skipWaiting())
 );
});
 
// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
 const currentCaches = [PRECACHE, RUNTIME];
 event.waitUntil(
 caches.keys().then(cacheNames => {
 return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
 }).then(cachesToDelete => {
 return Promise.all(cachesToDelete.map(cacheToDelete => {
 return caches.delete(cacheToDelete);
 }));
 }).then(() => self.clients.claim())
 );
});
 
// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

self.addEventListener('push', event =>{

})

