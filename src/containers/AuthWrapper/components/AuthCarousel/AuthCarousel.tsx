import { Grid, MobileStepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import carouselItems from './assets/carouselItems.json';

const styles = {
  root: {},
  imgWrapper: {},
  image: {
    objectFit: 'contain',
    maxWidth: 300,
    height: 400,
  },
  textWrapper: {
    marginTop: 4,
    marginBottom: 4,
  },
  title: {
    marginBottom: 2,
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
};

const AuthCarousel = () => {
  const item = carouselItems[0];

  return (
    <Grid sx={styles.root} container direction='column' flex={1}>
      <Grid
        sx={styles.imgWrapper}
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        flex={1}
      >
        <Box
          sx={styles.image}
          component='img'
          src={item.image}
          alt={item.title}
        />
      </Grid>
      <Grid sx={styles.textWrapper} item>
        <Typography sx={styles.title} variant='h1' align='center' color='white'>
          {item.title}
        </Typography>
        <Typography
          sx={styles.title}
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
        sx={{
          root: styles.stepper,
          dot: styles.dot,
          dotActive: styles.activeStepper,
        }}
      />
    </Grid>
  );
};

export default AuthCarousel;
