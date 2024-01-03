import * as Styled from './picture-box-loading.styled';


export const PBLoading = () => (
  <Styled.Box>
    <Styled.BoxMainPicture />
    <Styled.BoxPictures>
      { ['1', '2', '3', '4', '5'].map((number) => (
        <Styled.BoxPicture key={ number } />
      )) }
    </Styled.BoxPictures>
  </Styled.Box>
);

export const PBLoadingMob = () => (
  <Styled.BoxMob>
    <Styled.BoxContainerMob />
  </Styled.BoxMob>
);
