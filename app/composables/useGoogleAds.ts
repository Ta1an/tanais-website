
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const useGoogleAds = () => {
  const trackWhatsAppClick = () => {
    if (!import.meta.client) return;

    window.gtag?.("event", "conversion", {
      send_to: "AW-18555509083/fG6gCLH_8bEdENuy-o9F",
      value: 1.0,
      currency: "USD",
    });
  };

  return {
    trackWhatsAppClick,
  };
};
