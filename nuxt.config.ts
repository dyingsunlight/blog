export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxt/content',
    'nuxt-simple-sitemap',
  ],
  content: {
    documentDriven: true,
  },
  components: {
    "dirs": [
      {
        "path": "~/components/Playgrounds",
        "global": true
      },
      {
        "path": "~/components",
        "global": true
      },
    ],
  },
  css: [
    "~/assets/styles/normalize.css",
    "~/assets/styles/simple/index.less"
  ],
  sitemap: {
    siteUrl: 'https://edgest.world',
  },
})
