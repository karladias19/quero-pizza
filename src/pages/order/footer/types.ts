import { BagItem } from '../../../types';

type FooterProps = {
  bag?: BagItem[];
  addressStoraged?: string;
  continueOrder: () => void;
}

export type { FooterProps };
