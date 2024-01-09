import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderMobile, FormModal, Footer } from '@components/';
import { Input, Button } from '@shared/';
import { useAppDispatch } from '@hook/';
import { removeAuthData, useChangePasswordMutation, setIsOpenedChangingPassword } from '@redux/';
import { IRequestChangePassword } from '@interface/';

import * as Styled from './changing-password.styled';


export const ChangingPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [changePassword] = useChangePasswordMutation();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleChangePassword = () => {
    const body: IRequestChangePassword = {
      password_1: oldPassword,
      password_2: newPassword,
    };

    if (!oldPassword || !newPassword) {
      setErrorText('Введите данные');
      return;
    }

    setErrorText('');
    setIsDisabled(true);
    setIsWaiting(true);

    changePassword({ body })
      .unwrap()
      .then(() => {
        setIsDisabled(false);
        setIsWaiting(false);

        // eslint-disable-next-line no-alert
        alert('Пароль изменен, авторизуйтесь повторно');

        dispatch(removeAuthData());
        dispatch(setIsOpenedChangingPassword({ isOpenedChangingPassword: false }));

        navigate('/login', { replace: true });
      })
      .catch((error) => {
        console.error(error);

        setErrorText('неверный пароль');
        setIsDisabled(false);
        setIsWaiting(false);
      });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="changing-password-modal" />
        <FormModal title="Сменить пароль">
          <Styled.Inputs>
            <Input placeholder="Введите старый пароль" type="password" onChange={ (e) => setOldPassword(e.target.value) } />
            <Input placeholder="Введите новый пароль" type="password" onChange={ (e) => setNewPassword(e.target.value) } />
          </Styled.Inputs>
          <Styled.ErrorBox>
            { Boolean(errorText) && <Styled.ErrorText>Ошибка: { errorText }</Styled.ErrorText> }
            { isWaiting && <Styled.WaitingText>Подождите...</Styled.WaitingText> }
          </Styled.ErrorBox>
          <Styled.ButtonBox>
            <Button disabled={ isDisabled } text="Сохранить" type="button" onClick={ handleChangePassword } />
          </Styled.ButtonBox>
        </FormModal>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
