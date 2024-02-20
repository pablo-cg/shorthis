<script setup lang="ts">
interface Props {
  slug: string;
  url: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <article class="border border-light/20 rounded-lg px-3 py-4">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        <NuxtLink
          to="#"
          class="text-lg font-semibold text-white flex items-center gap-2 hover:text-white/90"
        >
          {{ slug }}
        </NuxtLink>
        <button
          class="p-1 text-xs text-white/60 hover:text-white hover:scale-110 transition"
        >
          <span class="i-lucide:copy" />
        </button>
      </div>
      <button
        class="flex items-center gap-1 px-2 py-1 rounded-lg text-light hover:text-white transition duration-300 border border-transparent"
      >
        <span class="i-lucide:settings-2" />
        Options
      </button>
    </section>
    <span class="text-light/60">{{ url }}</span>
    <p class="mt-2">{{ description || 'No description.' }}</p>
  </article>
</template>

<style scoped></style>
