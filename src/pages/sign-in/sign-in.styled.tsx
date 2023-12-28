import styled from 'styled-components';


export const Inputs = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 30px;

    @media (max-width: 1024px) {
        align-self: center;
        width: 400px;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 40px;
        gap: 14px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;

    @media (max-width: 1024px) {
        align-self: center;
        width: 400px;
    }

    @media (max-width: 767px) {
        width: 100%;
        gap: 10px;
    }
`;

export const ButtonBox = styled.div`
    width: 100%;
    height: 52px;

    @media (max-width: 767px) {
        height: 46px;
    }
`;
