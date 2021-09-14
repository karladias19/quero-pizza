import { Menu } from '../types';

type MenuProps = {
  menu: Menu[];
  observerViewRef?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
};

export type { MenuProps };
