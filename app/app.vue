<script setup lang="ts">
import { MotionConfig } from "motion-v";
import { motionTransition } from "~/utils/motion";
</script>

<template>
  <MotionConfig
    reducedMotion="user"
    :transition="motionTransition.normal"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </MotionConfig>
</template>