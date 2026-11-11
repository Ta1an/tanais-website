<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <div
    class="flex items-center gap-2 uppercase tracking-[0.4em] text-primary text-xs md:text-sm"
  >
    <span>{{ text }}</span>
  </div>
</template>
