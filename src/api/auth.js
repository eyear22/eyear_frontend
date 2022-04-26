// import { publicRequest } from '../requestMethods';

import { loginFailure, loginStart, loginSuccess } from '../features/userSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  dispatch(loginSuccess(user));
  // dispatch(loginFailure());
};
