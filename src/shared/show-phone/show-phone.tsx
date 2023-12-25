import { FC, HTMLProps } from 'react';

import * as Styled from './show-phone.styled';


interface IShowPhoneButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  text: string;
  phone: string;
  onClick: React.MouseEventHandler;
}

export const ShowPhoneButton: FC<IShowPhoneButton> = ({
  type, text, phone, onClick
}) => (
  <Styled.ShowPhone type={ type } onClick={ onClick }>
    <Styled.ShowPhoneText>{ text }</Styled.ShowPhoneText>
    <Styled.ShowPhoneNumber>{ phone }</Styled.ShowPhoneNumber>
  </Styled.ShowPhone>
);
