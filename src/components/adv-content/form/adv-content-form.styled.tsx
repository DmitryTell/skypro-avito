import styled from 'styled-components';


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

export const FormTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;

export const FormTextBox = styled.div`
    display: flex;
    flex-flow: column;
    gap: 4px;
`;

export const FormText = styled.span`
    color: #5f5f5f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 120%;
    }
`;

export const FormLink = styled.a`
    color: #009ee4;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 130%;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: 767px) {
        font-size: 14px;
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

export const FormPrice = styled.span`
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 767px) {
        font-size: 18px;
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
    background: #f0f0f0;
    overflow: hidden;
`;

export const FormUserName = styled.p`
    display: flex;
    flex-flow: column;
`;

export const FormUserLink = styled.a`
    color: #009ee4;
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;

export const FormUserText = styled.span`
    color: #5f5f5f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;
