<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

import { motion } from "motion-v";

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
  title: "Контакты — TANAIS",
  description:
    "Контакты Центра психологической помощи TANAIS. Запись на консультацию и первичный разбор ситуации.",
});

/*
  ЗАМЕНИТЕ данные ниже на реальные.
  После этого вся страница обновится автоматически.
*/
const contacts = {
  phone: "+7 705 131 91 93",
  phoneRaw: "+77051319193",

  whatsapp: "+7 705 131 91 93",
  whatsappRaw: "77051319193",

  instagram: "@psiholog.almaty.aigul",
  instagramUrl: "https://instagram.com/psiholog.almaty.aigul",
};

const contactMethods = [
  {
    icon: "tabler:brand-whatsapp",
    title: "WhatsApp",
    value: contacts.whatsapp,
    text: "Можно кратко описать ситуацию и задать вопрос о записи.",
    href: `https://wa.me/${contacts.whatsappRaw}`,
    external: true,
  },
  {
    icon: "tabler:phone",
    title: "Телефон",
    value: contacts.phone,
    text: "Для записи и организационных вопросов.",
    href: `tel:${contacts.phoneRaw}`,
    external: false,
  },
  {
    icon: "tabler:brand-instagram",
    title: "Instagram",
    value: contacts.instagram,
    text: "Материалы центра, эфиры и информация о работе специалистов.",
    href: contacts.instagramUrl,
    external: true,
  },
];

const form = reactive({
  name: "",
  phone: "",
  topic: "",
  message: "",
});

const topics = ["Зависимость", "Созависимость"];

const info_blocks = [
  {
    icon: "tabler:map-pin",
    title: "Адрес",
    text: "г. Алматы, ул. Кулымбетова, 109",
  },
  {
    icon: "tabler:clock",
    title: "График",
    text: "Ежедневно 10:00-20:00",
  },
  {
    icon: "tabler:users",
    title: "Формат обращения",
    text: "Индивидуальное обращение, работа с родственниками и семьёй.",
  },
];

function sendToWhatsApp() {
  const text = [
    "Здравствуйте! Обращение с сайта TANAIS.",
    "",
    `Имя: ${form.name || "не указано"}`,
    `Телефон: ${form.phone || "не указан"}`,
    `Запрос: ${form.topic || "не указан"}`,
    "",
    form.message ? `Описание ситуации: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const url =
    `https://wa.me/${contacts.whatsappRaw}` +
    `?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

const heroCardVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: motionDuration.slow,
      delay: 0.2,
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
      class="section top-section grid items-center lg:grid-cols-[1fr_0.5fr]"
    >
      <!-- Left -->
      <motion.div
        class="flex flex-col gap-8"
        :variants="stagger(0.1, 0.1)"
        initial="hidden"
        animate="visible"
      >
        <motion.div :variants="fadeUp">
          <Eyebrow text="Контакты" />
        </motion.div>

        <motion.h1 :variants="fadeUp">
          Начать можно

          <span class="gradient-text block"> с обычного разговора. </span>
        </motion.h1>

        <motion.p class="max-w-3xl" :variants="fadeUp">
          Не обязательно заранее знать диагноз, специалиста или формат работы.
          Расскажите, что происходит — мы поможем определить подходящий первый
          шаг.
        </motion.p>

        <motion.div class="flex flex-wrap gap-3 sm:gap-4" :variants="fadeUp">
          <a
            :href="`https://wa.me/${contacts.whatsappRaw}`"
            target="_blank"
            rel="noopener noreferrer"
            class="button button-primary"
          >
            <Icon name="tabler:brand-whatsapp" class="size-7" />

            Написать в WhatsApp
          </a>

          <a :href="`tel:${contacts.phoneRaw}`" class="button button-outline">
            <Icon name="tabler:phone" class="size-7" />

            Позвонить
          </a>
        </motion.div>
      </motion.div>

      <!-- Right -->
      <motion.div
        class="card hidden flex-col gap-3 sm:gap-4 lg:flex lg:justify-end"
        :variants="heroCardVariants"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          class="icon"
          :initial="{
            opacity: 0,
            scale: 0.8,
          }"
          :animate="{
            opacity: 1,
            scale: 1,
          }"
          :transition="{
            duration: motionDuration.normal,
            delay: 0.45,
            ease: motionEase.smooth,
          }"
        >
          <Icon name="tabler:message-circle" class="size-7" />
        </motion.div>

        <motion.h3
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: motionDuration.normal,
            delay: 0.5,
            ease: motionEase.smooth,
          }"
        >
          Первичное обращение
        </motion.h3>

        <motion.p
          class="text-sm text-text-muted/70"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: motionDuration.normal,
            delay: 0.58,
            ease: motionEase.smooth,
          }"
        >
          Кратко опишите ситуацию. Не нужно самостоятельно определять диагноз
          или выбирать специалиста.
        </motion.p>

        <motion.div
          class="flex items-center gap-3 sm:gap-4 border-t border-blue-300/10 pt-4"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{
            duration: motionDuration.normal,
            delay: 0.68,
          }"
        >
          <Icon name="tabler:lock" class="size-5 text-emerald-400" />

          <span class="text-sm text-text-muted/65">
            Обращение конфиденциально
          </span>
        </motion.div>
      </motion.div>
    </section>

    <!-- =========================================
         CONTACT METHODS
    ========================================== -->
    <motion.section
      class="section grid gap-4 md:grid-cols-3"
      :variants="stagger(0.1, 0.05)"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="motionViewport.medium"
    >
      <motion.a
        v-for="item in contactMethods"
        :key="item.title"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        class="group card card-hover grid gap-3 sm:gap-4"
        :variants="fadeScale"
      >
        <div
          class="icon col-start-1 row-start-1 transition-colors duration-300 group-hover:text-violet-400"
        >
          <Icon :name="item.icon" class="size-7" />
        </div>

        <Icon
          name="tabler:arrow-up-right"
          class="col-start-1 row-start-1 size-5 justify-self-end text-text-muted/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
        />

        <span class="uppercase tracking-[0.25em] text-primary">
          {{ item.title }}
        </span>

        <h4>
          {{ item.value }}
        </h4>

        <p class="text-sm text-text-muted/65">
          {{ item.text }}
        </p>
      </motion.a>
    </motion.section>

    <!-- =========================================
         FORM + INFO
    ========================================== -->
    <section class="section">
      <motion.div
        class="card grid p-3 lg:grid-cols-2"
        :variants="fadeScale"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="motionViewport.default"
      >
        <!-- =====================================
             FORM
        ====================================== -->
        <motion.div
          class="flex flex-col gap-3 sm:gap-4 border-b border-blue-300/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12"
          :variants="stagger(0.08, 0.1)"
        >
          <motion.div :variants="fadeUp">
            <Eyebrow text="Оставьте обращение" />
          </motion.div>

          <motion.h3 :variants="fadeUp">
            Расскажите

            <span class="gradient-text"> о ситуации. </span>
          </motion.h3>

          <motion.form
            class="grid gap-3 sm:gap-4"
            :variants="stagger(0.07, 0.05)"
            @submit.prevent="sendToWhatsApp"
          >
            <!-- Name + Phone -->
            <motion.div
              class="grid gap-3 sm:gap-4 md:grid-cols-2"
              :variants="fadeUp"
            >
              <label class="flex flex-col gap-2">
                <span class="text-sm text-text-muted/70">
                  Как к вам обращаться
                </span>

                <input
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  placeholder="Ваше имя"
                  class="label"
                />
              </label>

              <label class="flex flex-col gap-2">
                <span class="text-sm text-text-muted/70"> Телефон </span>

                <input
                  v-model="form.phone"
                  type="tel"
                  autocomplete="tel"
                  placeholder="+7 ..."
                  class="label"
                />
              </label>
            </motion.div>

            <!-- Topic -->
            <motion.label class="grid gap-2" :variants="fadeUp">
              <span class="text-sm text-text-muted/70">
                Что вас беспокоит
              </span>

              <select v-model="form.topic" class="label">
                <option value="" disabled>Выберите направление</option>

                <option
                  v-for="topic in topics"
                  :key="topic"
                  :value="topic"
                  class="bg-bg-dark"
                >
                  {{ topic }}
                </option>
              </select>
            </motion.label>

            <!-- Message -->
            <motion.label class="grid gap-2" :variants="fadeUp">
              <span class="text-sm text-text-muted/70">
                Кратко опишите ситуацию
              </span>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Например: проблема длится около года..."
                class="label"
              />
            </motion.label>

            <!-- Submit -->
            <motion.button
              type="submit"
              class="button button-primary"
              :variants="fadeUp"
            >
              Отправить в WhatsApp

              <Icon name="tabler:brand-whatsapp" class="size-5" />
            </motion.button>

            <!-- Privacy -->
            <motion.span
              class="flex items-center justify-center gap-2 text-xs text-text-muted/45"
              :variants="fadeUp"
            >
              <Icon name="tabler:lock" class="size-4" />

              Не публикуйте конфиденциальные медицинские документы в сообщении
              без необходимости.
            </motion.span>
          </motion.form>
        </motion.div>

        <!-- =====================================
             INFO
        ====================================== -->
        <motion.div
          class="flex flex-col gap-3 sm:gap-4 p-7 md:p-10 lg:p-12"
          :variants="stagger(0.08, 0.15)"
        >
          <motion.div :variants="fadeUp">
            <Eyebrow text="Центр TANAIS" />
          </motion.div>

          <motion.h3 :variants="fadeUp">
            Приём

            <span class="gradient-text"> по записи. </span>
          </motion.h3>

          <!-- Info blocks -->
          <motion.div class="grid gap-3" :variants="stagger(0.08)">
            <motion.div
              v-for="block in info_blocks"
              :key="block.title"
              class="card grid grid-cols-[auto_1fr] items-center gap-x-4"
              :variants="fadeLeft"
            >
              <div class="icon row-span-2">
                <Icon :name="block.icon" class="size-7" />
              </div>

              <span
                class="text-xs uppercase tracking-[0.2em] text-text-muted/45"
              >
                {{ block.title }}
              </span>

              <p class="text-sm text-text/80">
                {{ block.text }}
              </p>
            </motion.div>
          </motion.div>

          <!-- Directions -->
          <motion.div
            class="border-t border-blue-300/10 pt-7"
            :variants="fadeUp"
          >
            <p class="text-sm leading-relaxed text-text-muted/60">
              Перед обращением можно ознакомиться с основными направлениями
              работы центра.
            </p>

            <NuxtLink
              to="/directions"
              class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Все направления

              <Icon name="tabler:arrow-right" class="size-5" />
            </NuxtLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </div>
</template>
