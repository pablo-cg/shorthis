<script setup lang="ts">
import { nanoid } from 'nanoid';

const slug = ref('');

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function randomizeSlug() {
  slug.value = nanoid(6);
}
</script>

<template>
  <ModalWrapper :is-open="isOpen" @close="emit('close')">
    <HeadlessDialogPanel
      class="w-full max-w-xl bg-dark rounded-md border border-light/20 p-4"
    >
      <HeadlessDialogTitle class="text-2xl font-semibold text-white mb-4">
        Create a Link
      </HeadlessDialogTitle>
      <form @submit.prevent="null" class="flex flex-col gap-4">
        <div class="flex flex-col text-white gap-1">
          <label for="url">Enter the URL here</label>
          <input
            name="url"
            type="text"
            placeholder="https://"
            class="px-3 py-1 rounded-md bg-light/10"
          />
        </div>
        <div class="flex flex-col text-white">
          <label for="slug"> Custom slug: </label>
          <small class="text-light/40 mb-1">
            https://shorthis.vercel.app/l/{{ slug }}
          </small>
          <div class="flex items-center justify-between gap-1">
            <input
              name="slug"
              type="text"
              placeholder="https://"
              class="w-full px-3 py-1 rounded-md bg-light/10"
              v-model="slug"
            />
            <button
              type="button"
              @click="randomizeSlug"
              class="px-3 py-1 rounded-md flex gap-1 items-center hover:bg-light/10 active:scale-95"
            >
              <span class="i-lucide:refresh-cw text-sm" />
              <span>Randomize</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col text-white gap-1">
          <label for="description">Description (optional):</label>
          <textarea
            name="description"
            class="w-full px-3 py-1 rounded-md bg-light/10"
          ></textarea>
        </div>
        <section class="flex flex-row-reverse">
          <button type="submit" class="px-3 py-1 flex gap-1 items-center text-white hover:bg-light/10 rounded-md">
            <span class="i-lucide:rocket" />
            <span>Create your link</span>
          </button>
        </section>
      </form>
    </HeadlessDialogPanel>
  </ModalWrapper>
</template>

<style scoped></style>
