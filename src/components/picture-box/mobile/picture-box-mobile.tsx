import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IImg } from '@interface/';

import { BackButtonMobile } from '../ui';
import * as Styled from './picture-box-mobile.styled';


interface IPictureBoxMobile {
  images: IImg[];
}

export const PictureBoxMobile: FC<IPictureBoxMobile> = ({ images }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Styled.Box>
      <Styled.BoxContainer>
        { Boolean(images?.length) && <img alt="Adv img" src={ `${process.env.REACT_APP_API_URL}${images[currentIndex].url}` } /> }
        <BackButtonMobile type="button" onClick={ () => navigate('/', { replace: true }) } />
        <Styled.BoxDotes>
          { Boolean(images?.length) && images.map((image, index) => (
            <Styled.BoxDote
              key={ String(image.id) }
              bgColor={ index === currentIndex }
              onClick={ () => setCurrentIndex(index) }
            />
          )) }
        </Styled.BoxDotes>
      </Styled.BoxContainer>
    </Styled.Box>
  );
};
