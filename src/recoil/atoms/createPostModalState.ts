import { atom } from 'recoil';

const createPostModalState = atom({
  key: 'createPostModalState',
  default: false,
});

export default createPostModalState;
