<script setup lang="ts">
interface Emits {
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const { createLink, formValues, randomizeSlug, resetForm } = useCreateLink();

function handleCloseModal() {
  emit('close');
  resetForm();
}
</script>

<template>
  <ModalWrapper
    is-open
    @close="handleCloseModal"
  >
    <HeadlessDialogPanel
      class="w-full max-w-xl bg-dark rounded-md border border-light/10 p-4"
    >
      <HeadlessDialogTitle class="text-2xl font-semibold text-white mb-4">
        Create a Link
      </HeadlessDialogTitle>
      <form
        @submit.prevent="createLink"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col text-white gap-1">
          <label for="url">Enter the URL here</label>
          <UiInput
            name="url"
            type="text"
            placeholder="https://"
          />
        </div>
        <div class="flex flex-col text-white">
          <label for="slug"> Custom slug: </label>
          <small class="text-light/40 mb-1">
            https://shorthis.vercel.app/l/{{ formValues.slug }}
          </small>
          <div class="flex items-start justify-between gap-1">
            <UiInput
              name="slug"
              type="text"
              placeholder="Anything you want..."
            />
            <UiButton
              type="button"
              @click="randomizeSlug"
              class="hover:bg-light/10 hover:text-white active:scale-95!"
            >
              <span class="i-lucide:refresh-cw text-sm" />
              <span>Randomize</span>
            </UiButton>
          </div>
        </div>
        <div class="flex flex-col text-white gap-1">
          <label for="description">Description (optional):</label>
          <UiTextarea
            id="description"
            name="description"
          />
        </div>
        <section class="flex flex-row-reverse">
          <UiButton
            type="submit"
            class="hover:text-white hover:bg-light/10"
          >
            <span class="i-lucide:rocket" />
            <span>Create your link</span>
          </UiButton>
        </section>
      </form>
    </HeadlessDialogPanel>
  </ModalWrapper>
</template>

<style scoped></style>
