import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { selectRating, selectReview } from 'redux/review/reviewSelectors';
import {
  addReview,
  updateReview,
  removeReview,
} from 'redux/review/reviewOperations';
import {
  Label,
  InputWrapper,
  ReviewWrapper,
  Input,
  ErrorMessage,
  FormBtn,
  FormBtnWrapper,
  CancelBtn,
  EditWrapper,
  EditBtn,
  DeleteBtn,
} from './FeedbackForm.styled';

const validationSchema = Yup.object().shape({
  raiting: Yup.string()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  review: Yup.string()
    .required('Review is required')
    .max(300, 'Review must be at most 300 characters'),
});

const DEFAULT_RATING = '5';

export const FeedbackForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const userReview = useSelector(selectReview);
  const userRating = useSelector(selectRating);
  const [isEditActive, setIsEditActive] = useState(false);

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

  const RatingComponent = ({ value, setFieldValue }) => {
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
            className="mask mask-star-2 bg-stars-color"
            checked={value === ratingValue.toString()}
            onChange={() => setFieldValue('raiting', ratingValue.toString())}
          />
        ))}
      </div>
    );
  };

  return (
    <Formik
      initialValues={{
        raiting: userRating || DEFAULT_RATING,
        review: userReview || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Label name="rating">Rating</Label>
          <RatingComponent
            value={values.raiting}
            setFieldValue={setFieldValue}
          />
          <InputWrapper>
            <ReviewWrapper>
              <Label htmlFor="review">Review</Label>
              {userReview && (
                <EditWrapper>
                  <EditBtn
                    onClick={handleEdit}
                    type="button"
                    disabled={!userReview}
                  >
                    <svg>
                      <use href={sprite + '#icon-pencil'}></use>
                    </svg>
                  </EditBtn>
                  <DeleteBtn type="button" onClick={handleDelete}>
                    <svg>
                      <use href={sprite + '#icon-trash-2'}></use>
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
            <ErrorMessage name="review" component="p" />
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

FeedbackForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
