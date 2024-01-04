import styled from 'styled-components';


export const Modal = styled.div`
    width: 100%;
    padding: 20px 50px 42px;
    display: flex;
    flex-flow: column;
    gap: 15px;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        margin-bottom: 30px;
        padding: 30px 17px 0;
        gap: 30px;
    }
`;

export const ModalTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ModalTopMobile = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        gap: 24px;
    }
`;

export const ModalTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: 500;
    line-height: 220%;

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 120%;
    }
`;
