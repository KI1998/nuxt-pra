export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    // アプリケーションタイトル。ブラウザタブもこのタイトルが設定される
    title: 'nuxt-practice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // ページの要約を記述するdescriptionなどの値は各ページで上書きするため重複するのを避けるため識別子として、hidを設定している。
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
    "~/plugins/vue-tooltip.js",
    "~/plugins/hello.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    // これでアプリケーションのベースのURKが「http://localhost:3000/」→「http://localhost:3000/app」に変わる
    base: "/app/",

    // extendRoutesを利用することでルーティングの手動設定が可能
    // pagesディレクトリ以外にもページファイルを保存することができる
    // ↓は「/admin」でアクセスを行った時に、「/admin/index.vue」を表示するように設定している
    extendRoutes(routes, resolve) {
      routes.push({
        name: "admin",
        path: "/admin/",
        component: resolve(__dirname, "admin/index.vue"),
      })
    }
  },
}
