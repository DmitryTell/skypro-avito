import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@shared/';

import * as Styled from './top-mobile.styled';


interface ITopMobile {
  title: string;
}

export const TopMobile: FC<ITopMobile> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Styled.TopMobile>
      <BackButton
        type="button"
        onClick={ () => {
          navigate('/', { replace: true });
          window.location.reload();
        } }
      />
      <Styled.TopMobileTitle>{ title }</Styled.TopMobileTitle>
    </Styled.TopMobile>
  );
};
