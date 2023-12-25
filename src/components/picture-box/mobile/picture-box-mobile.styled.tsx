import styled from 'styled-components';


export const Box = styled.div`
    display: none;

    @media (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BoxContainer = styled.div`
    position: relative;
    flex-grow: 1;
    min-height: 320px;
    background: #f0f0f0;
`;

export const BoxDotes = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const BoxDote = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #fff;
`;
