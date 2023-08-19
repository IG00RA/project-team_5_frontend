import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import sprite from '../../images/svg-sprite/symbol-defs.svg';
import {
  Label,
  InputWrapper,
  ReviewWrapper,
  Input,
  FormBtn,
  FormBtnWrapper,
  CancelBtn,
} from './FeedbackForm.styled';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  review: Yup.string()
    .required('Review is required')
    .max(300, 'Review must be at most 300 characters'),
});

export const FeedbackForm = ({ handleClose }) => {
  // const dispatch = useDispatch();
  // const [isEditActive, setIsEditActive] = useState(false);
  return (
    <Formik
      initialValues={{
        rating: '',
        review: '',
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Label name="rating">Rating</Label>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <InputWrapper>
          <ReviewWrapper>
            <Label htmlFor="review">Review</Label>
          </ReviewWrapper>

          <Input
            type="text"
            placeholder="Enter text"
            id="review"
            name="review"
            component="textarea"
          />
          <ErrorMessage name="review" component="div" />
        </InputWrapper>

        <FormBtnWrapper>
          <FormBtn type="submit">Save</FormBtn>
          <CancelBtn type="button" onClick={handleClose}>
            Cancel
          </CancelBtn>
        </FormBtnWrapper>
      </Form>
    </Formik>
  );
};
