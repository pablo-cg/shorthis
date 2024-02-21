<script setup lang="ts">
import { type MenuItem } from '~/types/menu';
import AppButton from './app-button.vue';

interface Props {
  menuIcon: string;
  menuLabel: string;
  menuItems: MenuItem[];
}

defineProps<Props>();
</script>

<template>
  <HeadlessMenu as="div" class="relative text-white">
    <HeadlessMenuButton :as="AppButton" :id="`menu-button-${menuLabel.trim()}`">
      <span :class="menuIcon" /> {{ menuLabel }}
    </HeadlessMenuButton>
    <transition
      enter-active-class="ease-out duration-100"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
    >
      <HeadlessMenuItems
        class="absolute right-0 mt-2 w-56 p-1 flex flex-col bg-dark rounded-md ring-1 ring-light/20 focus:outline-none z-10"
      >
        <HeadlessMenuItem
          v-for="item in menuItems"
          :key="item.id"
          as="template"
        >
          <button
            @click="item.action()"
            class="flex gap-3 items-center px-3 py-2 w-full rounded-md hover:bg-light/20"
          >
            <span :class="item.icon" /> {{ item.label }}
          </button>
        </HeadlessMenuItem>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>

<style scoped></style>
