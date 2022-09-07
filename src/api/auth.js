import { publicRequest } from '../hooks/requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from '../features/userSlice';
// credentials: 'include'

// 로그인
export const login = async (dispatch, flag, user) => {
  const url = flag == 0 ? 'user' : 'hospital';
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/login/${url}`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    if (err.message == 'Request failed with status code 400') {
      alert('아이디/비밀번호가 일치하지 않습니다.');
    } else {
      alert('로그인에 실패하였습니다.');
    }
  }
};

// 로그아웃
export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const res = await publicRequest.get('/logout');
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
    console.log('로그아웃에 실패하였습니다.');
  }
};
