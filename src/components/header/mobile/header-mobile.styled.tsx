import styled from 'styled-components';


export const HeaderMobile = styled.div`
    display: none;

    @media (max-width: 767px) {
        width: 100%;
        height: 55px;
        padding-left: 17px;
        padding-right: 17px;
        background: #009ee4;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }
`;
