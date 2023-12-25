import { FC } from 'react';

import { IAdvItems } from '@interface/';
import { sliceString } from '@utils/';

import * as Styled from './adv-list.styled';


interface IAdvList {
  items: IAdvItems[];
}

export const AdvList: FC<IAdvList> = ({ items }) => (
  <Styled.AdvList>
    { items?.map((item) => (
      <Styled.AdvItem key={ String(item.id) }>
        <Styled.AdvItemImg>
          { Boolean(item.img_url) && <img alt="Adv img" src={ item.img_url } /> }
        </Styled.AdvItemImg>
        <Styled.AdvItemInfo>
          <Styled.AdvItemText>{ sliceString(item.name) }</Styled.AdvItemText>
          <Styled.AdvItemPrice>{ item.price }</Styled.AdvItemPrice>
          <Styled.AdvItemPlaceDate>
            <span>{ item.place }</span>
            <span>{ item.date }</span>
          </Styled.AdvItemPlaceDate>
        </Styled.AdvItemInfo>
      </Styled.AdvItem>
    )) }
  </Styled.AdvList>
);
