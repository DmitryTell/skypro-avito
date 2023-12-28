import { Container } from '@layouts/';
import {
  Top, ProfileSettings, AdvList, Footer
} from '@components/';
import { Button } from '@shared/';

import { ITEMS } from '../home/mock/items';
import * as Styled from './profile.styled';


// Mock data so far
const user = {
  id: 0,
  email: 'jv@sutulyj.ru',
  name: 'Johnny',
  surname: 'Voychenko',
  city: 'Ryazan',
  phone: '+79002453216',
  img: '',
};

export const Profile = () => (
  <Container>
    <Top>
      <Styled.ButtonBox>
        <Button text="Вернуться на главную" type="button" onClick={ () => console.log('Click back to main') } />
      </Styled.ButtonBox>
    </Top>
    <Styled.Main>
      <Styled.MainTitle>Здравствуйте, { user.name }</Styled.MainTitle>
      <ProfileSettings user={ user } />
      <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
      <AdvList items={ ITEMS } />
    </Styled.Main>
    <Footer />
  </Container>
);
