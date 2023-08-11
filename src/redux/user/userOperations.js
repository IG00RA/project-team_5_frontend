import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchUser = () =>
//   createAsyncThunk('user/fetchUser', async (__, thunkAPI) => {
//     try {
//       const res = await axios('/users');
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   });

export const updateUser = () =>
  createAsyncThunk('user/updatehUser', async ({ userData }, thunkAPI) => {
    try {
      const res = await axios.patch('/users', userData);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
