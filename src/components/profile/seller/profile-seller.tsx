import { FC } from 'react';

import { ISeller } from '@interface/';
import { ShowPhoneButton } from '@shared/';

import * as Styled from './profile-seller.styled';


interface IProfileSeller {
  seller: ISeller;
}

export const ProfileSeller: FC<IProfileSeller> = ({ seller }) => (
  <Styled.Seller>
    <Styled.SellerPicture>
      { Boolean(seller.img) && <img alt="Seller img" src={ seller.img } /> }
    </Styled.SellerPicture>
    <Styled.SellerInfo>
      <Styled.SellerName>
        { seller.name }
        <Styled.SellerText>{ seller.city }</Styled.SellerText>
        <Styled.SellerText>Продает товары с { seller.date }</Styled.SellerText>
      </Styled.SellerName>
      <Styled.SellerPhoneBox>
        <ShowPhoneButton phone={ seller.phone } text="Показать телефон" type="button" onClick={ () => console.log('Show phone') } />
      </Styled.SellerPhoneBox>
    </Styled.SellerInfo>
  </Styled.Seller>
);
