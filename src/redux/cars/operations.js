import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65a8303c94c2c5762da86fe6.mockapi.io/api/adverts/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (p = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?page=${p}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
