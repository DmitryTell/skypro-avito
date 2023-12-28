import { Container } from '@layouts/';
import {
  Top, PictureBox, PictureBoxMobile, AdvContentForm, AdvDescription, Footer
} from '@components/';
import { Button } from '@shared/';

import * as Styled from './adv-user.styled';


const MockSeller = {
  id: 0,
  name: 'Huyator',
  img: '',
  date: 'ноября 2016'
};
const MockRewiews = [
  {
    author: 'Vasya',
    text: 'Пизда моей тупой башке...'
  }
];

export const AdvUser = () => (
  <Container>
    <PictureBoxMobile images={ [] } />
    <Top>
      <Styled.ButtonBox>
        <Button text="Вернуться на главную" type="button" onClick={ () => console.log('Click back to main') } />
      </Styled.ButtonBox>
    </Top>
    <Styled.Main>
      <Styled.MainContent>
        <PictureBox images={ [] } />
        <AdvContentForm
          city="Poebushkino"
          date="вчера в 21:00"
          name="Расхуячиватель голов"
          price="500"
          reviews={ MockRewiews }
          seller={ MockSeller }
        >
          <Styled.MainButtons>
            <Styled.MainEditButtonBox>
              <Button text="Редактировать" type="button" onClick={ () => console.log('Click to edit-button') } />
            </Styled.MainEditButtonBox>
            <Styled.MainRemoveButtonBox>
              <Button text="Снять с публикации" type="button" onClick={ () => console.log('Click to remove-button') } />
            </Styled.MainRemoveButtonBox>
          </Styled.MainButtons>
        </AdvContentForm>
      </Styled.MainContent>
      <AdvDescription description="Пизда вашим тупорылым бошкам" />
    </Styled.Main>
    <Footer />
  </Container>
);
