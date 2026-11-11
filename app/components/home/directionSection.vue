<script setup lang="ts">
import { motion } from "motion-v";
import {
  fadeUp,
  fadeScale,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";
import Eyebrow from "../shared/eyebrow.vue";

const directions = [
  {
    title: "Игровая зависимость",
    subtitle: "Лудомания · ставки · казино · онлайн-игры",
    description:
      "Работаем с потерей контроля, повторяющимися срывами и механизмами, которые снова возвращают человека в игровой цикл.",
    icon: "tabler:cards",
    to: "/directions/addictions/gambling",
    tags: ["Лудомания", "Ставки", "Срывы"],
  },
  {
    title: "Созависимость",
    subtitle: "Родственники · контроль · спасательство · границы",
    description:
      "Помогаем близким выйти из постоянного контроля и спасательства, восстановить границы и перестать жить вокруг зависимости другого человека.",
    icon: "tabler:heart-handshake",
    to: "/directions/codependency",
    tags: ["Родственники", "Гиперконтроль", "Границы"],
  },
];

const sideTextVariants = {
  hidden: {
    opacity: 0,
    x: 12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.normal,
      ease: motionEase.smooth,
    },
  },
};

const verticalLineVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },

  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: motionDuration.slow,
      ease: motionEase.smooth,
    },
  },
};

const horizontalLineVariants = {
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
  <section id="directions" class="flex flex-col gap-10">
    <!-- Header -->
    <div class="grid lg:grid-cols-[1fr_auto]">
      <motion.div
        class="flex flex-col gap-6 sm:gap-8"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Ключевая специализация" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          Игровая зависимость и созависимость.

          <span class="gradient-text block"> Два фокуса одной системы. </span>
        </motion.h2>

        <motion.p class="max-w-3xl leading-relaxed" :variants="fadeUp">
          Мы работаем не только с зависимым поведением самого человека, но и с
          системой отношений вокруг него. Важно понять, что поддерживает игровой
          цикл и как семья оказывается вовлечена в проблему.
        </motion.p>
      </motion.div>

      <!-- Side phrase -->
      <motion.div
        class="hidden self-end gap-4 lg:grid"
        :variants="stagger(0.12, 0.15)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div
          class="w-px origin-top bg-linear-to-b from-primary to-transparent"
          :variants="verticalLineVariants"
        />

        <motion.span class="background-text" :variants="sideTextVariants">
          ЧЕЛОВЕК<br />
          И СЕМЬЯ<br />
          ОДНА<br />
          СИСТЕМА
        </motion.span>

        <motion.div
          class="h-px origin-right self-start bg-linear-to-l from-primary to-transparent lg:col-span-2"
          :variants="horizontalLineVariants"
        />
      </motion.div>
    </div>

    <!-- Cards -->
    <motion.div
      class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
      :variants="stagger(0.12)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.early"
    >
      <motion.div
        v-for="direction in directions"
        :key="direction.title"
        class="h-full"
        :variants="fadeScale"
      >
        <NuxtLink
          :to="direction.to"
          class="group card card-hover relative grid grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr_auto_auto] h-full gap-4 overflow-hidden"
        >
          <div
            class="glow-blue -right-16 -top-16 size-56 transition-all duration-500 group-hover:scale-125 group-hover:bg-violet-500/15"
          />

          <h3 class="self-center">
            {{ direction.title }}
          </h3>

          <div
            class="relative flex size-20 shrink-0 items-center justify-center justify-self-end rounded-full border border-blue-400/10 bg-blue-500/5 text-primary shadow-[0_0_40px_rgb(14_165_233/0.08)] transition-all duration-500 sm:size-22 md:size-24 lg:size-26 group-hover:scale-105 group-hover:border-violet-400/20 group-hover:text-violet-400"
          >
            <div
              class="absolute inset-3 rounded-full border border-blue-400/8"
            />

            <Icon
              :name="direction.icon"
              class="relative z-10 size-10 md:size-12 lg:size-14"
            />
          </div>

          <div
            class="col-span-2 text-xs font-medium uppercase leading-relaxed tracking-widest text-primary sm:text-sm sm:tracking-[0.16em]"
          >
            {{ direction.subtitle }}
          </div>

          <p class="col-span-2 text-text-muted/70">
            {{ direction.description }}
          </p>

          <div class="col-span-2 flex flex-wrap gap-2">
            <span
              v-for="tag in direction.tags"
              :key="tag"
              class="rounded-full border border-border bg-primary/3 px-3 py-1.5 text-xs text-text-muted"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center gap-2 text-sm font-medium text-primary">
            Подробнее

            <Icon
              name="tabler:arrow-right"
              class="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </div>
        </NuxtLink>
      </motion.div>

      <motion.div
        class="card grid gap-3 md:grid-flow-col md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-5 md:gap-y-0 lg:col-span-2"
        :variants="fadeUp"
      >
        <div class="icon row-span-2 size-12 flex">
          <Icon name="tabler:plus" class="size-5" />
        </div>

        <h4>Работаем и с другими формами зависимости</h4>

        <p class="text-sm text-text-muted/55">
          Алкогольная, наркотическая и другие формы зависимого поведения.
        </p>

        <NuxtLink
          to="/directions/addictions"
          class="flex shrink-0 items-center gap-2 justify-self-start text-sm font-medium text-primary transition-colors hover:text-violet-400 md:row-span-2 md:self-center"
        >
          Подробнее
          <Icon name="tabler:arrow-right" class="size-4" />
        </NuxtLink>
      </motion.div>
    </motion.div>

    <!-- CTA -->
    <motion.div
      class="card flex flex-col gap-5 bg-bg lg:flex-row lg:items-center"
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.late"
    >
      <div class="icon rounded-full shadow-(--glow-s)">
        <Icon name="tabler:message-circle" class="size-7" />
      </div>

      <div class="flex-1">
        <h4>Не уверены, с чего начать?</h4>

        <p class="text-sm leading-relaxed">
          Расскажите, что происходит. Поможем определить, какой первый шаг имеет
          смысл именно в вашей ситуации.
        </p>
      </div>

      <NuxtLink
        to="/contacts"
        class="button button-primary w-full shrink-0 lg:w-auto"
      >
        Обсудить ситуацию
        <Icon name="tabler:arrow-right" class="size-4" />
      </NuxtLink>
    </motion.div>
  </section>
</template>
