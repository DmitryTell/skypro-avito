import * as Styled from './profile-loading.styled';


export const ProfileSellerLoading = () => (
  <Styled.Seller>
    <Styled.SellerPicture />
    <Styled.SellerInfo>
      <Styled.SellerName />
      <Styled.SellerName />
      <Styled.SellerName />
    </Styled.SellerInfo>
  </Styled.Seller>
);

export const ProfileSellerLoadingMobile = () => (
  <Styled.SellerMobile>
    <Styled.SellerMobileName>
      <Styled.SellerName />
      <Styled.SellerName />
      <Styled.SellerName />
    </Styled.SellerMobileName>
    <Styled.SellerMobilePicture />
  </Styled.SellerMobile>
);
