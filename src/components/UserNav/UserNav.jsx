import moment from 'moment';
import {
  UserSVG,
  CalendarSVG,
  ChartSVG,
  UserNavWrap,
  UserNavTitle,
  UserNavItem,
} from './UserNav.styled';
import React from 'react';

const UserNav = ({ closeModalMenu }) => {
  const currentDay = moment();

  const handleCloseModalMenu = () => {
    closeModalMenu(false);
  };

  return (
    <UserNavWrap>
      <UserNavTitle>{`sidebar.User Panel`} </UserNavTitle>
      <UserNavItem to="/account" onClick={handleCloseModalMenu}>
        <UserSVG style={{ marginRight: 8, width: 20, height: 20 }} />{' '}
        {`sidebar.My Account`}
      </UserNavItem>
      <UserNavItem
        to={`/calendar/month/${currentDay.format('YYYY-MM-DD')}`}
        onClick={handleCloseModalMenu}
      >
        <CalendarSVG style={{ marginRight: 8, width: 20, height: 20 }} />{' '}
        {`sidebar.Calendar`}
      </UserNavItem>
      <UserNavItem to="/statistics" onClick={handleCloseModalMenu}>
        <ChartSVG style={{ marginRight: 8, width: 20, height: 20 }} />{' '}
        {`sidebar.Statistics`}
      </UserNavItem>
    </UserNavWrap>
  );
};

export default UserNav;
