import styled, { css } from 'styled-components';


const animationButton = css`
    -webkit-animation: button-animation 1s linear infinite alternate both;
    animation: button-animation 1s linear infinite alternate both;
`;

export const LoadingButton = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    ${animationButton}
`;
