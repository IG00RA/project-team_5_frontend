import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk('tasks/add', async (task, thunkAPI) => {
  try {
    const res = await axios.post('/tasks', { task });
    return res.data;
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});

export const updateTask = createAsyncThunk(
  'tasks/update',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`/tasks/${id}`);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);