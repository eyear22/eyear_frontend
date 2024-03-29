import {
  fetchPatientFailure,
  fetchPatientStart,
  fetchPatientSuccess,
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} from '../features/patientSlice';
import { publicRequest } from '../hooks/requestMethods';

// 환자 리스트 불러오기
export const fetchPatients = async (dispatch, flag) => {
  const user = flag == 0 ? 'user' : 'business'; // 0: 개인, 1: 기업
  dispatch(fetchPatientStart());
  try {
    const res = await publicRequest.get(`/${user}/patientList`);
    dispatch(fetchPatientSuccess(res.data));
  } catch (err) {
    dispatch(fetchPatientFailure());
  }
};

// 환자와 관련된 개인 데이터 불러오기
export const fetchUsers = async (dispatch, pat_id) => {
  dispatch(fetchUserStart());
  try {
    const res = await publicRequest.get(`/business/${pat_id}/userList`);
    dispatch(fetchUserSuccess(res.data));
  } catch (err) {
    dispatch(fetchUserFailure());
  }
};
