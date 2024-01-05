import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@hook/';
import { removeAuthData } from '@redux/';

import * as Styled from './exit-button.styled';


export const ExitButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleExit = () => {
    navigate('/login', { replace: true });
    dispatch(removeAuthData());
  };

  return (
    <Styled.ExitButton type="button" onClick={ handleExit }>
      <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="19.5" stroke="white" />
      </svg>
    </Styled.ExitButton>
  );
};
