import {
  Avatar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import useAuth from 'src/hooks/useAuth';

const styles = {
  button: {
    height: 50,
  },
  username: {
    marginRight: 2,
  },
};

const AccountSettingsDropdown = () => {
  const { onLogout, isLoggedIn, userInfo } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isLoggedIn) return <div />;

  return (
    <Grid item>
      <Button
        id='account-settings-button'
        sx={styles.button}
        aria-controls={open ? 'account-settings-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography sx={styles.username} variant='body1'>
          {userInfo?.username}
        </Typography>
        <Avatar src={userInfo?.image} alt={userInfo?.email} />
      </Button>
      <Menu
        id='account-settings-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-settings-menu',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </Grid>
  );
};

export default AccountSettingsDropdown;
