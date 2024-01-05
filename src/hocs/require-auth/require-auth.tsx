import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@hook/';
import { getStateUser } from '@redux/';


export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getStateUser);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
