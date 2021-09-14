import { StyledComponentsProvider } from './theme';
import { ProviderProps } from './types';

export function ProviderWrapper({ children }: ProviderProps) {
  return (
    <StyledComponentsProvider>
      {children}
    </StyledComponentsProvider>
  );
}
