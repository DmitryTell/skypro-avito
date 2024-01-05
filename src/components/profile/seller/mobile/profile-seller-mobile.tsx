import { FC } from 'react';

import { IUser } from '@interface/';
import { ShowPhoneButton } from '@shared/';
import { formatSellsFromDate } from '@utils/';

import * as Styled from './profile-seller-mobile.styled';


interface IProfileSellerMobile {
  seller: IUser;
}

export const ProfileSellerMobile: FC<IProfileSellerMobile> = ({ seller }) => (
  <Styled.SellerMobile>
    <Styled.SellerMobileName>
      { seller?.name }
      <Styled.SellerMobileText>{ seller?.city }</Styled.SellerMobileText>
      <Styled.SellerMobileText>Продает товары с { formatSellsFromDate(seller?.sells_from || '') }</Styled.SellerMobileText>
    </Styled.SellerMobileName>
    <Styled.SellerMobilePicture>
      { Boolean(seller?.avatar) && <img alt="Seller img" src={ `${process.env.REACT_APP_API_URL}${seller.avatar}` } /> }
    </Styled.SellerMobilePicture>
    <Styled.SellerMobilePhoneBox>
      <ShowPhoneButton userPhone={ seller?.phone } />
    </Styled.SellerMobilePhoneBox>
  </Styled.SellerMobile>
);
