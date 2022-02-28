import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginForm from 'components/LoginForm';
import AuthWrapper from 'containers/AuthWrapper';
import theme from 'theme';

const useStyles = makeStyles({
  title: {
    marginBottom: theme.spacing(3),
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <AuthWrapper>
      <Grid container direction='column'>
        <Typography className={classes.title} variant='h1'>
          Log in
        </Typography>
        <Typography variant='body1' color='GrayText'>
          Welcome to Squad! Please put your login credentials below to start
          using app.
        </Typography>
        <LoginForm />
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
