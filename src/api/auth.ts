import axiosInstance from '../axiosInstance';

export type LoginResponse = {
  token: string;
};
export type LoginOptions = {
  username: string;
  password: string;
};
export const login = ({
  username,
  password,
}: LoginOptions): Promise<LoginResponse> =>
  axiosInstance.post('/auth/login', { username, password });
