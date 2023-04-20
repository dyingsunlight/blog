export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  },
  css: [
    "~/assets/styles/normalize.css",
    "~/assets/styles/simple/index.less"
  ]
})
