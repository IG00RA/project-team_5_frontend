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
      Notify.failure('There are no available tasks');
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk('tasks/add', async (task, thunkAPI) => {
  try {

    const res = await axios.post('/tasks', task);
    Notify.success('The task was created');
    return res.data;
  } catch (e) {
    Notify.failure('Oops! Something went wrong, please, try again');
    thunkAPI.rejectWithValue(e.message);
  }
});

export const updateTask = createAsyncThunk(
  'tasks/update',
  async (id, task, thunkAPI) => {
    try {

      const res = await axios.patch(`/tasks/${id}`, task);
      Notify.success('The task has been updated');
      return res.data;
    } catch (e) {
      Notify.failure('Oops! Something went wrong, please, try again');
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      Notify.success('The task was successfully deleted');
      return res.data;
    } catch (e) {
      Notify.failure('Oops! Something went wrong, please, try again');
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
