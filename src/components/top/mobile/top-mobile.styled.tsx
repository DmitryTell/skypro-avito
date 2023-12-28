import styled from 'styled-components';


export const TopMobile = styled.div`
    display: none;

    @media (max-width: 767px) {
        margin: 30px 0;
        display: flex;
        align-items: center;
        gap: 24px;
    }
`;

export const TopMobileTitle = styled.h2`
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
`;
