<script setup lang="ts">
interface Props {
  name: string;
  modelValue?: string | null;
}

const props = defineProps<Props>();

const { value, errorMessage } = useField<string | null>(
  () => props.name,
  undefined,
  {
    syncVModel: true,
  },
);
</script>

<template>
  <div class="w-full flex flex-col">
    <textarea
      :id="name"
      :class="{ 'ring-red!': !!errorMessage }"
      :aria-describedby="name"
      v-model="value"
      class="w-full px-3 py-1 rounded-md bg-light/10 text-white outline-none ring-1 ring-transparent focus:ring-light/50"
      v-bind="$attrs"
    />
    <small class="text-red" :id="name" v-if="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style scoped></style>
