import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts } from '../../api/post';

export const fetchAllPostsThunk = createAsyncThunk(
  'posts/fetchAll',
  async () => {
    const response = await fetchAllPosts();
    return response.data;
  }
);
