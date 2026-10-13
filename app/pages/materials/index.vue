<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";
import { AnimatePresence, motion } from "motion-v";

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
  title: "Материалы — TANAIS",
  description:
    "Тесты для самооценки, видео, статьи и практические материалы Центра психологической помощи TANAIS.",
});

type MaterialType = "test" | "video" | "article" | "guide";

type Material = {
  title: string;
  description: string;
  type: MaterialType;
  category: string;
  icon: string;
  to?: string;
  meta?: string;
  featured?: boolean;
};

const filters = [
  {
    value: "all",
    label: "Все",
    icon: "tabler:layout-grid",
  },
  {
    value: "test",
    label: "Тесты",
    icon: "tabler:clipboard-check",
  },
  {
    value: "video",
    label: "Видео",
    icon: "tabler:player-play",
  },
  {
    value: "article",
    label: "Статьи",
    icon: "tabler:file-text",
  },
  {
    value: "guide",
    label: "Практики",
    icon: "tabler:route",
  },
] as const;

const materials: Material[] = [];

const activeFilter = ref<(typeof filters)[number]["value"]>("all");

const filteredMaterials = computed(() => {
  if (activeFilter.value === "all") {
    return materials;
  }

  return materials.filter((material) => material.type === activeFilter.value);
});

const typeLabels: Record<MaterialType, string> = {
  test: "Тест",
  video: "Видео",
  article: "Статья",
  guide: "Практика",
};

const typeIcons: Record<MaterialType, string> = {
  test: "tabler:clipboard-check",
  video: "tabler:player-play",
  article: "tabler:file-text",
  guide: "tabler:route",
};

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
      delay: 0.2,
      ease: motionEase.smooth,
    },
  },
};
</script>

<template>
  <!-- =========================================
         HERO
    ========================================== -->
  <section
    class="top-section grid grid-cols-1 items-center lg:grid-cols-2"
  >
    <!-- Left -->
    <motion.div
      class="flex flex-col gap-8"
      :variants="stagger(0.1, 0.1)"
      initial="hidden"
      animate="visible"
    >
      <motion.div :variants="fadeUp">
        <Eyebrow text="Материалы" />
      </motion.div>

      <motion.h1 :variants="fadeUp">
        Понять происходящее

        <span class="gradient-text block"> немного глубже. </span>
      </motion.h1>

      <motion.p class="max-w-3xl" :variants="fadeUp">
        Тесты для самооценки, видео, статьи и практические материалы о зависимом
        поведении, тревоге, отношениях и работе с семьёй.
      </motion.p>
    </motion.div>

    <!-- Right -->
    <motion.div
      class="hidden justify-end lg:flex"
      :variants="fadeLeft"
      initial="hidden"
      animate="visible"
    >
      <div class="relative max-w-md pl-8">
        <motion.div
          class="absolute bottom-0 left-0 top-0 w-px origin-top bg-linear-to-b from-primary/40 to-transparent"
          :variants="sideLineVariants"
        />

        <motion.div :variants="stagger(0.1, 0.25)">
          <motion.div :variants="fadeUp">
            <Icon name="tabler:books" class="mb-5 size-9 text-primary" />
          </motion.div>

          <motion.p class="text-sm text-text-muted/65" :variants="fadeUp">
            Материалы помогают лучше ориентироваться в теме, но не заменяют
            индивидуальную оценку состояния и работу со специалистом.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  </section>

  <!-- =========================================
         MATERIALS
    ========================================== -->
  <section class="flex flex-col gap-10">
    <motion.div
      class="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between"
      :variants="stagger(0.1)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.div :variants="fadeUp">
        <Eyebrow text="Библиотека материалов" />
      </motion.div>

      <motion.span class="text-sm text-text-muted/50" :variants="fadeUp">
        {{ filteredMaterials.length }}
        {{ filteredMaterials.length === 1 ? "материал" : "материалов" }}
      </motion.span>
    </motion.div>

    <motion.div
      class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
      :variants="stagger(0.06, 0.05)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <motion.button
        v-for="filter in filters"
        :key="filter.value"
        type="button"
        class="group flex items-center gap-2 rounded-xl border px-5 py-2 transition-all duration-300"
        :class="
          activeFilter === filter.value
            ? 'border-primary/40 bg-primary/10 text-primary shadow-(--glow-s)'
            : 'border-border/15 bg-bg/60 text-text-muted hover:border-primary/25 hover:bg-bg'
        "
        :variants="fadeScale"
        @click="activeFilter = filter.value"
      >
        <Icon :name="filter.icon" class="size-6" />

        <span class="font-medium">
          {{ filter.label }}
        </span>
      </motion.button>
    </motion.div>

    <motion.div
      :variants="fadeUp"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.early"
    >
      <AnimatePresence mode="wait" :initial="false">
        <motion.div
          :key="activeFilter"
          class="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
          :initial="{
            opacity: 0,
            y: 10,
          }"
          :animate="{
            opacity: 1,
            y: 0,
          }"
          :exit="{
            opacity: 0,
            y: -10,
          }"
          :transition="{
            duration: 0.25,
            ease: 'easeInOut',
          }"
        >
          <NuxtLink
            v-for="material in filteredMaterials"
            :key="material.to"
            class="group card card-hover grid h-full grid-rows-[auto_auto_1fr_auto_auto]"
          >
            <!-- Header -->
            <div class="flex items-start justify-between gap-3 sm:gap-4">
              <div
                class="icon size-16 transition-colors duration-300 group-hover:text-violet-400"
              >
                <Icon :name="material.icon" class="size-8" />
              </div>

              <div
                class="flex items-center gap-2 rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/60"
              >
                <Icon :name="typeIcons[material.type]" class="size-4" />

                {{ typeLabels[material.type] }}
              </div>
            </div>

            <!-- Category -->
            <div
              class="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary/70"
            >
              {{ material.category }}
            </div>

            <!-- Content -->
            <h4 class="mt-3">
              {{ material.title }}
            </h4>

            <p class="mt-4 text-sm text-text-muted/70">
              {{ material.description }}
            </p>

            <!-- Footer -->
            <div class="flex items-end justify-between gap-3 sm:gap-4 pt-8">
              <span class="text-xs text-text-muted/45">
                {{ material.meta }}
              </span>

              <div
                class="flex items-center gap-2 text-sm font-medium text-primary"
              >
                <span>
                  {{
                    material.type === "test"
                      ? "Пройти"
                      : material.type === "video"
                        ? "Смотреть"
                        : material.type === "guide"
                          ? "Открыть"
                          : "Читать"
                  }}
                </span>

                <Icon
                  name="tabler:arrow-right"
                  class="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </div>
            </div>
          </NuxtLink>
        </motion.div>
      </AnimatePresence>
    </motion.div>

    <!-- Empty -->
    <AnimatePresence>
      <motion.div
        v-if="!filteredMaterials.length"
        class="card p-12 text-center"
        :initial="{
          opacity: 0,
          scale: 0.98,
        }"
        :animate="{
          opacity: 1,
          scale: 1,
        }"
        :exit="{
          opacity: 0,
          scale: 0.98,
        }"
        :transition="{
          duration: 0.25,
        }"
      >
        <Icon
          name="tabler:folder-open"
          class="mx-auto size-10 text-primary/50"
        />

        <p class="mt-4">В этой категории материалы скоро появятся.</p>
      </motion.div>
    </AnimatePresence>

    <motion.div
      class="card flex flex-col gap-3 sm:gap-4 rounded-3xl border md:flex-row md:items-center"
      :variants="fadeScale"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.late"
    >
      <motion.div class="icon size-14 shrink-0" :variants="fadeScale">
        <Icon name="tabler:info-circle" class="size-7" />
      </motion.div>

      <motion.div :variants="stagger(0.08, 0.05)">
        <motion.h3 :variants="fadeUp"> О тестах на сайте </motion.h3>

        <motion.p class="text-sm text-text-muted/65" :variants="fadeUp">
          Онлайн-тесты предназначены для самооценки и ориентирования в ситуации.
          Их результаты сами по себе не являются медицинским или психиатрическим
          диагнозом и не заменяют очную профессиональную оценку.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>

  <!-- =========================================
         CTA
    ========================================== -->
  <SharedCtaSection
    title="Остались вопросы после"
    gradient-title="изучения материалов?"
    text="Информация помогает лучше понять ситуацию, но не всегда даёт ответ, что делать именно в вашем случае. Это можно разобрать на индивидуальной встрече."
    :primary-button="{
      text: 'Обсудить ситуацию',
      icon: 'tabler:message-circle',
    }"
    :secondary-button="{
      text: 'Посмотреть направления',
      to: '/directions',
    }"
  />
</template>
