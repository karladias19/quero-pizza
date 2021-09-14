import styled from 'styled-components';

export const TextContainer = styled.div`
  letter-spacing: 1px;

  p {
    &:first-child {
      font-weight: 700;
      font-size: 1.5rem;
      margin-block-start: 1.5rem;
      margin-block-end: 1rem;
    }
    
    &:last-child {
      font-weight: 600;
      margin-block-start: 1rem;
      margin-block-end: 1.5rem;
    }
  }
`;
