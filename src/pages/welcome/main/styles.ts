
import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
`;

export const Section = styled.section`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_2};
  }
  
  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_2};
  }
  
  h2 {
    margin-block-start: 0.25rem;
    margin-block-end: 0.5rem;
    padding-block-start: 0.5rem;
    padding-block-end: 0.75rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_2};
  }
`;

export const Item = styled.article`
  margin-block-end: 0.5rem;
  padding-block-end: 0.5rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_1};
  }
`;

export const ItemContent = styled.div`
  flex-direction: row;
`;

export const TextWrapper = styled.div`
  flex: 1;

  h3 {
    margin-block-end: 0.5rem;
  }
`;

export const ImageWrapper = styled.div`
margin-inline-start: 0.5rem;
  width: 96px;
  height: 96px;
`;

export const Price = styled.p`
  font-weight: 600;
  margin-block-start: 0.5rem;
`;
