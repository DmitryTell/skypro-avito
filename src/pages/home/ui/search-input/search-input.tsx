import { FC, HTMLProps } from 'react';

import * as Styled from './search-input.styled';


interface ISearchInput extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, onChange }) => (
  <Styled.SearchInput placeholder={ placeholder } type="text" onChange={ onChange } />
);
