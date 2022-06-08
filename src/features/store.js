import { configureStore } from '@reduxjs/toolkit';
import letterSlice from './letterSlice';
import patientSlice from './patientSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    patient: patientSlice,
    letter: letterSlice,
  },
});
