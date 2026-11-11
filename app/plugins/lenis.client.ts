
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.055,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    syncTouch: false,
    anchors: true,
  });

  if (import.meta.dev) {
    console.log("✅ Lenis initialized");
  }

  import.meta.hot?.dispose(() => {
    lenis.destroy();
  });

  return {
    provide: {
      lenis,
    },
  };
});
