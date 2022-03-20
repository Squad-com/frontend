import { Grid } from '@mui/material';
import { FC } from 'react';
import AuthCarousel from './components/AuthCarousel';

const styles = {
  root: {
    height: '100vh',
  },
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  item: {
    maxWidth: 500,
    flex: 1,
  },
  carousel: {
    backgroundColor: 'primary.main',
    color: 'white',
  },
};

const AuthWrapper: FC = ({ children }) => (
  <Grid sx={styles.root} container>
    <Grid sx={styles.fullHeight} item xs>
      <Grid sx={styles.item} container alignItems='center'>
        {children}
      </Grid>
    </Grid>
    <Grid sx={{ ...styles.fullHeight, ...styles.carousel }} item xs>
      <Grid sx={styles.item} container>
        <AuthCarousel />
      </Grid>
    </Grid>
  </Grid>
);

export default AuthWrapper;
