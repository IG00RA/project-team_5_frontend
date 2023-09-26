import { FeedbackBtn } from './Feedback.styled';
import { useTranslation } from 'react-i18next';

const FeedbackButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <FeedbackBtn type="button" onClick={onClick}>
      {t('userProfile.feedback')}
    </FeedbackBtn>
  );
};

export default FeedbackButton;
