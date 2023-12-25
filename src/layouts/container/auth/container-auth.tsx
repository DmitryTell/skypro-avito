import { FC, ReactNode } from 'react';

import * as Styled from './container-auth.styled';


interface IContainerAuth {
  children: ReactNode;
}

export const ContainerAuth: FC<IContainerAuth> = ({ children }) => (
  <Styled.Container>
    { children }
  </Styled.Container>
);
