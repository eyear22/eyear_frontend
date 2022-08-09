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
export const fetchReceiveLetters = async (dispatch, flag) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchReceiveLetterStart());
  try {
    const res = await publicRequest.get(`${user}/receiveList`);
    const res1 = await publicRequest.get(`${user}/search?value=최&flag=0`);
    dispatch(fetchReceiveLetterSuccess(res.data));
    console.log(res1);
  } catch (err) {
    dispatch(fetchReceiveLetterFailure());
  }
};

// 보낸 편지 불러오기
export const fetchSendLetters = async (dispatch, flag) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchSendLetterStart());
  try {
    const res = await publicRequest.get(`${user}/sendList`);
    dispatch(fetchSendLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchSendLetterFailure());
  }
};
