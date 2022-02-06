import { Avatar, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import { PostAuthor } from '../../../../../../types/post';

const useStyles = makeStyles({
  root: {},
  fullName: {
    paddingLeft: 10,
  },
  postedBy: {
    paddingLeft: 10,
  },
});

export type PostHeaderProps = { author: PostAuthor };

const PostHeader: FC<PostHeaderProps> = ({ author }) => {
  const classes = useStyles();
  const fullName = [author.firstName, author.lastName].join(' ');

  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      alignItems='center'
    >
      <Avatar src={author.image} alt={fullName} />
      <Typography className={classes.fullName} variant='subtitle1'>
        {fullName}
      </Typography>
      <Grid item xs container direction='row' justifyContent='flex-end'>
        <Button variant='contained'>Follow</Button>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
