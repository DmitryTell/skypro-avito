import { useState } from 'react';

import { HeaderMobile, FormModal, Footer } from '@components/';
import { Input, Button, LoadingButton } from '@shared/';
import { useAppDispatch } from '@hook/';
import {
  setIsOpenedSuccessChangedPassword,
  setIsOpenedChangingPassword,
  useChangePasswordMutation,
} from '@redux/';
import { IRequestChangePassword } from '@interface/';

import * as Styled from './changing-password.styled';


export const ChangingPassword = () => {
  const dispatch = useAppDispatch();

  const [changePassword] = useChangePasswordMutation();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
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
    setIsWaiting(true);

    changePassword({ body })
      .unwrap()
      .then(() => {
        setIsWaiting(false);

        dispatch(setIsOpenedChangingPassword({ isOpenedChangingPassword: false }));
        dispatch(setIsOpenedSuccessChangedPassword({ isOpenedSuccessChangedPassword: true }));
      })
      .catch((error) => {
        console.error(error);

        setErrorText('неверный пароль');
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
          </Styled.ErrorBox>
          <Styled.ButtonBox>
            { isWaiting
              ? <LoadingButton />
              : <Button text="Сохранить" type="button" onClick={ handleChangePassword } /> }
          </Styled.ButtonBox>
        </FormModal>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
