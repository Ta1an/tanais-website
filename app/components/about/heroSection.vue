<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "../shared/eyebrow.vue";

import { fadeUp, motionDuration, motionEase, stagger } from "~/utils/motion";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    x: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,

    transition: {
      duration: motionDuration.slow,
      delay: 0.2,
      ease: motionEase.smooth,
    },
  },
};

const imageContentVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: motionDuration.normal,
      delay: 0.55,
      ease: motionEase.smooth,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },

  visible: {
    opacity: 1,
    scaleX: 1,

    transition: {
      duration: motionDuration.normal,
      delay: 0.45,
      ease: motionEase.smooth,
    },
  },
};

const config = useRuntimeConfig();

const aboutImage = `${config.app.baseURL}img/about.jpg`;
</script>

<template>
  <section
    class="top-section grid min-h-svh grid-cols-1 items-center gap-10 lg:grid-cols-[0.75fr_1fr]"
  >
    <!-- =====================================
         LEFT
    ====================================== -->
    <motion.div
      class="flex flex-col gap-6 sm:gap-8"
      :variants="stagger(0.1, 0.1)"
      initial="hidden"
      animate="visible"
    >
      <motion.div :variants="fadeUp">
        <Eyebrow text="О центре" />
      </motion.div>

      <motion.h1 class="max-w-180" :variants="fadeUp">
        TANAIS —

        <span class="gradient-text"> пространство для понимания </span>

        и изменений.
      </motion.h1>

      <motion.p class="max-w-3xl" :variants="fadeUp">
        Мы работаем с зависимым поведением, тревожными состояниями,
        созависимостью, семейными и личностными кризисами. В центре внимания —
        не только симптом, а система процессов, которая поддерживает состояние.
      </motion.p>

      <!-- Actions -->
      <motion.div class="flex flex-wrap gap-3 sm:gap-4" :variants="fadeUp">
        <NuxtLink to="/directions" class="button button-primary">
          Направления работы

          <Icon name="tabler:arrow-right" class="size-5" />
        </NuxtLink>

        <NuxtLink to="/contacts" class="button button-outline">
          Связаться с центром
        </NuxtLink>
      </motion.div>

      <!-- Trust -->
      <motion.div
        class="flex flex-wrap items-center gap-3 text-sm text-text-muted/65"
        :variants="stagger(0.07)"
      >
        <motion.span class="flex items-center gap-2" :variants="fadeUp">
          <Icon name="tabler:award" class="size-4 text-primary" />

          20 лет практики
        </motion.span>

        <motion.span class="flex items-center gap-2" :variants="fadeUp">
          <Icon name="tabler:users-group" class="size-4 text-primary" />

          Командный подход
        </motion.span>

        <motion.span class="flex items-center gap-2" :variants="fadeUp">
          <Icon name="tabler:lock" class="size-4 text-primary" />

          Конфиденциально
        </motion.span>
      </motion.div>
    </motion.div>

    <!-- =====================================
         RIGHT
    ====================================== -->
    <motion.div
      class="relative grid overflow-hidden rounded-3xl border border-blue-300/25 bg-slate-900/40 shadow-(--glow-m)"
      :variants="imageVariants"
      initial="hidden"
      animate="visible"
    >
      <!-- Image -->
      <motion.img
        :src="aboutImage"
        alt="Команда центра TANAIS"
        class="col-[1/2] row-[1/2] size-full object-cover object-center"
        :initial="{
          scale: 1.04,
        }"
        :animate="{
          scale: 1,
        }"
        :transition="{
          duration: 1.2,
          delay: 0.2,
          ease: motionEase.smooth,
        }"
      />

      <!-- Gradient -->
      <div
        class="col-[1/2] z-11 row-[1/2] bg-linear-to-t from-bg-dark/95 via-bg-dark/20 via-45% to-transparent"
      />

      <!-- Content -->
      <motion.div
        class="col-[1/2] z-12 row-[1/2] self-end p-8 md:p-10"
        :variants="imageContentVariants"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          class="mb-3 h-px w-10 origin-left bg-linear-to-r from-primary to-transparent"
          :variants="lineVariants"
          initial="hidden"
          animate="visible"
        />

        <div
          class="text-sm font-semibold uppercase tracking-[0.18em] text-text"
        >
          Команда TANAIS
        </div>

        <p class="mt-2 text-sm text-text-muted/70">
          Специалисты, объединённые одним подходом
        </p>
      </motion.div>
    </motion.div>
  </section>
</template>
