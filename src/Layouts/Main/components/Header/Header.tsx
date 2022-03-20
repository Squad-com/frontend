import AddIcon from '@mui/icons-material/AddOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SxProps,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AccountSettingsDropdown from 'src/components/AccountSettingsDropdown';

const styles = {
  select: {
    width: 150,
    display: 'flex',
    '& fieldset': {
      border: 'none',
    },
  },
  iconButton: {
    marginLeft: 1,
    marginRight: 1,
  },
  divider: {
    height: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  button: {
    height: 50,
  },
} as Record<'select' | 'iconButton' | 'divider' | 'button', SxProps>;

const Header = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Button>LOGO</Button>
          <Grid item xs />
          <Divider sx={styles.divider} orientation='vertical' />
          <Select sx={styles.select} value='home'>
            <MenuItem value='home' selected>
              Home
            </MenuItem>
            <MenuItem value='Work'>Work</MenuItem>
            <MenuItem value='Gaming'>Gaming</MenuItem>
          </Select>
          <Divider sx={styles.divider} orientation='vertical' />
          <Grid item>
            <IconButton sx={styles.iconButton}>
              <NotificationsIcon />
            </IconButton>
            <IconButton sx={styles.iconButton}>
              <ChatBubbleIcon />
            </IconButton>
            <IconButton sx={styles.iconButton}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Divider sx={styles.divider} orientation='vertical' />
          <AccountSettingsDropdown />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
