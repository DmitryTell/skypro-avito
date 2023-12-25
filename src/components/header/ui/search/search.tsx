import { FC, HTMLProps } from 'react';

import * as Styled from './search.styled';


interface ISearch extends HTMLProps<HTMLInputElement> {
  type: 'text';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Search: FC<ISearch> = ({ type, placeholder, onChange }) => (
  <Styled.Search placeholder={ placeholder } type={ type } onChange={ onChange } />
);
