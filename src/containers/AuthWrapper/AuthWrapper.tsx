import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FC } from 'react';
import theme from 'theme';
import AuthCarousel from './components/AuthCarousel';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5),
  },
  item: {
    maxWidth: 500,
    flex: 1,
  },
  carousel: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
});

const AuthWrapper: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.fullHeight} item xs>
        <Grid className={classes.item} container alignItems='center'>
          {children}
        </Grid>
      </Grid>
      <Grid className={clsx(classes.fullHeight, classes.carousel)} item xs>
        <Grid className={classes.item} container>
          <AuthCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthWrapper;
