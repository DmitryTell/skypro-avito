import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderMobile, FormModal, Footer } from '@components/';
import { Button, LoadingButton } from '@shared/';
import { ReactComponent as EmptyPicture } from '@assets/icon/EmptyPicture.svg';
import { useAppDispatch } from '@hook/';
import { IAd, IRequestNewAd, IImg } from '@interface/';
import {
  setIsOpenedEditAdv,
  useAddImageToAdvMutation,
  useDeleteImageFromAdvMutation,
  useChangeCurrentAdMutation,
} from '@redux/';

import * as Styled from './edit-adv.styled';


interface IEditAdv {
  currentAd: IAd;
}

export const EditAdv: FC<IEditAdv> = ({ currentAd }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [changeAd] = useChangeCurrentAdMutation();
  const [adImage] = useAddImageToAdvMutation();
  const [deleteImage] = useDeleteImageFromAdvMutation();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [images, setImages] = useState<IImg[] | []>([]);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      const args: { formData: object; id: number } = {
        formData,
        id: currentAd.id,
      };

      formData.append('file', file);
      adImage(args).then((data) => {
        const newData = Object.values(data)[0];

        setImages(newData.images);
      });
    }
  };

  const handleDeleteImage = (index: number) => {
    const args: { url: string; id: number } = {
      url: images[index]?.url,
      id: currentAd.id,
    };

    deleteImage(args).then((data) => {
      const newData = Object.values(data)[0];

      setImages(newData.images);
    });
  };

  const handleChangeAd = () => {
    setIsWaiting(true);

    const body: IRequestNewAd = {
      title,
      description,
      price: Number(price),
    };

    const args: { body: IRequestNewAd; id: number } = {
      body,
      id: currentAd.id,
    };

    changeAd(args)
      .then((data) => {
        const newData = Object.values(data)[0];

        setTitle(newData.title);
        setDescription(newData.description);
        setPrice(String(newData.price));
        setIsWaiting(false);
        setIsDisabled(true);

        dispatch(setIsOpenedEditAdv({ isOpenedEditAdv: false }));
        navigate(`/adv/${newData.id}`);
        window.location.reload();
      });
  };

  useEffect(() => {
    setTitle(currentAd.title);
    setDescription(currentAd.description);
    setPrice(String(currentAd.price));
    setImages(currentAd.images);
  }, [currentAd]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="edit-adv-modal" />
        <FormModal title="Редактировать объявление">
          <Styled.Content>
            <Styled.ContentInfo>
              <Styled.ContentInfoLabel>
                Название
                <Styled.ContentInfoInput
                  type="text"
                  value={ title }
                  onChange={ (e) => {
                    setTitle(e.target.value);
                    setIsDisabled(false);
                  } }
                />
              </Styled.ContentInfoLabel>
              <Styled.ContentInfoLabel>
                Описание
                <Styled.ContentInfoArea
                  value={ description }
                  onChange={ (e) => {
                    setDescription(e.target.value);
                    setIsDisabled(false);
                  } }
                />
              </Styled.ContentInfoLabel>
              <Styled.ContentInfoPictureBox>
                <Styled.ContentInfoText>Фотографии товара <span>не более 5 фотографий</span></Styled.ContentInfoText>
                <Styled.ContentInfoPictureList>
                  { ['1', '2', '3', '4', '5'].map((item, index) => (
                    <Styled.ContentInfoPicture
                      key={ item }
                      onClick={ () => document.getElementById(`upload-img-${item}`)?.click() }
                    >
                      { images[index]
                        ? (
                          <>
                            <img alt="Item img" src={ `${process.env.REACT_APP_API_URL}${images[index].url}` } />
                            <Styled.ContentInfoPictureClose onClick={ () => handleDeleteImage(index) }>
                              X
                            </Styled.ContentInfoPictureClose>
                          </>
                        ) : <EmptyPicture /> }
                      <Styled.ContentInfoPictureInput
                        disabled={ Boolean(images[index]) }
                        id={ `upload-img-${item}` }
                        type="file"
                        onChange={ handleSetImage }
                      />
                    </Styled.ContentInfoPicture>
                  )) }
                </Styled.ContentInfoPictureList>
              </Styled.ContentInfoPictureBox>
            </Styled.ContentInfo>
            <Styled.ContentInfoLabel>
              Цена
              <Styled.ContentInputPrice
                type="number"
                value={ price }
                onChange={ (e) => {
                  setPrice(e.target.value);
                  setIsDisabled(false);
                } }
              />
              <Styled.ContentPriceRub>₽</Styled.ContentPriceRub>
              <Styled.ContentPriceRubMob>₽</Styled.ContentPriceRubMob>
            </Styled.ContentInfoLabel>
            <Styled.ContentButtonBox>
              { isWaiting
                ? <LoadingButton />
                : (
                  <Button
                    disabled={ isDisabled }
                    text="Сохранить"
                    type="button"
                    onClick={ handleChangeAd }
                  />
                ) }
            </Styled.ContentButtonBox>
          </Styled.Content>
        </FormModal>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
