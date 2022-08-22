import { fetchNoticeStart, fetchNoticeSuccess, fetchNoticeFailure } from '../features/noticeSlice';
import { publicRequest } from '../hooks/requestMethods';

// 공지사항 불러오기
export const fetchNotice = async (dispatch) => {
  dispatch(fetchNoticeStart());
  try {
    const res = await publicRequest.get('/notice/all');
    dispatch(fetchNoticeSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(fetchNoticeFailure());
  }
};
