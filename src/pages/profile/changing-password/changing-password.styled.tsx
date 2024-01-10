import styled from 'styled-components';


export const Wrapper = styled.div`
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;

    @media (max-width: 1024px) {
        top: 0;
    }
`;

export const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    display: flex;

    @media (max-width: 1024px) {
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }

    @media (max-width: 767px) {
        flex-flow: column;
    }
`;

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

export const ButtonBox = styled.div`
    width: 252px;
    height: 52px;
    align-self: center;

    @media (max-width: 767px) {
        height: 46px;
        margin-bottom: 50px;
    }
`;
