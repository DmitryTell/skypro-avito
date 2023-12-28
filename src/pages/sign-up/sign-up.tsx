import { ContainerAuth } from '@layouts/';
import { HeaderMobile, FormAuth, Footer } from '@components/';
import { Input, Button } from '@shared/';

import * as Styled from './sign-up.styled';


export const SignUp = () => (
  <ContainerAuth>
    <HeaderMobile currentLocation="/register" />
    <FormAuth>
      <Styled.Inputs>
        <Input placeholder="email" type="email" onChange={ (e) => console.log(`Email: ${e.target.value}`) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(`Password: ${e.target.value}`) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => console.log(`Second password: ${e.target.value}`) } />
        <Input placeholder="Имя (необязательно)" type="text" onChange={ (e) => console.log(`Name: ${e.target.value}`) } />
        <Input placeholder="Фамилия (необязательно)" type="text" onChange={ (e) => console.log(`Surname: ${e.target.value}`) } />
        <Input placeholder="Город (необязательно)" type="text" onChange={ (e) => console.log(`City: ${e.target.value}`) } />
      </Styled.Inputs>
      <Styled.Buttons>
        <Styled.ButtonBox>
          <Button text="Зарегистрироваться" type="button" onClick={ () => console.log('Click reg') } />
        </Styled.ButtonBox>
      </Styled.Buttons>
    </FormAuth>
    <Footer />
  </ContainerAuth>
);
