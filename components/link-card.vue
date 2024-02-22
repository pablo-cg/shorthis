<script setup lang="ts">
interface Props {
  slug: string;
  url: string;
  description?: string;
  active: boolean;
}

const props = defineProps<Props>();

const { copySlugLink, menuItems } = useLinkCardOptions({ slug: props.slug });
</script>

<template>
  <article class="border border-light/20 rounded-lg px-3 py-4">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-1">
        <NuxtLink
          to="#"
          class="text-lg font-semibold text-white flex items-center gap-2 hover:text-white/90"
        >
          <StatusBadge
            :active="active"
            class="-mr-1 text-sm"
          />
          {{ slug }}
        </NuxtLink>
        <button
          @click="copySlugLink(slug)"
          class="p-1 text-xs text-white/60 hover:text-white hover:scale-110 transition"
        >
          <span class="i-lucide:copy" />
        </button>
      </div>
      <DropdownMenu
        menu-label="Options"
        menu-icon="i-lucide:settings-2"
        :menu-items="menuItems"
      />
    </section>
    <span class="text-light/60">{{ url }}</span>
    <p class="mt-2">{{ description || 'No description.' }}</p>
  </article>
</template>

<style scoped></style>
