
import { computed, toValue, type MaybeRefOrGetter } from "vue";

type PageSeoOptions = {
  title: MaybeRefOrGetter<string>;
  description: MaybeRefOrGetter<string>;
  image?: string;
};

export function usePageSeo({
  title,
  description,
  image = "/og-cover.jpg",
}: PageSeoOptions) {
  const route = useRoute();

  const canonical = computed(() => {
    const path =
      route.path === "/"
        ? "/"
        : route.path.replace(/\/+$/, "");

    return `https://tanais.com.kz${path}`;
  });

  const ogImage = `https://tanais.com.kz${image}`;

  useSeoMeta({
    title: () => toValue(title),
    description: () => toValue(description),

    ogTitle: () => toValue(title),
    ogDescription: () => toValue(description),
    ogType: "website",
    ogSiteName: "TANAIS",
    ogLocale: "ru_RU",
    ogUrl: () => canonical.value,
    ogImage,

    twitterCard: "summary_large_image",
    twitterImage: ogImage,
  });

  useHead(() => ({
    link: [
      {
        rel: "canonical",
        href: canonical.value,
      },
    ],
  }));
}
