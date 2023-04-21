export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
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
      "~/components"
    ],
  },
  css: [
    "~/assets/styles/normalize.css",
    "~/assets/styles/simple/index.less"
  ]
})
