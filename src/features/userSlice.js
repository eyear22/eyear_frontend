import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null, // 현재 로그인된 계정
    isFetching: false,
    error: false,
    logoutLoading: false,
    logoutError: false,
    logoutDone: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.logoutLoading = true;
    },
    logoutSuccess: (state) => {
      state.logoutLoading = false;
      state.logoutDone = true;
      state.currentUser = null;
    },
    logoutFailure: (state, action) => {
      state.logoutLoading = false;
      state.logoutError = action.error;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } = userSlice.actions;
export default userSlice.reducer;
