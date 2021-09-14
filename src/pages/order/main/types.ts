import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { BagItem } from '../../../types';

type MainProps = {
  bag?: BagItem[];
  payment?: string;
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  addressStoraged?: string;
  setAddressStoraged: Dispatch<SetStateAction<string | undefined>>;
}

export type { MainProps };
