import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patientList: null, // 환자 리스트
    patientListFetching: false,
    patientListError: false,
    userList: null, // 개인 리스트
    userListFetching: false,
    userListError: false,
  },
  reducers: {
    fetchPatientStart: (state) => {
      state.patientListFetching = true;
    },
    fetchPatientSuccess: (state, action) => {
      state.patientListFetching = false;
      state.patientList = action.payload;
    },
    fetchPatientFailure: (state) => {
      state.patientListFetching = false;
      state.patientListError = true;
    },
    fetchUserStart: (state) => {
      state.userListFetching = true;
    },
    fetchUserSuccess: (state, action) => {
      state.userListFetching = false;
      state.userList = action.payload;
    },
    fetchUserFailure: (state) => {
      state.userListFetching = false;
      state.userListError = true;
    },
  },
});

export const {
  fetchPatientStart,
  fetchPatientSuccess,
  fetchPatientFailure,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} = patientSlice.actions;
export default patientSlice.reducer;
