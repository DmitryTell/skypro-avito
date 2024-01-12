import { Outlet, useLocation } from 'react-router-dom';

import { Header, HeaderMobile, Backdrop } from '@components/';
import { useAppSelector } from '@hook/';
import { getStateAds } from '@redux/';

import { NewAdv } from './new-adv';
import * as Styled from './layout.styled';


export const Layout = () => {
  const { pathname } = useLocation();

  const { isOpenedNewAdv } = useAppSelector(getStateAds);

  return (
    <Styled.Wrapper>
      <Header currentLocation={ pathname } />
      <HeaderMobile currentLocation={ pathname } />
      <Outlet />
      { isOpenedNewAdv && (
        <>
          <Backdrop />
          <NewAdv />
        </>
      ) }
    </Styled.Wrapper>
  );
};
