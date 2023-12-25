import styled from 'styled-components';


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
    background: #f0f0f0;
    overflow: hidden;
`;

export const SellerInfo = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;
`;

export const SellerName = styled.p`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    line-height: 200%;
    display: flex;
    flex-flow: column;
`;

export const SellerText = styled.span`
    color: #5F5F5F;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 200%;
`;

export const SellerPhoneBox = styled.div`
    width: 214px;
    height: 62px;
`;
