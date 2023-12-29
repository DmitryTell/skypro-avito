import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoAuth } from '@assets/icon/LogoAuth.svg';

import * as Styled from './form-auth.styled';


interface IFormAuth {
  children: ReactNode;
}

export const FormAuth: FC<IFormAuth> = ({ children }) => (
  <Styled.Form>
    <Styled.FormLogo>
      <Link to="/">
        <LogoAuth />
      </Link>
    </Styled.FormLogo>
    { children }
  </Styled.Form>
);
