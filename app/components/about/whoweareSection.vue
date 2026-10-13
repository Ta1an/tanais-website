<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "../shared/eyebrow.vue";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  motionViewport,
  stagger,
} from "~/utils/motion";
</script>

<template>
  <motion.section
    class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[0.5fr_1fr_0.5fr] overflow-hidden"
    :variants="stagger(0.1)"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="motionViewport.medium"
  >
    <!-- Eyebrow -->
    <motion.div class="lg:col-span-3" :variants="fadeUp">
      <Eyebrow text="Кто мы" />
    </motion.div>

    <!-- Heading -->
    <motion.h2 :variants="fadeRight">
      Не место,

      <span class="gradient-text block"> где дают готовые ответы. </span>
    </motion.h2>

    <!-- Text -->
    <motion.div class="flex flex-col gap-3 sm:gap-4" :variants="stagger(0.08)">
      <motion.p :variants="fadeUp">
        TANAIS — центр психологической помощи, в котором работа строится вокруг
        понимания конкретного человека, его состояния, жизненной ситуации и
        устойчивых механизмов поведения.
      </motion.p>

      <motion.p :variants="fadeUp">
        Мы не рассматриваем зависимость, тревогу или семейный кризис как
        отдельный симптом, существующий сам по себе. Для нас важно увидеть, как
        между собой связаны эмоциональные реакции, нервная система, мышление,
        поведение, отношения и среда.
      </motion.p>
    </motion.div>

    <!-- Accent -->
    <motion.div
      class="card border-primary/15 bg-primary/10"
      :variants="fadeLeft"
    >
      <p>
        Наша задача — не объяснить человеку, каким он должен стать, а помочь
        увидеть,

        <span class="text-primary">
          что именно удерживает его в прежнем сценарии
        </span>

        и где находятся реальные точки изменения.
      </p>
    </motion.div>
  </motion.section>
</template>
