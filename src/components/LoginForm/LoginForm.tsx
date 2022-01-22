import { Button, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormEvent, useState } from 'react';
import { login } from '../../api/auth';
import theme from '../../theme';

const useStyles = makeStyles({
  underline: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderRadius: 8,
    '&::before, &::after': {
      borderBottom: 'none !important',
    },
  },
  button: {
    height: 50,
    marginTop: theme.spacing(4),
  },
});
const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const username = (elements.namedItem('username') as HTMLInputElement).value;
    const password = (elements.namedItem('password') as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <Grid item xs>
      <form onSubmit={handleSubmit}>
        <TextField
          id='email'
          InputProps={{
            classes: {
              underline: classes.underline,
            },
          }}
          name='username'
          margin='normal'
          variant='filled'
          label='Email Address'
          autoComplete='email'
          required
          fullWidth
          autoFocus
        />
        <TextField
          id='password'
          InputProps={{
            endAdornment: (
              <Button
                variant='text'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {!showPassword ? 'SHOW' : 'HIDE'}
              </Button>
            ),
            classes: {
              underline: classes.underline,
            },
          }}
          type={!showPassword ? 'password' : 'text'}
          name='password'
          margin='normal'
          variant='filled'
          label='Password'
          autoComplete='current-password'
          required
          fullWidth
          autoFocus
        />
        <Button
          className={classes.button}
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Grid>
  );
};

export default LoginForm;
