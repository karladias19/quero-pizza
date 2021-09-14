import { Payment } from '../../utils';

type Item = {
  id?: number;
  name: string;
  description: string;
  thumb: string;
  img: string;
  price: number;
};

type BagItem = {
  name: string;
  itemTotalPrice: string;
  psText: string;
  itemQuantity: number;
};

type Order = {
  payment: Payment | string;
  address?: string;
  items?: Item[];
  bagItems?: BagItem[];
  change?: number;
};

export type { Order };
