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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "binaremont",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "buxgalteriyaga oid barcha xizmatlar",
        },
        {
          name: "keywords",
          content: "biznes, audit, moliya, soliq, xisobni tiklash",
        },
        { name: "robots", content: "index, follow" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/bestlogo.svg" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        { rel: "stylesheet", href: "https://fonts.googleapis.com" },
        { rel: "stylesheet", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Manrope:wght@200..800&display=swap" }
      ],
    },
  },
});
