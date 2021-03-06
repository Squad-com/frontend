import axiosInstance from '../axios';
import { NetworkUserType } from './post';

export type CommentType = {
  _id: string;
  author: NetworkUserType;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  comments: CommentType[];
};

export const fetchComments = (commentId: string): Promise<CommentType[]> =>
  axiosInstance.get(`/comments/${commentId}`);
