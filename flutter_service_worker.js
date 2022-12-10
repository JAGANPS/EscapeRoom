'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "daa1f0509d847e46b676d65f8217c7f3",
"assets/assets/audio/ice/background.mp3": "f6b59970afd9bbb01e4f69ce2ffe4396",
"assets/assets/audio/ice/completion.mp3": "871b8a2ab90098b218cb4a3a7d8857a3",
"assets/assets/audio/ice/correct-pos.mp3": "5354682d820ed85db7b3e0180b511f00",
"assets/assets/audio/ice/tile-move.mp3": "7460e9ffb485fc3b83f1a5f314c818e6",
"assets/assets/audio/nature/background.mp3": "461516867bc9b6d6988e9c0b5566c0e6",
"assets/assets/audio/nature/completion.mp3": "871b8a2ab90098b218cb4a3a7d8857a3",
"assets/assets/audio/nature/correct-pos.mp3": "96e107056705bc3a922c1344ccfb103a",
"assets/assets/audio/nature/tile-move.mp3": "f791e817bac15f893182b167e47067bc",
"assets/assets/images/app_icon.png": "385c2a4ff622b81a48715203085a7f2b",
"assets/assets/images/get_on_apple.png": "d8e445e4769037ece268a4744f394d6a",
"assets/assets/images/get_on_playstore.png": "0de44fc528770b521f5ad159056dee36",
"assets/assets/images/wave.png": "2b5e8330d828fa26baf431ebe1b0c476",
"assets/assets/images/windows.png": "65e4e0debd474389fc200accddfbdb70",
"assets/assets/marker/logo.mind": "87ad3f6812e17ce32a2b1975a16f60ad",
"assets/assets/marker/puzzlehack_logo.mind": "e06ba91b1cbd6313481c69f2cdc54245",
"assets/assets/marker/targets.mind": "62393b282c3bc9607175fdd3ad7f8f44",
"assets/assets/marker/target_3.mind": "d8358573fea6e2024d6be81c8c26df31",
"assets/assets/models/ice/ice_land_igloo.vox": "65257360f2d2c5cb5d52c4400e6f6350",
"assets/assets/models/ice/ice_land_penguin.vox": "4f62ba7990a4af825e342d9cf1594742",
"assets/assets/models/ice/ice_land_polar_bear.vox": "fb551713e40907304ffbb6dbf7e3642e",
"assets/assets/models/ice/ice_land_tree_v1.vox": "83c2258048541b59c2a695562ac49837",
"assets/assets/models/ice/Ice_tree_1.vox": "6e0d7f9b8a90eb18f4314419c094e088",
"assets/assets/models/ice/ice_tree_2.vox": "de560361a94b72c75d5b9992897df246",
"assets/assets/models/ice/ice_tree_3.vox": "0992230ab6acf173f537e88c8f6423fa",
"assets/assets/models/ice/ice_tree_4.vox": "776f2538c9ecba2a755079ee999ce819",
"assets/assets/models/jungle/deer.vox": "80f9bf58baddff75d89ac5daa3380519",
"assets/assets/models/jungle/dino.vox": "aba5000f6c207a724998cf672312b9f9",
"assets/assets/models/jungle/grassland_tree_1.vox": "b5bf5322446b30351438c38c20ab8be8",
"assets/assets/models/jungle/grassland_tree_2.vox": "bc7e8cf4519b81eae9005715912fa5a5",
"assets/assets/models/jungle/grassland_tree_3.vox": "263074ef63e698a899583bfa70577b3e",
"assets/assets/models/jungle/grassland_tree_4.vox": "1aedb75f85651e446599c73419697af6",
"assets/assets/models/jungle/grass_land_tree_v1.vox": "67bb4ee6e5ed56a8803f38a586aedc83",
"assets/assets/models/jungle/grass_land_tree_v2.vox": "1bf4def95f1802694fac3132447b139e",
"assets/assets/models/jungle/grass_land_tree_v3.vox": "503ba25d7a3abb1b0d14662518638097",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5c4e06c70b9290b99334c07c34154802",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "07c355442ace0abba457bd1a827e91e3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-icon-144x144.png": "2ef3d5af1158c942a7fde96ffda76c5a",
"icons/android-icon-192x192.png": "4f8cf1d38c598760b80b1f7b628efe6d",
"icons/android-icon-36x36.png": "eee7d380634b14484e50ff833e0a962d",
"icons/android-icon-48x48.png": "dda42aa8a3888b44544744bd55d3ee1c",
"icons/android-icon-72x72.png": "20a86a3a52816d85b180d95979c9ef93",
"icons/android-icon-96x96.png": "40f0232e8877501d3bc891110844d43f",
"icons/apple-icon-114x114.png": "38409518b97969a40683715911ba1485",
"icons/apple-icon-120x120.png": "6d5d6b8dc0763e71842aa80363936993",
"icons/apple-icon-144x144.png": "2ef3d5af1158c942a7fde96ffda76c5a",
"icons/apple-icon-152x152.png": "2ff9aa38fe02ede013fc3d38e0f6c6a6",
"icons/apple-icon-180x180.png": "0f41ceda5eeda823c11e8f0df009a1b1",
"icons/apple-icon-57x57.png": "7574b788c58b475a09eec859895d53ab",
"icons/apple-icon-60x60.png": "9ba285840a6d7da1a8111e69bd3923e5",
"icons/apple-icon-72x72.png": "20a86a3a52816d85b180d95979c9ef93",
"icons/apple-icon-76x76.png": "eba0b20697b9e0896f321b1d5a779471",
"icons/apple-icon-precomposed.png": "c0bb85369f86a617e42bb396873517d1",
"icons/apple-icon.png": "c0bb85369f86a617e42bb396873517d1",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "3774e18f761d74a49d4e3744fa467331",
"icons/favicon-32x32.png": "383ae779c8d342627775bfb52b4efd1b",
"icons/favicon-96x96.png": "40f0232e8877501d3bc891110844d43f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ms-icon-144x144.png": "2ef3d5af1158c942a7fde96ffda76c5a",
"icons/ms-icon-150x150.png": "6a90d71cfa19ac98320b021d783f714b",
"icons/ms-icon-310x310.png": "77dd4877d07baf24a6fb55dab64cf742",
"icons/ms-icon-70x70.png": "01f7760d592978e1e6bc2b216a0f4476",
"index.html": "761edd8fba2ffb0d5fadbf845cea0e79",
"/": "761edd8fba2ffb0d5fadbf845cea0e79",
"main.dart.js": "47da548297e6b17c0402de518dff9220",
"manifest.json": "8b34c0d9ed5904e223caaa5fd8481191",
"version.json": "bcaeb2ff67c4d9280c389c523d8e3f02"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
