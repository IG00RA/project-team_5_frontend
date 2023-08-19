// import { useState } from 'react';
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
  // const [isModalActive, setIsModalActive] = useState('');
  // if (isOpen) {
  //   setIsModalActive(prev => 'active')
  // } else {
  //   setIsModalActive(prev => '')
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQwnReview());
  }, [dispatch]);

  return (
    <ModalContainer
      /*className={('modal' + isModalActive).trim()}}*/ isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
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
