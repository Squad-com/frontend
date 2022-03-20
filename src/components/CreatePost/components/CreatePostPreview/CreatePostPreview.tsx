import { Avatar, Grid, Paper, TextField } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import useAuth from 'src/hooks/useAuth';
import { createPostModalState } from 'src/recoil/post';

const styles = {
  root: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 4,
    paddingRight: 4,
    marginY: 2,
  },
  inputWrapper: {
    paddingLeft: 4,
  },
  input: {},
};

const CreatePostPreview = () => {
  const setCreatePostModal = useSetRecoilState(createPostModalState);
  const { userInfo } = useAuth();
  const fullname = [userInfo?.firstName, userInfo?.lastName].join(' ');

  return (
    <Paper sx={styles.root}>
      <Grid container direction='row' alignItems='center'>
        <Avatar alt={fullname} src={userInfo?.image} />
        <Grid sx={styles.inputWrapper} item xs>
          <TextField
            sx={styles.input}
            placeholder='Create Post'
            onClick={() => setCreatePostModal(true)}
            fullWidth
            id='fullWidth'
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreatePostPreview;
