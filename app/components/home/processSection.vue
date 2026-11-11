<script setup lang="ts">
import { motion, useScroll, useSpring } from "motion-v";
import Eyebrow from "../shared/eyebrow.vue";

import {
  fadeUp,
  fadeScale,
  motionViewport,
  stagger,
} from "~/utils/motion";

const NuxtLinkComponent = resolveComponent("NuxtLink");

const processRef = ref<HTMLElement | null>(null);

const { scrollYProgress } = useScroll({
  target: processRef,
  offset: ["start 75%", "end 45%"],
});

const progress = useSpring(scrollYProgress, {
  stiffness: 120,
  damping: 30,
  mass: 0.3,
});

const steps = [
  {
    number: "01",
    icon: "tabler:message-circle",
    title: "Разбираем ситуацию",
    text: "Выясняем, что происходит сейчас, как развивалось состояние и что уже предпринималось.",
    accent: false,
  },
  {
    number: "02",
    icon: "tabler:scan",
    title: "Проводим диагностику",
    text: "Определяем не только проявления проблемы, но и факторы, которые могут поддерживать её.",
    accent: true,
  },
  {
    number: "03",
    icon: "tabler:route",
    title: "Формируем маршрут",
    text: "Определяем приоритеты, формат работы и последовательность следующих шагов.",
    accent: false,
  },
  {
    number: "04",
    icon: "tabler:adjustments-heart",
    title: "Работаем и закрепляем",
    text: "Работаем с устойчивыми реакциями и формируем условия для закрепления изменений.",
    accent: false,
  },
];

function getStepComponent(step: (typeof steps)[number]) {
  return step.accent ? NuxtLinkComponent : "article";
}

function getStepProps(step: (typeof steps)[number]) {
  return step.accent ? { to: "/about#diagnostics" } : {};
}
</script>

<template>
  <section
    id="process"
    ref="processRef"
    class="flex flex-col gap-10"
  >
    <!-- Header -->
    <motion.div
      class="grid gap-8 sm:gap-6 lg:grid-cols-[1fr_0.5fr]"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.div
        class="lg:col-span-2"
        :variants="fadeUp"
      >
        <Eyebrow text="как проходит работа" />
      </motion.div>

      <motion.h2 :variants="fadeUp">
        Сначала понять.<br />

        <span class="gradient-text">
          Потом менять.
        </span>
      </motion.h2>

      <motion.p
        class="max-w-xl lg:justify-self-end"
        :variants="fadeUp"
      >
        Работа начинается не с выбора техники. Сначала необходимо понять
        структуру ситуации, определить поддерживающие механизмы и только затем
        формировать маршрут изменений.
      </motion.p>
    </motion.div>

    <div class="relative">
      <!-- Progress rail -->
      <div class="relative mb-5 hidden lg:block">
        <div
          class="absolute left-[12.5%] right-[12.5%] top-1/2 h-px bg-border/20"
        />

        <motion.div
          class="absolute left-[12.5%] right-[12.5%] top-1/2 h-px origin-left bg-linear-to-r from-primary/60 via-blue-400/60 to-violet-400/60 shadow-[0_0_8px_rgb(59_130_246/0.18)]"
          :style="{
            scaleX: progress,
          }"
        />

        <div class="relative grid grid-cols-4">
          <div
            v-for="step in steps"
            :key="`point-${step.number}`"
            class="relative flex justify-center"
          >
            <div
              class="flex size-3 items-center justify-center rounded-full border border-primary/30 bg-bg"
            />

            <span
              class="text-primary absolute bottom-3 text-2xl font-light tracking-widest"
            >
              {{ step.number }}
            </span>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <motion.div
        class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        :variants="stagger(0.12, 0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.early"
      >
        <motion.div
          v-for="step in steps"
          :key="step.number"
          class="relative row-span-5 grid grid-rows-subgrid"
          :variants="fadeScale"
        >
          <component
            :is="getStepComponent(step)"
            v-bind="getStepProps(step)"
            class="group relative grid h-full grid-rows-subgrid row-span-5 card"
            :class="
              step.accent
                ? 'border-primary/35  card-hover cursor-pointer'
                : 'shadow-s bg-bg/80'
            "
          >
            <motion.div
              v-if="step.accent"
              class="pointer-events-none absolute inset-0 rounded-[inherit] border border-primary/15"
              :animate="{
                opacity: [0.2, 0.55, 0.2],
              }"
              :transition="{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }"
            />

            <span
              class="md:hidden inline absolute right-7 top-7 text-5xl font-light tracking-[-0.06em]"
              :class="
                step.accent
                  ? 'text-primary/30'
                  : 'text-blue-400/20'
              "
            >
              {{ step.number }}
            </span>

            <div class="icon">
              <Icon :name="step.icon" class="size-8" />
            </div>

            <h4>{{ step.title }}</h4>

            <p class="text-sm">
              {{ step.text }}
            </p>

            <span
              v-if="step.accent"
              class="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              О диагностике
              <Icon name="tabler:arrow-right" class="size-4" />
            </span>
          </component>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>



