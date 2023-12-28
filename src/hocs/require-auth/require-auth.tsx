import { Navigate, Outlet } from 'react-router-dom';


export const RequireAuth = () => {
  // Mock user so far
  const user = false;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
