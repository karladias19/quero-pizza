import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { HeaderProps } from './types';
import * as S from './styles';

export function Header({ clearBag }: HeaderProps) {
  const history = useHistory();

  const [offset, setOffset] = useState(0);

  const handleOffset = () => setOffset(window.pageYOffset);

  useEffect(() => {    
    window.addEventListener('scroll', handleOffset);

    return () => {
      window.removeEventListener('scroll', handleOffset);
    };
  }, [offset]);

  return (
    <S.HeaderContainer>
      <h2>Sacola</h2>
      <button onClick={clearBag}>Limpar</button>
      <FaChevronLeft onClick={() => history.goBack()} size={32} />
      <S.IconContainer offsetOpacity={offset / 75 > 1 ? 1 : offset / 75 }>
        <h2>Sacola</h2>
        <button onClick={clearBag}>Limpar</button>
        <FaChevronLeft onClick={() => history.goBack()} size={32} />
      </S.IconContainer>
    </S.HeaderContainer>
  );
}
