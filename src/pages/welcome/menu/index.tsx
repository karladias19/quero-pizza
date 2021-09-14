import { MenuProps } from './types';
import * as S from './styles';

export function Menu({ observerViewRef, menu }: MenuProps) {
  return (
    <S.Menu ref={observerViewRef}>
      {menu.map(({ id, href, name }) => (
        <a key={`${id}`} href={`#${href}`}>{name}</a>)
      )}
    </S.Menu>
  );
};
