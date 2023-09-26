import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} from './tasksOperations';
import { logout } from 'redux/auth/operations';

const tasksInitialState = {
  tasks: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.tasks = action.payload;
  state.error = '';
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.tasks.push(action.payload);
  state.error = '';
};

const handleFulfilledUpdate = (state, action) => {
  state.isLoading = false;

  if (action.payload) {
    const idx = state.tasks.findIndex(task => task?._id === action.payload._id);

    if (idx !== -1) {
      state.tasks.splice(idx, 1, action.payload);
    }
  } else if (action.error) {
    state.error = action.error.message;
  }

  state.error = '';
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.tasks = state.tasks.filter(task => task?._id !== action.payload._id);
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const logoutReducer = state => {
  state.tasks = [];
  state.isLoading = false;
  state.error = null;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.fulfilled, handleFulfilledGet)
      .addCase(addTask.fulfilled, handleFulfilledAdd)
      .addCase(updateTask.fulfilled, handleFulfilledUpdate)
      .addCase(deleteTask.fulfilled, handleFulfilledDelete)
      .addCase(logout.pending, logoutReducer)
      .addMatcher(
        isAnyOf(
          getAllTasks.pending,
          addTask.pending,
          updateTask.pending,
          deleteTask.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllTasks.rejected,
          addTask.rejected,
          updateTask.rejected,
          deleteTask.rejected
        ),
        handleRejected
      );
  },
});
export const tasksReducer = tasksSlice.reducer;
