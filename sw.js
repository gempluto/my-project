self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Required service worker handler for PWA installation criteria
self.addEventListener('fetch', () => {});
