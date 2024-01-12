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

  const [images, setImages] = useState<(string | null)[]>([null, null, null, null, null]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null, null]);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      const imgPaths = [...images];
      const imgFiles = [...files];

      imgPaths[index] = imgUrl;
      imgFiles[index] = file;

      setImages([...imgPaths]);
      setFiles([...imgFiles]);
    }
  };

  const handleClosePicture = (index: number) => {
    const imgPaths = [...images];
    const imgFiles = [...files];

    imgPaths[index] = null;
    imgFiles[index] = null;

    setImages([...imgPaths]);
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
                  { ['1', '2', '3', '4', '5'].map((item, index) => (
                    <Styled.ContentInfoPicture
                      key={ item }
                      onClick={ () => document.getElementById(`upload-img-${item}`)?.click() }
                    >
                      { images[index]
                        ? (
                          <>
                            <img alt="Item img" src={ images[index] || '' } />
                            <Styled.ContentInfoPictureClose onClick={ () => handleClosePicture(index) }>
                              X
                            </Styled.ContentInfoPictureClose>
                          </>
                        )
                        : <EmptyPicture /> }
                      <Styled.ContentInfoPictureInput
                        disabled={ Boolean(images[index]) }
                        id={ `upload-img-${item}` }
                        type="file"
                        onChange={ (event) => handleSetImage(event, index) }
                      />
                    </Styled.ContentInfoPicture>
                  )) }
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
