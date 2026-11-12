
const SITE_URL = "https://tanais.com.kz";

export function useOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,

        name: "TANAIS",
        url: SITE_URL,

        description:
          "Центр психологической помощи TANAIS в Алматы. " +
          "Помощь при зависимостях, созависимости " +
          "и поддержка близких.",

        areaServed: {
          "@type": "City",
          name: "Алматы",
        },
      },

      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,

        url: SITE_URL,
        name: "TANAIS",
        inLanguage: "ru",

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  useHead({
    script: [
      {
        key: "tanais-schema",
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
  });
}
