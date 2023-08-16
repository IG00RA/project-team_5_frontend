import { createSlice } from '@reduxjs/toolkit';
import {
  changeProfile,
  login,
  logout,
  register,
  refreshUser,
  toggleTheme,
} from './operations';

const initialState = {
  user: {
    avatarURL: '',
    userName: '',
    phone: '',
    birthday: '',
    skype: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: true,
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

const logoutRejectedReducer = state => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
  state.token = null;
  state.user = {};
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
  state.isRefreshing = false;

  state.user.userName = userName;
  state.user.birthday = birthday;
  state.user.email = email;
  state.user.phone = phone;
  state.user.skype = skype;
  state.user.avatarURL = avatarURL;
};

const logoutReducer = state => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
  state.token = null;
  state.user = {};
};

const changeProfileReducer = (state, { payload }) => {
  const { userName, birthday, email, phone, skype, avatarURL } = payload;

  state.isLoading = false;
  state.error = null;

  state.user.userName = userName;
  state.user.birthday = birthday;
  state.user.email = email;
  state.user.phone = phone;
  state.user.skype = skype;
  state.user.avatarURL = avatarURL;
};

const refreshReducer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const toggleThemeReducer = (state, { payload }) => {
  const { theme } = payload;
  state.user.theme = theme;
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
      .addCase(logout.rejected, logoutRejectedReducer)
      .addCase(changeProfile.pending, pendingReducer)
      .addCase(changeProfile.fulfilled, changeProfileReducer)
      .addCase(changeProfile.rejected, rejectedReducer)
      .addCase(register.pending, pendingReducer)
      .addCase(register.rejected, rejectedReducer)
      .addCase(refreshUser.pending, pendingRefreshReducer)
      .addCase(refreshUser.fulfilled, refreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshReducer)
      .addCase(toggleTheme.pending, pendingReducer)
      .addCase(toggleTheme.fulfilled, toggleThemeReducer)
      .addCase(toggleTheme.rejected, rejectedReducer),
});

export const authReducer = userSlice.reducer;

export const { updateUser } = userSlice.actions;
