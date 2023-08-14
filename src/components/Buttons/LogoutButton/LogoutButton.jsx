import React from 'react';
import sprite from '../../../images/svg-sprite/symbol-defs.svg';
import { LogoutBtn, LogoutBtnText, LogoutIcon } from './Logout.styled';

const LogoutButton = ({ onClick }) => {
  return (
    <LogoutBtn type="button" onClick={onClick}>
      <LogoutBtnText>Logout</LogoutBtnText>
      <div>
        <LogoutIcon>
          <use href={sprite + '#icon-log-out'} />
        </LogoutIcon>
      </div>
    </LogoutBtn>
  );
};

export default LogoutButton;
