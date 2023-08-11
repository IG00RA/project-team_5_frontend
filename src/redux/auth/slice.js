import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
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

  state.user.userName = userName;
  state.user.birthday = birthday;
  state.user.email = email;
  state.user.phone = phone;
  state.user.skype = skype;
  state.user.avatarURL = avatarURL;
};

const logoutReducer = state => {
  state.isLoading = false;
  state.error = null;
  state.token = null;
  state.user = {};
};

const initialState = {
  user: {},
  token: null,
  isLoading: false,
  error: null,
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
      .addCase(logout.rejected, logoutReducer),
});

export const authReducer = userSlice.reducer;
