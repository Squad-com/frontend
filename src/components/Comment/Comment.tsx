import { Button, Grid, Link, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { CommentType } from 'src/api/comment';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import NetworkUser from '../NetworkUser';

const styles = {
  root: {
    py: 2,
  },
  body: {},
  content: {
    pb: 1,
  },
  link: {
    mr: 3,
  },
  comments: {
    pl: 3,
  },
};

export type CommentProps = CommentType;

const Comment: FC<CommentProps> = ({ author, content, comments }) => {
  const [showReplies, setShowReplies] = useState(false);
  const fullName = [author.firstName, author.lastName].join(' ');

  const handleReply = () => {
    setShowReplies(true);
  };

  return (
    <Grid sx={styles.root} container>
      <Grid container direction='row'>
        <Grid item>
          <NetworkUser {...author} />
        </Grid>
        <Grid sx={styles.body} item xs>
          <Typography variant='subtitle2'>{fullName}</Typography>
          <Grid sx={styles.content} container>
            {content}
          </Grid>
          <Grid container>
            <Link sx={styles.link} component='button' underline='hover'>
              Like
            </Link>
            <Link onClick={handleReply} component='button' underline='hover'>
              Reply
            </Link>
          </Grid>
          <Grid container>
            {comments?.length > 0 && !showReplies && (
              <Button onClick={handleReply} variant='text'>
                <Typography color='white'>{comments.length} replies</Typography>
              </Button>
            )}
          </Grid>
          {showReplies && (
            <Grid sx={styles.comments} container direction='column'>
              {comments?.length > 0 && <CommentList comments={comments} />}
              <CommentForm
                onSubmit={console.log}
                styles={{ root: { py: 2 } }}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
