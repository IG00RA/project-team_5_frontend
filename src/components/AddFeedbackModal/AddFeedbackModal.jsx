import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalContainer from '../Modal/ModalConatiner';
import {
  FeedBackTitle,
  CloseBtn,
  FeedBackForm,
  FeedBackArea,
  FeedBackModalStyles,
} from './feedBackModal.styled';

export const AddFeedbackModal = ({ isOpen, onRequestClose }) => {
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      <FeedBackTitle>Rating</FeedBackTitle>
      <CloseBtn>
        <svg className="feedBackModalClose" width="24" height="24">
          <use href="../../images/svg-sprite/symbol-defs.svg#icon-x-close"></use>
        </svg>
      </CloseBtn>
      <FeedBackModalStyles />
    </ModalContainer>
  );
};
