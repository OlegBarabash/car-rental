import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './cars/carsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedSelectedReducer } from './cars/selectedSlice';

export const store = configureStore({
  reducer: {
    selected: persistedSelectedReducer,
    cars: carReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
