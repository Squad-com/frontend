import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { login } from 'api/auth';
import theme from 'theme';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import getErrorMessage from 'utils/getErrorMessage';
import LoadingButton from 'components/LoadingButton';

const styles = {
  underline: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderRadius: 8,
    '&::before, &::after': {
      borderBottom: 'none !important',
    },
  },
  formItem: {
    margin: [4, 0],
  },
  button: {
    height: 50,
    marginTop: 4,
  },
};

export type FormElements = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { onLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormElements>();

  const onSubmit = ({ username, password }: FormElements) => {
    setIsLoading(true);
    login({ username, password })
      .then(({ token }) => onLogin(token))
      .catch((err: AxiosError) => {
        const message = getErrorMessage(err);
        enqueueSnackbar(message, { variant: 'error' });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Grid item xs>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={styles.formItem}
          container
          direction='row'
          alignItems='center'
        >
          <Grid item xs={4}>
            <Typography variant='caption'>E-mail</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('username', { required: true, minLength: 5 })}
              id='username'
              autoComplete='username'
              fullWidth
              autoFocus
            />
            {errors.username && (
              <Typography variant='body2' color='red'>
                Please enter a valid username!
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid
          sx={styles.formItem}
          container
          direction='row'
          alignItems='center'
        >
          <Grid item xs={4}>
            <Typography variant='caption'>Password</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('password', { required: true, minLength: 8 })}
              id='password'
              autoComplete='password'
              type='password'
              fullWidth
            />
            {errors.password && (
              <Typography variant='body2' color='red'>
                Please enter a valid password!
              </Typography>
            )}
          </Grid>
        </Grid>
        <LoadingButton
          sx={styles.button}
          type='submit'
          variant='contained'
          color='primary'
          isLoading={isLoading}
          fullWidth
        >
          Sign in
        </LoadingButton>
      </form>
    </Grid>
  );
};

export default LoginForm;
