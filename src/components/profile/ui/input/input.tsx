import { FC, HTMLProps, useState } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  type: 'email' | 'text';
  forName: string;
  name: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SettingsInput: FC<IInput> = ({
  type, forName, name, value, onChange
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Styled.Label $isFocused={ isFocused } htmlFor={ forName }>
      { name }<br />
      <Styled.Input
        $isFocused={ isFocused }
        name={ forName }
        type={ type }
        value={ value }
        onBlur={ () => setIsFocused(false) }
        onChange={ onChange }
        onFocus={ () => setIsFocused(true) }
      />
    </Styled.Label>
  );
};
