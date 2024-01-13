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
import {
  useGetUserQuery,
  useGetCurrentUserAdsQuery,
  getStateUser,
  getStateAds,
} from '@redux/';
import { IUser, IAd } from '@interface/';
import { useAppSelector } from '@hook/';

import { ChangingPassword } from './changing-password';
import * as Styled from './profile.styled';


export const Profile = () => {
  const { username } = useAppSelector(getStateUser);
  const { isOpenedChangingPassword } = useAppSelector(getStateAds);

  const { data: currentUser, isLoading, error } = useGetUserQuery();
  const { data: currentUserAds } = useGetCurrentUserAdsQuery();

  const [user, setUser] = useState<IUser>({
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: null,
    sells_from: null,
    phone: '',
  });
  const [userAds, setUserAds] = useState<IAd[] | []>([]);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUserAds) {
      const result = Object.values(currentUserAds);

      setUserAds(result);
    }
  }, [currentUserAds]);

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
        <AdvList isLoading={ isLoading } items={ userAds } />
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
