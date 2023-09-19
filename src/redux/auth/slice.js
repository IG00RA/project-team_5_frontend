import { createSlice } from '@reduxjs/toolkit';

import {
  login,
  logout,
  register,
  refreshUser,
  setAuthToken,
} from './operations';

const initialState = {
  token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: true,
};

const pendingRefreshReducer = state => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const rejectedRefreshReducer = state => {
  state.isLoading = false;
  state.isRefreshing = false;
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = payload;
};

const loginReducer = (state, { payload }) => {
  const { token } = payload;

  state.isLoading = false;
  state.error = null;
  state.token = token;
  state.isLoggedIn = true;
};

const logoutReducer = state => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
  state.token = null;
};

const registerReducer = (state, { payload }) => {
  const { token } = payload;

  state.isLoading = false;
  state.error = null;
  state.token = token;
  state.isLoggedIn = true;
};

const refreshReducer = state => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const setAuthTokenReducer = (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        state.isLoading = false;
        state.error = null;
      };


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider =>
    buider
      .addCase(login.pending, pendingReducer)
      .addCase(login.fulfilled, loginReducer)
      .addCase(login.rejected, rejectedReducer)
      .addCase(logout.pending, logoutReducer)
      .addCase(register.pending, pendingReducer)
      .addCase(register.fulfilled, registerReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(refreshUser.pending, pendingRefreshReducer)
      .addCase(refreshUser.fulfilled, refreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshReducer)
      .addCase(setAuthToken.fulfilled, setAuthTokenReducer),
});

export const authReducer = authSlice.reducer;

export const { updateUser } = authSlice.actions;
