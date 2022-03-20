import { Grid, Typography } from '@mui/material';
import LoginForm from 'src/components/LoginForm';
import AuthWrapper from 'src/containers/AuthWrapper';

const styles = {
  title: {
    marginBottom: 3,
  },
};

const Login = () => (
  <AuthWrapper>
    <Grid container direction='column'>
      <Typography sx={styles.title} variant='h1'>
        Log in
      </Typography>
      <Typography variant='body1' color='GrayText'>
        Welcome to Squad! Please put your login credentials below to start using
        app.
      </Typography>
      <LoginForm />
    </Grid>
  </AuthWrapper>
);

export default Login;
