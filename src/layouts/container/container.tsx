import { FC, ReactNode } from 'react';

import * as Styled from './container.styled';


interface IContainer {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
  <Styled.Container>
    { children }
  </Styled.Container>
);
