import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IAd } from '@interface/';
import { sliceString, formatDate } from '@utils/';

import { AdvListLoading } from './loading';
import * as Styled from './adv-list.styled';


interface IAdvList {
  items: IAd[];
  isLoading: boolean;
}

export const AdvList: FC<IAdvList> = ({ items, isLoading }) => {
  const navigate = useNavigate();

  return (
    <Styled.AdvList>
      { isLoading ? <AdvListLoading /> : items?.map((item) => (
        <Styled.AdvItem
          key={ String(item.id) }
          onClick={ () => {
            navigate(`/adv/${item.id}`);
            window.location.reload();
          } }
        >
          <Styled.AdvItemImg>
            { Boolean(item?.images[0]?.url) && <img alt="Adv img" src={ `${process.env.REACT_APP_API_URL}${item.images[0].url}` } /> }
          </Styled.AdvItemImg>
          <Styled.AdvItemInfo>
            <Styled.AdvItemText>{ sliceString(item.title) }</Styled.AdvItemText>
            <Styled.AdvItemPrice>{ item.price } ₽</Styled.AdvItemPrice>
            <Styled.AdvItemPlaceDate>
              <span>{ item.user.city }</span>
              <span>{ formatDate(item.created_on) }</span>
            </Styled.AdvItemPlaceDate>
          </Styled.AdvItemInfo>
        </Styled.AdvItem>
      )) }
    </Styled.AdvList>
  );
};
