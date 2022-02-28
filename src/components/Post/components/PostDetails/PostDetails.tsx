import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NetworkUserType } from 'api/post';
import { FC } from 'react';
import theme from 'theme';
import PostBody from './components/PostBody';
import PostFooter, { PostFooterProps } from './components/PostFooter';
import PostHeader from './components/PostHeader';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
});

export type PostDetailsProps = {
  author: NetworkUserType;
  description: string;
  images: string[];
} & PostFooterProps;

const PostDetails: FC<PostDetailsProps> = ({
  postId,
  author,
  description,
  images,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs>
      <PostHeader author={author} />
      <PostBody description={description} images={images} />
      <PostFooter postId={postId} />
    </Grid>
  );
};

export default PostDetails;
