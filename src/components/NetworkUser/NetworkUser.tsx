import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NetworkUserType } from 'src/api/post';

const styles = {
  iconButton: {
    padding: 0,
    marginRight: 2,
  },
};

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
  const fullName = [firstName, lastName].join(' ');
  const navigate = useNavigate();

  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item>
        <IconButton
          sx={styles.iconButton}
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
