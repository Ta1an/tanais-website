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

const diagnosticPoints = [
  {
    number: "01",
    title: "История",
    text: "Когда началась проблема, как развивалась и что происходило до неё.",
  },
  {
    number: "02",
    title: "Текущее состояние",
    text: "Какие проявления есть сейчас и насколько они влияют на повседневную жизнь.",
  },
  {
    number: "03",
    title: "Поддерживающие механизмы",
    text: "Что запускает и закрепляет знакомую реакцию или поведение.",
  },
  {
    number: "04",
    title: "Среда и отношения",
    text: "Как семья, окружение и жизненная ситуация взаимодействуют с проблемой.",
  },
  {
    number: "05",
    title: "Ресурсы",
    text: "Что уже помогает человеку и на какие внутренние и внешние опоры можно опираться.",
  },
  {
    number: "06",
    title: "Маршрут",
    text: "Какие задачи приоритетны и с чего целесообразно начать дальнейшую работу.",
  },
];

const numberVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: motionDuration.fast,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <section id="diagnostics">
    <motion.div
      class="card grid overflow-hidden rounded-4xl lg:grid-cols-[0.75fr_1.25fr]"
      :variants="fadeScale"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <!-- =====================================
           LEFT
      ====================================== -->
      <motion.div
        class="flex flex-col gap-6 sm:gap-8 border-b border-blue-300/10 p-10 lg:border-b-0 lg:border-r lg:p-14"
        :variants="stagger(0.1, 0.05)"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Первый этап" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          Первичный

          <span class="gradient-text block"> разбор ситуации. </span>
        </motion.h2>

        <motion.p class="max-w-xl leading-relaxed" :variants="fadeUp">
          Это не попытка быстро присвоить человеку ярлык. Задача первой встречи
          — получить достаточно информации, чтобы понимать структуру проблемы и
          определить дальнейшие шаги.
        </motion.p>
      </motion.div>

      <!-- =====================================
           RIGHT
      ====================================== -->
      <motion.div
        class="grid gap-px overflow-hidden bg-blue-300/10 md:grid-cols-2"
        :variants="stagger(0.08, 0.15)"
      >
        <motion.article
          v-for="point in diagnosticPoints"
          :key="point.number"
          class="relative bg-bg-dark/80 p-6 md:p-8"
          :variants="fadeUp"
        >
          <motion.span
            class="text-lg font-medium tracking-[0.25em] text-primary"
            :variants="numberVariants"
          >
            {{ point.number }}
          </motion.span>

          <h4>
            {{ point.title }}
          </h4>

          <p class="text-sm">
            {{ point.text }}
          </p>
        </motion.article>
      </motion.div>
    </motion.div>
  </section>
</template>
