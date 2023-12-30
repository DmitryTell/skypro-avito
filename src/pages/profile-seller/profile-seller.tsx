import { Container } from '@layouts/';
import {
  Top, TopMobile, ProfileSeller, ProfileSellerMobile, AdvList, Footer
} from '@components/';

import * as Styled from './profile-seller.styled';


// Mock data so far
const seller = {
  id: 5,
  name: 'Vasya Zalupkin',
  email: 'vasya.zalupa@vrotebaka.hui',
  city: 'Huiti',
  sells_from: 'октября 2022',
  phone: '+78008000808',
  avatar: ''
};

export const SellerProfile = () => (
  <Container>
    <Top currentLocation="/profile-seller" />
    <TopMobile title="Профиль продавца" />
    <Styled.Main>
      <Styled.MainTitle>Профиль продавца</Styled.MainTitle>
      <ProfileSeller seller={ seller } />
      <ProfileSellerMobile seller={ seller } />
      <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
      <AdvList isLoading items={ [] } />
    </Styled.Main>
    <Footer />
  </Container>
);
