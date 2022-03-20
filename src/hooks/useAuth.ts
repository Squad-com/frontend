import { useSnackbar } from 'notistack';
import { useRecoilState, useRecoilValue } from 'recoil';
import axiosInstance from 'src/axios';
import { authTokenState } from 'src/recoil/auth';
import { userInfoState } from 'src/recoil/user';

const TOKEN_NAME = 'auth-token';

const useAuth = () => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);
  const { enqueueSnackbar } = useSnackbar();
  const userInfo = useRecoilValue(userInfoState);

  const onLogin = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
    axiosInstance.defaults.headers.common['authorization'] = `Bearer ${token}`;
    enqueueSnackbar('Login is successful', { variant: 'success' });
    setAuthToken(token);
  };

  const onLogout = () => {
    localStorage.removeItem(TOKEN_NAME);
    delete axiosInstance.defaults.headers.common['authorization'];
    setAuthToken('');
  };

  const onMount = () => {
    const localAuthToken = localStorage.getItem('auth-token');
    if (localAuthToken) {
      setAuthToken(localAuthToken);
    }
  };

  return { isLoggedIn: !!authToken, onLogin, onMount, onLogout, userInfo };
};

export default useAuth;
