import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './cars/carsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { selectedReducer } from './cars/selectedSlice';

const persistConfig = {
  key: 'cars',
  storage,
};

const persistedSelectedReducer = persistReducer(persistConfig, selectedReducer);

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
