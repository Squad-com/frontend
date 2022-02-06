import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import theme from '../../theme';
import { PostType } from '../../types/post';
import PostDetails from './components/PostDetails';
import PostLikePanel from './components/PostLikePanel';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(2.5, 0),
    overflow: 'hidden',
  },
});

export type PostProps = {
  post: PostType;
};

const Post: FC<PostProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction='row' wrap='nowrap'>
        <PostLikePanel
          postId={post.id}
          score={post.score}
          voteStatus={post.voteState}
        />
        <PostDetails
          author={post.author}
          description={post.description}
          images={post.images}
        />
      </Grid>
    </Paper>
  );
};

export default Post;
