import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray_4};
    min-height: 100vh;
  }

  body, div, main, section, article, header, footer, button {
    display: flex;
    flex-direction: column;
  }

  input[type=number]:-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
    
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:focus-visible, textarea:focus-visible {
    outline: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;

    &.active {
      box-shadow: -2px 4px 8px #0008 inset;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }

  a, button {
    transition: all 0.3s;

    &:active {
      opacity: 0.975;
      transform: scale(0.975);
    }
  }

  * + svg {
    margin-inline-start: 0.5rem;  
  }

  .ReactModalPortal {
    z-index: 9999;
  }
`;
