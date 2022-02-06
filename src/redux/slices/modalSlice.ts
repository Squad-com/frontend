import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  createPostModal: boolean;
}

const initialState: ModalState = {
  createPostModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleCreatePostModal(state) {
      state.createPostModal = !state.createPostModal;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
