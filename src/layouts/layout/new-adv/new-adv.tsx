import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderMobile, FormModal, Footer } from '@components/';
import { Button, LoadingButton } from '@shared/';
import { ReactComponent as EmptyPicture } from '@assets/icon/EmptyPicture.svg';
import { useAppDispatch } from '@hook/';
import {
  useCreateNewAdMutation,
  useAddImageToAdvMutation,
  setIsOpenedNewAdv,
} from '@redux/';
import { IRequestNewAd } from '@interface/';

import * as Styled from './new-adv.styled';


export const NewAdv = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [createAd] = useCreateNewAdMutation();
  const [addImage] = useAddImageToAdvMutation();

  const [images, setImages] = useState<string[] | []>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [files, setFiles] = useState<File[] | []>([]);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);

      setImages([...images, imgUrl]);
      setFiles([...files, file]);
    }
  };

  const handleClosePicture = () => {
    const imgUrls = [...images];
    const imgFiles = [...files];

    imgUrls.pop();
    imgFiles.pop();

    setImages([...imgUrls]);
    setFiles([...imgFiles]);
  };

  const handleAddNewAdv = () => {
    setIsWaiting(true);
    setTitle('');
    setDescription('');
    setPrice('');

    const body: IRequestNewAd = {
      title,
      description,
      price: Number(price),
    };

    createAd({ body })
      .then((data) => {
        const adData = Object.values(data)[0];

        setIsWaiting(false);

        files.forEach((file) => {
          if (file) {
            const formData = new FormData();
            const args: { formData: object; id: number } = {
              formData,
              id: adData.id,
            };

            formData.append('file', file);
            addImage(args).then((dataImg) => {
              // eslint-disable-next-line no-console
              console.debug(dataImg);
            });
          }
        });

        dispatch(setIsOpenedNewAdv({ isOpenedNewAdv: false }));
        navigate(`/adv/${adData.id}`, { replace: true });
      });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="new-adv-modal" />
        <FormModal title="Новое объявление">
          <Styled.Content>
            <Styled.ContentInfo>
              <Styled.ContentInfoLabel>
                Название
                <Styled.ContentInfoInput
                  placeholder="Введите название"
                  type="text"
                  onChange={ (e) => setTitle(e.target.value) }
                />
              </Styled.ContentInfoLabel>
              <Styled.ContentInfoLabel>
                Описание
                <Styled.ContentInfoArea
                  placeholder="Введите описание"
                  onChange={ (e) => setDescription(e.target.value) }
                />
              </Styled.ContentInfoLabel>
              <Styled.ContentInfoPictureBox>
                <Styled.ContentInfoText>Фотографии товара <span>не более 5 фотографий</span></Styled.ContentInfoText>
                <Styled.ContentInfoPictureList>
                  { Boolean(images.length) && images.map((image, index) => (
                    <Styled.ContentInfoPicture key={ String(index + 1) }>
                      <>
                        <img alt="Item img" src={ image || '' } />
                        { index === images.length - 1 && (
                          <Styled.ContentInfoPictureClose onClick={ () => handleClosePicture() }>
                            X
                          </Styled.ContentInfoPictureClose>
                        ) }
                      </>
                    </Styled.ContentInfoPicture>
                  )) }
                  { images.length < 5 && (
                    <Styled.ContentInfoPicture
                      onClick={ () => document.getElementById(`upload-img-${images.length + 1}`)?.click() }
                    >
                      <EmptyPicture />
                      <Styled.ContentInfoPictureInput
                        id={ `upload-img-${images.length + 1}` }
                        type="file"
                        onChange={ (event) => handleSetImage(event) }
                      />
                    </Styled.ContentInfoPicture>
                  ) }
                </Styled.ContentInfoPictureList>
              </Styled.ContentInfoPictureBox>
            </Styled.ContentInfo>
            <Styled.ContentInfoLabel>
              Цена
              <Styled.ContentInputPrice type="number" onChange={ (e) => setPrice(e.target.value) } />
              <Styled.ContentPriceRub>₽</Styled.ContentPriceRub>
              <Styled.ContentPriceRubMob>₽</Styled.ContentPriceRubMob>
            </Styled.ContentInfoLabel>
            <Styled.ContentButtonBox>
              { isWaiting
                ? <LoadingButton />
                : (
                  <Button
                    disabled={ !title || !price }
                    text="Опубликовать"
                    type="button"
                    onClick={ handleAddNewAdv }
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
