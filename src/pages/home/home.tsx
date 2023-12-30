import { useState, useEffect } from 'react';

import { Container } from '@layouts/';
import { Top, AdvList, Footer } from '@components/';
import { Button } from '@shared/';
import { useGetAllAdsQuery } from '@redux/';
import { IAd } from '@interface/';

import { SearchInput } from './ui';
import * as Styled from './home.styled';


export const Home = () => {
  const { data, isLoading, error } = useGetAllAdsQuery(0);

  const [ads, setAds] = useState<IAd[]>([]);

  useEffect(() => {
    if (data) {
      const result = Object.values(data);

      setAds(result);
    }
  }, [data]);

  return (
    <Container>
      <Top currentLocation="/">
        <Styled.TopBox>
          <SearchInput placeholder="Поиск по объявлениям" onChange={ (e) => console.log(`Search: ${e.target.value}`) } />
          <Styled.ButtonBox>
            <Button text="Найти" type="button" onClick={ () => console.log('Click') } />
          </Styled.ButtonBox>
        </Styled.TopBox>
      </Top>
      <Styled.Main>
        <Styled.MainTitle>Объявления</Styled.MainTitle>
        <AdvList isLoading={ isLoading } items={ ads } />
      </Styled.Main>
      <Footer />
    </Container>
  );
};
