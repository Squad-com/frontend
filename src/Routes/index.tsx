import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes = () => {
  const { isLoggedIn, onMount } = useAuth();

  useEffect(onMount);

  return (
    <BrowserRouter>
      {isLoggedIn && <PrivateRoutes />}
      {!isLoggedIn && <PublicRoutes />}
    </BrowserRouter>
  );
};

export default Routes;
