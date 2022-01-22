import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';
import PostDetails from './components/PostDetails';
import PostLikePanel from './components/PostLikePanel';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(2.5, 0),
    overflow: 'hidden',
  },
});

const Post = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction='row' wrap='nowrap'>
        <PostLikePanel />
        <PostDetails />
      </Grid>
    </Paper>
  );
};

export default Post;
