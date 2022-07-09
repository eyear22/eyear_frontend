import { publicRequest } from '../hooks/requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from '../features/userSlice';

// 로그인
export const login = async (dispatch, flag, user) => {
  const url = flag == 0 ? 'user' : 'hospital';
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/login/${url}`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// 로그아웃
export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};
