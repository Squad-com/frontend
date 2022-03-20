import axiosInstance from '../axios';
import { CommentType } from './comment';

export type NetworkUserType = {
  _id: string;
  image: string;
  username: string;
  firstName: string;
  lastName: string;
};

export enum VoteEnum {
  UP = 1,
  DOWN = -1,
}
export type PostType = {
  id: string;
  author: NetworkUserType;
  description: string;
  score: number;
  comments: any;
  voteState?: VoteEnum;
  images: string[];
};

export const fetchAllPosts = (): Promise<PostType[]> =>
  axiosInstance.get('/posts');

type CreatePostOptions = {
  description: string;
};
export const createPost = ({ description }: CreatePostOptions): Promise<any> =>
  axiosInstance.post('/posts', { description });

export const votePost = (postId: string, vote: VoteEnum) =>
  axiosInstance.post(`/posts/${postId}/vote`, { dir: vote });

export const fetchPostComments = (postId: string): Promise<CommentType[]> =>
  axiosInstance.get(`/posts/${postId}/comments`);

export const createPostComment = (
  postId: string,
  comment: string
): Promise<CommentType[]> =>
  axiosInstance.post(`/posts/${postId}/comments`, { comment });
