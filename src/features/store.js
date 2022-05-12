import { configureStore } from '@reduxjs/toolkit';
import patientSlice from './patientSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    patient: patientSlice,
  },
});
