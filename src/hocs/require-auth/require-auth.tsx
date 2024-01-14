import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@hook/';
import { getStateAuth } from '@redux/';


export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getStateAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
