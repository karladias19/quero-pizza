type BagItem = {
  name: string;
  itemTotalPrice: string;
  psText: string;
  itemQuantity: number;
};

type Items = {
  id?: number;
  name: string;
  description: string;
  img: string;
  price: number;
};

type BagStyledModalProps = {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export type { BagItem, Items, BagStyledModalProps };
