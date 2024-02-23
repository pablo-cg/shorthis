/* @unocss-include */
import type { MenuItem } from '~/types/menu';

export const useLinkCardOptions = ({ slug }: { slug: string }) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Copy',
      icon: 'i-lucide:copy',
      action: () => copySlugLink(slug),
    },
    {
      id: 1,
      label: 'Edit',
      icon: 'i-lucide:edit',
      action() {},
    },
    {
      id: 1,
      label: 'Delete',
      icon: 'i-lucide:trash',
      action() {},
    },
  ];

  const { copy } = useClipboard();

  const location = useBrowserLocation();

  async function copySlugLink(slug: string) {
    await copy(`${location.value.host}/l/${slug}`);
  }

  return {
    copySlugLink,
    menuItems,
  };
};
