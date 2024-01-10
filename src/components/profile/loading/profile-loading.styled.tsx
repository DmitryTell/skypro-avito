import styled, { css } from 'styled-components';


const animation = css`
    -webkit-animation: adv-animation 1s linear infinite alternate both;
    animation: adv-animation 1s linear infinite alternate both;
`;

export const Seller = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SellerPicture = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    ${animation}
`;

export const SellerInfo = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

export const SellerName = styled.div`
    width: 243px;
    height: 25px;
    ${animation}
`;

export const SellerMobile = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        flex-flow: column;
        gap: 30px;
    }
`;

export const SellerMobileName = styled.div`
    display: flex;
    flex-flow: column;
    gap: 6px;
`;

export const SellerMobilePicture = styled.div`
    align-self: center;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    ${animation}
`;

export const Settings = styled.div`
    width: 834px;
    min-height: 444px;
    display: grid;
    grid-template-rows: 70px 274px 50px;
    grid-template-columns: 170px 614px;
    gap: 25px 50px;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        gap: 30px;
    }
`;

export const SettingsTitle = styled.h2`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    color: #000;
    font-size: 32px;
    font-weight: 500;
    line-height: 220%;

    @media (max-width: 767px) {
        align-self: start;
        font-size: 18px;
        line-height: 100%;
    }
`;

export const SettingsPictureBox = styled.div`
    grid-row: 2 / 4;
    grid-column: 1 / 2;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const SettingsPicture = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    ${animation}

    @media (max-width: 767px) {
        width: 132px;
        height: 132px;
    }
`;

export const SettingsForm = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        width: 100%;
        gap: 18px;
    }
`;

export const SettingsFormInputBox = styled.div`
    width: 100%;
    height: 50px;
    ${animation}
`;
