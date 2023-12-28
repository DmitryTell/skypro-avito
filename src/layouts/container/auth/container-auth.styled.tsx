import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        padding-top: 0;
    }

    @media (max-width: 767px) {
        flex-flow: column;
    }
`;
