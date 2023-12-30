import { useState, useEffect } from 'react';

import { Container } from '@layouts/';
import { Top, AdvList, Footer } from '@components/';
import { Button } from '@shared/';
import {
  useGetAllAdsQuery, setSearchText, setAllAds, getStateAds
} from '@redux/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { searchAd } from '@utils/';

import { SearchInput } from './ui';
import * as Styled from './home.styled';


export const Home = () => {
  const { data, isLoading, error } = useGetAllAdsQuery(0);

  const dispatch = useAppDispatch();

  const { allAds, searchText } = useAppSelector(getStateAds);
  const [newError, setNewError] = useState<string>('');

  const handleSearchAd = () => {
    if (searchText?.length > 0) {
      dispatch(setAllAds({ ads: searchAd(allAds, searchText) }));
    }
  };

  useEffect(() => {
    if (data) {
      const result = Object.values(data);

      dispatch(setAllAds({ ads: result }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      const result = Object.values(error);

      setNewError(result[1]);
    }
  }, [error]);

  useEffect(() => {
    if (searchText?.length === 0 && data) {
      const result = Object.values(data);

      dispatch(setAllAds({ ads: result }));
    }
  }, [data, dispatch, searchText]);

  return (
    <Container>
      <Top currentLocation="/">
        <Styled.TopBox>
          <SearchInput placeholder="Поиск по объявлениям" onChange={ (e) => dispatch(setSearchText({ searchText: e.target.value })) } />
          <Styled.ButtonBox>
            <Button text="Найти" type="button" onClick={ handleSearchAd } />
          </Styled.ButtonBox>
        </Styled.TopBox>
      </Top>
      <Styled.Main>
        <Styled.MainTitle>Объявления</Styled.MainTitle>
        { error && <Styled.MainErrorText>Ошибка: { newError }</Styled.MainErrorText> }
        { !error && <AdvList isLoading={ isLoading } items={ allAds } /> }
      </Styled.Main>
      <Footer />
    </Container>
  );
};
