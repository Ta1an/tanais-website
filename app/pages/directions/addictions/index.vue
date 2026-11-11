<script setup lang="ts">
import { motion } from "motion-v";

import Eyebrow from "~/components/shared/eyebrow.vue";

import {
  fadeLeft,
  fadeScale,
  fadeUp,
  motionDuration,
  motionEase,
  motionViewport,
  stagger,
} from "~/utils/motion";


const otherAddictions = [
  {
    icon: "tabler:bottle",
    title: "Алкогольная зависимость",
    subtitle: "Употребление · потеря контроля · срывы",
    text: "Работаем с психологическими и поведенческими механизмами, которые поддерживают повторяющееся употребление и возвращение к прежнему сценарию.",
  },
  {
    icon: "tabler:pill",
    title: "Зависимость от ПАВ",
    subtitle: "Психоактивные вещества · срывы · восстановление",
    text: "Работа с зависимым поведением проводится как часть комплексного маршрута с учётом состояния человека и необходимых медицинских специалистов.",
  },
];

const mechanisms = [
  {
    icon: "tabler:bolt",
    title: "Подкрепление",
    text: "Поведение закрепляется за счёт кратковременного облегчения, возбуждения или награды.",
  },
  {
    icon: "tabler:mood-sad",
    title: "Эмоциональная регуляция",
    text: "Зависимость может становиться способом снижать напряжение, тревогу, скуку или внутренний дискомфорт.",
  },
  {
    icon: "tabler:brain",
    title: "Автоматизация поведения",
    text: "Повторяющийся сценарий постепенно начинает запускаться привычными ситуациями и триггерами.",
  },
  {
    icon: "tabler:users",
    title: "Среда и отношения",
    text: "Семейные реакции, доступ к деньгам, контроль и спасательство могут влиять на сохранение зависимого цикла.",
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
      delay: 0.2,
      ease: motionEase.smooth,
    },
  },
};

const ringVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
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

const visualIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

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
    <!-- ========================================
         HERO
    ========================================= -->
    <section
      class="section top-section grid grid-cols-1 items-center lg:grid-cols-2"
    >
      <!-- Left -->
      <motion.div
        class="flex flex-col gap-6 sm:gap-8"
        :variants="stagger(0.1, 0.1)"
        initial="hidden"
        animate="visible"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Зависимости" />
        </motion.div>

        <div class="flex flex-col gap-3 sm:gap-4">
          <motion.h1 :variants="fadeUp">
            Зависимость —

            <span class="gradient-text block"> это не только поведение. </span>
          </motion.h1>

          <motion.p class="max-w-3xl leading-relaxed" :variants="fadeUp">
            Мы рассматриваем зависимость как устойчивый цикл, в котором
            взаимодействуют система подкрепления, эмоциональное состояние,
            привычные реакции, среда и повторение.
          </motion.p>
        </div>

        <motion.div class="flex flex-wrap gap-4" :variants="fadeUp">
          <NuxtLink
            to="/directions/addictions/gambling"
            class="button button-primary"
          >
            Игровая зависимость

            <Icon name="tabler:arrow-right" class="size-5" />
          </NuxtLink>

          <NuxtLink to="/contacts" class="button button-outline">
            Обсудить ситуацию
          </NuxtLink>
        </motion.div>
      </motion.div>

      <!-- Right -->
      <motion.div
        class="hidden justify-end lg:flex"
        :variants="fadeLeft"
        initial="hidden"
        animate="visible"
      >
        <div class="relative max-w-sm pl-8">
          <motion.div
            class="absolute bottom-0 left-0 top-0 w-px origin-top bg-linear-to-b from-primary/40 to-transparent"
            :variants="sideLineVariants"
          />

          <motion.div :variants="stagger(0.1, 0.25)">
            <motion.div :variants="fadeUp">
              <Icon name="tabler:brain" class="mb-5 size-9 text-primary" />
            </motion.div>

            <motion.p class="text-sm text-text-muted/65" :variants="fadeUp">
              Ключевая специализация TANAIS в направлении зависимостей — игровая
              зависимость. Также центр работает с алкогольной зависимостью и
              зависимостью от ПАВ.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    <!-- ========================================
         KEY SPECIALIZATION
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <motion.div
        class="grid gap-6 sm:gap-8 lg:grid-cols-2"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div class="flex flex-col gap-8" :variants="stagger(0.1)">
          <motion.div :variants="fadeUp">
            <Eyebrow text="Ключевая специализация" />
          </motion.div>

          <motion.h2 :variants="fadeUp">
            Игровая

            <span class="gradient-text"> зависимость </span>
          </motion.h2>
        </motion.div>

        <motion.p
          class="max-w-xl lg:justify-self-end lg:self-end"
          :variants="fadeUp"
        >
          Ставки, казино и другие игровые сценарии могут постепенно
          перестраивать систему решений: человек понимает последствия, но снова
          возвращается к игре.
        </motion.p>
      </motion.div>

      <motion.div
        :variants="fadeScale"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <NuxtLink
          to="/directions/addictions/gambling"
          class="group card card-hover relative grid overflow-hidden lg:grid-cols-[1fr_0.7fr]"
        >
          <!-- Glow -->
          <div
            class="glow-blue -right-20 -top-20 size-96 transition-all duration-700 group-hover:bg-violet-500/15"
          />

          <!-- Content -->
          <motion.div
            class="relative flex flex-col gap-6"
            :variants="stagger(0.08, 0.1)"
          >
            <motion.span
              class="w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary"
              :variants="fadeUp"
            >
              Основное направление
            </motion.span>

            <motion.h3 :variants="fadeUp"> Игровая зависимость </motion.h3>

            <motion.p
              class="max-w-2xl text-base text-text-muted/70"
              :variants="fadeUp"
            >
              Потеря контроля, повторяющиеся попытки остановиться, финансовые
              последствия, скрытность, долги и возвращение к игре несмотря на
              принятое решение.
            </motion.p>

            <motion.div class="flex flex-wrap gap-2" :variants="fadeUp">
              <span
                v-for="tag in ['Лудомания', 'Ставки', 'Казино', 'Срывы']"
                :key="tag"
                class="rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/60"
              >
                {{ tag }}
              </span>
            </motion.div>

            <motion.div
              class="flex items-center gap-2 text-sm font-medium text-primary"
              :variants="fadeUp"
            >
              Подробнее об игровой зависимости

              <Icon
                name="tabler:arrow-right"
                class="size-5 transition-transform duration-300 group-hover:translate-x-2"
              />
            </motion.div>
          </motion.div>

          <!-- Visual -->
          <motion.div
            class="relative hidden items-center justify-center lg:flex"
            :variants="stagger(0.09, 0.1)"
          >
            <motion.div
              v-for="size in [42, 64, 86]"
              :key="size"
              class="bg-ring aspect-square"
              :style="{ width: `${size}%` }"
              :variants="ringVariants"
            />

            <motion.div
              class="relative z-10 flex size-36 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary shadow-(--glow-m)"
              :variants="visualIconVariants"
            >
              <Icon name="tabler:cards" class="size-18" />
            </motion.div>
          </motion.div>
        </NuxtLink>
      </motion.div>
    </section>

    <!-- ========================================
         OTHER ADDICTIONS
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <motion.div
        class="grid gap-6 sm:gap-8 lg:grid-cols-2"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div class="flex flex-col gap-8" :variants="stagger(0.1)">
          <motion.div :variants="fadeUp">
            <Eyebrow text="Другие формы зависимости" />
          </motion.div>

          <motion.h2 :variants="fadeUp">
            Работаем и с другими

            <span class="gradient-text block"> зависимыми сценариями. </span>
          </motion.h2>
        </motion.div>

        <motion.p
          class="max-w-xl lg:justify-self-end lg:self-end"
          :variants="fadeUp"
        >
          Проявления могут отличаться, но в каждом случае важно понять, что
          поддерживает повторение поведения и какие факторы повышают риск
          возвращения к нему.
        </motion.p>
      </motion.div>

      <motion.div
        class="grid gap-3 sm:gap-4 lg:grid-cols-2"
        :variants="stagger(0.12, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <motion.article
          v-for="item in otherAddictions"
          :key="item.title"
          class="card flex flex-col gap-4"
          :variants="fadeScale"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="icon size-18">
              <Icon :name="item.icon" class="size-9" />
            </div>

            <span
              class="text-right text-xs font-medium uppercase tracking-[0.17em] text-text-muted/40"
            >
              Дополнительное направление
            </span>
          </div>

          <div class="text-xs uppercase tracking-[0.16em] text-primary">
            {{ item.subtitle }}
          </div>

          <h3>
            {{ item.title }}
          </h3>

          <p class="text-base text-text-muted/65">
            {{ item.text }}
          </p>

          <NuxtLink
            to="/contacts"
            class="flex items-center gap-2 text-sm font-medium text-primary"
          >
            Обсудить ситуацию

            <Icon name="tabler:arrow-right" class="size-4" />
          </NuxtLink>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         COMMON MECHANISMS
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <motion.div
        class="max-w-3xl"
        :variants="stagger(0.1)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.medium"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Что может поддерживать зависимость" />
        </motion.div>

        <motion.h2 class="mt-7" :variants="fadeUp">
          Форма может отличаться.

          <span class="gradient-text block">
            Механизм всегда нужно разбирать индивидуально.
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        class="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4"
        :variants="stagger(0.09, 0.05)"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <motion.article
          v-for="item in mechanisms"
          :key="item.title"
          class="card flex flex-col gap-3"
          :variants="fadeScale"
        >
          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <p class="text-sm text-text-muted/65">
            {{ item.text }}
          </p>
        </motion.article>
      </motion.div>
    </section>

    <!-- ========================================
         FAMILY
    ========================================= -->
    <section class="section">
      <motion.div
        class="card grid overflow-hidden rounded-4xl py-14 lg:grid-cols-[1fr_0.7fr]"
        :variants="fadeScale"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <!-- Content -->
        <motion.div
          class="flex flex-col items-start gap-6 sm:gap-8"
          :variants="stagger(0.1, 0.1)"
        >
          <motion.div :variants="fadeUp">
            <Eyebrow text="Если зависимость у близкого" />
          </motion.div>

          <div class="flex flex-col gap-4">
            <motion.h2 :variants="fadeUp">
              Семья тоже оказывается

              <span class="gradient-text"> внутри этого цикла. </span>
            </motion.h2>

            <motion.p :variants="fadeUp">
              Контроль, финансовая помощь, спасательство, угрозы или постоянные
              проверки часто возникают из желания помочь. Но семье также важно
              понимать собственную роль и сохранять границы.
            </motion.p>
          </div>

          <motion.div :variants="fadeUp">
            <NuxtLink
              to="/directions/codependency"
              class="button button-outline inline-flex items-center gap-2"
            >
              О созависимости

              <Icon name="tabler:arrow-right" class="size-5" />
            </NuxtLink>
          </motion.div>
        </motion.div>

        <!-- Visual -->
        <motion.div
          class="relative hidden items-center justify-center lg:flex"
          :variants="fadeLeft"
        >
          <motion.div
            v-for="size in [60, 80, 100]"
            :key="size"
            class="bg-ring aspect-square"
            :style="{ width: `${size}%` }"
            :variants="ringVariants"
          />

          <motion.div
            class="relative z-10 flex size-50 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary shadow-(--glow-m)"
            :variants="visualIconVariants"
          >
            <Icon name="tabler:heart-handshake" class="size-25" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    <!-- ========================================
         CTA
    ========================================= -->
    <SharedCtaSection
      title="Не уверены, какой формат помощи"
      gradient-title="нужен в вашей ситуации?"
      text="Расскажите, что происходит. На первичном разборе можно определить, какие механизмы поддерживают зависимость и какой следующий шаг имеет смысл."
      :primary-button="{
        text: 'Обсудить ситуацию',
        icon: 'tabler:message-circle',
      }"
      :secondary-button="{
        text: 'О первичном разборе',
        to: '/about#diagnostics',
      }"
    />
  </div>
</template>
