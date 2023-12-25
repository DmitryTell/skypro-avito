import { FC, HTMLProps } from 'react';

import * as Styled from './back-button.styled';


interface IBackButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  onClick: React.MouseEventHandler;
}

export const BackButton: FC<IBackButton> = ({ type, onClick }) => (
  <Styled.BackButton type={ type } onClick={ onClick }>
    <svg fill="none" height="21" viewBox="0 0 12 21" width="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1.5L2 10.5L11 19.5" stroke="black" strokeWidth="2" />
    </svg>
  </Styled.BackButton>
);
