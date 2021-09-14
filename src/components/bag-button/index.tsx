import { useEffect, useRef } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '~hooks';
import { BagItem } from '~types';
import { extratFromBag, size } from '~utils';

import * as S from './styles';

export function BagButton() {
  const history = useHistory();

  const ref = useRef<HTMLDivElement>(null);

  const [bag] = useLocalStorage<BagItem[]>('bag', []);

  useEffect(() => {
    ref.current?.parentElement?.setAttribute('style', 'padding-block-end:2.75rem;');
  }, []);

  if (size(bag) <= 0) return null;

  return (
    <S.BagContainer ref={ref}>
      <S.BagButton onClick={() => history.push('/order')}>
        <p>
          <FaShoppingBag size={20} />
          <span>{extratFromBag.totalQuantity(bag)}</span>
        </p>
        <h3>Ver sacola</h3>
        <p>{extratFromBag.totalPrice(bag)}</p>
      </S.BagButton>
    </S.BagContainer>
  );
}
