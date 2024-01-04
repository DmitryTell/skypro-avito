import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@layouts/';
import {
  Top,
  TopMobile,
  ProfileSeller,
  ProfileSellerMobile,
  AdvList,
  Footer,
  ProfileSellerLoading,
  ProfileSellerLoadingMobile,
} from '@components/';
import { useGetSellerAdsByUserIdQuery } from '@redux/';
import { IAd, IUser } from '@interface/';

import * as Styled from './profile-seller.styled';


export const SellerProfile = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSellerAdsByUserIdQuery(id || '0');

  const [ads, setAds] = useState<IAd[] | []>([]);
  const [seller, setSeller] = useState<IUser>({
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: '',
    sells_from: '',
    phone: '',
  });

  useEffect(() => {
    if (data) {
      const result = Object.values(data);

      setAds(result);
      setSeller(result[0]?.user);
    }
  }, [data]);

  return (
    <Container>
      <Top currentLocation="/profile-seller" />
      <TopMobile title="Профиль продавца" />
      <Styled.Main>
        <Styled.MainTitle>Профиль продавца</Styled.MainTitle>
        { isLoading ? (
          <>
            <ProfileSellerLoading />
            <ProfileSellerLoadingMobile />
          </>
        ) : (
          <>
            <ProfileSeller seller={ seller } />
            <ProfileSellerMobile seller={ seller } />
          </>
        ) }
        <Styled.MainSubtitle>Мои товары</Styled.MainSubtitle>
        <AdvList isLoading={ isLoading } items={ ads } />
      </Styled.Main>
      <Footer />
    </Container>
  );
};
