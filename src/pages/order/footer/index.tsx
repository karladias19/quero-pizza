import { extratFromBag, size } from '../../../utils';

import { FooterProps } from './types';
import * as S from './styles';

export function Footer({ bag, addressStoraged, continueOrder }: FooterProps) {
  return (
      <S.FooterContainer>
      <div>
        <h3>Total</h3>
        <p>{extratFromBag.totalPrice(bag)}</p>
      </div>
      <button disabled={size(addressStoraged) <= 0} onClick={continueOrder}>
        <p>Continuar</p>
      </button>
    </S.FooterContainer>
  );
}
