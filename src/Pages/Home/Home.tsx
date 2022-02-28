import { Container } from '@mui/material';
import { useRecoilValue } from 'recoil';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';
import { networkPostsState } from '../../recoil/selectors/post';

const Home = () => {
  const networkPosts = useRecoilValue(networkPostsState);

  return (
    <Container>
      <CreatePost />
      {networkPosts.map((post, index) => (
        <Post key={`post-${post.id}`} post={post} />
      ))}
    </Container>
  );
};

export default Home;
