import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../../../hooks';
import { pluralize, size } from '../../../utils';

import { WORDS } from './constants';
import { Order } from './types';
import * as S from './styles';

export function Footer() {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false);

  const [, setName] = useLocalStorage<string>('name');
  const [, setPayment] = useLocalStorage<string>('payment');
  const [, setChange] = useLocalStorage<string>('change');
  const [bag, setBag] = useLocalStorage<Order[]>('bag', []);
  const [, setAddress] = useLocalStorage<string>('address');
  const [, setLastOrders] = useLocalStorage<Order[]>('last_orders');

  const makeMessage = () => {
    const confirmMessage = `Tem certeza que deseja apagar suas informações?\n`;
    const itemsMessage = `${size(bag)} ${WORDS.map(([s, p]) => pluralize(size(bag), s, p)).join(' ')}`;

    return `${confirmMessage}${size(bag) ? itemsMessage : ''}`;
  };

  const clearLocalStorage = () => {
    setName(() => {
      setPayment(() => {
        setChange(() => {
          setBag(() => {
            setAddress(() => {
              setLastOrders(() => {
                setRedirect(true);

                return [];
              });
              return '';
            });
            return [];
          });
          return '';
        });
        return '';
      });
      return '';
    });
  };

  const handleClear = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm(makeMessage()) && clearLocalStorage();
  };

  useEffect(() => {
    redirect && history.push('/');
  }, [redirect, history]);

  return (
    <S.FooterContainer>
      <h4>Outras opções:</h4>
      <button onClick={handleClear}>
        <p>Limpar todas as minhas informações ...🥺</p>
      </button>
    </S.FooterContainer>
  );
}
