import { FaMinus, FaPlus } from 'react-icons/fa';

import { FooterProps } from './types';
import * as S from './styles';

export function Footer(footerProps: FooterProps) {
  const { handleQuantity, itemQuantity, handleAddItem, itemTotalPrice } = footerProps;

  return (
    <S.PedidoFooter>
      <S.AddContainer>
        <button onClick={() => handleQuantity('-')} disabled={itemQuantity <= 1}>
          <FaMinus size={16} />
        </button>

        <input value={itemQuantity} type="number" min="1" max="9" readOnly />

        <button onClick={() => handleQuantity('+')} disabled={itemQuantity >= 9}>
          <FaPlus size={16} />
        </button>
      </S.AddContainer>

      <button onClick={handleAddItem}>
        <span>Adicionar</span>
        <span>{itemTotalPrice}</span>
      </button>
    </S.PedidoFooter>
  );
}
