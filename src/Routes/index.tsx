import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <PrivateRoutes />
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default Routes;
