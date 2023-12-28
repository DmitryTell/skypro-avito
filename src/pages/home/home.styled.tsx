import styled from 'styled-components';


export const TopBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const ButtonBox = styled.div`
    width: 158px;
    height: 50px;
`;

export const Main = styled.main`
    display: flex;
    flex-flow: column;
    gap: 25px;

    @media (max-width: 767px) {
        margin-bottom: 30px;
        padding-top: 20px;
        gap: 20px;
    }
`;

export const MainTitle = styled.h1`
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 220%;

    @media (max-width: 1024px) {
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 120%;
    }
`;
