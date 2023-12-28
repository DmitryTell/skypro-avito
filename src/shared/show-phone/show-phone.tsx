import { FC, HTMLProps } from 'react';

import * as Styled from './show-phone.styled';


interface IShowPhoneButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  phone: string;
  onClick: React.MouseEventHandler;
}

export const ShowPhoneButton: FC<IShowPhoneButton> = ({
  type, phone, onClick
}) => (
  <Styled.ShowPhone type={ type } onClick={ onClick }>
    <Styled.ShowPhoneText>Показать телефон</Styled.ShowPhoneText>
    <Styled.ShowPhoneNumber>{ phone }</Styled.ShowPhoneNumber>
  </Styled.ShowPhone>
);
