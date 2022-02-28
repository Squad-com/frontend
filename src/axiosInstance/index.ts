import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

let axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
});

const authToken = localStorage.getItem('auth-token');
if (authToken) {
  axiosInstance.defaults.headers.common[
    'authorization'
  ] = `Bearer ${authToken}`;
}

axiosInstance = setupInterceptorsTo(axiosInstance);

export default axiosInstance;
