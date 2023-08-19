import moment from 'moment';
import {
  StyledIcon,
  StyledIconChart,
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
        isActive={(_match, location) => {
          return (
            location.pathname.startsWith(`/calendar/month/${currentDay.format('YYYY-MM-DD')}`) ||
            location.pathname.startsWith(`/calendar/day/${currentDay.format('YYYY-MM-DD')}`)
          );
        }}
        onClick={handleCloseModalMenu}
      >
        <StyledIcon>
          <use href={sprite + '#icon-nav-calendar'} />
        </StyledIcon>
        {`Calendar`}
      </UserNavItem>
      <UserNavItem to="/statistics" onClick={handleCloseModalMenu}>
        <StyledIconChart>
          <use href={sprite + '#icon-nav-chart'} />
        </StyledIconChart>
        {`Statistics`}
      </UserNavItem>
    </UserNavWrap>
  );
};

export default UserNav;
