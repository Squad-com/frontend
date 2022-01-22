import { Grid, Paper, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { makeStyles } from '@mui/styles';
import theme from '../../../../theme';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
  count: {
    margin: theme.spacing(2, 0),
  },
});

const PostLikePanel = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2}>
      <Grid className={classes.root} item>
        <Grid container direction='column'>
          <ThumbUpOutlinedIcon />
          <Typography className={classes.count} variant='subtitle1'>
            13
          </Typography>
          <ThumbDownOutlinedIcon />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostLikePanel;
