/* @unocss-include */
export const useCommandPanelOptions = () => {
  const { toggleNewLinkModal } = useLinkModal();

  const queryInput = ref('');

  const commandOptions = [
    {
      id: 1,
      label: 'Create new link',
      icon: 'i-lucide:plus',
      action: createLink,
    },
    {
      id: 2,
      label: 'Dashboard',
      icon: 'i-lucide:layout-dashboard',
      to: '/dashboard',
    },
    {
      id: 3,
      label: 'Report a bug',
      icon: 'i-lucide:bug',
      to: 'https://github.com/pablo-cg/shorthis/issues/new',
      target: '_blank',
    },
    {
      id: 4,
      label: 'Repository',
      icon: 'i-lucide:github',
      to: 'https://github.com/pablo-cg/shorthis',
      target: '_blank',
    },
  ];

  const filteredCommandOptions = computed(() => {
    if (queryInput.value.trim()) {
      return commandOptions.filter((option) =>
        option.label.toLowerCase().trim().includes(queryInput.value.trim()),
      );
    }

    return commandOptions;
  });

  function createLink() {
    toggleNewLinkModal();
  }

  return {
    queryInput,
    filteredCommandOptions,
  };
};
