import { InfoProps } from './types';
import * as S from './styles';

export function Info({ name, description, price }: InfoProps) {

  return (
    <S.TextContainer>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </S.TextContainer>
  );
}
