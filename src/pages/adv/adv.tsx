import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
import { Button, ShowPhoneButton, LoadingButton } from '@shared/';
import { formatDate } from '@utils/';
import { IAd } from '@interface/';
import {
  useGetAdByIdQuery,
  getStateAds,
  useGetCommentsByIdQuery,
  getStateUser,
  useDeleteCurrentAdMutation,
  setIsOpenedEditAdv,
  setComments,
} from '@redux/';
import { useAppSelector, useAppDispatch } from '@hook/';

import { Comments } from './comments';
import { EditAdv } from './edit-adv';
// eslint-disable-next-line import/max-dependencies
import * as Styled from './adv.styled';


export const Adv = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { comments, isOpenedComments, isOpenedEditAdv } = useAppSelector(getStateAds);
  const user = useAppSelector(getStateUser);

  const { data: adById, isLoading } = useGetAdByIdQuery(id || '0');
  const { data: commentsById } = useGetCommentsByIdQuery(Number(id) || 0);
  const [deletAd] = useDeleteCurrentAdMutation();

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
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleDeleteAd = () => {
    setIsWaiting(true);

    deletAd(currentAd.id)
      .then(() => {
        setIsWaiting(false);

        navigate('/', { replace: true });
      });
  };

  useEffect(() => {
    if (adById) {
      setCurrentAd(adById);
    }
  }, [adById]);

  useEffect(() => {
    if (commentsById) {
      const result = Object.values(commentsById);

      dispatch(setComments({ comments: result }));
    }
  }, [commentsById, dispatch]);

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
                { user?.id !== currentAd?.user_id ? (
                  <Styled.MainPhoneButtonBox>
                    <ShowPhoneButton disabled={ isLoading } userPhone={ currentAd?.user?.phone } />
                  </Styled.MainPhoneButtonBox>
                ) : (
                  <Styled.MainButtons>
                    <Styled.MainEditButtonBox>
                      <Button
                        text="Редактировать"
                        type="button"
                        onClick={ () => dispatch(setIsOpenedEditAdv({ isOpenedEditAdv: true })) }
                      />
                    </Styled.MainEditButtonBox>
                    <Styled.MainRemoveButtonBox>
                      { isWaiting ? <LoadingButton /> : (
                        <Button
                          text="Снять с публикации"
                          type="button"
                          onClick={ handleDeleteAd }
                        />
                      ) }
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
          <Comments id={ currentAd.id } />
        </>
      ) }
      { isOpenedEditAdv && (
        <>
          <Backdrop />
          <EditAdv currentAd={ currentAd } />
        </>
      ) }
    </Container>
  );
};
