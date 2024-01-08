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
  Backdrop,
} from '@components/';
import { Button, ShowPhoneButton } from '@shared/';
import { formatDate } from '@utils/';
import { IAd, IComment } from '@interface/';
import { useGetAdByIdQuery, getStateAds, useGetCommentsByIdQuery } from '@redux/';
import { useAppSelector } from '@hook/';

import { Comments } from './comments';
// eslint-disable-next-line import/max-dependencies
import * as Styled from './adv.styled';


export const Adv = () => {
  const { id } = useParams();
  const { isOpenedComments } = useAppSelector(getStateAds);

  const { data: adById, isLoading } = useGetAdByIdQuery(id || '0');
  const { data: commentsById } = useGetCommentsByIdQuery(id || '0');

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
  const [comments, setComments] = useState<IComment[] | []>([]);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    if (adById) {
      setCurrentAd(adById);
    }
  }, [adById]);

  useEffect(() => {
    if (commentsById) {
      const result = Object.values(commentsById);

      setComments(result);
    }
  }, [commentsById]);

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
                comments={ comments }
                date={ formatDate(currentAd?.created_on) }
                price={ currentAd?.price }
                title={ currentAd?.title }
                user={ currentAd.user }
              >
                { currentUserId !== currentAd?.user_id ? (
                  <Styled.MainPhoneButtonBox>
                    <ShowPhoneButton disabled={ isLoading } userPhone={ currentAd?.user?.phone } />
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
      { isOpenedComments && (
        <>
          <Backdrop />
          <Comments comments={ comments } />
        </>
      ) }
    </Container>
  );
};
