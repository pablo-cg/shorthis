<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

function handleCloseModal() {
  emit('close');
}
</script>

<template>
  <ModalWrapper
    :is-open="isOpen"
    @close="handleCloseModal"
  >
    test
  </ModalWrapper>
</template>
