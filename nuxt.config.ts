// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.VERCEL_URL ? 'https://portafolio-camilo-zavala.vercel.app' : 'https://C1ZC.github.io/Portafolio',
    name: 'Camilo Zavala | Full Stack Developer & AI Integrator',
    description: 'Portafolio profesional de Camilo Zavala. Programador Full Stack especializado en Python, Django, FastAPI y Vue.js. Experto en automatización con n8n e integración de Inteligencia Artificial.',
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
    baseURL: process.env.VERCEL_URL ? '/' : (process.env.NODE_ENV ? '/' : '/'),
    head: {
      title: 'Dev.Portfolio | Camilo Zavala',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ],
      meta: [
        { name: 'description', content: 'Portafolio profesional de Camilo Zavala. Programador Full Stack especializado en Python, Django, FastAPI y Vue.js. Experto en automatización con n8n e integración de Inteligencia Artificial.' },
        { name: 'keywords', content: 'Camilo Zavala, Full Stack Developer, Programador Python, Django, FastAPI, Vue.js, Nuxt.js, n8n, Automatización IA, IA Integrator, OpenAI, PostgreSQL, Docker, Desarrollo Web Chile, Portfolio IT' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Camilo Zavala | Full Stack Developer & AI Integrator' },
        { name: 'twitter:description', content: 'Portafolio profesional de Camilo Zavala. Programador Full Stack especializado en Python, Django, FastAPI y Vue.js.' },
        { name: 'twitter:image', content: process.env.VERCEL_URL ? 'https://portafolio-camilo-zavala.vercel.app/images/CamiloZavala.jpeg' : 'https://C1ZC.github.io/Portafolio/images/CamiloZavala.jpeg' }
      ]
    }
  }
})
