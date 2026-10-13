<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

import { motion } from "motion-v";

import {
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";

const centerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionDuration.slow,
      delay: 0.15,
      ease: motionEase.smooth,
    },
  },
};

const mechanism = [
  {
    title: "Нервная система",
    icon: "tabler:brain",
    x: 50,
    y: 8,
  },
  {
    title: "Эмоции",
    icon: "tabler:heart",
    x: 84,
    y: 27,
  },
  {
    title: "Мысли",
    icon: "tabler:bulb",
    x: 84,
    y: 67,
  },
  {
    title: "Поведение",
    icon: "tabler:user",
    x: 50,
    y: 88,
  },
  {
    title: "Среда",
    icon: "tabler:home",
    x: 16,
    y: 67,
  },
  {
    title: "Повторение",
    icon: "tabler:refresh",
    x: 16,
    y: 27,
  },
];

const examples = [
  {
    icon: "tabler:brain",
    title: "Знаю, что так нельзя — но всё равно делаю",
    text: "Привычная реакция может включаться автоматически, даже когда последствия уже понятны.",
  },
  {
    icon: "tabler:activity-heartbeat",
    title: "Понимаю, что опасности нет — но тело реагирует",
    text: "Нервная система может продолжать запускать знакомую реакцию, даже когда реальной угрозы уже нет.",
  },
  {
    icon: "tabler:rotate-2",
    title: "Хочу изменить сценарий — но возвращаюсь к привычному",
    text: "Старый механизм снова активируется под влиянием эмоций, ситуации или окружения.",
  },
];

const mechanismArrows = [
  {
    id: "top-right",
    name: "tabler:arrow-down-right",
    class: "right-[21%] top-[18%] rotate-[8deg] text-primary/55",
  },
  {
    id: "right",
    name: "tabler:arrow-down",
    class: "right-[8%] top-[46%] text-blue-400/45",
  },
  {
    id: "bottom-right",
    name: "tabler:arrow-down-left",
    class: "bottom-[15%] right-[22%] text-primary/55",
  },
  {
    id: "bottom-left",
    name: "tabler:arrow-up-left",
    class: "bottom-[15%] left-[22%] text-blue-400/45",
  },
  {
    id: "left",
    name: "tabler:arrow-up",
    class: "left-[8%] top-[46%] text-violet-400/45",
  },
  {
    id: "top-left",
    name: "tabler:arrow-up-right",
    class: "left-[21%] top-[18%] text-primary/55",
  },
];
</script>

<template>
  <section id="mechanism" class="flex flex-col gap-10">
    <div class="grid items-center gap-6 sm:gap-8 lg:grid-cols-2">
      <!-- Left -->
      <motion.div
        class="flex flex-col gap-6 sm:gap-8"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Как мы понимаем проблему" />
        </motion.div>

        <div class="flex flex-col gap-3 sm:gap-4">
          <motion.h2 :variants="fadeUp">
            Проблема держится

            <span class="gradient-text block"> не только на симптоме. </span>
          </motion.h2>

          <motion.p class="max-w-xl leading-relaxed" :variants="fadeUp">
            Даже когда человек всё понимает, состояние может сохраняться. Мы
            разбираем не только проявление, но и то, что поддерживает его снова
            и снова: реакции нервной системы, эмоции, мысли, поведение и среду.
          </motion.p>
        </div>

        <motion.div
          class="hidden max-w-sm items-start gap-4 lg:flex"
          :variants="fadeUp"
        >
          <motion.div
            class="h-24 w-px shrink-0 origin-top bg-linear-to-b from-primary to-transparent"
            :initial="{ scaleY: 0 }"
            :while-in-view="{ scaleY: 1 }"
            :in-view-options="motionViewport.default"
            :transition="{
              duration: motionDuration.slow,
              ease: motionEase.smooth,
            }"
          />

          <p class="background-text">
            Изменения становятся возможными, когда виден весь механизм
          </p>
        </motion.div>
      </motion.div>

      <!-- Desktop mechanism -->
      <motion.div
        class="relative hidden min-h-120 aspect-square items-center justify-center lg:flex"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div
          class="pointer-events-none absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]"
          :variants="{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: motionDuration.slow,
              },
            },
          }"
        />

        <!-- Rings -->
        <div
          v-for="(size, index) in [45, 65, 85]"
          :key="size"
          class="absolute left-1/2 top-1/2 bg-ring -translate-x-1/2 -translate-y-1/2"
          :style="{
            width: `${size}%`,
            height: `${size}%`,
          }"
        >
          <motion.div
            class="size-full rounded-full border border-blue-400/10"
            :variants="{
              hidden: {
                opacity: 0,
                scale: 0.85,
              },

              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: motionDuration.slow,
                  delay: 0.1 + index * 0.08,
                  ease: motionEase.smooth,
                },
              },
            }"
          />
        </div>

        <!-- Center -->
        <div
          class="absolute left-1/2 top-1/2 z-20 size-55 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            class="relative flex size-full flex-col items-center justify-center rounded-full border border-border/30 bg-bg/40 text-center shadow-(--glow-m) backdrop-blur-xl"
            :variants="centerVariants"
          >
            <motion.div
              class="pointer-events-none absolute inset-0 rounded-full border border-primary/10"
              :animate="{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.5, 0.2],
              }"
              :transition="{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }"
            />

            <span
              class="relative z-10 max-w-38 text-lg font-semibold leading-snug text-text"
            >
              Что поддерживает состояние
            </span>

            <span
              class="relative z-10 mt-4 text-sm uppercase tracking-[0.4em] text-primary"
            >
              механизм
            </span>
          </motion.div>
        </div>

        <!-- Nodes -->
        <div
          v-for="(item, index) in mechanism"
          :key="item.title"
          class="absolute z-30 size-30 -translate-x-1/2 -translate-y-1/2"
          :style="{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }"
        >
          <motion.div
            class="card flex size-full flex-col items-center justify-center rounded-full text-center"
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
                  delay: 0.45 + index * 0.09,
                  ease: motionEase.smooth,
                },
              },
            }"
          >
            <Icon :name="item.icon" class="mb-2 size-8 text-primary" />

            <span
              class="max-w-22 text-xs font-medium leading-tight text-text-muted"
            >
              {{ item.title }}
            </span>
          </motion.div>
        </div>

        <!-- Arrows -->
        <motion.div
          v-for="(arrow, index) in mechanismArrows"
          :key="arrow.id"
          :class="['absolute', arrow.class]"
          :variants="{
            hidden: {
              opacity: 0,
              scale: 0.6,
            },

            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: motionDuration.fast,
                delay: 0.55 + index * 0.09,
                ease: motionEase.smooth,
              },
            },
          }"
        >
          <Icon :name="arrow.name" class="size-6" />
        </motion.div>
      </motion.div>

      <!-- Mobile -->
      <motion.div
        class="grid gap-3 grid-cols-2 text-center sm:gap-4 lg:hidden"
        :variants="stagger(0.07)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.early"
      >
        <motion.div
          v-for="item in mechanism"
          :key="`mobile-${item.title}`"
          class="card flex flex-col items-center gap-2 sm:gap-3 justify-center"
          :variants="fadeUp"
        >
          <Icon
            :name="item.icon"
            class="size-7 text-primary sm:size-8"
          />

          <span class="text-sm font-medium text-text">
            {{ item.title }}
          </span>
        </motion.div>

        <motion.div
          class="card col-span-2 border-primary/20 bg-primary/5 text-center"
          :variants="fadeUp"
        >
          <span class="text-lg font-medium text-text"> Всё взаимосвязано </span>

          <p class="text-sm">
            Изменение одного звена может влиять на работу всей системы.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <!-- Examples -->
    <motion.div
      class="grid gap-3 sm:gap-4 lg:grid-cols-3"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.div
        v-for="example in examples"
        :key="example.title"
        class="group card grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-3"
        :variants="fadeUp"
      >
        <div class="icon">
          <Icon :name="example.icon" class="size-7" />
        </div>

        <h4 class="self-center">
          {{ example.title }}
        </h4>

        <p class="col-span-2 text-sm">
          {{ example.text }}
        </p>
      </motion.div>
    </motion.div>

    <!-- Bottom -->
    <motion.div
      class="card flex flex-col gap-5 bg-bg lg:flex-row lg:items-center"
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.late"
    >
      <div class="icon rounded-full shadow-(--glow-s)">
        <Icon name="tabler:circles-relation" class="size-7" />
      </div>

      <div class="flex-1">
        <h4>Поэтому мы начинаем не с ярлыка, а с разбора механизма.</h4>

        <p class="text-sm leading-relaxed">
          Помогаем увидеть, что именно поддерживает состояние в вашей ситуации,
          и определить дальнейший маршрут работы.
        </p>
      </div>

      <NuxtLink
        to="/about#approach"
        class="button button-outline w-full shrink-0 lg:w-auto"
      >
        Подробнее о подходе
      </NuxtLink>
    </motion.div>
  </section>
</template>
