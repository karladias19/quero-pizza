import styled from 'styled-components';
import ReactModal from 'react-modal';

import { StyledModalProps } from './types';

ReactModal.setAppElement('#root');

export const ReactStyledModal = styled(ReactModal)<StyledModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 90vw;
  height: fit-content;
  padding: 1rem;
  box-shadow: 0 0 32px #0004;
`;
