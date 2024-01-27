import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const selectedSlice = createSlice({
  name: 'selected',
  initialState: { selected: [] },
  reducers: {
    addSelected: {
      reducer(state, action) {
        state.selected.push(action.payload);
      },
    },
    deleteSelected(state, action) {
      const filterRes = {
        selected: state.selected.filter(car => car.id !== action.payload.id),
      };
      return filterRes;
    },
  },
});

export const { addSelected, deleteSelected } = selectedSlice.actions;

const persistConfig = {
  key: 'cars',
  storage,
};

export const persistedSelectedReducer = persistReducer(
  persistConfig,
  selectedSlice.reducer
);
// export const selectedReducer = selectedSlice.reducer;
