import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (e) {
      Notify.failure('There are no available tasks', { timeout: 2000 });
      thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const addTask = createAsyncThunk('tasks/add', async (task, thunkAPI) => {
  try {
    const res = await axios.post('/tasks', task);
    Notify.success('The task was created', { timeout: 2000 });
    return res.data;
  } catch (e) {
    Notify.failure(`${e.response.data.message}`, {
      timeout: 2000,
    });
    thunkAPI.rejectWithValue(e.response.data.message);
  }
});

export const updateTask = createAsyncThunk(
  'tasks/update',
  async ({ task, id }, thunkAPI) => {
    try {
      const res = await axios.patch(`/tasks/${id}`, task);
      Notify.success('The task has been updated', { timeout: 2000 });
      return res.data;
    } catch (e) {
      Notify.failure(`${e.response.data.message}`, {
        timeout: 2000,
      });
      thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      Notify.success('The task was successfully deleted', { timeout: 2000 });
      return res.data;
    } catch (e) {
      Notify.failure(`${e.response.data.message}`, {
        timeout: 2000,
      });
      thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
