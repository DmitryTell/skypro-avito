import styled from 'styled-components';


export const SellerMobile = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        flex-flow: column;
        gap: 30px;
    }
`;

export const SellerMobileName = styled.p`
    display: flex;
    flex-flow: column;
    gap: 6px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
`;

export const SellerMobileText = styled.span`
    color: #5F5F5F;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
`;

export const SellerMobilePicture = styled.div`
    align-self: center;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background: #f0f0f0;
    overflow: hidden;
`;

export const SellerMobilePhoneBox = styled.div`
    align-self: center;
    width: 100%;
    max-width: 400px;
    height: 57px;
`;
