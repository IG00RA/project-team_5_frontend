import { Button, CustomLoader, Text } from './ChangeProfileButton.styled';
import Loader from 'components/Loader/Loader';
import { useTranslation } from 'react-i18next';

const ChangeProfileButton = ({ onClick, isLoading, disabled }) => {
  const { t } = useTranslation();
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      id="changeProfileBtn"
    >
      {isLoading ? (
        <CustomLoader>
          <Loader />
        </CustomLoader>
      ) : (
        <Text>{t('userProfile.save')}</Text>
      )}
    </Button>
  );
};

export default ChangeProfileButton;
