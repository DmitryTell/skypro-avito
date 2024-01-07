import { FC } from 'react';

import { ReactComponent as LogoMobile } from '@assets/icon/LogoMobile.svg';
import { useAppSelector, useAppDispatch } from '@hook/';
import {
  setSearchText, setAllAds, getStateAds, getStateUser
} from '@redux/';
import { searchAd } from '@utils/';

import { Search, ExitButton } from '../ui';
import * as Styled from './header-mobile.styled';


interface IHeaderMobile {
  currentLocation: string;
}

export const HeaderMobile: FC<IHeaderMobile> = ({ currentLocation }) => {
  const dispatch = useAppDispatch();

  const { allAds, searchText } = useAppSelector(getStateAds);
  const { isAuth } = useAppSelector(getStateUser);

  const handleSearchAd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchText?.length > 0) {
        dispatch(setAllAds({ ads: searchAd(allAds, searchText) }));
      }
    }
  };

  return (
    <Styled.HeaderMobile>
      <LogoMobile />
      { currentLocation === '/'
      && (
        <Search
          placeholder="Поиск"
          type="text"
          onChange={ (e) => dispatch(setSearchText({ searchText: e.target.value })) }
          onKeyDown={ handleSearchAd }
        />
      ) }
      { isAuth && <ExitButton /> }
    </Styled.HeaderMobile>
  );
};
