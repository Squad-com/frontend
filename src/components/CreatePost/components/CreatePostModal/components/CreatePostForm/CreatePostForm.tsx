import { Grid, TextField, Typography } from '@mui/material';
import { createPost } from 'api/post';
import LoadingButton from 'components/LoadingButton';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { createPostModalState } from 'recoil/atoms';
import getErrorMessage from 'utils/getErrorMessage';

const styles = {
  root: {
    padding: 2,
  },
  textField: {
    padding: 0,
    '& fieldset': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root': {
      padding: 3,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  textFieldRoot: {
    padding: 0,
  },
  button: {
    marginTop: 4,
  },
};

type FormElements = {
  post: string;
};

const CreatePostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setPostModal = useSetRecoilState(createPostModalState);
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormElements>();

  const onSubmit = ({ post }: FormElements) => {
    setIsLoading(true);
    createPost({ description: post })
      .then((data) => {
        setPostModal(false);
        enqueueSnackbar('New post is created!', { variant: 'success' });
      })
      .catch((err) => {
        const message = getErrorMessage(err);
        enqueueSnackbar(message, { variant: 'error' });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Grid
      sx={styles.root}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      container
      direction='column'
    >
      <Grid container>
        <TextField
          sx={styles.textField}
          {...register('post', {
            required: true,
          })}
          placeholder='What do you want to talk about?'
          minRows={3}
          maxRows={6}
          multiline
          autoFocus
          fullWidth
        />
        {errors.post && (
          <Typography variant='body2' color='red'>
            Please fill this part!
          </Typography>
        )}
      </Grid>
      <LoadingButton
        sx={styles.button}
        isLoading={isLoading}
        type='submit'
        variant='contained'
        color='primary'
        disabled={!watch('post')}
        fullWidth
      >
        Create
      </LoadingButton>
    </Grid>
  );
};

export default CreatePostForm;
