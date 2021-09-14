import { BagItem } from '~types';

export const keyMaker = (key: string) => `qU&r0-þiZz@:${key}`; 

export const size = (target?: string | any[]) => target?.length ?? 0;

export const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

export const pluralize = (quantity: number, singularWord: string, pluralWord: string) => {
  return quantity === 1 ? singularWord : pluralWord;
};

export const validateAddress = (value: string) => {
  if (value.length < 10) return false;
  if ((value.match(/ /g) ?? []).length < 4) return false;
  if ((value.match(/\d/g) ?? []).length < 1) return false;
  if ((value.match(/qd?|lt?|nº?|(av)|(rua)|(km)/gi) ?? []).length < 1) return false

  return true;
};

export const extratFromBag = {
  totalQuantity(bag?: BagItem[]): number | string {
    const quantity = bag?.reduce((item, { itemQuantity }) => item + itemQuantity, 0) ?? 0;

    return quantity <= 9 ? `0${quantity}` : '9+';
  },
  totalPrice(bag?: BagItem[]) {
    return numberFormat.toMoney(
      bag?.reduce((price, { itemTotalPrice }) => price + numberFormat.fromMoney(itemTotalPrice), 0)
    );
  },
};

export const numberFormat = {
  toMoney(value?: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value ?? 0);
  },
  fromMoney(value: string) {
    return Number(value.replace(/\D/g, '')) / 100
  },
  toDate(value?: string) {
    return '';
  },
};

export enum Payment {
  CREDIT = 'cartão de crédito',
  DEBIT = 'cartão de débito',
  CASH = 'em dinheiro',
  PIX = 'via pix',
};
