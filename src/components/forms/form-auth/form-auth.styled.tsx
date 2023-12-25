import styled from 'styled-components';


export const Form = styled.div`
    width: 366px;
    min-height: 439px;
    padding-top: 43px;
    padding-bottom: 47px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    flex-flow: column;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const FormLogo = styled.div`
    align-self: center;
    margin-bottom: 34px;

    @media (max-width: 767px) {
        margin-bottom: 30px;
    }
`;
