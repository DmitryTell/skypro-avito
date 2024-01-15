import { FC, ReactNode } from 'react';

import * as Styled from './form-alert.styled';


interface IFormAlert {
  text: string;
  children: ReactNode;
}

export const FormAlert: FC<IFormAlert> = ({ text, children }) => (
  <Styled.Form>
    <Styled.FormText>{ text }</Styled.FormText>
    <Styled.FormButtonBox>
      { children }
    </Styled.FormButtonBox>
  </Styled.Form>
);
