import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  type: 'text';
  forName: string;
  name: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SettingsInput: FC<IInput> = ({
  type, forName, name, value, onChange
}) => (
  <Styled.Label htmlFor={ forName }>
    { name }<br />
    <Styled.Input name={ forName } type={ type } value={ value } onChange={ onChange } />
  </Styled.Label>
);
