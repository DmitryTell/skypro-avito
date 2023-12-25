import { FC, HTMLProps } from 'react';

import * as Styled from './button.styled';


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type: 'button';
  text: string;
  onClick: React.MouseEventHandler;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  type, text, onClick, disabled
}) => (
  <Styled.Button disabled={ disabled } type={ type } onClick={ onClick }>{ text }</Styled.Button>
);
