import styled from 'styled-components';


export const Wrapper = styled.div`
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;

    @media (max-width: 1024px) {
        top: 0;
    }

    @media (max-width: 767px) {
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

export const Container = styled.div`
    width: 800px;
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
`;

export const ContentForm = styled.div`
    display: flex;
    flex-flow: column;
    gap: 14px;

    @media (max-width: 767px) {
        gap: 16px;
    }
`;

export const ContentFormTitle = styled.h4`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 200%;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ContentFormArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 100px;
    padding: 10px 19px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    outline: none;
    background: transparent;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
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
        padding: 10px 17px;
        border-radius: 20px;
        font-size: 14px;
    }
`;

export const ContentFormButtonBox = styled.div`
    width: 181px;
    height: 50px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const ContentComments = styled.ul`
    height: 300px;
    overflow: auto;
    display: flex;
    flex-flow: column;
    gap: 30px;
    scrollbar-width: 4px;
    scrollbar-color: #4b4949 #fff;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #4b4949;;
        border-radius: 10px;
    }
`;

export const ContentComment = styled.li`
    width: 100%;
    min-height: 124px;
    display: flex;
    flex-flow: column;
    gap: 12px;

    @media (max-width: 767px) {
        width: 100%;
        min-height: 192px;
    }
`;

export const ContentCommentTopBox = styled.div`
    display: flex;
    align-items: start;
    gap: 12px;
`;

export const ContentCommentAva = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
`;

export const ContentCommentAuthor = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 200%;
    display: flex;
    gap: 10px;

    & span {
        color: #5F5F5F;
        font-weight: 400;
    }

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const ContentCommentEmptyText = styled.p`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 22px;
    font-weight: 400;
    line-height: 200%;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const ContentCommentText = styled.p`
    padding-left: 52px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;
