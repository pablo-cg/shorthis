<script setup lang="ts">
interface Props {
  name: string;
  modelValue?: boolean | null;
}

const props = defineProps<Props>();

const { value } = useField<boolean | undefined>(() => props.name, undefined, {
  syncVModel: false,
});
</script>

<template>
  <HeadlessSwitch
    :id="name"
    v-model="value"
    :class="value ? 'bg-green/40' : 'bg-light/40'"
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors outline-none focus:ring-1 focus:ring-light/20"
  >
    <span
      :class="value ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-light transition-transform"
    />
  </HeadlessSwitch>
</template>
