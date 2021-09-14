import styled from 'styled-components';

export const PedidoContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 11vh;
  min-height: 100vh;

  textarea {
    resize: none;
    height: 16vh;
    border: thin solid gray;
    border-radius: 24px;
    padding: 0.75rem;
    font-size: 1rem;
    border-color: ${({ theme }) => theme.colors.gray_2};

    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
