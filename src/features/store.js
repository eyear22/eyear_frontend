import { combineReducers, configureStore } from '@reduxjs/toolkit';
import letterSlice from './letterSlice';
import patientSlice from './patientSlice';
import userSlice from './userSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import noticeSlice from './noticeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['letterSlice'],
};

const rootReducer = combineReducers({
  user: userSlice,
  patient: patientSlice,
  letter: letterSlice,
  notice: noticeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
