import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@layouts/';
import {
  PictureBox,
  PictureBoxMobile,
  Top,
  AdvContentForm,
  AdvDescription,
  Footer,
  PBLoading,
  PBLoadingMob,
  ACLoadingForm,
  ACLoadingDescription,
} from '@components/';
import { Button, ShowPhoneButton } from '@shared/';
import { formatDate } from '@utils/';
import { IAd } from '@interface/';
import { useGetAdByIdQuery } from '@redux/';

import * as Styled from './adv.styled';


const mockCurrentUserId = null;

export const Adv = () => {
  const { id } = useParams();

  const { data: adById, isLoading } = useGetAdByIdQuery(id || '0');

  const [currentAd, setCurrentAd] = useState<IAd>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    images: [
      {
        id: 0,
        ad_id: 0,
        url: '',
      },
    ],
    user_id: 0,
    created_on: '',
    user: {
      id: 0,
      name: '',
      email: '',
      city: '',
      avatar: '',
      sells_from: '',
      phone: '',
    },
  });
  const [phone, setPhone] = useState<string>('+XX XXXXXXXX');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (adById) {
      setCurrentAd(adById);
    }
  }, [adById]);

  useEffect(() => {
    if (isVisible) {
      setPhone(currentAd.user.phone);
    }
  }, [currentAd.user.phone, isVisible]);

  return (
    <Container>
      { isLoading ? <PBLoadingMob /> : <PictureBoxMobile images={ currentAd?.images } /> }
      <Top currentLocation={ `/adv/${id}` } />
      <Styled.Main>
        <Styled.MainContent>
          { isLoading ? (
            <>
              <PBLoading />
              <ACLoadingForm />
            </>
          ) : (
            <>
              <PictureBox images={ currentAd?.images } />
              <AdvContentForm
                comments={ [] }
                date={ formatDate(currentAd?.created_on) }
                price={ currentAd?.price }
                title={ currentAd?.title }
                user={ currentAd.user }
              >
                { mockCurrentUserId !== currentAd?.user_id ? (
                  <Styled.MainPhoneButtonBox>
                    <ShowPhoneButton phone={ phone } type="button" onClick={ () => setIsVisible(true) } />
                  </Styled.MainPhoneButtonBox>
                ) : (
                  <Styled.MainButtons>
                    <Styled.MainEditButtonBox>
                      <Button text="Редактировать" type="button" onClick={ () => console.log('Click to edit-button') } />
                    </Styled.MainEditButtonBox>
                    <Styled.MainRemoveButtonBox>
                      <Button text="Снять с публикации" type="button" onClick={ () => console.log('Click to remove-button') } />
                    </Styled.MainRemoveButtonBox>
                  </Styled.MainButtons>
                ) }
              </AdvContentForm>
            </>
          ) }
        </Styled.MainContent>
        { isLoading ? <ACLoadingDescription /> : <AdvDescription description={ currentAd?.description } /> }
      </Styled.Main>
      <Footer />
    </Container>
  );
};
