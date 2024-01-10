import styled from 'styled-components';


export const Inputs = styled.div`
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

export const ErrorBox = styled.div`
    width: 100%;
    min-height: 80px;
    padding: 20px 0 10px;

    @media (max-width: 767px) {
        min-height: 60px;
    }
`;

export const ErrorText = styled.span`
    color: #fa1010;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
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
