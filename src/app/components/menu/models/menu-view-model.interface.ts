import { MenuPage } from './menu.type';

export interface MenuViewModel {
  items: { id: MenuPage; label: string; action: (id: MenuPage) => void }[];
}
