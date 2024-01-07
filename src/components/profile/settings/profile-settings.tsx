import {
  FC, useState, Dispatch, SetStateAction, useEffect,
} from 'react';

import { IUser, IRequestChangeUser } from '@interface/';
import { Button } from '@shared/';
import { useChangeUserDataMutation } from '@redux/';

import { SettingsInput, SettingsInputPhone } from '../ui';
import { SettingsButtonBoxLoading } from '../loading';
import * as Styled from './profile-settings.styled';


interface IProfileSettings {
  user: IUser;
}

export const ProfileSettings: FC<IProfileSettings> = ({ user }) => {
  const [changeUser] = useChangeUserDataMutation();

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    set: Dispatch<SetStateAction<string>>,
  ) => {
    set(event.target.value);
    setIsDisabled(false);
  };

  const handleChangeUserData = () => {
    const body: IRequestChangeUser = {
      role: 'user',
      email,
      name,
      surname,
      phone,
      city,
    };

    setIsWaiting(true);

    changeUser({ body })
      .unwrap()
      .then(() => {
        setIsWaiting(false);
        setIsDisabled(true);
        // eslint-disable-next-line no-alert
        alert('Данные обновлены');
      })
      .catch(() => {
        setIsWaiting(false);
        // eslint-disable-next-line no-alert
        alert('Что-то пошло не так');
      });
  };

  useEffect(() => {
    setName(user.name);
    setSurname(user.surname ?? '');
    setEmail(user.email);
    setCity(user.city);
    setPhone(user.phone);
  }, [user]);

  return (
    <Styled.Settings>
      <Styled.SettingsTitle>Настройки профиля</Styled.SettingsTitle>
      <Styled.SettingsPictureBox>
        <Styled.SettingsPicture>
          { Boolean(user?.avatar) && <img alt="User img" src={ `${process.env.REACT_APP_API_URL}${user.avatar}` } /> }
        </Styled.SettingsPicture>
        <Styled.SettingsLink href="/#">
          Изменить
        </Styled.SettingsLink>
      </Styled.SettingsPictureBox>
      <Styled.SettingsForm>
        <Styled.SettingsFormInputBox>
          <SettingsInput
            forName="settings-input"
            name="Имя"
            type="text"
            value={ name }
            onChange={ (e) => handleChangeInput(e, setName) }
          />
          <SettingsInput
            forName="settings-input"
            name="Фамилия"
            type="text"
            value={ surname }
            onChange={ (e) => handleChangeInput(e, setSurname) }
          />
        </Styled.SettingsFormInputBox>
        <Styled.SettingsFormInputBox>
          <SettingsInput
            forName="settings-input"
            name="Email"
            type="email"
            value={ email }
            onChange={ (e) => handleChangeInput(e, setEmail) }
          />
          <SettingsInput
            forName="settings-input"
            name="Город"
            type="text"
            value={ city }
            onChange={ (e) => handleChangeInput(e, setCity) }
          />
        </Styled.SettingsFormInputBox>
        <Styled.SettingsFormInputBox>
          <SettingsInputPhone
            forName="settings-input"
            name="Телефон"
            type="tel"
            value={ phone }
            onChange={ (e) => handleChangeInput(e, setPhone) }
          />
        </Styled.SettingsFormInputBox>
      </Styled.SettingsForm>
      <Styled.SettingsButtons>
        <Styled.SettingsButtonBox>
          { isWaiting ? <SettingsButtonBoxLoading /> : <Button disabled={ isDisabled } text="Сохранить" type="button" onClick={ handleChangeUserData } /> }
        </Styled.SettingsButtonBox>
        <Styled.SettingsButtonPasswordBox>
          <Button text="Сменить пароль" type="button" onClick={ () => console.log('Click to change password') } />
        </Styled.SettingsButtonPasswordBox>
      </Styled.SettingsButtons>
    </Styled.Settings>
  );
};
