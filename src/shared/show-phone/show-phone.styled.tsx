import styled from 'styled-components';


export const ShowPhone = styled.button`
    width: 100%;
    height: 100%;
    background: #009ee4;
    border: none;
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Roboto";
    font-style: normal;
    line-height: 140%;
    transition: all 0.5s;

    &:hover {
        background: #0080c1;
    }
`;

export const ShowPhoneText = styled.span`
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 767px) {
        font-size: 14px;
        font-weight: 600;
    }
`;

export const ShowPhoneNumber = styled.span`
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 767px) {
        font-size: 12px;
        font-weight: 400;
    }
`;
