import styled, { keyframes } from 'styled-components';

const rollEyes = keyframes`
  to { transform: rotateY(180deg); }
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 2rem 1rem;
`;

export const ImageContent = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const InfoContent = styled.div`
  margin: 2rem auto;

  h3 {
    font-size: 6.35vw;
    color: ${({ theme }) => theme.colors.gray_3 };
  }
`;

export const NameContent = styled.div`
  font-size: 1.25rem;

  h4 {
    font-size: 1rem;
    margin-block-end: 0.5rem;
  }
`;

export const AddressContent = styled(NameContent)`
  margin: 2rem 0;
`;

export const WithAddress = styled.div`
  button {
    background-color: transparent;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    padding: 0.25rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-block-start: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

export const WithoutAddress = styled(WithAddress)``;

export const LastOrdersContent = styled(NameContent)``;

export const WithoutLastOrder = styled(WithAddress)`
  span {
    display: inline-block;
    animation: ${rollEyes} .1s 4s backwards, ${rollEyes} .1s 7s forwards;
  }
`;
