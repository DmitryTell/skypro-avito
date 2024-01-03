import styled from 'styled-components';


interface IBoxDoteProps {
  bgColor: boolean;
}

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

    @media (max-width: 524px) {
        height: 400px;
    }

    @media (max-width: 395px) {
        height: 300px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
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

export const BoxDote = styled.div<IBoxDoteProps>`
    width: 8px;
    height: 8px;
    background: ${(props) => (props.bgColor ? '#fff' : '#d2cccc')};
    border-radius: 50%;
    border: 1px solid #fff;
`;
