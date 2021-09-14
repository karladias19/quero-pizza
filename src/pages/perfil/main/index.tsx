import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import perfilLogo from '../../../assets/images/perfil-logo.png';
import { useLocalStorage } from '../../../hooks';
import { AddressModal } from '../../../pages/perfil/address-modal';

import { MainProps } from './types';
import * as S from './styles';

export function Main({ name, lastOrders }: MainProps) {
  // const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [addressStoraged, setAddressStoraged] = useLocalStorage<string>('address');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <S.MainContainer>
      <S.ImageContent>
        <img src={perfilLogo} alt="perfil logo" />
      </S.ImageContent>

      <S.InfoContent>
        <h3>Hey! Este é o seu perfil, aqui guardo algumas informações importante sobre você 👩‍💻💾</h3>
      </S.InfoContent>

      <S.NameContent>
        <h4>É assim como você prefere ser chamado:</h4>
        <p>{name}</p>
      </S.NameContent>  

      <S.AddressContent>
        <h4>Este é o endereço onde enviamos seus pedidos:</h4>
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

      {/* <S.LastOrdersContent>
        <h4>Aqui estão seus últimos 3 pedidos realizados:</h4>
        {lastOrders?.length ? (
          lastOrders.map(lastOrder => lastOrder)
        ) : (
          <S.WithoutLastOrder>
            <p>Você ainda não fez nenhum pedido 😱!!</p>
            <button onClick={() => history.push('/')}>
              <p>Rápido <span>👀</span>... toque aqui ...e peça djá 🤪</p>
            </button>
          </S.WithoutLastOrder>
        )}
      </S.LastOrdersContent> */}
    </S.MainContainer>
  );
}
