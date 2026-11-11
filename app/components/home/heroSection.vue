<script setup lang="ts">
import { motion } from "motion-v";
import Eyebrow from "../shared/eyebrow.vue";
import { fadeUp, stagger } from "~/utils/motion";

const benefits = [
  "Конфиденциальность",
  "Индивидуальный подход",
  "Опытные специалисты",
];
</script>

<template>
  <section
    class="relative text-center xl:text-left flex justify-between items-center flex-col xl:flex-row gap-12 min-h-svh top-section"
  >
    <!-- Content -->
    <motion.div
      class="flex flex-1 flex-col items-center xl:items-start gap-6 sm:gap-8"
      :variants="stagger(0.1, 0.1)"
      initial="hidden"
      animate="visible"
    >
      <!-- Eyebrow -->
      <motion.div :variants="fadeUp">
        <Eyebrow text="Лечение игровой зависимости без изоляции" />
      </motion.div>

      <!-- Heading -->
      <motion.h1 :variants="fadeUp">
        Игровая зависимость

        <span class="block text-primary"> - это не просто игра. </span>
      </motion.h1>

      <!-- Description -->
      <motion.p :variants="fadeUp" class="max-w-xl">
        Разбираем, что снова возвращает человека в игровой цикл, даже когда он
        понимает последствия и хочет остановиться.
      </motion.p>

      <!-- Actions -->
      <motion.div
        :variants="fadeUp"
        class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        <NuxtLink to="/contacts" class="button button-primary group">
          Обсудить ситуацию

          <Icon
            name="tabler:arrow-up-right"
            class="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </NuxtLink>

        <NuxtLink
          to="/directions/addictions/gambling"
          class="button button-outline group"
        >
          Об игровой зависимости

          <Icon
            name="tabler:arrow-right"
            class="text-lg transition-transform duration-300 group-hover:translate-x-1"
          />
        </NuxtLink>
      </motion.div>

      <!-- Benefits -->
      <motion.div :variants="fadeUp" class="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-3">
        <div
          v-for="item in benefits"
          :key="item"
          class="flex items-center gap-2"
        >
          <Icon name="tabler:check" class="text-lg text-accent-turquoise" />

          <span class="text-xs font-medium text-text-muted">
            {{ item }}
          </span>
        </div>
      </motion.div>
    </motion.div>

    <!-- Team Photo -->
    <motion.div
      class="relative min-w-0 flex-1"
      :variants="fadeUp"
      initial="hidden"
      animate="visible"
    >
      <div class="overflow-hidden rounded-[22px] bg-bg-light md:rounded-[28px] shadow-m">
        <img
          src="/img/about.jpg"
          alt="Команда психологического центра TANAIS"
          class="block h-auto w-full"
          fetchpriority="high"
        />
      </div>

      <!-- Photo caption -->
      <div class="mt-5 flex items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="size-1.5 rounded-full bg-accent-turquoise" />

          <span class="text-xs font-medium text-text-muted">
            Команда TANAIS
          </span>
        </div>

        <span class="text-xs font-medium italic text-text-muted">
          К себе. К жизни.
        </span>
      </div>
    </motion.div>
  </section>
</template>
