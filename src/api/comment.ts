import axiosInstance from '../axiosInstance';
import { NetworkUserType } from './post';

export type CommentType = {
  _id: string;
  author: NetworkUserType;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  parent: string;
  replies: string[];
};

export const fetchComments = (commentId: string): Promise<CommentType[]> =>
  axiosInstance.get(`/comments/${commentId}`);
