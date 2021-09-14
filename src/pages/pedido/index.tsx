import { useEffect, useState } from 'react';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

import { Header } from './header';
import { Info } from './info';
import { Main } from './main';
import { Footer } from './footer';

import { numberFormat } from '~utils';
import { useLocalStorage } from '~hooks';
import { BagItem, Items } from './types';
import * as S from './styles';

export function Pedido() {
  const { state: item } = useLocation<Items>();

  const history = useHistory<BagItem>();

  const [itemTotalPrice, setItemTotalPrice] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [psText, setPsText] = useState<string>('');
  
  const [bagStoraged = [], setBagStoraged] = useLocalStorage<BagItem[]>('bag', []);
  
  const handleQuantity = (action: string) => {
    setItemQuantity((prev) => {
      if (action === '-' && prev >= 1) return prev - 1;
      if (action === '+' && prev >= 1) return prev + 1;
      return prev;
    });
  };

  const handleAddItem = () => {
    setBagStoraged(() => {
      setRedirect(true);

      return [...bagStoraged, {
        name: item?.name,
        itemTotalPrice,
        psText,
        itemQuantity,
      }];
    });
  };

  useEffect(() => {
    redirect && history.push('/');
  }, [redirect, history]);

  useEffect(() => {
    setItemTotalPrice(numberFormat.toMoney(itemQuantity * item?.price));
  }, [itemQuantity, item?.price]);

  return (
    item ? (
      <S.PedidoContainer>
        <Header img={item.img} description={item.description} />

        <Info 
          name={item.name} 
          description={item.description} 
          price={numberFormat.toMoney(item.price)} 
        />

        <Main
          psText={psText}
          setPsText={setPsText}
        />

        <Footer
          handleQuantity={handleQuantity}
          itemQuantity={itemQuantity}
          handleAddItem={handleAddItem}
          itemTotalPrice={itemTotalPrice}
        />
      </S.PedidoContainer>
    ) : (
      <Redirect to="/" />
    )
  );
};
