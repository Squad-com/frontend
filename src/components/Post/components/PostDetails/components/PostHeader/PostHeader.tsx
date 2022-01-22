import { Avatar, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';

const useStyles = makeStyles({
  root: {},
  fullName: {
    paddingLeft: 10,
  },
  postedBy: {
    paddingLeft: 10,
  },
});

export type PostHeaderProps = {
  fullName?: string;
  image?: string;
};
const PostHeader: FC<PostHeaderProps> = ({
  fullName = 'Suleyman Barış Eser',
  image = 'https://media-exp1.licdn.com/dms/image/C4D03AQGFx1xLk_3SwA/profile-displayphoto-shrink_800_800/0/1612644878181?e=1648080000&v=beta&t=nZWIfXpoNYUT80Si_iuWZHFyC5KFOZDzB1qPgJNEkRI',
}) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      alignItems='center'
    >
      <Avatar>
        <img src={image} alt={fullName} />
      </Avatar>
      <Typography className={classes.fullName} variant='subtitle1'>
        {fullName}
      </Typography>
      <Typography
        className={classes.postedBy}
        variant='body2'
        color='textSecondary'
      >
        • Posted by {fullName} 6 hour ago
      </Typography>
      <Button variant='contained'>Follow</Button>
    </Grid>
  );
};

export default PostHeader;
