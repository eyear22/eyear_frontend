import {
  fetchReceiveLetterStart,
  fetchReceiveLetterSuccess,
  fetchReceiveLetterFailure,
  fetchSendLetterStart,
  fetchSendLetterSuccess,
  fetchSendLetterFailure,
} from '../features/letterSlice';
import { publicRequest } from '../hooks/requestMethods';

// 받은 편지 불러오기
export const fetchReceiveLetters = async (dispatch, _id, flag) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchReceiveLetterStart());
  try {
    const res = await publicRequest.get(`${user}/receive_list/${_id}`);
    dispatch(fetchReceiveLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchReceiveLetterFailure());
  }
};

// 보낸 편지 불러오기
export const fetchSendLetters = async (dispatch, _id, flag) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchSendLetterStart());
  try {
    const res = await publicRequest.get(`${user}/send_list/${_id}`);
    dispatch(fetchSendLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchSendLetterFailure());
  }
};
