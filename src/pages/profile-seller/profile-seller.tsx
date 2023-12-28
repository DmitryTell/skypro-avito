import { Container } from '@layouts/';
import {
  Top, TopMobile, ProfileSeller, ProfileSellerMobile, AdvList, Footer
} from '@components/';
import { Button } from '@shared/';

import * as Styled from './profile-seller.styled';
import { ITEMS } from '../home/mock/items';


// Mock data so far
const seller = {
  name: 'Vasya Zalupkin',
  city: 'Huiti',
  date: 'октября 2022',
  phone: '+78008000808',
  img: ''
};

export const SellerProfile = () => (
  <Container>
    <Top>
      <Styled.ButtonBox>
        <Button text="Вернуться на главную" type="button" onClick={ () => console.log('Click back to main') } />
      </Styled.ButtonBox>
    </Top>
    <TopMobile title="Профиль продавца" />
    <Styled.Main>
      <Styled.MainTitle>Профиль продавца</Styled.MainTitle>
      <ProfileSeller seller={ seller } />
      <ProfileSellerMobile seller={ seller } />
      <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
      <AdvList items={ ITEMS } />
    </Styled.Main>
    <Footer />
  </Container>
);
