export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    documentDrive: true,
    markdown: {
      anchorLinks: true,
      toc: true
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Courier+Prime&family=Inter:wght@400;600;700&display=swap'
        }
      ]
    }
  }
})