import { FC } from 'react';

import { ISeller } from '@interface/';
import { ShowPhoneButton } from '@/shared';

import * as Styled from './profile-seller-mobile.styled';


interface IProfileSellerMobile {
  seller: ISeller;
}

export const ProfileSellerMobile: FC<IProfileSellerMobile> = ({ seller }) => (
  <Styled.SellerMobile>
    <Styled.SellerMobileName>
      { seller.name }
      <Styled.SellerMobileText>{ seller.city }</Styled.SellerMobileText>
      <Styled.SellerMobileText>Продает товары с { seller.date }</Styled.SellerMobileText>
    </Styled.SellerMobileName>
    <Styled.SellerMobilePicture>
      { Boolean(seller.img) && <img alt="Seller img" src={ seller.img } /> }
    </Styled.SellerMobilePicture>
    <Styled.SellerMobilePhoneBox>
      <ShowPhoneButton phone={ seller.phone } text="Показать телефон" type="button" onClick={ () => console.log('Click show phone') } />
    </Styled.SellerMobilePhoneBox>
  </Styled.SellerMobile>
);
