import { FC } from 'react';

import { IUser } from '@interface/';
import { Button } from '@shared/';

import { SettingsInput, SettingsInputPhone } from '../ui';
import * as Styled from './profile-settings.styled';


interface IProfileSettings {
  user: IUser;
}

export const ProfileSettings: FC<IProfileSettings> = ({ user }) => (
  <Styled.Settings>
    <Styled.SettingsTitle>Настройки профиля</Styled.SettingsTitle>
    <Styled.SettingsPictureBox>
      <Styled.SettingsPicture>
        { Boolean(user.avatar) && <img alt="User img" src={ user.avatar } /> }
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
          value={ user.name }
          onChange={ (e) => console.log(`Username: ${e.target.value}`) }
        />
        <SettingsInput
          forName="settings-input"
          name="Фамилия"
          type="text"
          value={ user?.surname ?? '' }
          onChange={ (e) => console.log(`Usersurname: ${e.target.value}`) }
        />
      </Styled.SettingsFormInputBox>
      <Styled.SettingsFormInputBox>
        <SettingsInput
          forName="settings-input"
          name="Город"
          type="text"
          value={ user.city }
          onChange={ (e) => console.log(`Usercity: ${e.target.value}`) }
        />
      </Styled.SettingsFormInputBox>
      <Styled.SettingsFormInputBox>
        <SettingsInputPhone
          forName="settings-input"
          name="Телефон"
          type="tel"
          value={ user.phone }
          onChange={ (e) => console.log(`Usercity: ${e.target.value}`) }
        />
      </Styled.SettingsFormInputBox>
    </Styled.SettingsForm>
    <Styled.SettingsButtonBox>
      <Button text="Сохранить" type="button" onClick={ () => console.log('Save click') } />
    </Styled.SettingsButtonBox>
  </Styled.Settings>
);
