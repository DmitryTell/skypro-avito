import { FC, HTMLProps } from 'react';

import * as Styled from './reg-button.styled';


interface IRegButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  onClick: React.MouseEventHandler;
}

export const RegButton: FC<IRegButton> = ({ type, onClick }) => (
  <Styled.Button type={ type } onClick={ onClick }>Зарегистрироваться</Styled.Button>
);
