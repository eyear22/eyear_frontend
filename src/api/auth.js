import { publicRequest } from '../hooks/requestMethods';
import { loginFailure, loginStart, loginSuccess } from '../features/userSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login/user', user);
    dispatch(loginSuccess(res.data));
    console.log(res);
  } catch (err) {
    dispatch(loginFailure());
  }
};
