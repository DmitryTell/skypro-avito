import { FC, ReactNode } from 'react';

import { CloseButton, BackButton } from '@shared/';

import * as Styled from './form-modal.styled';


interface IFormModal {
  title: string;
  children: ReactNode;
}

export const FormModal: FC<IFormModal> = ({ title, children }) => (
  <Styled.Modal>
    <Styled.ModalTop>
      <Styled.ModalTitle>{ title }</Styled.ModalTitle>
      <CloseButton type="button" onClick={ () => console.log('Click close-button') } />
    </Styled.ModalTop>
    <Styled.ModalTopMobile>
      <BackButton type="button" onClick={ () => console.log('Click back-button') } />
      <Styled.ModalTitle>{ title }</Styled.ModalTitle>
    </Styled.ModalTopMobile>
    { children }
  </Styled.Modal>
);
