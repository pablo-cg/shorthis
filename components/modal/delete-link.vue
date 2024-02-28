<script setup lang="ts">
import { useDeleteLink } from '~/composables/delete-link';

interface Emits {
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const { currentLinkItem, handleSubmit, confirmationId } = useDeleteLink();

function handleCloseModal() {
  emit('close');
}

const deleteLink = handleSubmit((values) => {
  console.log('deleteLink | values:', values);
});
</script>

<template>
  <ModalWrapper
    :is-open="true"
    @close="handleCloseModal"
  >
    <HeadlessDialogPanel
      class="w-full max-w-lg bg-dark rounded-md border border-light/10 p-4"
    >
      <HeadlessDialogTitle class="text-2xl font-semibold text-light/80 mb-4">
        Delete: {{ currentLinkItem?.slug }}
      </HeadlessDialogTitle>
      <form
        @submit.prevent="deleteLink"
        class="flex flex-col gap-4"
      >
        <UiAlert
          text=" Are you sure you want to delete this link? This action is irreversible"
          severity="danger"
        />
        <div class="flex flex-col text-white gap-1">
          <label
            for="url"
            class="font-semibold"
            >Enter the following to confirm:</label
          >
          <p class="text-light -mt-2">{{ confirmationId }}</p>
          <UiInput
            name="confirmation"
            type="text"
            placeholder="..."
          />
        </div>
        <section class="flex flex-row-reverse">
          <UiButton
            type="submit"
            class="hover:text-white hover:bg-light/10"
          >
            <span class="i-lucide:trash" />
            <span>Delete link</span>
          </UiButton>
        </section>
      </form>
    </HeadlessDialogPanel>
  </ModalWrapper>
</template>
