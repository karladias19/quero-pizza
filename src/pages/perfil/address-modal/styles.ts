import styled from 'styled-components';

import { StyledModal } from '../../../components';

import { AddressStyledModalProps } from './types';

export const AddressStyledModal = styled(StyledModal)``;

export const Header = styled.header`
  h2 {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    font-size: 4.5vw;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    padding-block: 1rem;
    margin-inline: -1rem;
    margin-block-start: -1rem;
    text-align: center;
    }
`;

export const Section = styled.section`
  margin: 1rem auto 0;
  position: relative;
  flex: 1;
  width: 100%;
`;

export const Form = styled.form`
  margin-block-end: 6.5rem;

  input {
    width: 100%;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  top: 8rem;
  right: 1rem;
  width: fit-content;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray_3};

  ul {
    margin-inline-start: 1.2rem;
  }
`;

export const Footer = styled.footer<AddressStyledModalProps>`
  margin: 1rem auto;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    line-height: 2;
    font-weight: bold;
    border-radius: 24px;
    background-color: transparent;

    &:first-child {
      color: ${({ theme }) => theme.colors.secondary};
      border-color: transparent;
    }

    &:last-child {
      color: ${({ theme, isValidAddress }) => isValidAddress ? theme.colors.primary : theme.colors.gray_2};
      border-color: ${({ theme, isValidAddress }) => isValidAddress ? theme.colors.primary : theme.colors.gray_2};
    }
  }
`;
