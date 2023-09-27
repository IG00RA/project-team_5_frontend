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
import { useTranslation } from 'react-i18next';

export const FeedbackForm = ({ handleClose }) => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    rating: Yup.string()
      .required(t('valid.ratingRequired'))
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be at most 5'),
    review: Yup.string()
      .required(t('valid.ratingRequired'))
      .max(300, 'Review must be at most 300 characters'),
  });

  const DEFAULT_RATING = '5';
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
            onChange={() => {
              if (isEditActive || !userReview) {
                setFieldValue('rating', ratingValue.toString());
              }
            }}
          />
        ))}
      </div>
    );
  };

  RatingComponent.propTypes = {
    value: PropTypes.string.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  return (
    <Formik
      initialValues={{
        rating: userRating || DEFAULT_RATING,
        review: userReview || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Label name="rating">{t('feedback.rating')}</Label>
          <RatingComponent
            value={values.rating}
            setFieldValue={setFieldValue}
          />
          <InputWrapper>
            <ReviewWrapper>
              <Label htmlFor="review">{t('feedback.review')}</Label>
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
              placeholder={t('feedback.enterText')}
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
              <FormBtn type="submit">
                {isEditActive ? t('feedback.edit') : t('feedback.save')}
              </FormBtn>
              <CancelBtn type="button" onClick={handleClose}>
                {t('feedback.cancel')}
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
