import axiosInstance from '../axiosInstance';

export type NetworkUserType = {
  _id: string;
  image: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type RootCommentType = {
  _id: string;
  replies: string[];
};
export type PostType = {
  id: string;
  author: NetworkUserType;
  description: string;
  score: number;
  rootComment: RootCommentType;
  voteState?: 'UP' | 'DOWN';
  images: string[];
};

export const fetchAllPosts = (): Promise<PostType[]> =>
  axiosInstance.get('/posts');

type CreatePostOptions = {
  description: string;
};
export const createPost = ({ description }: CreatePostOptions): Promise<any> =>
  axiosInstance.post('/posts', { description });

export const likePost = (postId: string) =>
  axiosInstance
    .post(`/posts/${postId}/like`)
    .then((res) => res.data)
    .catch(null);
