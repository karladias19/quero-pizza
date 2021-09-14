import { ThemeProvider } from 'styled-components';

import { ProviderProps } from './types';
import { theme } from '~styles/themes';


export function StyledComponentsProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
