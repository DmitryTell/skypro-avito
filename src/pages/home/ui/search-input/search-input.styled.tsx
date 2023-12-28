import styled from 'styled-components';


export const SearchInput = styled.input`
    flex-grow: 1;
    height: 50px;
    padding: 13px 19px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: transparent;
    outline: none;
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    &::placeholder {
        color: rgba(0, 0, 0, 0.20);
    }

    &::-moz-placeholder {
        color: rgba(0, 0, 0, 0.20);
    }

    &::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.20);
    }
`;
