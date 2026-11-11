<script setup lang="ts">
import { motion } from "motion-v";
import Eyebrow from "../shared/eyebrow.vue";

import { fadeScale, fadeUp, motionViewport, stagger } from "~/utils/motion";

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
      <motion.div class="lg:col-span-2" :variants="fadeUp">
        <Eyebrow text="почему Tanais" />
      </motion.div>

      <motion.h2 :variants="fadeUp">
        Не один метод.

        <span class="gradient-text block"> Система восстановления. </span>
      </motion.h2>

      <motion.p class="max-w-xl" :variants="fadeUp">
        Мы не подбираем человека под готовую программу. Сначала определяем
        структуру проблемы, а затем выстраиваем работу вокруг неё.
      </motion.p>
    </motion.div>

    <motion.div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <motion.figure
        :variants="fade"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.early"
        class="min-w-0"
      >
        <!-- Image -->
        <div
          class="overflow-hidden rounded-[22px] bg-bg-light sm:rounded-[26px]"
        >
          <img
            src="/img/about.jpg"
            alt="Команда центра психологической помощи TANAIS"
            loading="lazy"
            decoding="async"
            class="block h-auto w-full"
          />
        </div>

        <!-- Photo caption -->
        <figcaption
          class="mt-5 flex flex-wrap items-center justify-between gap-x-5 gap-y-2"
        >
          <span
            class="inline-flex items-center gap-2 text-xs font-medium text-text-muted"
          >
            <span class="size-1.5 rounded-full bg-accent-turquoise" />

            В центре внимания — человек
          </span>

          <span class="text-xs font-medium text-primary/65">
            TANAIS / Подход
          </span>
        </figcaption>

        <!-- Editorial statement -->
        <div class="mt-8 border-l-2 border-accent-turquoise pl-5 sm:pl-6">
          <p>
            У каждого человека своя история. И путь к изменениям тоже должен
            быть индивидуальным.
          </p>
        </div>
      </motion.figure>

      <motion.div
        class="flex flex-col gap-6"
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
    </motion.div>
  </section>
</template>
