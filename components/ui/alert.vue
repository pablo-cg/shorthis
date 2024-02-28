<script setup lang="ts">
interface Props {
  text: string;
  severity: Severity;
}

const SEVERITY = {
  danger: 'border-red-900 bg-red-900/10 text-red-300',
  success: 'border-green-900 bg-green-900/10 text-green-300',
  warning: 'border-amber-900 bg-amber-900/10 text-amber-300',
} as const;

type Severity = keyof typeof SEVERITY;

defineProps<Props>();
</script>

<template>
  <p
    class="w-full border flex items-center gap-2 rounded-md p-4"
    :class="SEVERITY[severity]"
  >
    <span class="i-lucide:alert-circle" />
    {{ text }}
  </p>
</template>

<style scoped></style>
