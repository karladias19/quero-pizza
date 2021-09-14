import { Dispatch, SetStateAction } from 'react';

type AddressModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  setAddressStoraged: Dispatch<SetStateAction<string | undefined>>
};

type AddressStyledModalProps = {
  isValidAddress?: boolean;
};

export type { AddressModalProps, AddressStyledModalProps};
