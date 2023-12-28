import styled from 'styled-components';


export const Input = styled.input`
    width: 100%;
    height: 60px;
    padding: 8px 0;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #d9d9d9;
    font-family: "Roboto";
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;

    &::placeholder {
        color: #d9d9d9;
    }

    &::-webkit-input-placeholder {
        color: #d9d9d9;
    }

    &:-ms-input-placeholder {
        color: #d9d9d9;
    }

    @media (max-width: 767px) {
        height: 40px;
        padding: 5px 17px;
        border-radius: 30px;
        border: 1px solid #D9D9D9;
        font-size: 14px;
    }
`;
