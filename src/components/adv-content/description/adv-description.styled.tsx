import styled from 'styled-components';


export const Description = styled.div`
    max-width: 792px;
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        gap: 14px;
    }
`;

export const DescriptionTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: 500;
    line-height: 220%;

    @media (max-width: 767px) {
        font-size: 18px;
        font-weight: 600;
        line-height: 140%;
    }
`;

export const DescriptionText = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;
