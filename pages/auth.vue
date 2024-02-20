<script setup lang="ts"></script>

<template>
  <main class="container mx-auto px-4 md:px-0">
    <section class="mt-10 text-center">
      <h1
        class="font-semibold font-montserrat text-3xl text-white mb-2 flex items-center justify-center gap-3"
      >
        <IconWavingHand /> Welcome
      </h1>
    </section>
    <section class="flex gap-2 justify-center mt-5 font-sans">
      <button
        @click="navigateTo('/dashboard')"
        class="flex gap-2 items-center px-2 py-1 rounded-md transition duration-300 text-white bg-zinc-800 hover:text-light"
      >
        <span class="i-lucide:github" />
        Sign in with GitHub
      </button>
    </section>
  </main>
</template>

<style scoped></style>
