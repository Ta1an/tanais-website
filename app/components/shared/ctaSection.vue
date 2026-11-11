<script setup lang="ts">
import { motion } from "motion-v";

import { fadeScale, fadeUp, motionViewport, stagger } from "~/utils/motion";

type CtaButton = {
  text: string;
  to?: string;
  icon?: string;
};

type TrustItem = {
  text: string;
  icon: string;
};

type Props = {
  title: string;
  gradientTitle?: string;
  text: string;

  primaryButton: CtaButton;
  secondaryButton?: CtaButton;

  icon?: string;
  sectionId?: string;

  trustItems?: TrustItem[];
};

const props = withDefaults(defineProps<Props>(), {});

const defaultTrustItems: TrustItem[] = [
  {
    icon: "tabler:lock",
    text: "Конфиденциально",
  },
  {
    icon: "tabler:user-check",
    text: "Индивидуальный разбор",
  },
  {
    icon: "tabler:route",
    text: "Понятный следующий шаг",
  },
];

const trustItems = computed(() => {
  return props.trustItems?.length ? props.trustItems : defaultTrustItems;
});
</script>

<template>
  <section :id="sectionId ?? 'contact'" class="relative overflow-hidden">
    <!-- Glow -->
    <motion.div
      class="pointer-events-none absolute left-1/2 top-1/2 size-124 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[120px]"
      :animate="{
        scale: [1, 1.08, 1],
        opacity: [0.55, 0.85, 0.55],
      }"
      :transition="{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }"
    />

    <!-- Panel -->
    <motion.div
      class="relative z-10 flex flex-col items-center justify-center rounded-4xl border border-border/20 bg-bg/80 text-center shadow-(--glow-m) p-10 lg:p-14"
      :variants="fadeScale"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.div
        class="flex flex-col items-center"
        :variants="stagger(0.1, 0.1)"
      >
        <motion.h2 :variants="fadeUp">
          {{ title }}

          <span v-if="gradientTitle" class="gradient-text block">
            {{ gradientTitle }}
          </span>
        </motion.h2>

        <motion.p class="mt-6 max-w-2xl" :variants="fadeUp">
          {{ text }}
        </motion.p>

        <motion.div
          class="mt-10 flex flex-wrap justify-center gap-3"
          :variants="fadeUp"
        >
          <NuxtLink
            :to="primaryButton.to ?? '/contacts'"
            class="button button-primary"
          >
            {{ primaryButton.text }}

            <Icon
              v-if="primaryButton.icon"
              :name="primaryButton.icon"
              class="size-4"
            />
          </NuxtLink>

          <NuxtLink
            v-if="secondaryButton"
            :to="secondaryButton.to ?? '/contacts'"
            class="button button-outline"
          >
            {{ secondaryButton.text }}

            <Icon
              v-if="secondaryButton.icon"
              :name="secondaryButton.icon"
              class="size-4"
            />
          </NuxtLink>
        </motion.div>

        <motion.div
          class="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs text-text-muted/50"
          :variants="stagger(0.07)"
        >
          <motion.span
            v-for="item in trustItems"
            :key="item.text"
            class="flex items-center gap-2"
            :variants="fadeUp"
          >
            <Icon :name="item.icon" class="size-4 text-accent-turquoise" />

            {{ item.text }}
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
</template>
