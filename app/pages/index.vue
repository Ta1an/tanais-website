<script lang="ts" setup>
import { usePageSeo } from "~/composables/usePageSeo";
usePageSeo({
  title: "Психологическая помощь при зависимостях в Алматы | TANAIS",
  description:
    "Центр психологической помощи TANAIS в Алматы. " +
    "Помощь при игровой и других зависимостях, " +
    "поддержка близких и работа с созависимостью.",
});
</script>

<template>
  <HomeHeroSection />
  <HomeDirectionSection />
  <HomeMechanismSection />
  <HomeProcessSection />
  <HomeWhyusSecton />
  <HomeFamilySection />
  <SharedCtaSection
    title="Не обязательно уже знать,"
    gradient-title="какая помощь вам нужна."
    text="Опишите ситуацию. На первой встрече можно определить, что происходит и с какого шага имеет смысл начать."
    :primary-button="{
      text: 'Записаться на консультацию',
      to: '/contacts',
      icon: 'tabler:arrow-right',
    }"
    :secondary-button="{
      text: 'Посмотреть направления',
      to: '/directions',
    }"
  />
</template>
