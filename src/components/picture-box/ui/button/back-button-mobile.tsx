import { FC, HTMLProps } from 'react';

import * as Styled from './back-button-mobile.styled';


interface IBackButtonMobile extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  onClick: React.MouseEventHandler;
}

export const BackButtonMobile: FC<IBackButtonMobile> = ({ type, onClick }) => (
  <Styled.Button type={ type } onClick={ onClick }>
    <svg fill="none" height="25" viewBox="0 0 14 25" width="14" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L1.5 12.5L13 24" stroke="white" strokeWidth="2" />
    </svg>
  </Styled.Button>
);
