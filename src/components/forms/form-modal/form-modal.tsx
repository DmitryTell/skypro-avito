import { FC, ReactNode } from 'react';

import { CloseButton, BackButton } from '@shared/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setIsOpenedComments, getStateAds } from '@redux/';

import * as Styled from './form-modal.styled';


interface IFormModal {
  title: string;
  children: ReactNode;
}

export const FormModal: FC<IFormModal> = ({ title, children }) => {
  const dispatch = useAppDispatch();
  const { isOpenedComments } = useAppSelector(getStateAds);

  const handleCloseModal = () => {
    if (isOpenedComments) {
      dispatch(setIsOpenedComments({ isOpenedComments: false }));
    }
  };

  return (
    <Styled.Modal>
      <Styled.ModalTop>
        <Styled.ModalTitle>{ title }</Styled.ModalTitle>
        <CloseButton type="button" onClick={ handleCloseModal } />
      </Styled.ModalTop>
      <Styled.ModalTopMobile>
        <BackButton type="button" onClick={ handleCloseModal } />
        <Styled.ModalTitle>{ title }</Styled.ModalTitle>
      </Styled.ModalTopMobile>
      { children }
    </Styled.Modal>
  );
};
