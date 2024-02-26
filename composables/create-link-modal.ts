export const useCreateLinkModal = () => {
  const isCreateLinkModalOpen = useState('isCreateLinkModalOpen', () => false);
  const toggleCreateLinkModal = useToggle(isCreateLinkModalOpen);

  return {
    isCreateLinkModalOpen,
    toggleCreateLinkModal,
  };
};
