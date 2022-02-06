import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts, likePost } from '../../api/post';
import { PostType } from '../../types/post';

export const fetchAllPostsThunk = createAsyncThunk(
  'posts/fetchAll',
  async () => {
    const response = await fetchAllPosts();
    return response.data;
  }
);

export const likePostThunk = createAsyncThunk(
  'posts/like',
  async (postId: string): Promise<PostType> => {
    const response = await likePost(postId);
    return response;
  }
);
