import { atom } from 'recoil';

export const authTokenState = atom({
  key: 'authToken',
  default: '',
});
