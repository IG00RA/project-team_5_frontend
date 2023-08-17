import moment from 'moment';
import {
  StyledIcon,
  UserNavWrap,
  UserNavTitle,
  UserNavItem,
} from './UserNav.styled';
import React from 'react';
import sprite from '../../images/svg-sprite/symbol-defs.svg';

const UserNav = ({ closeModalMenu }) => {
  const currentDay = moment();

  const handleCloseModalMenu = () => {
    closeModalMenu(false);
  };

  return (
    <UserNavWrap>
      <UserNavTitle>{`User Panel`} </UserNavTitle>
      <UserNavItem to="/account" onClick={handleCloseModalMenu}>
      <StyledIcon>
            <use href={sprite + '#icon-user-check'} />
        </StyledIcon>
        {`My Account`}
      </UserNavItem>
      <UserNavItem
        to={`/calendar/month/${currentDay.format('YYYY-MM-DD')}`}
        onClick={handleCloseModalMenu}
      >
        <StyledIcon>
             <use href={sprite + '#icon-nav-calendar'} />
         </StyledIcon>
        {`Calendar`}
      </UserNavItem>
      <UserNavItem to="/statistics" onClick={handleCloseModalMenu}>
      <StyledIcon>
           <use href={sprite + '#icon-nav-chart'} />
        </StyledIcon>
        {`Statistics`}
      </UserNavItem>
    </UserNavWrap>
  );
};

export default UserNav;
