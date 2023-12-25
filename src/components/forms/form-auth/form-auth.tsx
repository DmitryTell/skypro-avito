import { FC, ReactNode } from 'react';

import { ReactComponent as LogoAuth } from '@assets/icon/LogoAuth.svg';

import * as Styled from './form-auth.styled';


interface IFormAuth {
  children: ReactNode;
}

export const FormAuth: FC<IFormAuth> = ({ children }) => (
  <Styled.Form>
    <Styled.FormLogo>
      <LogoAuth />
      { children }
    </Styled.FormLogo>
  </Styled.Form>
);
