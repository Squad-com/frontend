import { Grid } from '@mui/material';
import { FC } from 'react';
import { NetworkUserType } from 'src/api/post';
import PostBody from './components/PostBody';
import PostFooter, { PostFooterProps } from './components/PostFooter';
import PostHeader from './components/PostHeader';

const styles = {
  root: {
    padding: 3,
  },
};

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
  comments,
}) => {
  return (
    <Grid sx={styles.root} item xs>
      <PostHeader author={author} />
      <PostBody description={description} images={images} />
      <PostFooter comments={comments} postId={postId} />
    </Grid>
  );
};

export default PostDetails;
