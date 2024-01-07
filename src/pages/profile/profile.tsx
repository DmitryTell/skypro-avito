import { useState, useEffect } from 'react';

import { Container } from '@layouts/';
import {
  Top, ProfileSettings, AdvList, Footer, ProfileSettingsLoading,
} from '@components/';
import { useGetUserQuery } from '@redux/';
import { IUser } from '@interface/';

import * as Styled from './profile.styled';


export const Profile = () => {
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
    if (currentUser) {
      setUser(currentUser);
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
            <Styled.MainTitle>{ error ? 'Ошибка загрузки данных' : `Здравствуйте, ${user?.name}` }</Styled.MainTitle>
            { !error && <ProfileSettings user={ user } /> }
          </>
        ) }
        <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
        <AdvList isLoading={ isLoading } items={ [] } />
      </Styled.Main>
      <Footer />
    </Container>
  );
};
