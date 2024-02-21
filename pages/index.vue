<script setup lang="ts"></script>

<template>
  <main class="container mx-auto px-4 md:px-0">
    <section class="mt-10 text-center">
      <h1 class="font-semibold font-montserrat text-3xl text-white mb-2">
        Open Source URL Shortner
      </h1>
      <h2 class="text-lg text-light/80 font-montserrat">
        custom slugs &amp; unlimited links
      </h2>
    </section>
    <section class="flex gap-2 justify-center mt-5">
      <NuxtLink
        to="/auth"
        class="flex gap-2 items-center px-2 py-1 rounded-lg text-light hover:text-white transition duration-300"
      >
        <span class="i-lucide:rocket text-sm" />
        Getting Started
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://github.com/pablo-cg/shorthis"
        class="flex gap-2 items-center px-2 py-1 rounded-lg text-white hover:text-light transition duration-300"
      >
        <span class="i-lucide:star text-sm" />
        Star on GitHub
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped></style>
