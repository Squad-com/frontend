import { Grid, MobileStepper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from 'theme';
import carouselItems from './assets/carouselItems.json';

const useStyles = makeStyles({
  root: {},
  imgWrapper: {},
  image: {
    objectFit: 'contain',
    maxWidth: 300,
  },
  textWrapper: {
    margin: theme.spacing(4, 0),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  activeStepper: {
    backgroundColor: 'white',
  },
  dot: {
    width: 6,
    height: 6,
  },
});

const AuthCarousel = () => {
  const item = carouselItems[0];
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction='column' flex={1}>
      <Grid
        className={classes.imgWrapper}
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        flex={1}
      >
        <img className={classes.image} src={item.image} alt={item.title} />
      </Grid>
      <Grid className={classes.textWrapper} item>
        <Typography
          className={classes.title}
          variant='h1'
          align='center'
          color='white'
        >
          {item.title}
        </Typography>
        <Typography
          className={classes.title}
          variant='body2'
          align='center'
          color='white'
        >
          {item.description}
        </Typography>
      </Grid>
      <MobileStepper
        steps={3}
        nextButton='next'
        backButton='back'
        position='static'
        classes={{
          root: classes.stepper,
          dot: classes.dot,
          dotActive: classes.activeStepper,
        }}
      />
    </Grid>
  );
};

export default AuthCarousel;
