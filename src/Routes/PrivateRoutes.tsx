import { Grid } from '@mui/material';
import Header from 'Layouts/Main/components/Header';
import { Suspense } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';

const PrivateRoutes = () => {
  return (
    <Grid container direction='column'>
      <Header />
      <Switch>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Switch>
    </Grid>
  );
};

export default PrivateRoutes;
