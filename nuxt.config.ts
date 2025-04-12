// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "uz",
        iso: "uz",
        name: "O'zbek",
        file: "uz.json",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Русский",
        file: "ru.json",
      },
    ],
    defaultLocale: "uz",
    strategy: "prefix",
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
