import { Menu, Item } from '../types';

type MainProps = {
  menu: Menu[];
  scrollViewRef?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
};

export type { MainProps, Item };
