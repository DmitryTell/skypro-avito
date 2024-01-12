import styled from 'styled-components';


export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    overflow: auto;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
    }

    &::-moz-scrollbar {
        width: 0;
    }
`;

export const Container = styled.div`
    width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    display: flex;

    @media (max-width: 1024px) {
        width: 100%;
        border-radius: 0;
    }

    @media (max-width: 767px) {
        flex-flow: column;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;
    position: relative;
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 767px) {
        gap: 18px;
    }
`;

export const ContentInfoLabel = styled.label`
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    flex-flow: column;

    @media (max-width: 767px) {
        font-size: 14px;   
    }
`;

export const ContentInfoInput = styled.input`
    width: 100%;
    height: 50px;
    padding-left: 19px;
    padding-right: 19px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: transparent;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    &::placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    &::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    &:-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    @media (max-width: 767px) {
        height: 40px;
        padding-left: 17px;
        padding-right: 17px;
        border-radius: 30px;
        font-size: 14px;
    }
`;

export const ContentInfoArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 200px;
    padding: 13px 19px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: transparent;
    outline: none;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    &::placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    &::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    &:-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.30);
    }

    @media (max-width: 767px) {
        height: 107px;
        padding: 13px 17px;
        border-radius: 20px;
        font-size: 14px;
    }
`;

export const ContentInfoPictureBox = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
`;

export const ContentInfoText = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    align-items: center;
    gap: 10px;

    & span {
        color: rgba(0, 0, 0, 0.30);
    }

    @media (max-width: 767px) {
        font-size: 14px;
        flex-flow: column;
        align-items: start;
        gap: 0;
    }
`;

export const ContentInfoPictureList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 767px) {
        width: 100%;
        flex-wrap: nowrap;
        overflow: auto;
        scrollbar-width: 0;

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-moz-scrollbar {
            width: 0;
        }
    }
`;

export const ContentInfoPicture = styled.li`
    position: relative;
    width: 90px;
    height: 90px;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContentInfoPictureClose = styled.button`
    position: absolute;
    top: 2px;
    right: 4px;
    border: none;
    background: transparent;
    color: #fff;
    transition: all 0.5s;

    &:hover {
        color: #009ee4;
    }
`;

export const ContentInfoPictureInput = styled.input`
    display: none;
`;

export const ContentInputPrice = styled.input`
    width: 200px;
    height: 50px;
    padding-left: 15px;
    padding-right: 25px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: transparent;
    outline: none;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 767px) {
        width: 100%;
        height: 40px;
        border-radius: 30px;
        font-size: 14px;
    }
`;

export const ContentPriceRub = styled.span`
    position: absolute;
    bottom: 95px;
    right: 315px;
    z-index: 1;

    @media (max-width: 1024px) {
        bottom: 95px;
        left: 180px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ContentPriceRubMob = styled.span`
    display: none;

    @media (max-width: 767px) {
        display: inline;
        position: absolute;
        bottom: 90px;
        right: 20px;
    }
`;

export const ContentButtonBox = styled.div`
    width: 181px;
    height: 50px;

    @media (max-width: 767px) {
        align-self: center;
    }
`;
