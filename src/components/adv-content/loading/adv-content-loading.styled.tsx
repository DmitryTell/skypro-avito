import styled, { css } from 'styled-components';


const animation = css`
    -webkit-animation: adv-animation 1s linear infinite alternate both;
    animation: adv-animation 1s linear infinite alternate both;
`;

export const Form = styled.div`
    display: flex;
    flex-flow: column;
    gap: 34px;

    @media (max-width: 767px) {
        gap: 20px;
    }
`;

export const FormTitlebox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    gap: 10px;
`;

export const FormTitle = styled.div`
    width: 320px;
    height: 32px;
    ${animation}

    @media (max-width: 767px) {
       height: 18px;
    }
`;

export const FormTextBox = styled.div`
    display: flex;
    flex-flow: column;
    gap: 4px;
`;

export const FormText = styled.div`
    width: 320px;
    height: 16px;
    ${animation}

    @media (max-width: 767px) {
        height: 14px;
    }
`;

export const FormPricePhoneBox = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`;

export const FormPrice = styled.div`
    width: 320px;
    height: 28px;
    ${animation}

    @media (max-width: 767px) {
        height: 18px;
    }
`;

export const FormUserBox = styled.div`
    display: flex;
    gap: 12px;
`;

export const FormUserAva = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${animation}
`;

export const FormUserName = styled.div`
    display: flex;
    flex-flow: column;
`;

export const FormUserText = styled.div`
    width: 270px;
    height: 16px;
    ${animation}

    @media (max-width: 767px) {
        height: 14px;
    }
`;

export const Description = styled.div`
    max-width: 792px;
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        gap: 14px;
    }
`;

export const DescriptionTitle = styled.div`
    width: 100%;
    height: 32px;
    ${animation}

    @media (max-width: 767px) {
        height: 18px;
    }
`;

export const DescriptionText = styled.div`
    width: 100%;
    height: 16px;
    ${animation}

    @media (max-width: 767px) {
        height: 14px;
    }
`;
