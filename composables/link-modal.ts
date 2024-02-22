export const useLinkModal = () => {
  const isNewLinkModalOpen = useState('isNewLinkModalOpen', () => false);
  const toggleNewLinkModal = useToggle(isNewLinkModalOpen);

  return {
    isNewLinkModalOpen,
    toggleNewLinkModal,
  };
};
