import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NetworkUserType } from 'api/post';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';

const useStyles = makeStyles({
  iconButton: {
    padding: 0,
    marginRight: theme.spacing(2),
  },
});

export type NetworkUserProps = {
  showName?: boolean;
} & NetworkUserType;

const NetworkUser: FC<NetworkUserProps> = ({
  _id,
  firstName,
  image,
  lastName,
  username,
  showName,
}) => {
  const classes = useStyles();
  const fullName = [firstName, lastName].join(' ');
  const navigate = useNavigate();

  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item>
        <IconButton
          className={classes.iconButton}
          onClick={() => navigate(`/profile/${username}`)}
        >
          <Avatar src={image} alt={fullName} />
        </IconButton>
      </Grid>
      {showName && (
        <Grid item xs>
          <Typography variant='subtitle2'>{fullName}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default NetworkUser;
