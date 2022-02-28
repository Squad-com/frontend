import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Switch>
  );
};

export default PublicRoutes;
