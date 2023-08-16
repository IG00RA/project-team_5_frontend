import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-team-5-backend.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const toggleTheme = createAsyncThunk(
  'user/toggle-theme',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('user/toggle-theme', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', userData);
      Notify.success("You've register succeed"); //
      return res.data;
    } catch (e) {
      Notify.failure('Incorrect data');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/login', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      Notify.failure('Incorrect data');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (__, thunkAPI) => {
  try {
    await axios.post('auth/logout');
    clearAuthHeader();
    Notify.success('LogOut success');
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const changeProfile = createAsyncThunk(
  'auth/changeProfile',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('user/change-profile', userData);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/user/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
