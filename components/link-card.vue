<script setup lang="ts">
import type { LinkItem } from '~/types/link';
import type { MenuItem } from '~/types/menu';

interface Props {
  slug: string;
  url: string;
  description?: string;
  active: boolean;
}

interface Emit {
  (e: 'edit', link: LinkItem): void;
  (e: 'delete', link: LinkItem): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const menuItems: MenuItem[] = [
  {
    id: 1,
    label: 'Copy',
    icon: 'i-lucide:copy',
    action: () => copySlugLink(props.slug),
  },
  {
    id: 1,
    label: 'Edit',
    icon: 'i-lucide:edit',
    action: () => emit('edit', props),
  },
  {
    id: 1,
    label: 'Delete',
    icon: 'i-lucide:trash',
    action: () => emit('delete', props),
  },
];

const { copy } = useClipboard();

const location = useBrowserLocation();

async function copySlugLink(slug: string) {
  await copy(`${location.value.host}/l/${slug}`);
}
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
