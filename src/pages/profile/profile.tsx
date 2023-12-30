import { Container } from '@layouts/';
import {
  Top, ProfileSettings, AdvList, Footer
} from '@components/';

import * as Styled from './profile.styled';


// Mock data so far
const user = {
  id: 0,
  email: 'jv@sutulyj.ru',
  name: 'Johnny',
  surname: 'Voychenko',
  city: 'Ryazan',
  phone: '+79002453216',
  avatar: '',
  sells_from: '25.05.2020'
};

export const Profile = () => (
  <Container>
    <Top currentLocation="/profile" />
    <Styled.Main>
      <Styled.MainTitle>Здравствуйте, { user.name }</Styled.MainTitle>
      <ProfileSettings user={ user } />
      <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
      <AdvList isLoading items={ [] } />
    </Styled.Main>
    <Footer />
  </Container>
);
