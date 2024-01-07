import { FC, HTMLProps, useState } from 'react';

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
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Styled.Label $isFocused={ isFocused } htmlFor={ forName }>
      { name }<br />
      <Styled.InputPhone
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
