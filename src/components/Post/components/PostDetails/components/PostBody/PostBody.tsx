import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const PostBody = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction='column'>
      <Typography variant='body1'>
        "Come on. Come on. I want you to do it. I want you to do it. Come on,
        hit me" Why didn't Batman hit Joker in that scene? (Image courtesy of
        Warner Bros. Pictures)
      </Typography>
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
