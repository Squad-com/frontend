import axiosInstance from '../axios';

export type LoginOptions = {
  username: string;
  password: string;
};
export const login = ({ username, password }: LoginOptions) => {
  axiosInstance
    .post('/auth/login', { username, password })
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('auth-token', token);
    })
    .catch(console.log);
};
