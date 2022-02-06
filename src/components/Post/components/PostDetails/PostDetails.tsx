import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import theme from '../../../../theme';
import { PostAuthor } from '../../../../types/post';
import PostBody from './components/PostBody';
import PostFooter from './components/PostFooter';
import PostHeader from './components/PostHeader';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
});

export type PostDetailsProps = {
  author: PostAuthor;
  description: string;
  images: string[];
};

const PostDetails: FC<PostDetailsProps> = ({ author, description, images }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs>
      <PostHeader author={author} />
      <PostBody description={description} images={images} />
      <PostFooter />
    </Grid>
  );
};

export default PostDetails;
