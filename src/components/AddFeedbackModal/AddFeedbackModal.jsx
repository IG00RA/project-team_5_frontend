import ModalContainer from '../Modal/ModalConatiner';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import {
  CloseBtn,
  CloseIcon,
  FeedBackModalStyles,
} from './feedBackModal.styled';
import svgSprite from '../../images/svg-sprite/symbol-defs.svg';
export const AddFeedbackModal = ({ isOpen, onRequestClose, handleClose }) => {
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
