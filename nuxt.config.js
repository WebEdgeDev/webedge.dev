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
  plugins: [
    '~/plugins/vue-awesome-swiper.client',
    '~/plugins/dataApi',
    '~/plugins/scrollTrigger.client',
  ],

  components: [{ pathPrefix: false, path: '~/components' }],
  telemetry: false,

  loading: false,
  router: { prefetchLinks: false },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],
  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['en', 'lt', 'ru'],
    defaultLocale: 'en',
  },
  googleFonts: {
    families: {
      Coda: [800],
      'Open+Sans': true,
    },
  },

  generate: {
    fallback: true,
  },

  build: {},
}
