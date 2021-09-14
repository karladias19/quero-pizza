import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #fff;
  margin: -1rem;
  padding: 1rem;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;

  border-top: thin solid ${({ theme }) => theme.colors.gray_2};

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    border: none;
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 24px;
    flex: 1;
    
    p {
      text-align: center;
      width: 100%;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray_2};
    }
  }
`;
