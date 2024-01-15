import { useNavigate } from 'react-router-dom';

import { HeaderMobile, FormAlert, Footer } from '@components/';
import { Button } from '@shared/';
import { useAppDispatch } from '@hook/';
import { setIsOpenedSuccessRegister } from '@redux/';

import * as Styled from './success-register.styled';


export const SuccessRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(setIsOpenedSuccessRegister({ isOpenedSuccessRegister: false }));
    navigate('/login', { replace: true });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="alert-modal" />
        <FormAlert text="Вы успешно зарегистрировались, теперь авторизуйтесь">
          <Button text="OK" type="button" onClick={ handleConfirm } />
        </FormAlert>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
