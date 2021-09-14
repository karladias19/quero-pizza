import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import { HeaderProps } from './types';
import * as S from './styles';

export function Header({ img }: HeaderProps) {
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
    <S.ImgContainer>
      <S.IconContainer offsetOpacity={offset / 150 > 1 ? 1 : offset / 150} />
      <FaChevronLeft onClick={() => history.goBack()} size={32} />
      <S.ImgContent url={img} offsetOpacity={1 - offset / 300 < 0 ? 0 : 1 - offset / 300} />
    </S.ImgContainer>
  );
}
