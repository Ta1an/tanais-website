import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },

    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/sitemap.xml",

        "/directions",
        "/directions/addictions",
        "/directions/addictions/gambling",
        "/directions/codependency",
      ],
    },
  },

  site: {
    url: "https://tanais.com.kz",
    name: "TANAIS",
    trailingSlash: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },

      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-18555509083",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18555509083');
          `,
        },
      ],
    },
  },

  css: ["@/assets/css/main.css"],

  modules: ["@nuxt/icon", "@nuxt/fonts", "motion-v/nuxt", "@nuxtjs/sitemap"],

  icon: {
    mode: "css",
    cssLayer: "base",
    provider: "none",

    clientBundle: {
      scan: true,
    },
  },

  fonts: {
    defaults: {
      subsets: ["cyrillic-ext", "cyrillic"],
    },

    families: [
      {
        name: "Onest",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal"],
      },
      {
        name: "Golos Text",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal"],
      },
    ],
  },
});
