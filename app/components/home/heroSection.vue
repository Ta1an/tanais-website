<script setup lang="ts">
import { motion } from "motion-v";
import { fadeUp, stagger } from "#imports";
import Eyebrow from "../shared/eyebrow.vue";

const check = [
  "Конфиденциальность",
  "Индивидуальный подход",
  "Опытные специалисты",
];

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: motionDuration.slow,
      delay: 0.25,
      ease: motionEase.smooth,
    },
  },
};

// Подпись над фотографией
const photoLabelVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: motionDuration.normal,
      delay: 0.55,
      ease: motionEase.smooth,
    },
  },
};

// Декоративная подпись
const signatureVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: motionDuration.normal,
      delay: 0.85,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <section
    class="relative grid grid-cols-1 lg:grid-cols-2 min-h-svh items-center top-section"
  >
    <!-- Left -->
    <motion.div
      class="flex flex-col gap-6 sm:gap-8"
      :variants="stagger(0.1, 0.1)"
      initial="hidden"
      animate="visible"
    >
      <motion.div :variants="fadeUp">
        <Eyebrow text="Лечение игровой зависимости без изоляции" />
      </motion.div>

      <div class="flex flex-col gap-3 sm:gap-4">
        <motion.h1 :variants="fadeUp">
          Игровая зависимость -

          <span class="gradient-text block">это не просто игра</span>
        </motion.h1>

        <motion.p :variants="fadeUp" class="max-w-xl">
          Разбираем, что снова возвращает человека в игровой цикл, даже когда он
          понимает последствия и хочет остановиться.
        </motion.p>
      </div>

      <motion.div
        :variants="fadeUp"
        class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        <NuxtLink to="/contacts" class="button button-primary">
          Обсудить ситуацию
        </NuxtLink>

        <NuxtLink to="/directions/addictions/gambling" class="button button-outline">Об игровой зависимости</NuxtLink>
      </motion.div>

      <motion.div
        :variants="fadeUp"
        class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        <span
          v-for="item in check"
          :key="item"
          class="inline-flex items-center gap-2"
        >
          <div
            class="icon size-8 rounded-full border-emerald-800 bg-emerald-400/5 text-emerald-400"
          >
            <Icon name="tabler:check" />
          </div>

          {{ item }}
        </span>
      </motion.div>
    </motion.div>

    <!-- Right -->
    <div class="relative hidden items-center justify-center lg:flex">
      <!-- Ambient glow -->
      <motion.div
        class="glow-blue inset-[15%]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{
          duration: motionDuration.slow,
          delay: 0.2,
          ease: motionEase.smooth,
        }"
      />

      <!-- Orbital circles -->
      <motion.div
        v-for="(size, index) in [75, 90, 105]"
        :key="size"
        class="bg-ring left-1/2 top-1/2 aspect-square"
        :style="{
          width: `${size}%`,
          translateX: '-50%',
          translateY: '-50%',
        }"
        :initial="{
          opacity: 0,
          scale: 0.92,
        }"
        :animate="{
          opacity: 1,
          scale: 1,
        }"
        :transition="{
          duration: motionDuration.slow,
          delay: 0.2 + index * 0.08,
          ease: motionEase.smooth,
        }"
      />

      <!-- Photo label -->
      <motion.div
        class="absolute left-0 -top-7 z-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px]"
        :variants="photoLabelVariants"
        initial="hidden"
        animate="visible"
      >
        <span
          class="size-1.75 rounded-full bg-[#00c8e9] shadow-[0_0_12px_#00c8e9]"
        />

        Команда TANAIS
      </motion.div>

      <!-- Main photo -->
      <motion.div
        class="relative z-2 overflow-hidden rounded-3xl border border-border/20 shadow-(--glow-m)"
        :variants="imageVariants"
        initial="hidden"
        animate="visible"
      >
        <img
          src="/img/about.jpg"
          alt="Команда психологического центра TANAIS"
          class="block h-auto w-full object-cover"
        />
      </motion.div>

      <motion.span
        class="absolute -bottom-10 right-0 -rotate-6 text-2xl font-light italic text-indigo-300/45"
        :variants="signatureVariants"
        initial="hidden"
        animate="visible"
      >
        К себе. К жизни
      </motion.span>
    </div>

    <!-- Bottom detail -->
    <motion.div
      class="justify-self-center pt-5 text-center text-[10px] uppercase tracking-[0.2em] text-white/25 sm:text-xs lg:col-span-2 lg:tracking-[0.4em]"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{
        duration: motionDuration.normal,
        delay: 0.9,
        ease: motionEase.smooth,
      }"
    >
      Гармония · развитие · реальные изменения
    </motion.div>
  </section>
</template>
