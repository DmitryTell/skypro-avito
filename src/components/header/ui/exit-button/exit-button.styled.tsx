import styled from 'styled-components';


export const ExitButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;
