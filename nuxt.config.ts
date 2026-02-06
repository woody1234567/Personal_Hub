// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", file: "en.json" },
      { code: "zhTW", file: "zhTW.json" },
    ],
    langDir: "locales",
  },
  // nuxt.config.ts
  css: ["~/assets/css/main.css"],
});
