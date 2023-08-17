// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import ModalContainer from '../Modal/ModalConatiner';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import {
  CloseBtn,
  CloseIcon,
  FeedBackModalStyles,
} from './feedBackModal.styled';
import svgSprite from '../../images/svg-sprite/symbol-defs.svg';

export const AddFeedbackModal = ({ isOpen, onRequestClose, handleClose }) => {
  // const [isSubmit] = useState(false);
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      {/* <FeedBackForm>
      <FeedBackTitle>Rating</FeedBackTitle>
      <Box className='mask-star-2'/>
      <FeedBackTitle>Review</FeedBackTitle>
      <FeedBackArea placeholder='Enter text'/>
      <Box>
      <FeedBackFormBtn type='submit' className='submit-btn'>{isSubmit === false ? 'Save' : 'Edit'}</FeedBackFormBtn>
      <FeedBackFormBtn type='button' className='cancel-btn' onClick={handleClose}>Cancel</FeedBackFormBtn>
      </Box>
      </FeedBackForm> */}
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
