import { Grid } from '@mui/material';
import { useEffect } from 'react';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAllPostsThunk } from '../../redux/thunks/postThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(fetchAllPostsThunk());
  }, [dispatch]);

  return (
    <Grid container direction='column'>
      <CreatePost />
      {posts.map((post, index) => (
        <Post key={`post-${post.id}`} post={post} />
      ))}
    </Grid>
  );
};

export default Home;
