<script setup lang="ts">
defineProps<{ active: boolean }>();
</script>

<template>
  <span
    :class="{
      'bg-green i-lucide:badge-check': active,
      'bg-red i-lucide:badge-alert': !active,
    }"
  />
</template>

<style scoped></style>
