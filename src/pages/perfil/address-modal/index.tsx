import { ChangeEvent, FormEvent, useState } from 'react';

import { validateAddress } from '../../../utils';

import * as S from './styles';
import { AddressModalProps } from './types';

export function AddressModal({ isOpen, closeModal, setAddressStoraged }: AddressModalProps) {
  const [address, setAddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);

  const handleValidateAddress = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateAddress(target.value.trim());

    setIsValidAddress(() => {
      if (isValid) setAddress(target.value);

      return isValid;
    });
  };

  const handleAddAddress = (event: FormEvent<EventTarget>) => {
    event.preventDefault();

    setAddressStoraged(() => {
      closeModal();

      return address;
    });
  };

  return (
    <S.AddressStyledModal isOpen={isOpen}>
      <S.Header>
        <h2>Adicione um endereço para entrega</h2>
      </S.Header>
      <S.Section>
        <S.Form onSubmit={handleAddAddress}>
          <input
            autoFocus
            onChange={handleValidateAddress}
            defaultValue=""
            placeholder="Ex.: Av. Ímpares, Q. 1, L. 3, Nº. 5, Setor Sete"
          />
        </S.Form>
        <S.Aside>
          <p>Lembrado que um bom endereço precisa:</p>
          <ul>
            <li>Começar com tipo e nome de Logradouro</li>
            <li>Informar os Complementos (Q/L/Apt/Nº)</li>
            <li>E finalizar com Setor/Bairro e/ou CEP</li>
          </ul>
        </S.Aside>
      </S.Section>
      <S.Footer isValidAddress={isValidAddress}>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={handleAddAddress} disabled={!isValidAddress}>Adicionar</button>
      </S.Footer>
    </S.AddressStyledModal>
  );
}
