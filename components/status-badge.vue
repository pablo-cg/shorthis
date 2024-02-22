<script setup lang="ts">
defineProps<{ active: boolean }>();
</script>

<template>
  <span
    class="i-lucide:badge-check"
    :class="{
      'bg-green': active,
      'bg-light/50': !active,
    }"
  />
</template>

<style scoped></style>
