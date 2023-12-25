import styled from 'styled-components';


export const Search = styled.input`
    flex-grow: 1;
    height: 32px;
    padding: 0 17px;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;

    &::placeholder {
        color: #B3B3B3;
    }

    &:-ms-input-placeholder {
        color: #B3B3B3;
    }

    &::-webkit-input-placeholder {
        color: #B3B3B3;
    }
`;
