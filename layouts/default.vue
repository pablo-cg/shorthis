<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      'relative font-sans bg-dark text-light transition transition-colors duration-300',
  },

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

const authenticated = ref(false);
const username = ref('pablo-cg');
</script>

<template>
  <header class="w-full sticky top-0 inset-x-0">
    <div
      class="container mx-auto py-7 px-4 md:px-0 flex items-center justify-between"
    >
      <section class="font-bold text-3xl leading-none font-montserrat">
        <NuxtLink to="/" class="gradient-text text-transparent">
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
        <button
          v-else
          class="px-2 py-1 rounded-lg text-white hover:text-light transition duration-300 border border-transparent active:border-white"
        >
          <span class="i-lucide:at-sign" /> {{ username }}
        </button>
        <button
          class="flex justify-center items-center px-2 py-1 rounded-lg transition duration-300 hover:text-white hover:scale-115"
        >
          <span class="i-lucide:command" />
        </button>
        <NuxtLink
          to="https://github.com/pablo-cg/shorthis"
          external
          target="_blank"
          class="flex justify-center items-center px-2 py-1 rounded-lg transition duration-300 hover:text-white hover:scale-115"
        >
          <span class="i-lucide:github" />
        </NuxtLink>
      </section>
    </div>
  </header>

  <NuxtPage />

  <footer class="w-full fixed bottom-0 inset-x-0">
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
            Based on
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
</template>

<style scoped></style>
