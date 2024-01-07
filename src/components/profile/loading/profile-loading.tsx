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

export const ProfileSettingsLoading = () => (
  <Styled.Settings>
    <Styled.SettingsTitle>Настройки профиля</Styled.SettingsTitle>
    <Styled.SettingsPictureBox>
      <Styled.SettingsPicture />
    </Styled.SettingsPictureBox>
    <Styled.SettingsForm>
      <Styled.SettingsFormInputBox />
      <Styled.SettingsFormInputBox />
      <Styled.SettingsFormInputBox />
    </Styled.SettingsForm>
  </Styled.Settings>
);

export const SettingsButtonBoxLoading = () => (
  <Styled.SettingsButtonBoxLoading />
);
