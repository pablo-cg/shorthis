<script setup lang="ts">
import { links } from '~/data';

definePageMeta({
  middleware: [
    function (to, from) {
      // return navigateTo('/auth');
    },
  ],
});

const { toggleNewLinkModal } = useLinkModal();
</script>

<template>
  <div class="mb-20">
    <section class="container mx-auto px-4 md:px-0 flex justify-between">
      <h1 class="text-2xl font-semibold text-white">Dashboard</h1>
      <button
        @click="toggleNewLinkModal()"
        class="flex items-center gap-1 px-2 py-1 rounded-lg text-white hover:text-light transition duration-300 border border-transparent"
      >
        <span class="i-lucide:plus" />
        Create new link
      </button>
    </section>
    <hr class="border-light/20 mt-3" />
    <main class="container mx-auto px-4 md:px-0">
      <section class="my-7">
        <input
          name="input-search-link"
          class="w-full px-3 py-1 rounded-md border border-light/20 bg-zinc-900 text-white"
          type="text"
          placeholder="Search links"
        />
      </section>
      <section
        v-if="!links.length"
        class="flex flex-col items-center justify-center gap-3"
      >
        <span class="i-lucide:rocket h-24 w-24" />
        <h1 class="text-white text-2xl font-semibold">
          Lets create some links!
        </h1>
        <button
          class="px-3 py-1 rounded-md text-white hover:text-light transition duration-300 border border-white"
        >
          Create a link
        </button>
      </section>
      <section v-else class="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <LinkCard
          v-for="{ slug, url, description, active } in links"
          :slug="slug"
          :url="url"
          :description="description"
          :active="active"
        />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
