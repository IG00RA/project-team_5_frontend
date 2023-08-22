import { createSlice } from '@reduxjs/toolkit';
import { changeProfile, fetchUser, toggleTheme } from './operations';
import { logout } from 'redux/auth/operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const changeProfileReducer = (state, { payload }) => {
  const { userName, birthday, email, phone, skype, avatarURL } = payload;

  state.userName = userName;
  state.birthday = birthday;
  state.email = email;
  state.phone = phone;
  state.skype = skype;
  state.avatarURL = avatarURL;

  state.isLoading = false;
  state.error = null;
};

const fetchUserReducer = (state, { payload }) => {
  const { userName, birthday, email, phone, skype, avatarURL, theme } = payload;

  state.userName = userName;
  state.birthday = birthday;
  state.email = email;
  state.phone = phone;
  state.skype = skype;
  state.avatarURL = avatarURL;
  state.theme = theme;

  state.isLoading = false;
  state.error = null;
};

const toggleThemeReducer = (state, { payload }) => {
  const { theme } = payload;
  state.theme = theme;
  state.isLoading = false;
};

const logoutReducer = state => {
  state.userName = null;
  state.birthday = null;
  state.email = null;
  state.phone = null;
  state.skype = null;
  state.avatarURL = null;
  state.theme = null;
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  userName: null,
  birthday: null,
  email: null,
  phone: null,
  skype: null,
  avatarURL: null,
  theme: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: buider =>
    buider
      .addCase(changeProfile.pending, pendingReducer)
      .addCase(changeProfile.fulfilled, changeProfileReducer)
      .addCase(changeProfile.rejected, rejectedReducer)
      .addCase(fetchUser.pending, pendingReducer)
      .addCase(fetchUser.fulfilled, fetchUserReducer)
      .addCase(fetchUser.rejected, rejectedReducer)
      .addCase(toggleTheme.fulfilled, toggleThemeReducer)
      .addCase(toggleTheme.rejected, rejectedReducer)
      .addCase(logout.pending, logoutReducer),
});

export const userReducer = userSlice.reducer;
