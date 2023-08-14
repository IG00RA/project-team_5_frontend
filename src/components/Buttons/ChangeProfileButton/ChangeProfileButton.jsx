import React from 'react';
import { Button, Text } from './ChangeProfileButton.styled';

const ChangeProfileButton = ({ onClick, disabled }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      id="changeProfileBtn"
    >
      <Text>Save changes</Text>
    </Button>
  );
};

export default ChangeProfileButton;
