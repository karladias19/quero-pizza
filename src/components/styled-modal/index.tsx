import { StyledModalProps } from './types';
import * as S from './styles';

export function StyledModal({ children, ...props }: StyledModalProps) {
  return (
    <S.ReactStyledModal {...props}>
      {children}
    </S.ReactStyledModal>
  );
}
