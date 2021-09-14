import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { InfoProps } from './types';
import * as S from './styles';

export function Info({ info }: InfoProps) {
  const text = useTypewriter({
    loop: 0,
    words: info,
    delaySpeed: 2000,
  });

  return (
    <S.InfoContainer>
      <S.InfoText>
        {text}<Cursor />
      </S.InfoText>
    </S.InfoContainer>
  );
};
