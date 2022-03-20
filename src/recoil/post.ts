import { atom, atomFamily, selectorFamily } from 'recoil';
import { CommentType } from 'src/api/comment';
import { fetchPostComments, PostType } from 'src/api/post';

export const createPostModalState = atom({
  key: 'createPostModalState',
  default: false,
});

export const postFamilyState = atomFamily({
  key: 'postFamilyState',
  default: {},
});

export const networkPostsState = atom<PostType[]>({
  key: 'networkPostsState',
  default: [],
});

export const postState = selectorFamily<PostType, string>({
  key: 'postState',
  get:
    (postId) =>
    ({ get }) => {
      const networkPosts = get(networkPostsState);
      return networkPosts.find(({ id }) => postId === id) as PostType;
    },
});

export const postCommentsState = atomFamily<CommentType[], string>({
  key: 'postCommentsState',
  default: async (postId) => await fetchPostComments(postId).catch(() => []),
});
