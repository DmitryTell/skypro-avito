import { FC, HTMLProps } from 'react';

import * as Styled from './header-button.styled';


interface IHeaderButton extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  text: string;
  onClick: React.MouseEventHandler;
}

export const HeaderButton: FC<IHeaderButton> = ({ type, text, onClick }) => (
  <Styled.HeaderButton type={ type } onClick={ onClick }>{ text }</Styled.HeaderButton>
);
