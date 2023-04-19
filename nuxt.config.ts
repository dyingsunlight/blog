export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  },
  css: [
    "~/assets/normalize.css",
    "~/assets/simple.css"
  ]
})
