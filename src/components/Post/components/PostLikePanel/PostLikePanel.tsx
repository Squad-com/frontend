import { Grid, IconButton, Paper, Typography } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { makeStyles } from '@mui/styles';
import theme from '../../../../theme';
import { FC } from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import { likePostThunk } from '../../../../redux/thunks/postThunks';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
  count: {
    margin: theme.spacing(2, 0),
  },
});

export type PostLikePanelProps = {
  postId: string;
  score: number;
  voteStatus?: 'UP' | 'DOWN';
};

const PostLikePanel: FC<PostLikePanelProps> = ({
  postId,
  score,
  voteStatus,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Paper elevation={2}>
      <Grid className={classes.root} item>
        <Grid container direction='column' alignItems='center'>
          <IconButton
            onClick={() => dispatch(likePostThunk(postId))}
            // disabled={voteStatus === 'UP'}
          >
            {voteStatus === 'UP' ? (
              <ThumbUpAltIcon color='primary' />
            ) : (
              <ThumbUpAltOutlinedIcon />
            )}
          </IconButton>
          <Typography className={classes.count} variant='subtitle1'>
            {score}
          </Typography>
          <IconButton
            onClick={() => console.log('DOWN')}
            disabled={voteStatus === 'DOWN'}
          >
            {voteStatus === 'DOWN' ? (
              <ThumbDownAltIcon color='primary' />
            ) : (
              <ThumbDownAltOutlinedIcon />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostLikePanel;
