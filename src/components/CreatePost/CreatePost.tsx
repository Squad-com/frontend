import { Grid } from '@mui/material';
import CreatePostModal from './components/CreatePostModal';
import CreatePostPreview from './components/CreatePostPreview';

const CreatePost = () => {
  return (
    <Grid container direction='column'>
      <CreatePostPreview />
      <CreatePostModal />
    </Grid>
  );
};

export default CreatePost;
