import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {},
  item: {
    padding: '0 10px',
  },
  text: {
    marginLeft: 5,
  },
  icon: {
    color: '#9b9b9b',
    fontSize: 30,
  },
});

const PostFooter = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction='row'>
      <Grid className={classes.item} item>
        <Grid container direction='row' alignItems='center'>
          <CommentBankOutlinedIcon className={classes.icon} />
          <Typography
            className={classes.text}
            variant='subtitle1'
            color='textSecondary'
          >
            13 comments
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.item} item>
        <Grid container direction='row' alignItems='center'>
          <IosShareOutlinedIcon className={classes.icon} />
          <Typography
            className={classes.text}
            variant='subtitle1'
            color='textSecondary'
          >
            Share
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.item} item>
        <Grid container direction='row' alignItems='center'>
          <BookmarkBorderOutlinedIcon className={classes.icon} />
          <Typography
            className={classes.text}
            variant='subtitle1'
            color='textSecondary'
          >
            Save
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostFooter;
