import { BrowserRouter } from 'react-router-dom';

import { ProviderWrapper } from './contexts';
import { Layout } from './layout';
import { GlobalStyle } from './styles';

export function App() {
  return (
    <BrowserRouter>
      <ProviderWrapper>
        <Layout />
        <GlobalStyle />
      </ProviderWrapper>
    </BrowserRouter>
  );
}
