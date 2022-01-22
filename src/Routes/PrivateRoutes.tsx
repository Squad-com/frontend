import { Routes as Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
    </Switch>
  );
};

export default PrivateRoutes;
