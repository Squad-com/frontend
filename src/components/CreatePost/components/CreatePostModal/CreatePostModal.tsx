import { Avatar, Dialog, Divider, Grid, Typography } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { useRecoilState } from 'recoil';
import { createPostModalState } from '../../../../recoil/atoms';
import CreatePostForm from './components/CreatePostForm';

const styles = {
  info: {
    paddingLeft: 2,
  },
  divider: {
    margin: 3,
    marginLeft: 0,
    marginRight: 0,
  },
};

const CreatePostModal = () => {
  const [isOpen, setOpen] = useRecoilState(createPostModalState);
  const { userInfo } = useAuth();
  const fullname = [userInfo?.firstName, userInfo?.lastName].join(' ');

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Typography variant='h2' align='center'>
        Create Post
      </Typography>
      <Divider sx={styles.divider} />
      <Grid container direction='column'>
        <Grid container direction='row' alignItems='center'>
          <Avatar src={userInfo?.image} alt={fullname} />
          <Grid sx={styles.info} item xs>
            <Typography variant='subtitle2'>{fullname}</Typography>
          </Grid>
        </Grid>
        <CreatePostForm />
      </Grid>
    </Dialog>
  );
};

export default CreatePostModal;
