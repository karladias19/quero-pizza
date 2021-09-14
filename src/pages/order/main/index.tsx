import { useState } from 'react';
import { useHistory } from 'react-router';

import { AddressModal } from '~pages/perfil/address-modal';
import { extratFromBag } from '~utils';

import { MainProps } from './types';
import * as S from './styles';
import { useLocalStorage } from '../../../hooks';

export function Main({ bag, payment, handleSelectChange, addressStoraged, setAddressStoraged }: MainProps) {
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [change, setChange] = useLocalStorage('change', '0');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <S.Section>
      <S.AddressContent>
        <h4>Entregar em:</h4>
        {addressStoraged ? (
          <S.WithAddress>
            <p>{addressStoraged}</p>
            <button onClick={openModal}>
              <p>Se quiser mudar😎, é só clicar aqui😉</p>
            </button>
          </S.WithAddress>
        ) : (
          <S.WithoutAddress>
            <p>Ainda não tenho um endereço válido🤔</p>
            <button onClick={openModal}>
              <p>Para Adicionar um😎, é só clicar aqui😉</p>
            </button>
          </S.WithoutAddress>
        )}
        <AddressModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          setAddressStoraged={setAddressStoraged}
        />
      </S.AddressContent>

      <S.PaymentContent>
        <h4>Forma de pagamento:</h4>
        <select name="payment" value={payment} onChange={handleSelectChange}>
          <option value="CREDIT">cartão de crédito</option>
          <option value="DEBIT">cartão de débito</option>
          <option value="CASH">em dinheiro</option>
          <option value="PIX">via pix</option>
        </select>
        {payment === 'CASH' && (
          <S.Change>
            <p>Troco para:</p>
            <input type="number" value={change} onChange={(event) => setChange(event.target.value)}/>
          </S.Change>
        )}

        {payment === 'PIX' && (
          <p>Pix para pagamento: 6298765432</p>
        )}
      </S.PaymentContent>

      <S.ButtonContent>
        <button onClick={() => history.push('/')}>
          <p>Adicionar mais itens</p>
        </button>
      </S.ButtonContent>

      <S.SumaryContent>
        <h4>Resumo dos valores:</h4>
        <table>
          <thead>
            <tr>
              <th>Qtd</th>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {bag?.map(({ itemQuantity, name, itemTotalPrice }, index) => (
              <tr key={`${index}-${name}`}>
                <td>{itemQuantity}</td>
                <td>{name}</td>
                <td>{itemTotalPrice}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>{extratFromBag.totalPrice(bag)}</td>
            </tr>
          </tfoot>
        </table>
      </S.SumaryContent>
    </S.Section>
  );
}
