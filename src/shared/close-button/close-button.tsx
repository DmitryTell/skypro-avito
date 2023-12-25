import { FC, HTMLProps } from 'react';

import * as Styled from './close-button.styled';


interface ICloseButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  onClick: React.MouseEventHandler;
}

export const CloseButton: FC<ICloseButton> = ({ type, onClick }) => (
  <Styled.CloseButton type={ type } onClick={ onClick }>
    <svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.8193 10.6066L10.6061 31.8198" stroke="#D9D9D9" strokeWidth="2" />
      <path d="M31.8193 31.8198L10.6061 10.6066" stroke="#D9D9D9" strokeWidth="2" />
    </svg>
  </Styled.CloseButton>
);
