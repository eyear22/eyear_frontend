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
export const fetchReceiveLetters = async (dispatch, flag, value) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchReceiveLetterStart());
  try {
    const res = await publicRequest.get(`${user}/search?value=${value}&flag=0`);
    dispatch(fetchReceiveLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchReceiveLetterFailure());
  }
};

// 보낸 편지 불러오기
export const fetchSendLetters = async (dispatch, flag, value) => {
  const user = flag == 0 ? 'user' : 'business';
  dispatch(fetchSendLetterStart());
  try {
    const res = await publicRequest.get(`${user}/search?value=''&flag=1`);
    //const res = await publicRequest.get(`${user}/sendList`);
    console.log(res);
    dispatch(fetchSendLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchSendLetterFailure());
  }
};
