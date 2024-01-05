import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  type: 'email' | 'password' | 'tel' | 'text';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInput> = ({ type, placeholder, onChange }) => (
  <Styled.Input placeholder={ placeholder } type={ type } onChange={ onChange } />
);
