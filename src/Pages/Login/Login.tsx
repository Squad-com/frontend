import { CssBaseline, Divider, Grid, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import LoginForm from '../../components/LoginForm';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
  },
  container: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(5, 3),
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth='xs'>
      <CssBaseline />
      <Grid
        className={classes.container}
        container
        direction='row'
        alignItems='center'
      >
        <Paper className={classes.paper} elevation={2}>
          <Typography variant='h1'>Login</Typography>
          <Grid container direction='column'>
            Social Login
          </Grid>
          <Divider className={classes.divider}>OR</Divider>
          <LoginForm />
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
