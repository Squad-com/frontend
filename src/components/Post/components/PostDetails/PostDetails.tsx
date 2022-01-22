import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import theme from '../../../../theme';
import PostBody from './components/PostBody';
import PostFooter from './components/PostFooter';
import PostHeader from './components/PostHeader';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
});
const PostDetails = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </Grid>
  );
};

export default PostDetails;
