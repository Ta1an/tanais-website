<script setup lang="ts">
import { usePageSeo } from "~/composables/usePageSeo";

usePageSeo({
  title: "О центре психологической помощи | TANAIS",
  description:
    "Узнайте больше о центре TANAIS в Алматы. " +
    "Наш подход к психологической помощи, " +
    "принципы работы и специалисты центра.",
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
