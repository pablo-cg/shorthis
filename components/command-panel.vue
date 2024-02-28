<script setup lang="ts">
interface Emits {
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const { filteredCommandOptions, queryInput } = useCommandPanelOptions();

onMounted(() => {
  queryInput.value = '';
});
</script>

<template>
  <ModalWrapper
    is-open
    @close="emit('close')"
  >
    <HeadlessDialogPanel
      class="w-full max-w-xl bg-dark rounded-md border border-light/10"
    >
      <HeadlessCombobox>
        <input
          class="w-full bg-transparent text-white p-4 outline-none"
          placeholder="Search..."
          v-model="queryInput"
        />

        <HeadlessComboboxOptions
          static
          class="border-t border-t-light/20"
          v-if="filteredCommandOptions.length"
        >
          <HeadlessComboboxOption
            v-for="option in filteredCommandOptions"
            :key="option.id"
            class="text-white hover:bg-light/10"
            @click="emit('close')"
          >
            <NuxtLink
              v-if="!option.action"
              class="flex items-center gap-2 px-4 py-3"
              :to="option.to"
              :target="option.target"
            >
              <span :class="option.icon" /> {{ option.label }}
            </NuxtLink>
            <button
              v-else
              @click="option.action"
              class="flex items-center gap-2 px-4 py-3 w-full"
            >
              <span :class="option.icon" /> {{ option.label }}
            </button>
          </HeadlessComboboxOption>
        </HeadlessComboboxOptions>
      </HeadlessCombobox>
    </HeadlessDialogPanel>
  </ModalWrapper>
</template>

<style scoped></style>
