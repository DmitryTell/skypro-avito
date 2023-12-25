import styled from 'styled-components';


export const Box = styled.div`
    display: flex;
    flex-flow: column;
    gap: 30px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const BoxMainPicture = styled.div`
    width: 480px;
    height: 480px;
    background: #f0f0f0;
`;

export const BoxPictures = styled.div`
    display: flex;
    gap: 10px;
`;

export const BoxPicture = styled.div`
    width: 88px;
    height: 88px;
    background: #f0f0f0;
    cursor: pointer;
`;
