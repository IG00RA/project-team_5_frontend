import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { selectRating, selectReview } from 'redux/review/reviewSelectors';
import {
  fetchQwnReview,
  addReview,
  updateReview,
  removeReview,
} from 'redux/review/reviewOperations';
import {
  Label,
  InputWrapper,
  ReviewWrapper,
  Input,
  FormBtn,
  FormBtnWrapper,
  CancelBtn,
  EditWrapper,
  EditBtn,
  DeleteBtn,
} from './FeedbackForm.styled';

const validationSchema = Yup.object().shape({
  rating: Yup.string()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  review: Yup.string()
    .required('Review is required')
    .max(300, 'Review must be at most 300 characters'),
});

export const FeedbackForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const userReview = useSelector(selectReview);
  const userRating = useSelector(selectRating);
  const [isEditActive, setIsEditActive] = useState(false);

  useEffect(() => {
    dispatch(fetchQwnReview());
  }, [dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    if (isEditActive) {
      dispatch(updateReview(values));
    } else {
      dispatch(addReview(values));
    }
    setIsEditActive(false);
    handleClose();
    setSubmitting(false);
  };

  const handleEdit = () => {
    setIsEditActive(!isEditActive);
  };

  const handleDelete = () => {
    dispatch(removeReview());
    handleClose();
  };

  const RatingComponent = ({ value }) => {
    const maxRating = 5;
    const ratingArray = Array.from(
      { length: maxRating },
      (_, index) => index + 1
    );

    return (
      <div className="rating">
        {ratingArray.map(ratingValue => (
          <input
            key={ratingValue}
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked={ratingValue === value}
          />
        ))}
      </div>
    );
  };

  return (
    <Formik
      initialValues={{
        rating: userRating || '',
        review: userReview || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Label name="rating">Rating</Label>
          <RatingComponent value={values.rating} />
          <InputWrapper>
            <ReviewWrapper>
              <Label htmlFor="review">Review</Label>

              {userReview !== '' && (
                <EditWrapper>
                  <EditBtn
                    onClick={handleEdit}
                    type="button"
                    disabled={!userReview}
                  >
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        stroke: '#FFFFFF',
                        fill: 'none',
                      }}
                    >
                      <use href={sprite + '#icon-pencil'}></use>
                    </svg>
                  </EditBtn>
                  <DeleteBtn type="button" onClick={handleDelete}>
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        stroke: '#EA3D65',
                        fill: '#EA3D65',
                        strokeWidth: '1.5',
                      }}
                    >
                      <use href={sprite + '#icon-trash-box'}></use>
                    </svg>
                  </DeleteBtn>
                </EditWrapper>
              )}
            </ReviewWrapper>
            <Input
              type="text"
              placeholder="Enter text"
              id="review"
              name="review"
              component="textarea"
              disabled={!isEditActive && userReview}
              value={values.review || ''}
            />

            <ErrorMessage name="review" component="div" />
          </InputWrapper>

          {(!userReview || isEditActive) && (
            <FormBtnWrapper>
              <FormBtn type="submit">{isEditActive ? 'Edit' : 'Save'}</FormBtn>
              <CancelBtn type="button" onClick={handleClose}>
                Cancel
              </CancelBtn>
            </FormBtnWrapper>
          )}
        </Form>
      )}
    </Formik>
  );
};
