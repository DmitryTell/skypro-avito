import { FC, useState } from 'react';

import { IImg } from '@interface/';

import * as Styled from './picture-box.styled';


interface IPictureBox {
  images: IImg[];
}

export const PictureBox: FC<IPictureBox> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Styled.Box>
      <Styled.BoxMainPicture>
        { Boolean(images?.length) && <img alt="Adv" src={ `${process.env.REACT_APP_API_URL}${images[currentIndex].url}` } /> }
      </Styled.BoxMainPicture>
      <Styled.BoxPictures>
        { images.map((img, index) => (
          <Styled.BoxPicture
            key={ String(index + 1) }
            $hasBorder={ index === currentIndex }
            onClick={ () => setCurrentIndex(index) }
          >
            { Boolean(img?.url) && <img alt="Adv" src={ `${process.env.REACT_APP_API_URL}${img.url}` } /> }
          </Styled.BoxPicture>
        )) }
      </Styled.BoxPictures>
    </Styled.Box>
  );
};
