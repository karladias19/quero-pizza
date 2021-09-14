import styled from 'styled-components';

export const BagContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

export const BagButton = styled.button`
  width: 100vw;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  flex-direction: row;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textOnPrimary};
  background-color: ${({ theme }) => theme.colors.primary};

  p {
    position: relative;

    span {
      position: absolute;
      top: 0.4rem;
      right: 0.15rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
