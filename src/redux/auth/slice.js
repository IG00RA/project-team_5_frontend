import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

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

// const logoutRejectedReducer = state => {
//   state.isRefreshing = false;
//   state.isLoggedIn = false;
//   state.isLoading = false;
//   state.error = null;
//   state.token = null;
//   state.user = {};
// };

const loginReducer = (state, { payload }) => {
  const { token } = payload;

  state.isLoading = false;
  state.error = null;
  state.token = token;
  state.isLoggedIn = true;
};

const logoutReducer = state => {
  state.isRefreshing = true;
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

// const changeProfileReducer = (state, { payload }) => {
//   const { userName, birthday, email, phone, skype, avatarURL } = payload;

//   state.isLoading = false;
//   state.error = null;

//   state.user.userName = userName;
//   state.user.birthday = birthday;
//   state.user.email = email;
//   state.user.phone = phone;
//   state.user.skype = skype;
//   state.user.avatarURL = avatarURL;
// };

const refreshReducer = state => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
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
      // .addCase(changeProfile.pending, pendingReducer)
      // .addCase(changeProfile.fulfilled, changeProfileReducer)
      // .addCase(changeProfile.rejected, rejectedReducer)
      .addCase(register.pending, pendingReducer)
      .addCase(register.fulfilled, registerReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(refreshUser.pending, pendingRefreshReducer)
      .addCase(refreshUser.fulfilled, refreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshReducer),
});

export const authReducer = authSlice.reducer;

export const { updateUser } = authSlice.actions;
