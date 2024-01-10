import { useState, useEffect } from 'react';

import { Container } from '@layouts/';
import {
  Top,
  ProfileSettings,
  AdvList,
  Footer,
  ProfileSettingsLoading,
  Backdrop,
} from '@components/';
import { useGetUserQuery, getStateUser, getStateAds } from '@redux/';
import { IUser } from '@interface/';
import { useAppSelector } from '@hook/';
import { USER_DATA } from '@utils/';

import { ChangingPassword } from './changing-password';
import * as Styled from './profile.styled';


export const Profile = () => {
  const { username } = useAppSelector(getStateUser);
  const { isOpenedChangingPassword } = useAppSelector(getStateAds);

  const { data: currentUser, isLoading, error } = useGetUserQuery();

  const [user, setUser] = useState<IUser>({
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: null,
    sells_from: null,
    phone: '',
  });

  useEffect(() => {
    const userSavedData = localStorage.getItem(USER_DATA);
    const userData = userSavedData ? JSON.parse(userSavedData) as IUser : currentUser;

    if (userData) {
      setUser(userData);
    }
  }, [currentUser]);

  return (
    <Container>
      <Top currentLocation="/profile" />
      <Styled.Main>
        { isLoading ? (
          <>
            <Styled.MainTitleLoading />
            <ProfileSettingsLoading />
          </>
        ) : (
          <>
            <Styled.MainTitle>{ error ? 'Ошибка загрузки данных' : `Здравствуйте, ${username || 'Неизвестный'}` }</Styled.MainTitle>
            { !error && <ProfileSettings user={ user } /> }
          </>
        ) }
        <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
        <AdvList isLoading={ isLoading } items={ [] } />
      </Styled.Main>
      <Footer />
      { isOpenedChangingPassword && (
        <>
          <Backdrop />
          <ChangingPassword />
        </>
      ) }
    </Container>
  );
};
