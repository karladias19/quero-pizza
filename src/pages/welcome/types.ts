type Item = {
  id?: number;
  name: string;
  description: string;
  thumb: string;
  img: string;
  price: number;
};

type Menu = {
  id?: number;
  href: string;
  name: string;
  items: Item[];
};

export type { Item, Menu };
