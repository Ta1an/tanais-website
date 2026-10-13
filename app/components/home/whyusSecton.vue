<script setup lang="ts">
import { motion } from "motion-v";
import Eyebrow from "../shared/eyebrow.vue";

import {
  fadeScale,
  fadeUp,
  motionViewport,
  stagger,
} from "~/utils/motion";

const features = [
  {
    icon: "tabler:zoom-scan",
    title: "Ищем механизм зависимости",
    text: "Разбираем не только само поведение, но и то, что запускает и поддерживает зависимый сценарий.",
  },
  {
    icon: "tabler:brain",
    title: "Работаем с регуляцией",
    text: "Учитываем эмоции, импульсы, мышление, систему подкрепления и реакции нервной системы.",
  },
  {
    icon: "tabler:users",
    title: "Включаем семью",
    text: "Помогаем близким изменить контроль, спасательство и другие сценарии, которые могут поддерживать проблему.",
  },
  {
    icon: "tabler:route",
    title: "Строим маршрут под человека",
    text: "Формат и интенсивность программы определяются после диагностики и меняются по динамике состояния.",
  },
];
</script>

<template>
  <section id="about" class="flex flex-col gap-10">
    <motion.div
      class="grid gap-8 sm:gap-6 lg:grid-cols-[1fr_0.5fr] lg:items-center"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.div
        class="lg:col-span-2"
        :variants="fadeUp"
      >
        <Eyebrow text="почему Tanais" />
      </motion.div>

      <motion.h2 :variants="fadeUp">
        Не один метод.

        <span class="gradient-text block">
          Система восстановления.
        </span>
      </motion.h2>

      <motion.p
        class="max-w-xl"
        :variants="fadeUp"
      >
        Мы не подбираем человека под готовую программу. Сначала определяем
        структуру проблемы, а затем выстраиваем работу вокруг неё.
      </motion.p>
    </motion.div>

    <motion.div
      class="grid gap-4 sm:gap-3 md:grid-cols-2 xl:grid-cols-4"
      :variants="stagger(0.09, 0.05)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.article
        v-for="feature in features"
        :key="feature.title"
        class="card flex flex-col gap-2"
        :variants="fadeScale"
      >
        <div class="icon">
          <Icon :name="feature.icon" class="size-7" />
        </div>

        <h4>{{ feature.title }}</h4>

        <p class="text-sm">
          {{ feature.text }}
        </p>
      </motion.article>
    </motion.div>
  </section>
</template>