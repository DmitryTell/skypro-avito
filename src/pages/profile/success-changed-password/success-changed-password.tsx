import { useNavigate } from 'react-router-dom';

import { HeaderMobile, FormAlert, Footer } from '@components/';
import { Button } from '@shared/';
import { useAppDispatch } from '@hook/';
import {
  setIsOpenedSuccessChangedPassword,
  removeAuthData,
} from '@redux/';

import * as Styled from './success-changed-password.styled';


export const SuccessChangedPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(setIsOpenedSuccessChangedPassword({ isOpenedSuccessChangedPassword: false }));
    dispatch(removeAuthData());
    navigate('/login', { replace: true });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="alert-modal" />
        <FormAlert text="Пароль изменен, авторизуйтесь повторно">
          <Button text="OK" type="button" onClick={ handleConfirm } />
        </FormAlert>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
