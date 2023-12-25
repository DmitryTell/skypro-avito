import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInputPhone extends HTMLProps<HTMLInputElement> {
  type: 'tel';
  forName: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SettingsInputPhone: FC<IInputPhone> = ({
  type, forName, name, value, onChange
}) => (
  <Styled.Label htmlFor={ forName }>
    { name }<br />
    <Styled.InputPhone name={ forName } type={ type } value={ value } onChange={ onChange } />
  </Styled.Label>
);
