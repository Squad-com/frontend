import { atomFamily } from 'recoil';

export const postFamilyState = atomFamily({
  key: 'postFamilyState',
  default: {},
});

export const showCommentState = atomFamily({
  key: 'showCommentState',
  default: false,
});
