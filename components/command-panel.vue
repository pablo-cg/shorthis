<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const queryInput = ref('');

watchEffect(() => {
  if (props.isOpen) {
    queryInput.value = '';
  }
});

const commandOptions = [
  {
    id: 1,
    label: 'Create new link',
    icon: 'i-lucide:plus',
    action: createLink,
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'i-lucide:layout-dashboard',
    to: '/dashboard',
  },
  {
    id: 3,
    label: 'Report a bug',
    icon: 'i-lucide:bug',
    to: 'https://github.com/pablo-cg/shorthis/issues/new',
    target: '_blank',
  },
  {
    id: 4,
    label: 'Repository',
    icon: 'i-lucide:github',
    to: 'https://github.com/pablo-cg/shorthis',
    target: '_blank',
  },
];

const filteredCommandOptions = computed(() => {
  if (queryInput.value.trim()) {
    return commandOptions.filter((option) =>
      option.label.toLowerCase().trim().includes(queryInput.value.trim()),
    );
  }

  return commandOptions;
});

const { toggleNewLinkModal } = useLinkModal();

function createLink() {
  toggleNewLinkModal();
}
</script>

<template>
  <ModalWrapper :is-open="isOpen" @close="emit('close')">
    <HeadlessDialogPanel
      class="w-full max-w-xl bg-dark rounded-md border border-light/20"
    >
      <HeadlessCombobox>
        <HeadlessComboboxInput
          class="w-full bg-transparent text-white p-4 outline-none"
          placeholder="Search..."
          @change="queryInput = $event.target.value"
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
