import { useNavigate } from 'react-router-dom';

import { ContainerAuth } from '@layouts/';
import { HeaderMobile, FormAuth, Footer } from '@components/';
import { Input, Button } from '@shared/';

import { RegButton } from './ui';
import * as Styled from './sign-in.styled';


export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <ContainerAuth>
      <HeaderMobile currentLocation="/login" />
      <FormAuth>
        <Styled.Inputs>
          <Input placeholder="email" type="email" onChange={ (e) => console.log(`Email: ${e.target.value}`) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(`Password: ${e.target.value}`) } />
        </Styled.Inputs>
        <Styled.Buttons>
          <Styled.ButtonBox>
            <Button text="Войти" type="button" onClick={ () => console.log('Click enter') } />
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
