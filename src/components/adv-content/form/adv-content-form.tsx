import { FC, ReactNode } from 'react';

import { ShowPhoneButton } from '@shared/';

import * as Styled from './adv-content-form.styled';


interface IAdvContentForm {
  name: string;
  city: string;
  date: string;
  price: string;
  seller: {
    id: number;
    name: string;
    img: string;
    date: string;
  };
  reviews: {
    author: string;
    text: string;
  }[];
  children: ReactNode;
}

export const AdvContentForm: FC<IAdvContentForm> = ({
  name, city, date, price, seller, reviews, children
}) => (
  <Styled.Form>
    <Styled.FormTitlebox>
      <Styled.FormTitle>{ name }</Styled.FormTitle>
      <Styled.FormTextBox>
        <Styled.FormText>{ date }</Styled.FormText>
        <Styled.FormText>{ city }</Styled.FormText>
        <Styled.FormLink>{ reviews?.length } отзывов</Styled.FormLink>
      </Styled.FormTextBox>
    </Styled.FormTitlebox>
    <Styled.FormPricePhoneBox>
      <Styled.FormPrice>{ price }</Styled.FormPrice>
      { children }
    </Styled.FormPricePhoneBox>
    <Styled.FormUserBox>
      <Styled.FormUserAva>
        { Boolean(seller.img) && <img alt="User ava" src={ seller.img } /> }
      </Styled.FormUserAva>
      <Styled.FormUserName>
        <Styled.FormUserLink>{ seller.name }</Styled.FormUserLink>
        <Styled.FormUserText>Продает товары с { seller.date }</Styled.FormUserText>
      </Styled.FormUserName>
    </Styled.FormUserBox>
  </Styled.Form>
);
