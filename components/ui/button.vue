<script setup lang="ts"></script>

<template>
  <button
    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-white hover:text-light transition duration-100"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
