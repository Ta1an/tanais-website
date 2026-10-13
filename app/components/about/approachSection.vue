<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "../shared/eyebrow.vue";

import {
  fade,
  fadeScale,
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";

const principles = [
  {
    icon: "tabler:zoom-scan",
    title: "Не сводить человека к симптому",
    text: "Похожее проявление может поддерживаться разными механизмами. Поэтому мы сначала разбираем структуру ситуации.",
  },
  {
    icon: "tabler:brain",
    title: "Учитывать работу нервной системы",
    text: "Эмоции, телесные реакции, мышление и поведение рассматриваются как взаимосвязанные процессы.",
  },
  {
    icon: "tabler:users",
    title: "Видеть влияние среды",
    text: "Особенно при зависимости важно учитывать отношения, семейную систему и привычные формы взаимодействия.",
  },
  {
    icon: "tabler:route",
    title: "Не работать по одному шаблону",
    text: "Маршрут определяется исходя из состояния человека, запроса, истории проблемы и текущих задач.",
  },
];

const mechanism = [
  {
    number: "01",
    icon: "tabler:brain",
    title: "Нервная система",
  },
  {
    number: "02",
    icon: "tabler:heart",
    title: "Эмоции",
  },
  {
    number: "03",
    icon: "tabler:bulb",
    title: "Мысли",
  },
  {
    number: "04",
    icon: "tabler:user",
    title: "Поведение",
  },
  {
    number: "05",
    icon: "tabler:home",
    title: "Среда",
  },
  {
    number: "06",
    icon: "tabler:refresh",
    title: "Повторение",
  },
];

const lineLeftVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },

  visible: {
    opacity: 1,
    scaleX: 1,

    transition: {
      duration: motionDuration.slow,
      ease: motionEase.smooth,
    },
  },
};

const lineRightVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },

  visible: {
    opacity: 1,
    scaleX: 1,

    transition: {
      duration: motionDuration.slow,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <section id="approach" class="flex flex-col gap-10">
    <!-- =========================================
         HEADER
    ========================================== -->
    <motion.div
      class="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.div class="flex flex-col gap-8" :variants="stagger(0.1)">
        <motion.div :variants="fadeUp">
          <Eyebrow text="Наш подход" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          Мы ищем не только причину.

          <span class="gradient-text block"> Мы разбираем механизм. </span>
        </motion.h2>
      </motion.div>

      <motion.p class="max-w-xl lg:justify-self-end" :variants="fadeUp">
        Одной причины часто недостаточно, чтобы объяснить, почему проблема
        сохраняется. Важно увидеть цикл, который воспроизводит состояние снова и
        снова.
      </motion.p>
    </motion.div>

    <!-- =========================================
         MECHANISM
    ========================================== -->
    <div class="relative">
      <motion.div
        class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        :variants="stagger(0.09, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.early"
      >
        <motion.article
          v-for="(item, index) in mechanism"
          :key="item.title"
          class="card relative flex min-h-48 flex-col items-center justify-center gap-3 text-center"
          :variants="fadeScale"
        >
          <!-- Number -->
          <motion.span
            class="absolute right-4 top-4 text-xs font-medium text-primary/35"
            :variants="fade"
          >
            {{ item.number }}
          </motion.span>

          <!-- Icon -->
          <motion.div
            class="icon size-16 md:size-17 lg:size-18 rounded-full"
            :variants="{
              hidden: {
                opacity: 0,
                scale: 0.8,
              },

              visible: {
                opacity: 1,
                scale: 1,

                transition: {
                  duration: motionDuration.fast,
                  ease: motionEase.smooth,
                },
              },
            }"
          >
            <Icon :name="item.icon" class="size-8 md:size-9 lg:size-10" />
          </motion.div>

          <h4>
            {{ item.title }}
          </h4>

          <!-- Arrow -->
          <motion.div
            v-if="index < mechanism.length - 1"
            class="absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center lg:flex"
            :variants="{
              hidden: {
                opacity: 0,
                x: -6,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: motionDuration.fast,
                  delay: 0.15,
                  ease: motionEase.smooth,
                },
              },
            }"
          >
            <Icon name="tabler:arrow-right" class="size-5 text-primary/80" />
          </motion.div>
        </motion.article>
      </motion.div>
    </div>

    <!-- =========================================
         SYSTEM PHRASE
    ========================================== -->
    <motion.div
      class="mx-auto hidden my-10 lg:flex max-w-3xl items-center justify-center gap-5 text-center"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.late"
    >
      <motion.div
        class="h-0.5 w-20 origin-right bg-linear-to-r from-transparent to-primary/80 md:block"
        :variants="lineLeftVariants"
      />

      <motion.p class="background-text md:inline" :variants="fadeUp">
        Поэтому мы смотрим на систему целиком
      </motion.p>

      <motion.div
        class="hidden h-0.5 w-20 origin-left bg-linear-to-l from-transparent to-primary/80 md:block"
        :variants="lineRightVariants"
      />
    </motion.div>

    <!-- =========================================
         PRINCIPLES
    ========================================== -->
    <motion.div
      class="grid gap-3 sm:gap-4 md:grid-cols-2"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.article
        v-for="principle in principles"
        :key="principle.title"
        class="card grid grid-cols-[auto_1fr] gap-x-3 gap-y-1"
        :variants="fadeUp"
      >
        <div class="icon row-span-2">
          <Icon :name="principle.icon" class="size-7" />
        </div>

        <h4>
          {{ principle.title }}
        </h4>

        <p class="text-sm">
          {{ principle.text }}
        </p>
      </motion.article>
    </motion.div>
  </section>
</template>
