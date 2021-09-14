import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
`;

export const PedidoFooter = styled.footer`
  position: fixed;
  height: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 2px solid  ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.textOnPrimary};
  flex-direction: row;
  padding: 0.5rem 1rem;
  gap: 1rem;
  animation: ${expand} 0.5s ease-in-out;

  div, button {
    border: thin solid ${({ theme }) => theme.colors.gray_1};
    justify-content: space-evenly;  
    align-items: center;
    flex-direction: row;
    border-radius: 24px;
    font-weight: 700;
  }

  & > button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    font-size: 1.25rem;
    flex: 13;

    &:active {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const AddContainer = styled.div`
  flex: 5;

  button {
    background-color: transparent;
    border: none;

    svg { color: ${({ theme }) => theme.colors.primary}; }
    
    &:active {
      svg { color: ${({ theme }) => theme.colors.secondary}; }
    }

    &:disabled {
      svg { color: ${({ theme }) => theme.colors.gray_1}; }
    }
  }

  input {
    font-size: 1.25rem;
    border: none;
    text-align: center;
    max-width: 2rem;
  }
`;
