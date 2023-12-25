import { FC } from 'react';

import { BackButtonMobile } from '../ui';
import * as Styled from './picture-box-mobile.styled';


interface IPictureBoxMobile {
  images: string[];
}

export const PictureBoxMobile: FC<IPictureBoxMobile> = ({ images }) => (
  <Styled.Box>
    <Styled.BoxContainer>
      { Boolean(images?.length) && <img alt="Adv img" src={ images[0] } /> }
      <BackButtonMobile type="button" onClick={ () => console.log('Click back-button') } />
      <Styled.BoxDotes>
        { Boolean(images?.length) && <Styled.BoxDote /> }
      </Styled.BoxDotes>
    </Styled.BoxContainer>
  </Styled.Box>
);
