import { selector } from 'recoil';
import { AdminInfoType, fetchUserInfo } from 'src/api/user';
import { authTokenState } from './auth';

export const userInfoState = selector<AdminInfoType | null>({
  key: 'userInfoState',
  get: async ({ get }) => {
    const token = get(authTokenState);
    if (token) {
      const user = await fetchUserInfo().catch(() => {
        localStorage.removeItem('auth-token');
        return null;
      });
      return user;
    }
    return null;
  },
});
