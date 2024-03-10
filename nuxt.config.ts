// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
  ],
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  $development: {
    runtimeConfig: {
      turso: {
        url: 'file:local.db',
        authToken: undefined,
      },
    },
  },
  $production: {
    runtimeConfig: {
      turso: {
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
      },
    },
  },
});
