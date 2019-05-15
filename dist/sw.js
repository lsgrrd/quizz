importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0755a94d756cd80b383d.js",
    "revision": "d01ec9845c8b452e10cf28cebbc27909"
  },
  {
    "url": "/_nuxt/094162785c41eba0a1da.js",
    "revision": "2780d0d7a4b2fecf1bd8a13be5610b60"
  },
  {
    "url": "/_nuxt/42c4f03eda8b83787557.js",
    "revision": "de84f157ba22a3f2cba81ca77be692fa"
  },
  {
    "url": "/_nuxt/49aaf4aeabc3813bb03a.js",
    "revision": "4b486f1aebf0d8295c187d44404ee23a"
  },
  {
    "url": "/_nuxt/4c6af116bc8625fdbdca.js",
    "revision": "d81ba11868b7d4b406a9b85ba2da5fb2"
  },
  {
    "url": "/_nuxt/649b56fd59964e3951b6.js",
    "revision": "b15b482b380e80761014ed296870f3fc"
  },
  {
    "url": "/_nuxt/70d11f3dd014bd3e6ae6.js",
    "revision": "1878371ebe0ae074549ed27041e021f6"
  },
  {
    "url": "/_nuxt/9881485ab1d54c142622.js",
    "revision": "396ee3f8f074ed070dd57ad5dda87534"
  },
  {
    "url": "/_nuxt/a00dca7f9180602baad8.js",
    "revision": "bdff2aaf66dc474459e3ebff6536f99a"
  },
  {
    "url": "/_nuxt/a15098c0459a74bfd480.js",
    "revision": "ba02b28b6fa85f3c7e6e76e502704b95"
  },
  {
    "url": "/_nuxt/a92acf4ad5002ea3946a.js",
    "revision": "caacc8adb6006ca9e423f6bfae936f32"
  },
  {
    "url": "/_nuxt/c067679ccea52bed3059.js",
    "revision": "eb2cf0d814f5509fde21797675a6324c"
  },
  {
    "url": "/_nuxt/e6d7e9322e1b6b026b2e.js",
    "revision": "fcf4ad59595731dcb4b884c64ab98b6a"
  },
  {
    "url": "/_nuxt/e9af75d2ffb75a29612b.js",
    "revision": "34c8ac59a42b1500dc5246f146a77df4"
  },
  {
    "url": "/_nuxt/f310f7470407d20efeed.js",
    "revision": "87eec0fd11ffbd4b9ec9a49a0edfb3a5"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
