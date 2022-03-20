import { Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { showCommentState } from 'src/recoil/comment';
import { postState } from 'src/recoil/post';
import PostComments from './components/PostComments';
import PostDetails from './components/PostDetails';
import PostLikePanel from './components/PostLikePanel';

const styles = {
  root: {
    marginTop: 2.5,
    marginBottom: 2.5,
    overflow: 'hidden',
  },
};

export type PostProps = {
  postId: string;
};

const Post: FC<PostProps> = ({ postId }) => {
  const post = useRecoilValue(postState(postId));
  const showComment = useRecoilValue(showCommentState(postId));

  return (
    <Paper sx={styles.root}>
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
          comments={post.comments}
        />
      </Grid>
      {showComment && <PostComments postId={postId} />}
    </Paper>
  );
};

export default Post;
