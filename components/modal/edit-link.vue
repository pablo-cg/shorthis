<script setup lang="ts">
interface Emits {
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const { handleSubmit, resetForm, currentLinkItem } = useEditLink();

function handleCloseModal() {
  resetForm();
  emit('close');
}

const editLink = handleSubmit((values) => {
  console.log('editLink | values:', values);
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
        Edit: {{ currentLinkItem?.slug }}
      </HeadlessDialogTitle>
      <form
        @submit.prevent="editLink"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col text-white gap-1">
          <label for="url">Enter the new URL:</label>
          <UiInput
            name="url"
            type="text"
            placeholder="https://"
          />
        </div>
        <div class="flex flex-col text-white gap-1">
          <label for="description">Description:</label>
          <UiTextarea
            id="description"
            name="description"
          />
        </div>
        <div class="flex items-center text-white gap-2">
          <label for="active">Active: </label>
          <UiSwitch name="active" />
        </div>
        <UiAlert
          text="This action is irreversible"
          severity="danger"
        />
        <section class="flex flex-row-reverse">
          <UiButton
            type="submit"
            class="hover:text-white hover:bg-light/10"
          >
            <span class="i-lucide:check" />
            <span>Edit link</span>
          </UiButton>
        </section>
      </form>
    </HeadlessDialogPanel>
  </ModalWrapper>
</template>
