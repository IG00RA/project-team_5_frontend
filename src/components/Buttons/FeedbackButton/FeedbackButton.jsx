import { FeedbackBtn } from './Feedback.styled';

const FeedbackButton = ({ onClick }) => {
  return (
    <FeedbackBtn type="button" onClick={onClick}>
      Feedback
    </FeedbackBtn>
  );
};

export default FeedbackButton;
