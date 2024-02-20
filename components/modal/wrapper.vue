<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <HeadlessTransitionRoot :show="isOpen" as="template">
    <HeadlessDialog @close="emit('close')" class="relative z-100">
      <HeadlessTransitionChild
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-dark/40" aria-hidden="true" />
      </HeadlessTransitionChild>
      <HeadlessTransitionChild
        as="div"
        class="fixed inset-0 w-screen flex items-center justify-center p-4"
        enter="duration-200 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <slot />
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<style scoped></style>
