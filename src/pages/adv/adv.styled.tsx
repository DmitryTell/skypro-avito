import styled from 'styled-components';


export const Main = styled.main`
    display: flex;
    flex-flow: column;
    gap: 60px;

    @media (max-width: 767px) {
        margin-bottom: 30px;
        padding-top: 20px;
        gap: 30px;
    }
`;

export const MainContent = styled.div`
    display: flex;
    gap: 59px;

    @media (max-width: 767px) {
        flex-flow: column;
        gap: 20px;
    }
`;

export const MainPhoneBox = styled.div`
    width: 214px;
    height: 62px;

    @media (max-width: 767px) {
        width: 100%;
        height: 57px;
    }
`;

export const MainPhoneButtonBox = styled.div`
    width: 214px;
    height: 62px;

    @media (max-width: 767px) {
        align-self: center;
        width: 278px;
        height: 57px;
    }
`;
