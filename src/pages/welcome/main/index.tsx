import { useHistory } from 'react-router-dom';

import { numberFormat } from '~utils';
import { MainProps, Item } from './types';
import * as S from './styles';

export function Main({ scrollViewRef, menu }: MainProps) {
  const history = useHistory<Item>();

  const handleChoice = (item: Item) => history.push('/pedido', item);

  return (
    <S.Main ref={scrollViewRef}>
      {menu.map(({ id, href, name, items }) => (
        <S.Section key={`${id}`} id={`${href}`}>
          <h2>{name}</h2>
          {items.map(item => (
            <S.Item key={`${item.id}`} onClick={() => handleChoice(item)}>
              <S.ItemContent>
                <S.TextWrapper>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </S.TextWrapper>
                <S.ImageWrapper>
                  <img src={item.thumb} alt={`${item.description}`} />
                </S.ImageWrapper>
              </S.ItemContent>
              <S.Price>
                {numberFormat.toMoney(item.price)}
              </S.Price>
            </S.Item>
          ))}
        </S.Section>
      ))}
    </S.Main>
  );
};
