export interface MenuItem {
  id: number;
  label: string;
  icon: string;
  action: () => void;
}
