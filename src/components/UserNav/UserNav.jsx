import moment from 'moment';
import {
  StyledIcon,
  StyledIconChart,
  UserNavWrap,
  UserNavTitle,
  UserNavItem,
} from './UserNav.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const UserNav = ({ closeModalMenu }) => {
  const currentDay = moment();
  const location = useLocation();
  const locationURL = location.pathname;
  const calendarMatch = useRouteMatch('/calendar');
  console.log(calendarMatch);

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
        className={calendarMatch ? 'active' : ''}
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
