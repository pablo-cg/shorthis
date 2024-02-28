<script setup lang="ts">
import type { MenuItem } from '~/types/menu';

useHead({
  bodyAttrs: {
    class: 'relative font-sans bg-dark text-light',
  },

  link: [{ rel: 'icon', href: '/enlace.webp', type: 'image/webp' }],

  titleTemplate: (title) => {
    return title ? `${title} | Shorthis` : 'Shorthis';
  },
});

useSeoMeta({
  ogTitle: 'Shorthis',
  description: 'Simple URL Shortner',
  ogImage: 'https://shorthis.vercel.app/social.png',
  twitterCard: 'summary_large_image',
});

const authenticated = ref(true);
const username = ref('pablo-cg');

const isCommandPanelOpen = ref(false);
const toggleCommandPanel = useToggle(isCommandPanelOpen);

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown') e.preventDefault();
  },
});

whenever(keys.ctrl_k, () => toggleCommandPanel());

const { isCreateLinkModalOpen, toggleCreateLinkModal } = useCreateLinkModal();

const menuItems: MenuItem[] = [
  {
    id: 1,
    label: 'Create a link',
    icon: 'i-lucide:plus',
    action: toggleCreateLinkModal,
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'i-lucide:layout-dashboard',
    async action() {
      await navigateTo('/dashboard');
    },
  },
  {
    id: 3,
    label: 'Report a bug',
    icon: 'i-lucide:bug',
    async action() {
      await navigateTo('https://github.com/pablo-cg/shorthis/issues/new', {
        open: {
          target: '_blank',
        },
      });
    },
  },
  {
    id: 4,
    label: 'Sign Out',
    icon: 'i-lucide:log-out',
    action: () => {},
  },
];
</script>
<template>
  <header class="w-full sticky top-0 inset-x-0 bg-dark z-50">
    <div
      class="container mx-auto py-6 px-4 md:px-0 flex items-center justify-between"
    >
      <section class="font-bold text-3xl leading-none font-montserrat">
        <NuxtLink
          to="/"
          class="gradient-text text-transparent flex items-center gap-3"
        >
          <img
            src="/enlace.webp"
            class="w-6"
            alt="Shorthis Logo"
          />
          Shorthis
        </NuxtLink>
      </section>
      <section class="flex gap-2">
        <NuxtLink
          v-if="!authenticated"
          to="/auth"
          class="px-2 py-1 rounded-lg text-white hover:text-light transition duration-300 border border-transparent"
        >
          Sign in
        </NuxtLink>
        <DropdownMenu
          v-else
          :menu-label="username"
          menu-icon="i-lucide:at-sign"
          :menu-items="menuItems"
        />
        <UiButton
          @click="toggleCommandPanel()"
          class="text-light! hover:text-white! hover:scale-115"
        >
          <span class="i-lucide:command" />
        </UiButton>
        <NuxtLink
          to="https://github.com/pablo-cg/shorthis"
          external
          target="_blank"
          class="flex justify-center items-center px-2 py-1 rounded-lg transition duration-100 hover:text-white hover:scale-115"
        >
          <span class="i-lucide:github" />
        </NuxtLink>
      </section>
    </div>
  </header>

  <NuxtPage />

  <footer class="w-full fixed bottom-0 inset-x-0 backdrop-blur">
    <div
      class="container mx-auto py-4 px-4 md:px-0 flex items-center justify-between"
    >
      <section class="text-sm text-light/70">
        <p>
          ⚡Made by
          <NuxtLink
            external
            target="_blank"
            to="https://github.com/pablo-cg"
            class="hover:text-white"
          >
            @pablo-cg
          </NuxtLink>
          using
          <NuxtLink
            external
            target="_blank"
            to="https://nuxt.com"
            class="hover:text-nuxt-green"
          >
            Nuxt 3
            <span class="i-lucide:external-link text-xs" />
          </NuxtLink>
          <span class="text-xs block">
            A blatant copy of
            <NuxtLink
              external
              target="_blank"
              to="https://slug.vercel.app/"
              class="hover:text-white"
            >
              slug
            </NuxtLink>
            by
            <NuxtLink
              external
              target="_blank"
              to="https://github.com/pheralb"
              class="hover:text-white"
            >
              @pheralb
            </NuxtLink>
          </span>
        </p>
      </section>
    </div>
  </footer>

  <CommandPanel
    v-if="isCommandPanelOpen"
    @close="toggleCommandPanel"
  />
  <ModalCreateLink
    v-if="isCreateLinkModalOpen"
    @close="toggleCreateLinkModal"
  />
</template>

<style scoped></style>
