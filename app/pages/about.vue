<script setup lang="ts">
import { usePageSeo } from "~/composables/usePageSeo";
usePageSeo({
  title: "О центре психологической помощи TANAIS",
  description:
    "Центр психологической помощи TANAIS в Алматы. " +
    "Помощь при игровой и других зависимостях, " +
    "поддержка близких и работа с созависимостью.",
});
</script>

<template>
  <AboutHeroSection />
  <AboutWhoweareSection />
  <AboutApproachSection />
  <AboutDiagnosticsSection />
  <AboutTeam />
  <SharedCtaSection
    title="Если хотите понять,"
    gradient-title="с чего начать — начните с разговора."
    text="Расскажите, что происходит. Мы поможем определить подходящий формат первого обращения."
    :primary-button="{
      text: 'Связаться с центром',
    }"
    :secondary-button="{
      text: 'Посмотреть направления',
      to: '/directions',
    }"
  />
</template>
