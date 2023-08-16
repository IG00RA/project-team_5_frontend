import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQwnReview = createAsyncThunk(
  'review/fetchReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios('/reviews/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'review/addReview',
  async (reviewData, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', reviewData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'review/updateReview',
  async (reviewData, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', reviewData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeReview = createAsyncThunk(
  'review/removeReview',
  async (__, thunkAPI) => {
    try {
      const response = await axios.delete(`/reviews/own`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
