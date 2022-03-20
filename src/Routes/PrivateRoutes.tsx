import { Grid } from '@mui/material';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import Header from 'src/Layouts/Main/components/Header';
import Home from 'src/Pages/Home';

const PrivateRoutes = () => {
  return (
    <Grid container direction='column'>
      <Header />
      <Switch>
        <Route index element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Switch>
    </Grid>
  );
};

export default PrivateRoutes;
