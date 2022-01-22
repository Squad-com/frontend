import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPostsThunk } from '../thunks/postThunks';

export interface PostState {
  posts: Array<any>;
  loading: boolean;
}

const initialState: PostState = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      });
  },
});

export const postActions = postSlice.actions;

export default postSlice;
