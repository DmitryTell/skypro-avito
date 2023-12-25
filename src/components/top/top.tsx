import { FC, ReactNode } from 'react';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';

import * as Styled from './top.styled';


interface ITop {
  children: ReactNode;
}

export const Top: FC<ITop> = ({ children }) => (
  <Styled.Top>
    <Styled.TopLogo>
      <Logo />
    </Styled.TopLogo>
    { children }
  </Styled.Top>
);
