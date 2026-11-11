<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

import { motion } from "motion-v";

import {
  fade,
  fadeLeft,
  fadeScale,
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";

const heroVisualVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: motionDuration.slow,
      delay: 0.2,
      ease: motionEase.smooth,
    },
  },
};

const heroRingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: motionDuration.slow,
      ease: motionEase.smooth,
    },
  },
};

const heroIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: motionDuration.slow,
      delay: 0.2,
      ease: motionEase.smooth,
    },
  },
};

const arrowVariants = {
  hidden: {
    opacity: 0,
    x: -6,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: motionDuration.fast,
      delay: 0.12,
      ease: motionEase.smooth,
    },
  },
};

type Button = {
  text: string;
  to?: string;
  icon?: string;
};

type InfoItem = {
  icon: string;
  title: string;
  text: string;
};

type StepItem = InfoItem & {
  number: string;
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
};

type HeroCalloutPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type HeroCallout = {
  label: string;
  text: string;
  position: HeroCalloutPosition;
};

type HeroConfig = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;

  icon: string;

  primaryButton?: Button;
  secondaryButton?: Button;

  callouts?: HeroCallout[];
};

type CardsSection = SectionCopy & {
  items: InfoItem[];
};

type StepsSection = SectionCopy & {
  items: StepItem[];
};

type HighlightConfig = {
  icon: string;
  title: string;
  accent?: string;
  text: string;
};

type RelatedConfig = {
  eyebrow: string;
  title: string;
  accent?: string;
  text: string;

  to: string;
  linkText: string;
};

type CtaConfig = {
  title: string;
  gradientTitle: string;
  text: string;

  primaryButton?: Button;
  secondaryButton?: Button;
};

const props = defineProps<{
  hero: HeroConfig;

  situations: CardsSection;
  cycle?: StepsSection;
  mechanisms: CardsSection;
  work: StepsSection;

  highlight?: HighlightConfig;
  related?: RelatedConfig;

  cta: CtaConfig;
}>();

const calloutClasses: Record<HeroCalloutPosition, string> = {
  "top-left": "left-[6%] top-[18%]",
  "top-right": "right-[4%] top-[18%]",
  "bottom-left": "bottom-[15%] left-[8%]",
  "bottom-right": "bottom-[15%] right-[3%]",
};

const cycleGridClass = computed(() => {
  if (!props.cycle) return "";

  return props.cycle.items.length === 5 ? "xl:grid-cols-5" : "xl:grid-cols-6";
});
</script>

<template>
  <div>
    <!-- ========================================
         HERO
    ========================================= -->
    <section
      class="top-section grid grid-cols-1 items-center lg:grid-cols-[1fr_0.75fr]"
    >
      <!-- Left -->
      <motion.div
        class="flex flex-col gap-8"
        :variants="stagger(0.1, 0.1)"
        initial="hidden"
        animate="visible"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow :text="hero.eyebrow" />
        </motion.div>

        <motion.h1 :variants="fadeUp">
          {{ hero.title }}

          <span class="gradient-text block">
            {{ hero.accent }}
          </span>
        </motion.h1>

        <motion.p class="max-w-3xl" :variants="fadeUp">
          {{ hero.intro }}
        </motion.p>

        <motion.div class="flex flex-wrap gap-3 sm:gap-4" :variants="fadeUp">
          <NuxtLink
            :to="hero.primaryButton?.to ?? '/contacts'"
            class="button button-primary"
          >
            {{ hero.primaryButton?.text ?? "Обсудить ситуацию" }}

            <Icon
              :name="hero.primaryButton?.icon ?? 'tabler:arrow-right'"
              class="size-5"
            />
          </NuxtLink>

          <NuxtLink
            v-if="hero.secondaryButton"
            :to="hero.secondaryButton.to ?? '#'"
            class="button button-outline"
          >
            {{ hero.secondaryButton.text }}

            <Icon
              v-if="hero.secondaryButton.icon"
              :name="hero.secondaryButton.icon"
              class="size-5"
            />
          </NuxtLink>
        </motion.div>
      </motion.div>

      <!-- Visual -->
      <motion.div
        class="relative hidden h-full items-center justify-center lg:flex"
        :variants="heroVisualVariants"
        initial="hidden"
        animate="visible"
      >
        <!-- Glow -->
        <motion.div
          class="glow-violet size-120"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{
            duration: motionDuration.slow,
            delay: 0.25,
            ease: motionEase.smooth,
          }"
        />

        <!-- Rings -->
        <motion.div
          v-for="(size, index) in [48, 68, 88]"
          :key="size"
          class="bg-ring aspect-square"
          :style="{ width: `${size}%` }"
          :variants="heroRingVariants"
          :transition="{
            delay: 0.15 + index * 0.08,
          }"
        />

        <!-- Main icon -->
        <motion.div
          class="flex size-44 items-center justify-center rounded-full border border-primary/25 bg-bg/70 text-primary shadow-(--glow-l) backdrop-blur-xl"
          :variants="heroIconVariants"
        >
          <Icon :name="hero.icon" class="size-20" />
        </motion.div>

        <!-- Callouts -->
        <motion.div
          v-for="(callout, index) in hero.callouts"
          :key="`${callout.label}-${callout.text}`"
          class="absolute card flex flex-col bg-bg/80"
          :class="calloutClasses[callout.position]"
          :initial="{
            opacity: 0,
            scale: 0.92,
          }"
          :animate="{
            opacity: 1,
            scale: 1,
          }"
          :transition="{
            duration: motionDuration.normal,
            delay: 0.5 + index * 0.1,
            ease: motionEase.smooth,
          }"
        >
          <span class="text-xs uppercase tracking-[0.18em] text-text-muted/40">
            {{ callout.label }}
          </span>

          <span class="font-medium">
            {{ callout.text }}
          </span>
        </motion.div>
      </motion.div>
    </section>

    <!-- ========================================
         SITUATIONS
    ========================================= -->
    <section class="flex flex-col gap-10">
      <!-- Header -->
      <motion.div
        class="grid gap-6 sm:gap-8 lg:grid-cols-2"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div class="flex flex-col gap-8" :variants="stagger(0.1)">
          <motion.div :variants="fadeUp">
            <Eyebrow :text="situations.eyebrow" />
          </motion.div>

          <motion.h2 :variants="fadeUp">
            {{ situations.title }}

            <span v-if="situations.accent" class="gradient-text block">
              {{ situations.accent }}
            </span>
          </motion.h2>
        </motion.div>

        <motion.p
          v-if="situations.text"
          class="max-w-xl lg:justify-self-end lg:self-end"
          :variants="fadeUp"
        >
          {{ situations.text }}
        </motion.p>
      </motion.div>

      <!-- Cards -->
      <motion.div
        class="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
        :variants="stagger(0.08, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <motion.article
          v-for="item in situations.items"
          :key="item.title"
          class="card flex flex-col gap-3"
          :variants="fadeScale"
        >
          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <p class="text-sm text-text-muted/65">
            {{ item.text }}
          </p>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         CYCLE
    ========================================= -->
    <section v-if="cycle" id="cycle" class="flex flex-col gap-10">
      <!-- Header -->
      <motion.div
        class="flex flex-col gap-8"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow :text="cycle.eyebrow" />
        </motion.div>

        <div class="flex flex-col gap-4">
          <motion.h2 :variants="fadeUp">
            {{ cycle.title }}

            <span v-if="cycle.accent" class="gradient-text block">
              {{ cycle.accent }}
            </span>
          </motion.h2>

          <motion.p v-if="cycle.text" class="max-w-3xl" :variants="fadeUp">
            {{ cycle.text }}
          </motion.p>
        </div>
      </motion.div>

      <!-- Cycle -->
      <motion.div
        class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
        :class="cycleGridClass"
        :variants="stagger(0.09, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.early"
      >
        <motion.article
          v-for="(item, index) in cycle.items"
          :key="item.number"
          class="card relative flex flex-col items-center justify-center gap-3 text-center"
          :variants="fadeScale"
        >
          <motion.span
            class="absolute left-5 top-5 text-xs font-medium tracking-[0.2em] text-primary/60"
            :variants="fade"
          >
            {{ item.number }}
          </motion.span>

          <div class="icon size-16">
            <Icon :name="item.icon" class="size-8" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <p class="text-xs text-text-muted/60">
            {{ item.text }}
          </p>

          <motion.div
            v-if="index < cycle.items.length - 1"
            class="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block"
            :variants="arrowVariants"
          >
            <Icon name="tabler:arrow-right" class="size-5 text-primary/40" />
          </motion.div>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         MECHANISMS
    ========================================= -->
    <section class="flex flex-col gap-10">
      <motion.div
        class="grid gap-3 sm:gap-4 lg:grid-cols-2"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div class="flex flex-col gap-8" :variants="stagger(0.1)">
          <motion.div :variants="fadeUp">
            <Eyebrow :text="mechanisms.eyebrow" />
          </motion.div>

          <motion.h2 :variants="fadeUp">
            {{ mechanisms.title }}

            <span v-if="mechanisms.accent" class="gradient-text block">
              {{ mechanisms.accent }}
            </span>
          </motion.h2>
        </motion.div>

        <motion.p
          v-if="mechanisms.text"
          class="max-w-xl lg:justify-self-end lg:self-end"
          :variants="fadeUp"
        >
          {{ mechanisms.text }}
        </motion.p>
      </motion.div>

      <motion.div
        class="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
        :variants="stagger(0.08, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <motion.article
          v-for="item in mechanisms.items"
          :key="item.title"
          class="card flex flex-col gap-3"
          :variants="fadeUp"
        >
          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <p class="text-sm text-text-muted/65">
            {{ item.text }}
          </p>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         OPTIONAL HIGHLIGHT
    ========================================= -->
    <section v-if="highlight" class="section">
      <motion.div
        class="relative grid gap-6 sm:gap-8 overflow-hidden rounded-4xl border border-violet-300/15 bg-violet-950/15 p-8 md:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:p-12"
        :variants="fadeScale"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div
          class="-right-24 -top-24 size-80 glow-violet"
          :initial="{ opacity: 0 }"
          :while-in-view="{ opacity: 1 }"
          :in-view-options="motionViewport.default"
          :transition="{
            duration: motionDuration.slow,
            ease: motionEase.smooth,
          }"
        />

        <motion.div
          class="flex size-20 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-300"
          :variants="fadeScale"
        >
          <Icon :name="highlight.icon" class="size-12" />
        </motion.div>

        <motion.div class="flex flex-col gap-3 sm:gap-4" :variants="stagger(0.1, 0.1)">
          <motion.h2 :variants="fadeUp">
            {{ highlight.title }}

            <span v-if="highlight.accent" class="gradient-text block">
              {{ highlight.accent }}
            </span>
          </motion.h2>

          <motion.p class="max-w-4xl" :variants="fadeUp">
            {{ highlight.text }}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>

    <!-- ========================================
         WORK
    ========================================= -->
    <section class="flex flex-col gap-10">
      <motion.div
        class="flex flex-col gap-3 sm:gap-8"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow :text="work.eyebrow" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          {{ work.title }}

          <span v-if="work.accent" class="gradient-text block">
            {{ work.accent }}
          </span>
        </motion.h2>

        <motion.p v-if="work.text" class="max-w-3xl" :variants="fadeUp">
          {{ work.text }}
        </motion.p>
      </motion.div>

      <motion.div
        class="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4"
        :variants="stagger(0.1, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <motion.article
          v-for="item in work.items"
          :key="item.number"
          class="card relative flex flex-col gap-3"
          :variants="fadeScale"
        >
          <span
            class="absolute right-6 top-5 text-6xl font-light tracking-[-0.06em] text-primary/50"
          >
            {{ item.number }}
          </span>

          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <p class="text-sm text-text-muted/65">
            {{ item.text }}
          </p>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         RELATED
    ========================================= -->
    <section v-if="related">
      <motion.div
        :variants="fadeScale"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <NuxtLink
          :to="related.to"
          class="group relative grid gap-6 sm:gap-8 overflow-hidden rounded-4xl border border-border bg-primary/15 p-8 transition-all duration-300 hover:border-primary/35 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12"
        >
          <div class="glow-blue -right-24 -top-24 size-80" />

          <motion.div class="flex flex-col gap-6 sm:gap-8" :variants="stagger(0.1, 0.1)">
            <motion.div :variants="fadeUp">
              <Eyebrow :text="related.eyebrow" />
            </motion.div>

            <motion.h2 :variants="fadeUp">
              {{ related.title }}

              <span v-if="related.accent" class="gradient-text block">
                {{ related.accent }}
              </span>
            </motion.h2>

            <motion.p class="max-w-3xl" :variants="fadeUp">
              {{ related.text }}
            </motion.p>
          </motion.div>

          <motion.div
            class="flex items-center gap-2 font-medium text-primary"
            :variants="fadeLeft"
          >
            {{ related.linkText }}

            <Icon
              name="tabler:arrow-right"
              class="size-5 transition-transform duration-300 group-hover:translate-x-2"
            />
          </motion.div>
        </NuxtLink>
      </motion.div>
    </section>

    <!-- ========================================
         CTA
    ========================================= -->
    <SharedCtaSection
      :title="cta.title"
      :gradient-title="cta.gradientTitle"
      :text="cta.text"
      :primary-button="
        cta.primaryButton ?? {
          text: 'Обсудить ситуацию',
          icon: 'tabler:message-circle',
        }
      "
      :secondary-button="cta.secondaryButton"
    />
  </div>
</template>
