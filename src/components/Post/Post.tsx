import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PostType } from 'api/post';
import { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { showCommentState } from 'recoil/atoms/post';
import theme from 'theme';
import CommentList from '../CommentList';
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
  const showComment = useRecoilValue(showCommentState(post.id));

  return (
    <Paper className={classes.root}>
      <Grid container direction='row' wrap='nowrap'>
        <PostLikePanel
          postId={post.id}
          score={post.score}
          voteStatus={post.voteState}
        />
        <PostDetails
          postId={post.id}
          author={post.author}
          description={post.description}
          images={post.images}
        />
      </Grid>
      {showComment && (
        <Suspense fallback={<div>Loading ...</div>}>
          <CommentList commentId={post.rootComment._id} />
        </Suspense>
      )}
    </Paper>
  );
};

export default Post;
