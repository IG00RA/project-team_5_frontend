import React from 'react';
import { Button, Text } from './ChangeProfileButton.styled';

const ChangeProfileButton = ({ onClick, isLoading, disabled }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      id="changeProfileBtn"
    >
      <Text>Save changes</Text>
      {/* {isLoading && <CastomLoader />} */}
    </Button>
  );
};

export default ChangeProfileButton;
