import { AxiosError } from 'axios';

const getErrorMessage = (err: AxiosError) => {
  return err.response?.data?.message || err.message;
};

export default getErrorMessage;
