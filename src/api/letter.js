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
  const url = flag == 0 ? `user/search?value=${value}&flag=0` : `business/receiveList?number=${value}`;
  dispatch(fetchReceiveLetterStart());
  try {
    const res = await publicRequest.get(url);
    dispatch(fetchReceiveLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchReceiveLetterFailure());
  }
};

// 보낸 편지 불러오기
export const fetchSendLetters = async (dispatch, flag, value) => {
  const url = flag == 0 ? `user/search?value=${value}&flag=1` : `business/sendList?number=${value}`;
  dispatch(fetchSendLetterStart());
  try {
    const res = await publicRequest.get(url);
    //const res = await publicRequest.get(`${user}/sendList`);
    console.log(res);
    dispatch(fetchSendLetterSuccess(res.data));
  } catch (err) {
    dispatch(fetchSendLetterFailure());
  }
};
