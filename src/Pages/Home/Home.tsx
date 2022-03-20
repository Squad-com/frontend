import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchAllPosts } from 'src/api/post';
import CreatePost from 'src/components/CreatePost';
import Post from 'src/components/Post';
import { networkPostsState } from 'src/recoil/post';

const Home = () => {
  const [networkPosts, setNetworkPosts] = useRecoilState(networkPostsState);

  useEffect(() => {
    fetchAllPosts()
      .then((posts) => setNetworkPosts(posts))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <CreatePost />
      {networkPosts.map((post) => (
        <Post key={`post-${post.id}`} postId={post.id} />
      ))}
    </Container>
  );
};

export default Home;
