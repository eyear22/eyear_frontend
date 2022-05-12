import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patientList: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchPatientStart: (state) => {
      state.isFetching = true;
    },
    fetchPatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patientList = action.payload;
    },
    fetchPatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { fetchPatentStart, fetchPatentSuccess, fetchPatentFailure } = patientSlice.actions;
export default patientSlice.reducer;
