import { Divider, Grid } from '@mui/material';
import { FC } from 'react';
import { CommentType } from 'src/api/comment';
import Comment from '../Comment';

const styles = {
  root: {
    py: 2,
    position: 'relative',
  },
  divider: {
    height: '100%',
    position: 'absolute',
    left: 20,
    top: 0,
  },
};

export type CommentListProps = {
  comments: CommentType[];
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <Grid sx={styles.root} container direction='column'>
      <Divider sx={styles.divider} orientation='vertical' />
      {comments.map((comment) => (
        <Grid key={`${comment._id}-item`} item>
          <Comment key={`${comment._id}-comment`} {...comment} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentList;
