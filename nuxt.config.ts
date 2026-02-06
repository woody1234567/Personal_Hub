// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", file: "en.json" },
      { code: "zhTW", file: "zhTW.json" },
    ],
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  // nuxt.config.ts
  css: ["~/assets/css/main.css"],
});
