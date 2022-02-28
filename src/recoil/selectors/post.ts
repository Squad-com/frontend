import { fetchAllPosts } from 'api/post';
import { selector } from 'recoil';

export const networkPostsState = selector({
  key: 'networkPostsState',
  get: async () => {
    const networkPosts = await fetchAllPosts();
    return networkPosts;
  },
});
