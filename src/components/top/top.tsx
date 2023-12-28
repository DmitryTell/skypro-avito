import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '@assets/icon/Logo.svg';
import { Button } from '@shared/';

import * as Styled from './top.styled';


interface ITop {
  currentLocation: string;
  children?: ReactNode;
}

export const Top: FC<ITop> = ({ currentLocation, children }) => {
  const navigate = useNavigate();

  return (
    <Styled.Top>
      <Styled.TopLogo>
        <Logo />
      </Styled.TopLogo>
      { currentLocation === '/' ? children : (
        <Styled.TopButtonBox>
          <Button text="Вернуться на главную" type="button" onClick={ () => navigate('/', { replace: true }) } />
        </Styled.TopButtonBox>
      ) }
    </Styled.Top>
  );
};
