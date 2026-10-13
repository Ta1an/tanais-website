<script setup lang="ts">
import { motion } from "motion-v";
import Eyebrow from "../shared/eyebrow.vue";

import {
  fadeLeft,
  fadeScale,
  fadeUp,
  motionViewport,
  stagger,
} from "~/utils/motion";

const questions = [
  {
    icon: "tabler:help",
    title: "Что делать?",
    text: "Как действовать, когда разговоры, уговоры и обещания больше не меняют ситуацию.",
  },
  {
    icon: "tabler:hand-stop",
    title: "Что перестать делать?",
    text: "Какие формы контроля, спасательства и финансовой поддержки могут поддерживать прежний сценарий.",
  },
  {
    icon: "tabler:lifebuoy",
    title: "Как сохранить себя?",
    text: "Как вернуть границы, устойчивость и собственную жизнь, не прекращая заботиться о близком.",
  },
];
</script>

<template>
  <section class="relative">
    <motion.div
      class="grid gap-10 rounded-4xl border border-border/20 bg-bg/80 shadow-(--glow-m) p-10 lg:grid-cols-2 lg:items-center lg:p-14"
      :variants="fadeScale"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.default"
    >
      <!-- Left -->
      <motion.div
        class="flex flex-col gap-6 sm:gap-8"
        :variants="stagger(0.1, 0.1)"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="для родственников" />
        </motion.div>

        <motion.h2 :variants="fadeUp">
          Если зависимость у близкого —

          <span class="gradient-text">
            помощь может быть нужна и вам.
          </span>
        </motion.h2>

        <motion.p
          class="max-w-xl leading-relaxed"
          :variants="fadeUp"
        >
          Родные часто годами живут между надеждой, страхом, контролем и
          попытками спасти человека. В такой ситуации помощь может быть нужна не
          только самому зависимому.
        </motion.p>

        <motion.div
          class="flex flex-wrap gap-3 sm:gap-4"
          :variants="fadeUp"
        >
          <NuxtLink
            to="/directions/codependency"
            class="button button-primary"
          >
            Помощь родственникам
          </NuxtLink>

          <NuxtLink
            to="/contacts"
            class="button button-outline"
          >
            Обсудить ситуацию
          </NuxtLink>
        </motion.div>
      </motion.div>

      <!-- Right -->
      <motion.div
        class="grid gap-3 sm:gap-4"
        :variants="stagger(0.1, 0.15)"
      >
        <motion.article
          v-for="question in questions"
          :key="question.title"
          class="group card flex gap-5 bg-bg-light/30"
          :variants="fadeLeft"
        >
          <div class="icon">
            <Icon :name="question.icon" class="size-7" />
          </div>

          <div>
            <h3>{{ question.title }}</h3>

            <p class="mt-2 text-sm">
              {{ question.text }}
            </p>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  </section>
</template>