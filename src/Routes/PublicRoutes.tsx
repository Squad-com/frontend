import { Routes as Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path='/login' element={<Login />} />
    </Switch>
  );
};

export default PublicRoutes;
