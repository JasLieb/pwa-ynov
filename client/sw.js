const CACHE = 'gallery-v3';

const ASSETS = [
  '/index.html',
  '/favicon.ico',
  '/styles/style.css',
  '/scripts/utils.js',
  '/scripts/notifications.js',
  '/scripts/app.js',
  '/scripts/image.js',
  '/assets/icons/icon48.png',
  '/assets/icons/icon72.png',
  '/assets/icons/icon96.png',
  '/assets/icons/icon144.png',
  '/assets/icons/icon168.png',
  '/assets/icons/icon192.png',
  '/assets/imgs/tiny/tinyImageDictionary.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(function (cache) {
        return cache.addAll(ASSETS);
      })
      .catch(_err => {})
  );
});

self.addEventListener('fetch', event => {
  console.log('Request : [%s] %s', event.request.method, event.request.url);

  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          console.log('Response from cache :', response);
          return response;
        } else {
          console.log('Response not found in cache');
          return fetch(event.request)
            .then(function (res) {
              console.log('Response from web :', res);
              return caches
                .open(CACHE)
                .then(function (cache) {
                  console.log('Response putted in the cache');
                  cache.put(event.request.url, res.clone());
                  return res;
                })
                .catch(console.error);
            })
            .catch(function (err) {
              return caches
                .open(CACHE)
                .then(function (cache) {
                  return cache.match(event.request);
                })
                .catch(console.error);
            });
        }
      })
      .catch(console.error)
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
        return Promise.all(
            keyList.map((key) => {
                console.log('Check key : ', key);
                if (CACHE.indexOf(key) === -1) {
                    console.log('Clear cache : ', key);
                    return caches.delete(key);
                }
            })
        );
    })
  );
});

self.addEventListener("push", (event) => {
    const pushData = event.data.json();
    event.waitUntil(
        self.registration.showNotification("PWA", {
            body: pushData.Summary,
            dir: "ltr",
            tag: "PWA",
            icon: "/images/pc.jpg",
            badge: "/images/pc.jpg",
            image: pushData.TitleImage,
            data: pushData
        })
    );
});
