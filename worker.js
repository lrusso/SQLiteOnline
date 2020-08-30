const filesToCache = [
	"SQLiteOnline.htm",
	"SQLiteOnline.js",
	"SQLiteOnline.json",
	"SQLiteOnline.wasm",
	"SQLiteOnline1.png",
	"SQLiteOnline2.png",
	"SQLiteOnlineFavIcon_16x16.png",
	"SQLiteOnlineFavIcon_192x192.png",
	"SQLiteOnlineFavIcon_512x512.png",
	"SQLiteOnlineShare.png"
];

const staticCacheName = "sqliteonline-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});