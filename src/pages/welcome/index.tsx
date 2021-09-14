import { useEffect, useState } from 'react';

import { Header } from './header';
import { Menu } from './menu';
import { Main } from './main';
import { Info } from './info';

import { BagButton } from '~components';
import { info, menu } from '~data';
import { useIntersectionObserver } from '~hooks';
import { shuffle } from '~utils';

import * as S from './styles';

export function Welcome() {
  const [words, setWords] = useState<string[]>([' ']);

  const { observerViewRef, scrollViewRef } = useIntersectionObserver();

  useEffect(() => setWords(shuffle(info)), [words]);

  return (
    <S.WelcomeContainer>
      <Header />
      <Info info={words} />
      <Menu observerViewRef={observerViewRef} menu={menu} />
      <Main scrollViewRef={scrollViewRef} menu={menu} />
      <BagButton />
    </S.WelcomeContainer>
  );
}
