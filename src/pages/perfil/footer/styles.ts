import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-inline: 1rem;

  h4 {
    font-size: 1rem;
    margin-block-end: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    line-height: 2;
    font-weight: bold;
    border-radius: 24px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    border-color: transparent;
  }
`;
