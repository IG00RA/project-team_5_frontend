import ModalContainer from '../Modal/ModalConatiner';
import { FeedBackTitle, CloseBtn, ModalBox } from './feedBackModal.styled';

export const AddFeedbackModal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        <FeedBackTitle>Rating</FeedBackTitle>
        <CloseBtn>
          <svg className="feedBackModalClose" width="24">
            <use href="../images/svg/svg-sprite/synpol-defs.svg#icon-x-close"></use>
          </svg>
        </CloseBtn>
      </ModalBox>
    </ModalContainer>
  );
};
