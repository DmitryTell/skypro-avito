import { FC, ReactNode } from 'react';

import { IComment, IUser } from '@interface/';
import { formatSellsFromDate } from '@utils/';
import { useAppDispatch } from '@hook/';
import { setIsOpenedModal } from '@redux/';

import * as Styled from './adv-content-form.styled';


interface IAdvContentForm {
  title: string;
  date: string;
  comments: IComment[];
  price: number;
  user: IUser;
  children: ReactNode;
}

export const AdvContentForm: FC<IAdvContentForm> = ({
  title, date, comments, price, user, children
}) => {
  const dispatch = useAppDispatch();

  const handleClickLink = (event: React.MouseEvent) => {
    event.preventDefault();

    dispatch(setIsOpenedModal({ isOpenedModal: true }));
  };

  return (
    <Styled.Form>
      <Styled.FormTitlebox>
        <Styled.FormTitle>{ title }</Styled.FormTitle>
        <Styled.FormTextBox>
          <Styled.FormText>{ date }</Styled.FormText>
          <Styled.FormText>{ user.city }</Styled.FormText>
          <Styled.FormLink onClick={ handleClickLink }>{ comments?.length } отзывов</Styled.FormLink>
        </Styled.FormTextBox>
      </Styled.FormTitlebox>
      <Styled.FormPricePhoneBox>
        <Styled.FormPrice>{ price } ₽</Styled.FormPrice>
        { children }
      </Styled.FormPricePhoneBox>
      <Styled.FormUserBox>
        <Styled.FormUserAva>
          { Boolean(user.avatar) && <img alt="User ava" src={ `${process.env.REACT_APP_API_URL}${user.avatar}` } /> }
        </Styled.FormUserAva>
        <Styled.FormUserName>
          <Styled.FormUserLink>{ user.name }</Styled.FormUserLink>
          <Styled.FormUserText>Продает товары с { formatSellsFromDate(user.sells_from) }</Styled.FormUserText>
        </Styled.FormUserName>
      </Styled.FormUserBox>
    </Styled.Form>
  );
};
