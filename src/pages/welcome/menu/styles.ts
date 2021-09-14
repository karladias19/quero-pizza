
import styled from 'styled-components';

export const Menu = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  overflow: auto;
  white-space: nowrap;

  a {
    display: inline-block;
    padding: 0.75rem 1rem;
    box-shadow: 8px -12px 16px #fffa inset;
    border-radius: 24px;
    color: ${({ theme }) => theme.colors.textOnSecondary};
    
    & + a {
      margin-inline-start: 0.25rem;
    }
  }
`;
