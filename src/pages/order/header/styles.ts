import styled from 'styled-components';

import { StyledProps } from './types';

export const HeaderContainer = styled.header`
  position: relative;
  margin: -1rem 0 0 -1rem;
  height: 10vh;

  h2 {
    position: fixed;
    top: 22px;
    left: 50%;
    transform: translate(-50%);
  }

  button {
    position: fixed;
    top: 1.75rem;
    right: 1rem;
    border: none;
    background-color: transparent;
  }

  svg {
    position: fixed;
    top: 1.3rem;
    left: 0.5rem;
    cursor: pointer;
    filter: drop-shadow(0 1px 2px #fffa);
    
    &:active {
      color: ${({ theme }) => theme.colors.secondary};
      filter: drop-shadow(1px 2px 3px #fff);
    }
  }
`;

export const IconContainer = styled.div.attrs<StyledProps>(({ offsetOpacity }) => ({
  style: {
    opacity: offsetOpacity,
  },
}))<StyledProps>`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};

  h2 {
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }
  
  button {
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }

  svg {
    color: ${({ theme }) => theme.colors.textOnPrimary};
    filter: drop-shadow(0 1px 2px #000a);
  }
`;
