import { FC } from 'react';

import { IUser } from '@interface/';
import { ShowPhoneButton } from '@shared/';
import { formatSellsFromDate } from '@utils/';

import * as Styled from './profile-seller.styled';


interface IProfileSeller {
  seller: IUser;
}

export const ProfileSeller: FC<IProfileSeller> = ({ seller }) => (
  <Styled.Seller>
    <Styled.SellerPicture>
      { Boolean(seller?.avatar) && <img alt="Seller img" src={ `${process.env.REACT_APP_API_URL}${seller.avatar}` } /> }
    </Styled.SellerPicture>
    <Styled.SellerInfo>
      <Styled.SellerName>
        { seller?.name }
        <Styled.SellerText>{ seller?.city }</Styled.SellerText>
        <Styled.SellerText>Продает товары с { formatSellsFromDate(seller?.sells_from) }</Styled.SellerText>
      </Styled.SellerName>
      <Styled.SellerPhoneBox>
        <ShowPhoneButton userPhone={ seller?.phone } />
      </Styled.SellerPhoneBox>
    </Styled.SellerInfo>
  </Styled.Seller>
);
