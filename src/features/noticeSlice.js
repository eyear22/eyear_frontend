import { createSlice } from '@reduxjs/toolkit';

const noticeSlice = createSlice({
  name: 'notice',
  initialState: {
    notices: null, // 공지사항 리스트
    noticesFetching: false,
    noticesError: false,
  },
  reducers: {
    fetchNoticeStart: (state) => {
      state.noticesFetching = true;
    },
    fetchNoticeSuccess: (state, action) => {
      state.noticesFetching = false;
      state.notices = action.payload;
    },
    fetchNoticeFailure: (state) => {
      state.noticesFetching = false;
      state.noticesError = true;
    },
  },
});

export const { fetchNoticeStart, fetchNoticeSuccess, fetchNoticeFailure } = noticeSlice.actions;
export default noticeSlice.reducer;
