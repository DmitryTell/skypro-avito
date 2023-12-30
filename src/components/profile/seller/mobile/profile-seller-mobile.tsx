import { FC } from 'react';

import { IUser } from '@interface/';
import { ShowPhoneButton } from '@shared/';

import * as Styled from './profile-seller-mobile.styled';


interface IProfileSellerMobile {
  seller: IUser;
}

export const ProfileSellerMobile: FC<IProfileSellerMobile> = ({ seller }) => (
  <Styled.SellerMobile>
    <Styled.SellerMobileName>
      { seller.name }
      <Styled.SellerMobileText>{ seller.city }</Styled.SellerMobileText>
      <Styled.SellerMobileText>Продает товары с { seller.sells_from }</Styled.SellerMobileText>
    </Styled.SellerMobileName>
    <Styled.SellerMobilePicture>
      { Boolean(seller.avatar) && <img alt="Seller img" src={ seller.avatar } /> }
    </Styled.SellerMobilePicture>
    <Styled.SellerMobilePhoneBox>
      <ShowPhoneButton phone={ seller.phone } type="button" onClick={ () => console.log('Click show phone') } />
    </Styled.SellerMobilePhoneBox>
  </Styled.SellerMobile>
);
