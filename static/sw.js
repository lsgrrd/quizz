importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/049e8a9c67e8b8019a09.js",
    "revision": "e4e597289a3350e1d57aa67c72127a5c"
  },
  {
    "url": "/_nuxt/2466d7ae9ddf720508c3.js",
    "revision": "ca8be918afbc52763f3919301b133b94"
  },
  {
    "url": "/_nuxt/31ff2440efaa7c55478d.js",
    "revision": "71517aa78889c9944148979d03e9d080"
  },
  {
    "url": "/_nuxt/404b540c424cdb266da7.js",
    "revision": "688c566a1f4db6cd291e5cd133c7d338"
  },
  {
    "url": "/_nuxt/4e2068052efb8c13a27e.js",
    "revision": "ab456952491d66ebdb25ad847026f9b9"
  },
  {
    "url": "/_nuxt/65645617d27a472f9eea.js",
    "revision": "1d37f6b4e78536b7fe0be00864d7c43e"
  },
  {
    "url": "/_nuxt/898b8ff8e3f5b51ca9f8.js",
    "revision": "214b09d039ab35fa81bcfec340c252d2"
  },
  {
    "url": "/_nuxt/ab22d500937a41702dd8.js",
    "revision": "a89d686d719c3fe5283263c7daf1e0eb"
  },
  {
    "url": "/_nuxt/ce74c81f834113b00b0f.js",
    "revision": "5a7d876060ca84b01746f311ec409ebe"
  },
  {
    "url": "/_nuxt/dc480a632dda418e1e8b.js",
    "revision": "072aebadba2346d45432b1f6b84e6dd9"
  },
  {
    "url": "/_nuxt/eb15bf0abda6ee859764.js",
    "revision": "35e03c924c06df5ad40a784e80fc5449"
  },
  {
    "url": "/_nuxt/ef2ad7b86bbd0a24f116.js",
    "revision": "afb60c9f70e53dc028fe1572aec40b25"
  }
], {
  "cacheId": "encuesta",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
