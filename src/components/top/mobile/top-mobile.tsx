import { FC } from 'react';

import { BackButton } from '@shared/';

import * as Styled from './top-mobile.styled';


interface ITopMobile {
  title: string;
}

export const TopMobile: FC<ITopMobile> = ({ title }) => (
  <Styled.TopMobile>
    <BackButton type="button" onClick={ () => console.log('Click to back') } />
    <Styled.TopMobileTitle>{ title }</Styled.TopMobileTitle>
  </Styled.TopMobile>
);
