import styled from 'styled-components';


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
    background: #f0f0f0;
    overflow: hidden;

    @media (max-width: 767px) {
        width: 132px;
        height: 132px;
    }
`;

export const SettingsLink = styled.a`
    color: #009ee4;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
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
    display: flex;
    gap: 14px;

    @media (max-width: 767px) {
        flex-flow: column;
        gap: 18px;
    }
`;

export const SettingsButtons = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 767px) {
        width: 300px;
        flex-flow: column;
        align-self: center;
    }
`;

export const SettingsButtonBox = styled.div`
    width: 154px;
    height: 50px;

    @media (max-width: 767px) {
        width: 100%;
        height: 46px;
    }
`;

export const SettingsButtonPasswordBox = styled.div`
    width: 225px;
    height: 50px;

    @media (max-width: 767px) {
        width: 100%;
        height: 46px;
    }
`;
