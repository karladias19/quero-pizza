import 'styled-components';

type Colors = {
  primary: string;
  secondary: string;

  background: string;

  textOnPrimary: string;
  textOnSecondary: string;
  gray_1: string;
  gray_2: string;
  gray_3: string;
  gray_4: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,  
    colors: Colors,
  };
};
