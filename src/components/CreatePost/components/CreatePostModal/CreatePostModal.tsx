import { Avatar, Dialog, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { modalActions } from '../../../../redux/slices/modalSlice';
import theme from '../../../../theme';
import CreatePostForm from './components/CreatePostForm';

const useStyles = makeStyles({
  info: {
    paddingLeft: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
});
const CreatePostModal = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.createPostModal);

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(modalActions.toggleCreatePostModal())}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Typography variant='h1' align='center'>
        Create Post
      </Typography>
      <Divider className={classes.divider} />
      <Grid container direction='column'>
        <Grid container direction='row' alignItems='center'>
          <Avatar
            src='https://media-exp1.licdn.com/dms/image/C4D03AQGFx1xLk_3SwA/profile-displayphoto-shrink_800_800/0/1612644878181?e=1648080000&v=beta&t=nZWIfXpoNYUT80Si_iuWZHFyC5KFOZDzB1qPgJNEkRI'
            alt='Suleyman'
          />
          <Grid className={classes.info} item xs>
            <Typography variant='subtitle2'>Suleyman Barış Eser</Typography>
          </Grid>
        </Grid>
        <CreatePostForm />
      </Grid>
    </Dialog>
  );
};

export default CreatePostModal;
