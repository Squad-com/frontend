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
      {images[0] && (
        <Grid
          className={classes.imageWrapper}
          container
          direction='row'
          justifyContent='center'
        >
          <img className={classes.image} src={images[0]} alt='Test' />
        </Grid>
      )}
    </Grid>
  );
};

export default PostBody;
