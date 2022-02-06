import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';

const useStyles = makeStyles({
  root: {
    padding: '10px 0',
  },
  image: {
    maxWidth: 650,
    maxHeight: 500,
  },
  imageWrapper: {
    margin: '10px 0',
  },
});

export type PostBodyProps = {
  description: string;
  images: string[];
};

const PostBody: FC<PostBodyProps> = ({ description, images }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction='column'>
      <Typography variant='body1'>{description}</Typography>
      <Grid
        className={classes.imageWrapper}
        container
        direction='row'
        justifyContent='center'
      >
        <img
          className={classes.image}
          src='https://i.redd.it/d0xy56wcsmc81.jpg'
          alt='Test'
        />
      </Grid>
    </Grid>
  );
};

export default PostBody;
