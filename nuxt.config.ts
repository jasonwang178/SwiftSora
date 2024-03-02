// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  pages: true,
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  css: ['mosha-vue-toastify/dist/style.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxx',
    OPENAI_API_MODEL: process.env.OPENAI_API_MODEL || 'sora-1.0-turbo',
    OPENAI_API_BASE_URL: process.env.OPENAI_API_BASE_URL || 'https://api.openai.com',
    OPENAI_API_PROXY_URL: process.env.OPENAI_API_PROXY_URL || 'http://localhost:3000',
  },
  routeRules: {
    '/': { prerender: true },
    '/api/**': { cors: true },
    '/v1/**': { cors: true },
    '/fakeOpenAISoraAPI': { cors: true },
  },
})
