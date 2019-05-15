import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Descubre a que politico te pareces 😂🤣' },
      { name: 'author', content: 'gulmar'},
      { name: 'keywords', content: 'politico, ecuador'},
      { property: 'og:title', content: '¿A que politico te pareces? | DESCUBRELO'},
      { property: 'og:image', content: 'https://memegrafoecuador.ec/ogfb.png'},
      { property: 'og:site_name', content: 'https://memegrafoecuador.ec/'},
      { property: 'og:description', content: 'Descubre a que politico te pareces 😂🤣'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },{
        rel: 'stylesheet',
        href: 'https://www.gstatic.com/firebasejs/ui/3.6.0/firebase-ui-auth.css' 
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
