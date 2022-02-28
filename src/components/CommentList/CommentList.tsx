import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { commentsState } from '../../recoil/selectors/comment';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
  },
});

export type CommentListProps = {
  commentId: string;
};

const CommentList: FC<CommentListProps> = ({ commentId }) => {
  const classes = useStyles();
  const comments = useRecoilValue(commentsState(commentId));
  console.log(comments);

  return (
    <Grid className={classes.root} container direction='column'>
      {/* {comments.map((comment) => (
        <Grid item>
          <Comment {...comment} />
        </Grid>
      ))} */}
    </Grid>
  );
};

export default CommentList;
