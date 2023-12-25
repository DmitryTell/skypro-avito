import styled from 'styled-components';


export const Header = styled.header`
    width: 100%;
    height: 79px;
    background: #009ee4;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const HeaderContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    padding-left: 140px;
    padding-right: 140px;
    display: flex;
    justify-content: end;

    @media (max-width: 1024px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const HeaderButtonBox = styled.div`
    width: 224px;
    height: 40px;
`;

export const HeaderButtonBoxNewAdv = styled(HeaderButtonBox)`
    width: 232px;
`;

export const HeaderButtonBoxToProfile = styled(HeaderButtonBox)`
    width: 173px;
`;
