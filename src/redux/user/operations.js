import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/operations';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (__, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setAuthHeader(token);

    try {
      const res = await axios('user/current');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeProfile = createAsyncThunk(
  'user/changeProfile',
  async ({ formData, setSubmitButtonDisabled = () => {} }, thunkAPI) => {
    try {
      const res = await axios.patch('user/change-profile', formData);
      setSubmitButtonDisabled();
      Notify.success('Profile updated', { timeout: 1000 });
      return res.data;
    } catch (e) {
      Notify.failure('Failed to update, please try again', { timeout: 1000 });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleTheme = createAsyncThunk(
  'user/toggle-theme',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/user/toggle-theme', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
