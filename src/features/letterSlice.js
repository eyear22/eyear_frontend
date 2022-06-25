import { createSlice } from '@reduxjs/toolkit';

const letterSlice = createSlice({
  name: 'letter',
  initialState: {
    receiveLetters: [], // 받은편지 리스트
    receiveLettersFetching: false,
    receiveLettersError: false,
    sendLetters: null, // 보낸편지 리스트
    sendLettersFetching: false,
    sendLettersError: false,
  },
  reducers: {
    fetchReceiveLetterStart: (state) => {
      state.receiveLettersFetching = true;
    },
    fetchReceiveLetterSuccess: (state, action) => {
      state.receiveLettersFetching = false;
      state.receiveLetters = action.payload;
    },
    fetchReceiveLetterFailure: (state) => {
      state.receiveLettersFetching = false;
      state.receiveLettersError = true;
    },
    fetchSendLetterStart: (state) => {
      state.sendLettersFetching = true;
    },
    fetchSendLetterSuccess: (state, action) => {
      state.sendLettersFetching = false;
      state.sendLetters = action.payload;
    },
    fetchSendLetterFailure: (state) => {
      state.sendLettersFetching = false;
      state.sendLettersError = true;
    },
  },
});

export const {
  fetchReceiveLetterStart,
  fetchReceiveLetterSuccess,
  fetchReceiveLetterFailure,
  fetchSendLetterStart,
  fetchSendLetterSuccess,
  fetchSendLetterFailure,
} = letterSlice.actions;
export default letterSlice.reducer;
