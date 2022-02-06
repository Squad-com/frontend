import { Button, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { createPost } from '../../../../../../api/post';
import theme from '../../../../../../theme';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(4, 0),
  },
  textField: {
    padding: 0,
    '& $fieldset': {
      border: 'none',
    },
  },
  textFieldRoot: {
    padding: 0,
  },
  button: {
    marginTop: theme.spacing(4),
  },
});
const CreatePostForm = () => {
  const classes = useStyles();
  const [description, setDescription] = useState('');

  return (
    <Grid className={classes.root} container direction='column'>
      <TextField
        className={classes.textField}
        InputProps={{ classes: { root: classes.textFieldRoot } }}
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
        name='post'
        placeholder='What do you want to talk about?'
        minRows={3}
        multiline
        autoFocus
      />
      <Button
        className={classes.button}
        onClick={() => {
          createPost({ description });
        }}
        variant='contained'
        color='primary'
        disabled={!description}
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default CreatePostForm;
