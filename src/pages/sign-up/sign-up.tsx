import { useState } from 'react';

import { ContainerAuth } from '@layouts/';
import { HeaderMobile, FormAuth, Footer } from '@components/';
import { Input, Button } from '@shared/';

import * as Styled from './sign-up.styled';


export const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <ContainerAuth>
      <HeaderMobile currentLocation="/register" />
      <FormAuth>
        <Styled.Inputs>
          <Input placeholder="Email" type="email" onChange={ (e) => setEmail(e.target.value) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
          <Input placeholder="Повторите пароль" type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
          <Input placeholder="Имя (необязательно)" type="text" onChange={ (e) => setName(e.target.value) } />
          <Input placeholder="Фамилия (необязательно)" type="text" onChange={ (e) => setSurname(e.target.value) } />
          <Input placeholder="Город (необязательно)" type="text" onChange={ (e) => setCity(e.target.value) } />
        </Styled.Inputs>
        <Styled.ErrorBox>
          { Boolean(error) && <Styled.ErrorText>Ошибка: { error }</Styled.ErrorText> }
        </Styled.ErrorBox>
        <Styled.Buttons>
          <Styled.ButtonBox>
            <Button text="Зарегистрироваться" type="button" onClick={ () => console.log('Click reg') } />
          </Styled.ButtonBox>
        </Styled.Buttons>
      </FormAuth>
      <Footer />
    </ContainerAuth>
  );
};
