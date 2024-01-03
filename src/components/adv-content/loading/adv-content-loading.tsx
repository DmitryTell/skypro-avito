import * as Styled from './adv-content-loading.styled';


export const ACLoadingForm = () => (
  <Styled.Form>
    <Styled.FormTitlebox>
      <Styled.FormTitle />
      <Styled.FormTextBox>
        <Styled.FormText />
        <Styled.FormText />
        <Styled.FormText />
      </Styled.FormTextBox>
    </Styled.FormTitlebox>
    <Styled.FormPricePhoneBox>
      <Styled.FormPrice />
    </Styled.FormPricePhoneBox>
    <Styled.FormUserBox>
      <Styled.FormUserAva />
      <Styled.FormUserName>
        <Styled.FormUserText />
        <Styled.FormUserText />
      </Styled.FormUserName>
    </Styled.FormUserBox>
  </Styled.Form>
);

export const ACLoadingDescription = () => (
  <Styled.Description>
    <Styled.DescriptionTitle />
    <Styled.DescriptionText />
  </Styled.Description>
);
