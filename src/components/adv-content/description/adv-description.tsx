import { FC } from 'react';

import * as Styled from './adv-description.styled';


interface IAdvDescription {
  description: string;
}

export const AdvDescription: FC<IAdvDescription> = ({ description }) => (
  <Styled.Description>
    <Styled.DescriptionTitle>Описание товара</Styled.DescriptionTitle>
    <Styled.DescriptionText>{ description }</Styled.DescriptionText>
  </Styled.Description>
);
