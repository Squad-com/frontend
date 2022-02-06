import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import modalSlice from './slices/modalSlice';
import postSlice from './slices/postSlice';

const store = configureStore({
  reducer: { post: postSlice.reducer, modal: modalSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
