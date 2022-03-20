import axiosInstance from 'src/axios';
import { NetworkUserType } from './post';

export type AdminInfoType = { email: string } & NetworkUserType;
export const fetchUserInfo = () =>
  axiosInstance.get('/users') as Promise<AdminInfoType>;
