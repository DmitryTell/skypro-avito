import * as Styled from './adv-list-loading.styled';


export const AdvListLoading = () => (
  <Styled.List>
    { ['1', '2', '3', '4', '5', '6', '7', '8'].map((item) => (
      <Styled.Item key={ item }>
        <Styled.ItemImg />
        <Styled.ItemInfo>
          <Styled.ItemText />
          <Styled.ItemPrice />
          <Styled.ItemPlaceDate>
            <div />
            <div />
          </Styled.ItemPlaceDate>
        </Styled.ItemInfo>
      </Styled.Item>
    )) }
  </Styled.List>
);
