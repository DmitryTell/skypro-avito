import styled from 'styled-components';


export const Wrapper = styled.div`
    position: fixed;
    top: 250px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;

    @media (max-width: 767px) {
        top: 0;
    }
`;

export const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 20px 25px;
    background: #fff;
    border-radius: 12px;
    display: flex;

    @media (max-width: 767px) {
        width: 100%;
        height: 100vh;
        border-radius: 0;
        flex-flow: column;
    }
`;
