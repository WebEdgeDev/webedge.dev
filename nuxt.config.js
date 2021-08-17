export default {
  target: 'static',
  head: {
    title: 'webedge.dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],
  plugins: ['~/plugins/vue-awesome-swiper.client'],

  components: [{ pathPrefix: false, path: '~/components' }],
  loading: false,
  router: { prefetchLinks: false },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],

  googleFonts: {
    families: {
      Coda: [800],
      'Open+Sans': true,
    },
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
  },
  generate: {
    fallback: true,
  },
  build: {},
}
