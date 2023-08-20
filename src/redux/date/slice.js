import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const dateInitialState = {
  date: moment().format('YYYY-MM-DD'),
};

const dateSlice = createSlice({
  name: 'date',
  initialState: dateInitialState,
  reducers: {
    updateDate(state, { payload }) {
      state.date = payload;
    }
  },
});

export const { updateDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;