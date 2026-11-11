<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "~/components/shared/eyebrow.vue";

import { usePageSeo } from "~/composables/usePageSeo";
usePageSeo({
  title: "	Помощь при зависимостях и созависимости | TANAIS",
  description:
    "Центр психологической помощи TANAIS в Алматы. " +
    "Помощь при игровой и других зависимостях, " +
    "поддержка близких и работа с созависимостью.",
});
import {
  fadeLeft,
  fadeScale,
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";

useSeoMeta({
  title: "Направления работы — TANAIS",
  description:
    "Основные направления Центра TANAIS: игровая зависимость и созависимость. Работа с игровым поведением, срывами, потерей контроля и семейной системой.",
});

const directions = [
  {
    number: "01",
    title: "Игровая зависимость",
    subtitle: "Лудомания · ставки · казино · онлайн-игры",
    description:
      "Работаем с потерей контроля, повторяющимися срывами, финансовыми последствиями и механизмами, которые поддерживают игровой цикл.",
    icon: "tabler:cards",
    to: "/directions/addictions",
    tags: ["Лудомания", "Ставки", "Срывы", "Потеря контроля"],
  },
  {
    number: "02",
    title: "Созависимость",
    subtitle: "Родственники · контроль · спасательство · границы",
    description:
      "Помогаем близким выйти из постоянного контроля, спасательства и жизни вокруг зависимости другого человека.",
    icon: "tabler:heart-handshake",
    to: "/directions/codependency",
    tags: ["Родственники", "Гиперконтроль", "Границы", "Спасательство"],
  },
];

const sideLineVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },

  visible: {
    opacity: 1,
    scaleY: 1,

    transition: {
      duration: motionDuration.slow,
      delay: 0.25,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <div>
    <!-- =========================================
         HERO
    ========================================== -->
    <section
      class="top-section relative grid grid-cols-1 items-center lg:grid-cols-2"
    >
      <!-- Left -->
      <motion.div
        :variants="stagger(0.1, 0.1)"
        initial="hidden"
        animate="visible"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Направления" />
        </motion.div>

        <motion.h1 class="mb-4 mt-8" :variants="fadeUp">
          Разные состояния.

          <span class="gradient-text block"> Разные механизмы. </span>
        </motion.h1>

        <motion.p class="max-w-3xl" :variants="fadeUp">
          Мы не подбираем помощь только по названию проблемы. Важно понять, что
          поддерживает зависимое поведение, как формируется повторяющийся цикл и
          какую роль в нём играет окружение человека.
        </motion.p>
      </motion.div>

      <!-- Right -->
      <motion.div
        class="hidden lg:flex lg:justify-end"
        initial="hidden"
        animate="visible"
        :variants="fadeLeft"
      >
        <div class="relative max-w-sm pl-8">
          <!-- Vertical line -->
          <motion.div
            class="absolute bottom-0 left-0 top-0 w-px origin-top bg-linear-to-b from-primary/40 to-primary/5"
            :variants="sideLineVariants"
          />

          <motion.div :variants="stagger(0.1, 0.25)">
            <motion.div :variants="fadeUp">
              <Icon name="tabler:route" class="mb-5 size-8 text-primary" />
            </motion.div>

            <motion.p class="text-sm text-text-muted/65" :variants="fadeUp">
              Основной фокус TANAIS — игровая зависимость и созависимость. При
              этом мы рассматриваем не только поведение самого человека, но и
              систему отношений вокруг него.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    <!-- =========================================
         KEY DIRECTIONS
    ========================================== -->
    <section class="flex flex-col gap-10">
      <!-- Header -->
      <motion.div
        class="grid gap-6 sm:gap-8 lg:grid-cols-2"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="stagger(0.1)">
          <motion.div :variants="fadeUp">
            <Eyebrow text="Ключевая специализация" />
          </motion.div>

          <motion.h2 class="mt-8" :variants="fadeUp">
            Основной фокус

            <span class="gradient-text"> TANAIS </span>
          </motion.h2>
        </motion.div>

        <motion.p class="max-w-xl lg:place-self-end" :variants="fadeUp">
          Зависимость редко существует изолированно. Поэтому мы отдельно
          работаем как с игровым поведением самого человека, так и с близкими,
          которые оказываются вовлечены в зависимый цикл.
        </motion.p>
      </motion.div>

      <!-- =========================================
           CARDS
      ========================================== -->
      <motion.div
        class="grid gap-3 sm:gap-4 lg:grid-cols-2"
        :variants="stagger(0.12, 0.05)"
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
            class="group card card-hover relative flex h-full flex-col overflow-hidden"
          >
            <!-- Number -->
            <span
              class="absolute right-7 top-7 text-sm font-medium tracking-[0.2em] text-primary/25"
            >
              {{ direction.number }}
            </span>

            <!-- Icon -->
            <div
              class="icon size-20 shrink-0 transition-all duration-500 group-hover:border-violet-400/30 group-hover:text-violet-400"
            >
              <Icon :name="direction.icon" class="size-11" />
            </div>

            <!-- Content -->
            <div
              class="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-primary"
            >
              {{ direction.subtitle }}
            </div>

            <h3>
              {{ direction.title }}
            </h3>

            <p class="mt-5 text-base leading-[1.75] text-text-muted">
              {{ direction.description }}
            </p>

            <!-- Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in direction.tags"
                :key="tag"
                class="rounded-full border border-border bg-primary/3 px-3 py-1.5 text-xs text-text-muted"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Link -->
            <div
              class="mt-auto flex items-center gap-2 pt-10 text-sm font-medium text-primary"
            >
              Подробнее

              <Icon
                name="tabler:arrow-right"
                class="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </div>
          </NuxtLink>
        </motion.div>

        <!-- Other addictions -->
        <motion.div
          class="card grid items-center gap-x-5 md:grid-flow-col md:grid-cols-[auto_1fr_auto] lg:col-span-2"
          :variants="fadeUp"
        >
          <div class="icon row-span-2 hidden size-12 md:flex">
            <Icon name="tabler:plus" class="size-5" />
          </div>

          <h4>Другие формы зависимого поведения</h4>

          <p class="text-sm text-text-muted/55">
            Алкогольная, наркотическая и другие формы зависимого поведения.
          </p>

          <NuxtLink
            to="/directions/addictions"
            class="flex shrink-0 items-center gap-2 self-center text-sm font-medium text-primary transition-colors hover:text-violet-400 md:row-span-2"
          >
            Подробнее о зависимостях

            <Icon name="tabler:arrow-right" class="size-4" />
          </NuxtLink>
        </motion.div>
      </motion.div>
    </section>

    <!-- =========================================
         CTA
    ========================================== -->
    <SharedCtaSection
      title="Не уверены, с чего"
      gradient-title="начать именно вам?"
      text="Расскажите, что происходит. На первичном разборе можно определить, что поддерживает ситуацию и какой следующий шаг имеет смысл."
      :primary-button="{
        text: 'Рассказать о ситуации',
        icon: 'tabler:arrow-right',
      }"
      :secondary-button="{
        text: 'О первичном разборе',
        to: '/about#diagnostics',
      }"
    />
  </div>
</template>
