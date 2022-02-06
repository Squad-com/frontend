import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '../../types/post';
import { fetchAllPostsThunk, likePostThunk } from '../thunks/postThunks';

export interface PostState {
  posts: Array<PostType>;
  loading: boolean;
}

const initialState: PostState = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: 'post',
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
      })
      .addCase(likePostThunk.fulfilled, (state, action) => {
        const currentPostIndex = state.posts.findIndex(
          ({ id }) => action.payload.id === id
        );
        if (currentPostIndex !== -1) {
          state.posts[currentPostIndex] = action.payload;
        }
      });
  },
});

export const postActions = postSlice.actions;

export default postSlice;
