import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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
      Notify.success('You add your own review!');
      return response.data;
    } catch (e) {
      Notify.failure('Please try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'review/updateReview',
  async (reviewData, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', reviewData);
      Notify.success('You successfully updated your review!');
      return response.data;
    } catch (e) {
      Notify.failure('Please try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeReview = createAsyncThunk(
  'review/removeReview',
  async (__, thunkAPI) => {
    try {
      const response = await axios.delete(`/reviews/own`);
      Notify.success('Your review was deleted successfully');
      return response.data;
    } catch (e) {
      Notify.failure('Please try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
