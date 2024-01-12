import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '@hook/';
import { getStateAuth, setIsOpenedNewAdv } from '@redux/';

import { HeaderButton, ExitButton } from './ui';
import * as Styled from './header.styled';


interface IHeader {
  currentLocation: string;
}

export const Header: FC<IHeader> = ({ currentLocation }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector(getStateAuth);

  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Styled.HeaderButtons>
          { !isAuth ? (
            <Styled.HeaderButtonBox>
              <HeaderButton text="Вход в личный кабинет" type="button" onClick={ () => navigate('/login', { replace: true }) } />
            </Styled.HeaderButtonBox>
          ) : (
            <>
              <Styled.HeaderButtonBoxNewAdv>
                <HeaderButton
                  text="Разместить объявление"
                  type="button"
                  onClick={ () => dispatch(setIsOpenedNewAdv({ isOpenedNewAdv: true })) }
                />
              </Styled.HeaderButtonBoxNewAdv>
              { currentLocation !== '/profile' && (
                <Styled.HeaderButtonBoxToProfile>
                  <HeaderButton
                    text="Личный кабинет"
                    type="button"
                    onClick={ () => navigate('/profile', { replace: true }) }
                  />
                </Styled.HeaderButtonBoxToProfile>
              ) }
              <ExitButton />
            </>
          ) }
        </Styled.HeaderButtons>
      </Styled.HeaderContainer>
    </Styled.Header>
  );
};
