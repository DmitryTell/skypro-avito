import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding-left: 140px;
    padding-right: 140px;
    padding-bottom: 60px;

    @media (max-width: 1024px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding-left: 17px;
        padding-right: 17px;
        padding-bottom: 0;
    }
`;
