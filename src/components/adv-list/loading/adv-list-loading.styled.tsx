import styled, { css } from 'styled-components';


const animation = css`
    -webkit-animation: adv-animation 1s linear infinite alternate both;
    animation: adv-animation 1s linear infinite alternate both;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px 26px;

    @media (max-width: 1024px) {
        justify-content: center;
    }

    @media (max-width: 767px) {
        gap: 10px;
    }
`;

export const Item = styled.li`
    width: 270px;
    height: 441px;
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        width: 137px;
        height: 273px;
        gap: 10px;
    }
`;

export const ItemImg = styled.div`
    width: 270px;
    height: 270px;
    ${animation}

    @media (max-width: 767px) {
        width: 100%;
        height: 132px;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
`;

export const ItemText = styled.div`
    width: 100%;
    height: 22px;
    ${animation}

    @media (max-width: 767px) {
        height: 14px;
    }
`;

export const ItemPrice = styled.div`
    width: 100%;
    height: 22px;
    ${animation}

    @media (max-width: 767px) {
        height: 16px;
    }
`;

export const ItemPlaceDate = styled.div`
    display: flex;
    flex-flow: column;
    gap: 4px;

    & div {
        width: 100%;
        height: 16px;
        ${animation}

        @media (max-width: 767px) {
            height: 12px;
        }
    }
`;
