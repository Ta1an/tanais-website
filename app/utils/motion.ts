
import { stagger as motionStagger } from "motion-v";

/* =========================================
   TANAIS — Motion Design System
   Calm · Subtle · Consistent
   ========================================= */

// Easing
export const motionEase = {
  smooth: [0.22, 1, 0.36, 1] as const,
  soft: [0.25, 0.1, 0.25, 1] as const,
  linear: "linear" as const,
};

// Durations (seconds)
export const motionDuration = {
  fast: 0.25,
  normal: 0.6,
  slow: 0.8,
};

// Viewport presets
export const motionViewport = {
  default: {
    once: true,
    amount: 0.15,
  },

  early: {
    once: true,
    amount: 0.1,
  },

  medium: {
    once: true,
    amount: 0.25,
  },

  late: {
    once: true,
    amount: 0.4,
  },
};

// Shared transitions
export const motionTransition = {
  fast: {
    duration: motionDuration.fast,
    ease: motionEase.smooth,
  },

  normal: {
    duration: motionDuration.normal,
    ease: motionEase.smooth,
  },

  slow: {
    duration: motionDuration.slow,
    ease: motionEase.soft,
  },
};

/* =========================================
   Reveal Variants
   ========================================= */

// Opacity only
export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: motionTransition.slow,
  },
};

// Subtle upward reveal
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: motionTransition.normal,
  },
};

// Subtle downward reveal
export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: motionTransition.normal,
  },
};

// From right to left
export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: motionTransition.normal,
  },
};

// From left to right
export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: motionTransition.normal,
  },
};

// Minimal scale reveal
export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.99,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: motionTransition.slow,
  },
};

/* =========================================
   Stagger
   ========================================= */

export function stagger(
  staggerChildren = 0.07,
  delayChildren = 0,
) {
  return {
    hidden: {},

    visible: {
      transition: {
        delayChildren: motionStagger(
          staggerChildren,
          { startDelay: delayChildren },
        ),
      },
    },
  };
}
