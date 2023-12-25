import { FC } from 'react';

import * as Styled from './picture-box.styled';


interface IPictureBox {
  images: string[];
}

export const PictureBox: FC<IPictureBox> = ({ images }) => (
  <Styled.Box>
    <Styled.BoxMainPicture>
      { Boolean(images?.length) && <img alt="Adv" src={ images[0] } /> }
    </Styled.BoxMainPicture>
    <Styled.BoxPictures>
      { images.map((img, index) => (
        <Styled.BoxPicture key={ String(index + 1) }>
          { Boolean(img) && <img alt="Adv" src={ img } /> }
        </Styled.BoxPicture>
      )) }
    </Styled.BoxPictures>
  </Styled.Box>
);
