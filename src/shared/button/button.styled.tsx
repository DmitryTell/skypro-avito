import styled from 'styled-components';


export const Button = styled.button`
    width: 100%;
    height: 100%;
    padding: 13px 37px;
    border: none;
    border-radius: 6px;
    background: #009ee4;
    color: #fff;
    font-family: Roboto-Regular;
    font-size: 16px;
    line-height: 150%;
    transition: all 0.5s;

    &:hover {
        background: #0080c1;
    }

    &:disabled {
        background: #d9d9d9;
    }
`;
