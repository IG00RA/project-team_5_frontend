import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-team-5-backend.onrender.com/api/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', userData);
      Notify.success("You've register succeed", { timeout: 2000 });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      Notify.failure(e.response.data.message, { timeout: 2000 });
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/login', userData);
      Notify.success("You've login succeed", { timeout: 2000 });
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      Notify.failure(e.response.data.message, { timeout: 2000 });
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (__, thunkAPI) => {
  try {
    await axios.post('auth/logout');
    clearAuthHeader();
    Notify.success('LogOut success', { timeout: 2000 });
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

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

export const setAuthToken = createAction('auth/setAuthToken', token => {
  return {
    payload: token,
  };
});
