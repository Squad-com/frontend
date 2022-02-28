import { Avatar, Grid, Paper, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useAuth from 'hooks/useAuth';
import { useSetRecoilState } from 'recoil';
import { createPostModalState } from '../../../../recoil/atoms';
import theme from '../../../../theme';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(5, 4),
    margin: theme.spacing(2, 0),
  },
  inputWrapper: {
    paddingLeft: theme.spacing(4),
  },
  input: {},
});

const CreatePostPreview = () => {
  const classes = useStyles();
  const setCreatePostModal = useSetRecoilState(createPostModalState);
  const { userInfo } = useAuth();
  const fullname = [userInfo?.firstName, userInfo?.lastName].join(' ');

  return (
    <Paper className={classes.root}>
      <Grid container direction='row' alignItems='center'>
        <Avatar
          alt={fullname}
          src='https://media-exp1.licdn.com/dms/image/C4D03AQGFx1xLk_3SwA/profile-displayphoto-shrink_800_800/0/1612644878181?e=1648080000&v=beta&t=nZWIfXpoNYUT80Si_iuWZHFyC5KFOZDzB1qPgJNEkRI'
        />
        <Grid className={classes.inputWrapper} item xs>
          <TextField
            className={classes.input}
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
