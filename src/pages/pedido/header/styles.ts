import styled from 'styled-components';

import { StyledProps } from './types';

export const ImgContainer = styled.header`
  position: relative;
  margin: -1rem -1rem 0;

  svg {
    position: fixed;
    z-index: 100;
    top: 1.5rem;
    left: 0.5rem;
    color: #fff;
    cursor: pointer;
    filter: drop-shadow(0 1px 2px #000a);
    
    &:active {
      color: ${({ theme }) => theme.colors.secondary};
      filter: drop-shadow(1px 2px 3px #fff);
    }
  }
`;

export const IconContainer = styled.div.attrs<StyledProps>(({ offsetOpacity }) => ({
  style: {
    opacity: offsetOpacity,
  },
}))<StyledProps>`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ImgContent = styled.div.attrs<StyledProps>(({ offsetOpacity }) => ({
  style: {
    opacity: offsetOpacity,
  },
}))<StyledProps>`
  height: 30vh;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
