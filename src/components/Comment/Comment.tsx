import { Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CommentType } from 'api/comment';
import { FC, useState } from 'react';
import theme from '../../theme';
import CommentList from '../CommentList';
import NetworkUser from '../NetworkUser';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2, 0),
    borderRadius: theme.spacing(3),
  },
});

export type CommentProps = CommentType;

const Comment: FC<CommentProps> = ({
  _id,
  author,
  content,
  createdAt,
  parent,
  replies,
  updatedAt,
}) => {
  const classes = useStyles();
  const [showReplies, setShowReplies] = useState(false);

  const handleReplies = () => setShowReplies((prev) => !prev);

  return (
    <Grid className={classes.root} container>
      <Grid container direction='column'>
        <Grid item>
          <NetworkUser {...author} showName />
        </Grid>
        <Paper component={Grid} elevation={4} className={classes.content} item>
          {content}
        </Paper>
      </Grid>
      <Grid container>
        {replies?.length > 0 && !showReplies && (
          <Button onClick={handleReplies} variant='text'>
            <Typography color='white'>{replies.length} replies</Typography>
          </Button>
        )}
      </Grid>
      {showReplies && <CommentList commentId={_id} />}
    </Grid>
  );
};

export default Comment;
