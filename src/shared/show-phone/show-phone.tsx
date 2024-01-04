import {
  FC, HTMLProps, useState, useEffect
} from 'react';

import * as Styled from './show-phone.styled';


interface IShowPhoneButton extends HTMLProps<HTMLButtonElement> {
  userPhone: string;
}

export const ShowPhoneButton: FC<IShowPhoneButton> = ({ userPhone }) => {
  const [phone, setPhone] = useState<string>('+XXXXXXXXXX');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setPhone(userPhone);
    }
  }, [isVisible, userPhone]);

  return (
    <Styled.ShowPhone type="button" onClick={ () => setIsVisible(true) }>
      <Styled.ShowPhoneText>Показать телефон</Styled.ShowPhoneText>
      <Styled.ShowPhoneNumber>{ phone }</Styled.ShowPhoneNumber>
    </Styled.ShowPhone>
  );
};
