import { FC } from 'react';

import { ReactComponent as LogoMobile } from '@assets/icon/LogoMobile.svg';

import { Search } from '../ui';
import * as Styled from './header-mobile.styled';


interface IHeaderMobile {
  currentLocation: string;
}

export const HeaderMobile: FC<IHeaderMobile> = ({ currentLocation }) => (
  <Styled.HeaderMobile>
    <LogoMobile />
    { currentLocation === '/' && <Search placeholder="Поиск" type="text" onChange={ (e) => console.log(e.target.value) } /> }
  </Styled.HeaderMobile>
);
