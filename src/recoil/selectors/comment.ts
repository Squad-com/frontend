import { selectorFamily } from 'recoil';
import { fetchComments } from '../../api/comment';

export const commentsState = selectorFamily({
  key: 'commentsState',
  get: (commentId: string) => () => fetchComments(commentId),
});
