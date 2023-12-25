import { Outlet } from 'react-router-dom';

import * as Styled from './layout-auth.styled';


export const LayoutAuth = () => (
  <Styled.Wrapper>
    <Outlet />
  </Styled.Wrapper>
);
