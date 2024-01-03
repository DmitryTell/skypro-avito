import styled from 'styled-components';


interface IBoxPictureProps {
  hasBorder: boolean;
}

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

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const BoxPictures = styled.div`
    display: flex;
    gap: 10px;
`;

export const BoxPicture = styled.div<IBoxPictureProps>`
    width: 88px;
    height: 88px;
    background: #f0f0f0;
    border: ${(props) => (props.hasBorder ? '2px solid #009EE4' : 'none')};
    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
