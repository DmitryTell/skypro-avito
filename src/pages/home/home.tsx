import { Container } from '@layouts/';
import { Top, AdvList, Footer } from '@components/';
import { Button } from '@shared/';

import { ITEMS } from './mock/items';
import { SearchInput } from './ui';
import * as Styled from './home.styled';


export const Home = () => (
  <Container>
    <Top>
      <Styled.TopBox>
        <SearchInput placeholder="Поиск по объявлениям" onChange={ (e) => console.log(`Search: ${e.target.value}`) } />
        <Styled.ButtonBox>
          <Button text="Найти" type="button" onClick={ () => console.log('Click search') } />
        </Styled.ButtonBox>
      </Styled.TopBox>
    </Top>
    <Styled.Main>
      <Styled.MainTitle>Объявления</Styled.MainTitle>
      <AdvList items={ ITEMS } />
    </Styled.Main>
    <Footer />
  </Container>
);
