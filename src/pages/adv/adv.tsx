import { Container } from '@layouts/';
import {
  PictureBox, PictureBoxMobile, Top, AdvContentForm, AdvDescription, Footer
} from '@components/';
import { Button, ShowPhoneButton } from '@shared/';

import * as Styled from './adv.styled';


const mockCurrentUserId = 0;
const MockSeller = {
  id: 0,
  name: 'Johnny',
  img: '',
  date: 'ноября 2015'
};
const MockRewiews = [
  {
    author: 'Vasya',
    text: 'Ниочем. В жопу пролазит на раз два'
  }
];


export const Adv = () => (
  <Container>
    <PictureBoxMobile images={ [] } />
    <Top currentLocation="/adv" />
    <Styled.Main>
      <Styled.MainContent>
        <PictureBox images={ [] } />
        <AdvContentForm
          city="Ryazan"
          date="вчера в 21:00"
          name="Самотык Johnny Fucker"
          price="5000"
          reviews={ MockRewiews }
          seller={ MockSeller }
        >
          { mockCurrentUserId !== MockSeller.id ? (
            <Styled.MainPhoneButtonBox>
              <ShowPhoneButton phone="8 905 ХХХ ХХ ХХ" type="button" onClick={ () => console.log('Click show phone') } />
            </Styled.MainPhoneButtonBox>
          ) : (
            <Styled.MainButtons>
              <Styled.MainEditButtonBox>
                <Button text="Редактировать" type="button" onClick={ () => console.log('Click to edit-button') } />
              </Styled.MainEditButtonBox>
              <Styled.MainRemoveButtonBox>
                <Button text="Снять с публикации" type="button" onClick={ () => console.log('Click to remove-button') } />
              </Styled.MainRemoveButtonBox>
            </Styled.MainButtons>
          ) }
        </AdvContentForm>
      </Styled.MainContent>
      <AdvDescription description="Разорвет вашу жопу на британский флаг" />
    </Styled.Main>
    <Footer />
  </Container>
);
