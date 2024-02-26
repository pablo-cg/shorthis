<script setup lang="ts">
import { links } from '~/data';
import type { LinkItem } from '~/types/link';

definePageMeta({
  middleware: [
    function (to, from) {
      // return navigateTo('/auth');
    },
  ],
});

const { toggleCreateLinkModal } = useCreateLinkModal();

const isDeleteLinkModalOpen = ref(false);
const toggleDeleteModal = useToggle(isDeleteLinkModalOpen);

const isEditLinkModalOpen = ref(false);
const toggleEditModal = useToggle(isEditLinkModalOpen);

const selectedLink = ref<LinkItem | null>(null);

const currentLinkItem = useState<LinkItem | null>(
  'currentLinkItem',
  () => null,
);

function openDeleteLinkModal(link: LinkItem) {
  selectedLink.value = link;
  toggleDeleteModal();
}

function openEditLinkModal(link: LinkItem) {
  currentLinkItem.value = link;
  toggleEditModal();
}
</script>

<template>
  <div class="mb-20">
    <section class="container mx-auto px-4 my-2 md:px-0 flex justify-between">
      <h1 class="text-2xl font-semibold text-white">Dashboard</h1>
      <UiButton
        @click="toggleCreateLinkModal()"
        class="transform active:scale-90"
      >
        <span class="i-lucide:plus" />
        Create new link
      </UiButton>
    </section>
    <hr class="border-light/20 mt-3" />
    <main class="container mx-auto px-4 md:px-0">
      <section class="my-7">
        <UiInput
          name="input-search-link"
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
        <UiButton
          @click="toggleCreateLinkModal()"
          class="px-4! transform active:scale-90 border"
        >
          Create a link
        </UiButton>
      </section>
      <section
        v-else
        class="grid grid-cols-1 gap-3 lg:grid-cols-3"
      >
        <LinkCard
          v-for="{ slug, url, description, active } in links"
          :slug="slug"
          :url="url"
          :description="description"
          :active="active"
          @delete="openDeleteLinkModal"
          @edit="openEditLinkModal"
        />
      </section>
    </main>

    <Teleport to="body">
      <ModalEditLink
        :is-open="isEditLinkModalOpen"
        @close="toggleEditModal"
      />
      <ModalDeleteLink
        :is-open="isDeleteLinkModalOpen"
        @close="toggleDeleteModal"
      />
    </Teleport>
  </div>
</template>

<style scoped></style>
