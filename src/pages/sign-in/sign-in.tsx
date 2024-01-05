import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerAuth } from '@layouts/';
import { HeaderMobile, FormAuth, Footer } from '@components/';
import { Input, Button } from '@shared/';
import { useAppDispatch } from '@hook/';
import { setNewToken } from '@redux/';
import { loginUser } from '@api/';

import { RegButton } from './ui';
import * as Styled from './sign-in.styled';


export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorText('заполните поля');
      return;
    }

    setErrorText('');
    setIsWaiting(true);

    try {
      const data = await loginUser(email, password);

      setIsWaiting(false);

      dispatch(setNewToken({
        token: {
          access: data?.access_token,
          refresh: data?.refresh_token,
          isAuth: true,
        }
      }));
      navigate('/', { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        setIsWaiting(false);
        setErrorText(error.message);
      }
    }
  };

  return (
    <ContainerAuth>
      <HeaderMobile currentLocation="/login" />
      <FormAuth>
        <Styled.Inputs>
          <Input placeholder="Email" type="email" onChange={ (e) => setEmail(e.target.value) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
        </Styled.Inputs>
        <Styled.ErrorBox>
          { isWaiting && <Styled.WaitingText>Подождите...</Styled.WaitingText> }
          { Boolean(errorText) && <Styled.ErrorText>Ошибка: { errorText }</Styled.ErrorText> }
        </Styled.ErrorBox>
        <Styled.Buttons>
          <Styled.ButtonBox>
            <Button disabled={ isWaiting } text="Войти" type="button" onClick={ handleLogin } />
          </Styled.ButtonBox>
          <Styled.ButtonBox>
            <RegButton type="button" onClick={ () => navigate('/register', { replace: true }) } />
          </Styled.ButtonBox>
        </Styled.Buttons>
      </FormAuth>
      <Footer />
    </ContainerAuth>
  );
};
