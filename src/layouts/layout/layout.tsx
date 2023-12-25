import { Outlet, useLocation } from 'react-router-dom';

import { Header, HeaderMobile } from '@components/';

import * as Styled from './layout.styled';


export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Styled.Wrapper>
      <Header currentLocation={ pathname } />
      <HeaderMobile currentLocation={ pathname } />
      <Outlet />
    </Styled.Wrapper>
  );
};
