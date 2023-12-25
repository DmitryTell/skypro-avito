import styled from 'styled-components';


export const AdvList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px 26px;

    @media (max-width: 767px) {
        gap: 10px;
    }
`;

export const AdvItem = styled.li`
    width: 270px;
    height: 441px;
    display: flex;
    flex-flow: column;
    gap: 20px;
    cursor: pointer;
    transition: all 0.8s;

    &:hover {
        transform: scale(1.05);
        -webkit-box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.6);
        -moz-box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.6);
        box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 767px) {
        width: 137px;
        height: 273px;
        gap: 10px;
    }
`;

export const AdvItemImg = styled.div`
    width: 270px;
    height: 270px;
    background-color: #f0f0f0;

    @media (max-width: 767px) {
        width: 100%;
        height: 132px;
    }
`;

export const AdvItemInfo = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
`;

export const AdvItemText = styled.span`
    color: #009ee4;
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    line-height: 120%;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const AdvItemPrice = styled.span`
    color: #000;
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    line-height: 150%;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const AdvItemPlaceDate = styled.p`
    display: flex;
    flex-flow: column;
    gap: 4px;

    & span {
        color: #5F5F5F;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 130%;

        @media (max-width: 767px) {
            font-size: 12px;
        }
    }
`;
