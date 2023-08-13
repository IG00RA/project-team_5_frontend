import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './userOperations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const fetchUserReducer = (state, { payload }) => {
//   const { userName, birthday, email, phone, skype, avatarURL } = payload;

//   state.isLoading = false;
//   state.error = null;
//   state.userName = userName;
//   state.birthday = birthday;
//   state.email = email;
//   state.phone = phone;
//   state.skype = skype;
//   state.avatarURL = avatarURL;
// };

const updateUserReducer = (state, { payload }) => {
  const { userName, birthday, email, phone, skype, avatarURL } = payload;

  state.isLoading = false;
  state.error = null;
  state.userName = userName;
  state.birthday = birthday;
  state.email = email;
  state.phone = phone;
  state.skype = skype;
  state.avatarURL = avatarURL;
};

const initialState = {
  userName: null,
  birthday: null,
  email: null,
  phone: null,
  skype: null,
  avatarURL: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      // .addCase(fetchUser.pending, pendingReducer)
      // .addCase(fetchUser.fulfilled, fetchUserReducer)
      // .addCase(fetchUser.rejected, rejectedReducer)
      .addCase(updateUser.pending, pendingReducer)
      .addCase(updateUser.fulfilled, updateUserReducer)
      .addCase(updateUser.rejected, rejectedReducer),
});

export const userReducer = userSlice.reducer;
