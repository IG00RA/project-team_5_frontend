import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, refreshUser } from './operations';

const initialState = {
  user: {},
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const pendingRefreshReducer = state => {
  state.isRefreshing = true;
};

const rejectedRefreshReducer = state => {
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
  const {
    user: { userName, birthday, email, phone, skype, avatarURL },
    token,
  } = payload;

  state.isLoading = false;
  state.error = null;
  state.token = token;
  state.isLoggedIn = true;

  state.user.userName = userName;
  state.user.birthday = birthday;
  state.user.email = email;
  state.user.phone = phone;
  state.user.skype = skype;
  state.user.avatarURL = avatarURL;
};

const logoutReducer = state => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
  state.token = null;
  state.user = {};
};

const refreshReducer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider =>
    buider
      .addCase(login.pending, pendingReducer)
      .addCase(login.fulfilled, loginReducer)
      .addCase(login.rejected, rejectedReducer)
      .addCase(logout.pending, pendingReducer)
      .addCase(logout.fulfilled, logoutReducer)
      .addCase(logout.rejected, logoutReducer)
      .addCase(register.pending, pendingReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(refreshUser.pending, pendingRefreshReducer)
      .addCase(refreshUser.fulfilled, refreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshReducer),
});

export const authReducer = userSlice.reducer;
