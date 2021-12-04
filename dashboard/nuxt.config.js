export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mongo-dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.plugin.js',
    '~/plugins/forms.plugin.js',
    '~/plugins/vee-validate.plugin.js',
    '~/plugins/vue-material-design-icons.plugin.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 'https://auth.nuxtjs.org/'
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accesstoken',
          maxAge: 1800,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshtoken',
          data: 'refreshtoken',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints: {
          user: false,
          refresh: {
            url: '/auth/refresh',
            method: 'post',
          },
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'accesstoken'
          },
          logout: {
            url: '/auth/logout',
            method: 'post',
          },
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },
}
