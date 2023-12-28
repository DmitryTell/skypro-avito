import styled from 'styled-components';


export const ButtonBox = styled.div`
    width: 241px;
    height: 50px;
`;

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

export const MainButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 900px) {
        flex-flow: column;
    }
`;

export const MainEditButtonBox = styled.div`
    width: 189px;
    height: 50px;

    @media (max-width: 900px) {
        width: 225px;
    }

    @media (max-width: 767px) {
        width: 278px;
        height: 46px;
    }
`;

export const MainRemoveButtonBox = styled.div`
    width: 225px;
    height: 50px;

    @media (max-width: 767px) {
        width: 278px;
        height: 46px;
    }
`;
