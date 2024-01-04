import styled, { css } from 'styled-components';


const animation = css`
    -webkit-animation: adv-animation 1s linear infinite alternate both;
    animation: adv-animation 1s linear infinite alternate both;
`;

export const Box = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const BoxMainPicture = styled.div`
    width: 480px;
    height: 480px;
    ${animation}
`;

export const BoxPictures = styled.div`
    display: flex;
    gap: 10px;
`;

export const BoxPicture = styled.div`
    width: 88px;
    height: 88px;
    ${animation}
`;

export const BoxMob = styled.div`
    display: none;

    @media (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BoxContainerMob = styled.div`
    position: relative;
    flex-grow: 1;
    min-height: 320px;
    ${animation}
`;
