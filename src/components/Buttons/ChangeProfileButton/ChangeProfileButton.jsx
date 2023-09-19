import { Button, CustomLoader, Text } from './ChangeProfileButton.styled';
import Loader from 'components/Loader/Loader';

const ChangeProfileButton = ({ onClick, isLoading, disabled }) => {
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
        <Text>Save changes</Text>
      )}
    </Button>
  );
};

export default ChangeProfileButton;
