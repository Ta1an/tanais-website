<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "../shared/eyebrow.vue";

import {
  fadeScale,
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";

const specialists = [
  {
    name: "Айгуль Магаматова",
    role: "Психолог · нейропсихолог · аддиктолог",
    description:
      "Работа с зависимым поведением, тревожными состояниями, созависимостью и семейными кризисами.",
    image: "/img/team/aigul.jpg",
    to: "/about#team",
  },
  {
    name: "Мамед Магаматов",
    role: "Нейрореабилитолог · телесно-ориентированная работа",
    description:
      "Работа с телесной регуляцией и восстановительными процессами в рамках комплексного маршрута.",
    image: "/img/team/mamed.jpg",
    to: "/about#team",
  },
  {
    name: "Даурен Керимбеков",
    role: "Специалист центра TANAIS",
    description: "Сопровождение клиентов и участие в программах центра.",
    image: "/img/team/dauren.jpg",
    to: "/about#team",
  },
];

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
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

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: motionDuration.normal,
      delay: 0.12,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <section
    id="team"
    class="flex flex-col gap-10"
  >
    <!-- =========================================
         HEADER
    ========================================== -->
    <motion.div
      class="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.div
        class="flex flex-col gap-6 sm:gap-8"
        :variants="stagger(0.1)"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="команда" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          Система важна.

          <span class="gradient-text block">
            Но работают люди.
          </span>
        </motion.h2>
      </motion.div>

      <motion.p
        class="max-w-xl leading-relaxed lg:justify-self-end"
        :variants="fadeUp"
      >
        В зависимости от ситуации в работу могут подключаться специалисты разных
        направлений.
      </motion.p>
    </motion.div>

    <!-- =========================================
         TEAM
    ========================================== -->
    <motion.div
      class="grid gap-3 sm:gap-4 md:grid-cols-3"
      :variants="stagger(0.12, 0.05)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.article
        v-for="specialist in specialists"
        :key="specialist.name"
        class="group card card-hover overflow-hidden rounded-3xl p-0"
        :variants="fadeScale"
      >
        <!-- Photo -->
        <div class="relative aspect-4/3 overflow-hidden bg-slate-800">
          <motion.img
            :src="specialist.image"
            :alt="specialist.name"
            class="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            :variants="imageVariants"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-bg-dark/90 via-transparent to-transparent"
          />
        </div>

        <!-- Content -->
        <motion.div
          class="border-t border-t-border/20 p-6"
          :variants="contentVariants"
        >
          <h3>
            {{ specialist.name }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-primary">
            {{ specialist.role }}
          </p>

          <p class="mt-4 text-sm">
            {{ specialist.description }}
          </p>
        </motion.div>
      </motion.article>
    </motion.div>
  </section>
</template>