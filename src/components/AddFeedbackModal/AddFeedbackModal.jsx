import PropTypes from 'prop-types';
import ModalContainer from '../Modal/ModalConatiner';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import {
  CloseBtn,
  CloseIcon,
  FeedBackModalStyles,
} from './feedBackModal.styled';
import svgSprite from '../../images/svg-sprite/symbol-defs.svg';
import { fetchQwnReview } from 'redux/review/reviewOperations';

export const AddFeedbackModal = ({ isOpen, onRequestClose, handleClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQwnReview());
  }, [dispatch]);

  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      <FeedbackForm handleClose={handleClose} />
      <CloseBtn type="button" onClick={handleClose}>
        <CloseIcon className="feedBackModalClose" width="24" height="24">
          <use href={svgSprite + `#icon-x-close`} />
        </CloseIcon>
      </CloseBtn>
      <FeedBackModalStyles />
    </ModalContainer>
  );
};

AddFeedbackModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
