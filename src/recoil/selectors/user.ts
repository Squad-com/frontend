import { AdminInfoType, fetchUserInfo } from 'api/user';
import { selector } from 'recoil';
import { authTokenState } from 'recoil/atoms/auth';

export const userInfoState = selector<AdminInfoType | null>({
  key: 'userInfoState',
  get: async ({ get }) => {
    const token = get(authTokenState);
    if (token) {
      const user = await fetchUserInfo();
      return user;
    }
    return null;
  },
});
