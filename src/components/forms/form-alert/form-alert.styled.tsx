import styled from 'styled-components';


export const Form = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 40px;

    @media (max-width: 767px) {
        padding-top: 150px;
    }
`;

export const FormText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 200%;
    text-align: justify;

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 150%;
    }
`;

export const FormButtonBox = styled.div`
    width: 200px;
    height: 52px;

    @media (max-width: 767px) {
        height: 46px;
    }
`;
