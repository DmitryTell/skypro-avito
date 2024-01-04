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
