import { ChangeEvent, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { useLocalStorage } from '../../hooks';
import { numberFormat, Payment, size } from '../../utils';

import { BagItem } from './types';
import * as S from './styles';
import { Order as OrderType } from '../perfil/types';

const WHATSAPP_NUMBER = '5562985171320';

const PaymentType: { [key: string]: string } = {
  'CREDIT': Payment.CREDIT,
  'DEBIT': Payment.DEBIT,
  'CASH': Payment.CASH,
  'PIX': Payment.PIX,
};

export function Order() {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false);

  const [change] = useLocalStorage('change', '');
  const [bag, setBag] = useLocalStorage<BagItem[]>('bag', []);
  const [payment, setPayment] = useLocalStorage<string>('payment', 'CREDIT');
  const [addressStoraged, setAddressStoraged] = useLocalStorage<string>('address');

  const clearBag = () => {
    setBag(() => {
      setRedirect(true);

      return [];
    });
  };

  const toWhatsapp = ({ bagItems, address, payment, change }: OrderType): string => (
    `
      ${bagItems?.map(({ name, itemTotalPrice, psText, itemQuantity }) => (
        `%0a${itemQuantity} ${name} ${itemTotalPrice} ${psText ? `%0a${psText}`: ''}`
      )).join(' ')}
      %0a-----------------------------
      %0aEndereço de entrega:%0a${address}
      %0a-----------------------------
      %0aMétodo de pagamento:%0a${payment}
      ${(change || 0) > 0 && payment === 'em dinheiro'
        ? `%0a-----------------------------%0aTroco para ${numberFormat.toMoney(change)}`
        : ''}
    `
  );

  const continueOrder = () => {
    const order: OrderType = {
      bagItems: bag,
      address: addressStoraged,
      payment: PaymentType[payment || 'CREDIT'],
      change: Number(change),
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}/?text=${toWhatsapp(order)}`);
    clearBag();
  }

  const handleSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setPayment(target.value);
  };

  useEffect(() => {
    redirect && history.push('/');
  }, [redirect, history]);

  if (size(bag) <= 0) return <Redirect to="/" />;

  return (
    <S.OrderContainer>
      <Header
        clearBag={clearBag}
      />
      <Main
        bag={bag}
        payment={payment}
        handleSelectChange={handleSelectChange}
        addressStoraged={addressStoraged}
        setAddressStoraged={setAddressStoraged}
       />
      <Footer
        bag={bag}
        addressStoraged={addressStoraged}
        continueOrder={continueOrder}
      />
    </S.OrderContainer>
  );
}
