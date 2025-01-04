export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image', '@nuxtjs/i18n', '@nuxt/content'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  pages: true,
  i18n: {
    baseUrl: process.env.OPENAI_API_PROXY_URL || 'http://localhost:3000',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en-US',
        name: 'English (US)',
        iso: 'en-US',
        dir: 'ltr',
        file: 'en-US.ts',
      },
      {
        code: 'ja-JP',
        name: '日本語',
        iso: 'ja-JP',
        dir: 'ltr',
        file: 'ja-JP.ts',
      },
      {
        code: 'zh-CN',
        name: '中文 (简体)',
        iso: 'zh-CN',
        dir: 'ltr',
        file: 'zh-CN.ts',
      },
      {
        code: 'es-ES',
        name: 'Español',
        iso: 'es-ES',
        dir: 'ltr',
        file: 'es-ES.ts',
      },
      {
        code: 'ko-KR',
        name: '한국어',
        iso: 'ko-KR',
        dir: 'ltr',
        file: 'ko-KR.ts',
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'en-US',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'lang',
  },
  content: {
    defaultLocale: 'en-US',
    documentDriven: false,
    locales: ['en-US', 'zh-CN', 'ja-JP', 'es-ES', 'ko-KR'],
  },
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
    '/': { prerender: true, redirect: '/en-US' },
    '/legal-notice': { prerender: true },
    '/terms-of-service': { prerender: true },
    '/dmca': { prerender: true },
    '/cookie-policy': { prerender: true },
    '/api/**': { cors: true },
    '/v1/**': { cors: true },
    '/fakeOpenAISoraAPI': { cors: true },
  },
})
