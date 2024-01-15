import { useState } from 'react';

import { ContainerAuth } from '@layouts/';
import {
  HeaderMobile, FormAuth, Footer, Backdrop
} from '@components/';
import { Input, Button, LoadingButton } from '@shared/';
import { registerUser } from '@api/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getStateAds, setIsOpenedSuccessRegister } from '@redux/';

import { SuccessRegister } from './success-register/success-register';
import * as Styled from './sign-up.styled';


export const SignUp = () => {
  const dispatch = useAppDispatch();

  const { isOpenedSuccessRegister } = useAppSelector(getStateAds);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const emailReg = /^[a-z0-9\S]+\.?@[a-z0-9\S]+\.[a-z\S]+$/gi;
  const phoneReg = /^\+[0-9\s]+$/gi;

  const handleRegister = async () => {
    if (!email) {
      setErrorText('введите ваш email');
      return;
    }

    if (!emailReg.test(email)) {
      setErrorText('некорректный формат email');
      return;
    }

    if (!password) {
      setErrorText('придумайте пароль');
      return;
    }

    if (password.length < 8) {
      setErrorText('слишком короткий пароль');
      return;
    }

    if (!confirmPassword) {
      setErrorText('подтвердите пароль');
      return;
    }

    if (password !== confirmPassword) {
      setErrorText('пароли не совпадают');
      return;
    }

    if (!phone) {
      setErrorText('введите ваш номер телефона');
      return;
    }

    if (!phoneReg.test(phone)) {
      setErrorText('некорректный формат номера телефона (формат: +7...)');
      return;
    }

    setIsWaiting(true);
    setErrorText('');

    try {
      await registerUser(email, password, phone, name, surname, city);

      setIsWaiting(false);
      setErrorText('');

      dispatch(setIsOpenedSuccessRegister({ isOpenedSuccessRegister: true }));
    } catch (error) {
      if (error instanceof Error) {
        setIsWaiting(false);
        setErrorText(error.message);
      }
    }
  };

  return (
    <ContainerAuth>
      <HeaderMobile currentLocation="/register" />
      <FormAuth>
        <Styled.Inputs>
          <Input placeholder="Email" type="email" onChange={ (e) => setEmail(e.target.value) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
          <Input placeholder="Повторите пароль" type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
          <Input placeholder="Телефон" type="tel" onChange={ (e) => setPhone(e.target.value) } />
          <Input placeholder="Имя (необязательно)" type="text" onChange={ (e) => setName(e.target.value) } />
          <Input placeholder="Фамилия (необязательно)" type="text" onChange={ (e) => setSurname(e.target.value) } />
          <Input placeholder="Город (необязательно)" type="text" onChange={ (e) => setCity(e.target.value) } />
        </Styled.Inputs>
        <Styled.ErrorBox>
          { Boolean(errorText) && <Styled.ErrorText>Ошибка: { errorText }</Styled.ErrorText> }
        </Styled.ErrorBox>
        <Styled.Buttons>
          <Styled.ButtonBox>
            { isWaiting
              ? <LoadingButton />
              : <Button text="Зарегистрироваться" type="button" onClick={ handleRegister } /> }
          </Styled.ButtonBox>
        </Styled.Buttons>
      </FormAuth>
      <Footer />
      { isOpenedSuccessRegister && (
        <>
          <Backdrop />
          <SuccessRegister />
        </>
      ) }
    </ContainerAuth>
  );
};
