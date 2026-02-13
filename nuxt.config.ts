// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://portafolio-camilo-zavala.vercel.app',
    name: 'Camilo Zavala | Full Stack Developer',
    description: 'Portafolio de Camilo Zavala, Programador Full Stack especializado en Python, Django, FastAPI y Vue.js.',
    defaultLocale: 'es',
    indexable: true,
  },
  robots: {
    robotsTxt: false,
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    head: {
      title: 'Dev.Portfolio | Camilo Zavala',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ],
      meta: [
        { name: 'description', content: 'Portafolio de Camilo Zavala, Programador Full Stack especializado en Python, Django, FastAPI y Vue.js.' },
        { name: 'keywords', content: 'Camilo Zavala, Full Stack Developer, Python, Django, FastAPI, Vue.js, Nuxt.js, Portfolio, Web Development' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Camilo Zavala | Full Stack Developer' },
        { name: 'twitter:description', content: 'Portafolio profesional de Camilo Zavala. Programador Full Stack.' },
        { name: 'twitter:image', content: 'https://portafolio-camilo-zavala.vercel.app/images/og-image.png' }
      ]
    }
  }
})
