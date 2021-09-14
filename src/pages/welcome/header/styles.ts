
import styled from 'styled-components';

import { StyledProps } from './types';

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.textOnPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;

  p {
    font-weight: bold;
    font-size: 1.125rem;
    white-space: nowrap; 
    max-width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RowContent = styled.div<StyledProps>`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'initial'};
  align-items: center;
  
  &:first-child {
    margin-block-end: 2rem;
  }
  
  & > svg {
    cursor: ${({ cursor }) => cursor ?? 'initial'};
  }

  h2 > svg {
    transform: rotate(-45deg) translateY(-4px);
  }
`;

export const Form = styled.form<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'initial'};
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  margin-block-start: 0.5rem;
  border-radius: 24px;
  padding: 0.5rem 0.75rem;
  border-width: 0 0 1px 0;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.textOnPrimary};
  background-color: #fff1;
  
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.textOnPrimary};
    background-color: #fff3;
  }
`;
