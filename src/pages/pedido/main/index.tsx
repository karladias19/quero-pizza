import { MainProps } from './types';
import * as S from './styles';

export function Main({ psText, setPsText }: MainProps) {
  return (
    <>
      <S.PsTextContainer>
        <h3>Alguma observação?</h3>
        <span>😊</span>
      </S.PsTextContainer>
      <textarea
        defaultValue={psText}
        onChange={({ currentTarget: { value } }) => setPsText(value)}
        placeholder="Ex: Tirar a cebola, maionese à parte, molho mais ou menos picante etc"
      />
    </>
  );
}
