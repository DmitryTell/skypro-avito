import { FC, HTMLProps } from 'react';

import * as Styled from './search.styled';


interface ISearch extends HTMLProps<HTMLInputElement> {
  type: 'text';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Search: FC<ISearch> = ({
  type, placeholder, onChange, onKeyDown
}) => (
  <Styled.Search placeholder={ placeholder } type={ type } onChange={ onChange } onKeyDown={ onKeyDown } />
);
