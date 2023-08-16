import { createSlice } from '@reduxjs/toolkit';
import {
  addReview,
  fetchQwnReview,
  removeReview,
  updateReview,
} from './reviewOperations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fetchtReviewReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.review = payload.review;
  state.raiting = payload.raiting;
};

const addReviewReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.review = payload.review;
  state.raiting = payload.raiting;
};

const updateReviewReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  state.review = payload.review;
  state.raiting = payload.raiting;
};

const removeReviewReducer = state => {
  state.isLoading = false;
  state.error = null;

  state.review = null;
  state.raiting = null;
};

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    review: null,
    raiting: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchQwnReview.pending, pendingReducer)
      .addCase(fetchQwnReview.fulfilled, fetchtReviewReducer)
      .addCase(fetchQwnReview.rejected, rejectedReducer)
      .addCase(addReview.pending, pendingReducer)
      .addCase(addReview.fulfilled, addReviewReducer)
      .addCase(addReview.rejected, rejectedReducer)
      .addCase(updateReview.pending, pendingReducer)
      .addCase(updateReview.fulfilled, updateReviewReducer)
      .addCase(updateReview.rejected, rejectedReducer)
      .addCase(removeReview.pending, pendingReducer)
      .addCase(removeReview.fulfilled, removeReviewReducer)
      .addCase(removeReview.rejected, rejectedReducer),
});

export const reviewReducer = reviewSlice.reducer;
