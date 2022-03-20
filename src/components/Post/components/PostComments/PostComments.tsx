import { Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { createPostComment } from 'src/api/post';
import CommentForm, { CommentFormProps } from 'src/components/CommentForm';
import CommentList from 'src/components/CommentList';
import { postCommentsState } from 'src/recoil/post';

const styles = {
  root: {
    padding: 2,
  },
};

export type PostCommentsProps = {
  postId: string;
};

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const [{ state, contents: comments }, setComments] = useRecoilStateLoadable(
    postCommentsState(postId)
  );

  const handleSubmit: CommentFormProps['onSubmit'] = ({ comment }) =>
    createPostComment(postId, comment).then((result) => {
      const newComments = [...comments];
      newComments.unshift(result);
      setComments(newComments);
    });

  if (state === 'loading') {
    return <div />;
  }

  return (
    <Grid
      sx={styles.root}
      component={Paper}
      elevation={8}
      container
      direction='column'
    >
      <CommentForm onSubmit={handleSubmit} />
      <CommentList comments={comments} />
    </Grid>
  );
};

export default PostComments;
