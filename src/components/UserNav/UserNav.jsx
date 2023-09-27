import moment from 'moment';
import {
  StyledIcon,
  StyledIconChart,
  UserNavWrap,
  UserNavTitle,
  UserNavItem,
} from './UserNav.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const UserNav = ({ closeModalMenu }) => {
  const currentDay = moment();
  const location = useLocation();
  const locationURL = location.pathname;
  const { t } = useTranslation();

  const isCalendarActive = locationURL.startsWith('/calendar');

  const handleCloseModalMenu = () => {
    closeModalMenu(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <UserNavWrap>
      <UserNavTitle>{t('sidebar.userPanel')} </UserNavTitle>
      <UserNavItem to="/account" onClick={handleCloseModalMenu}>
        <StyledIcon>
          <use href={sprite + '#icon-user-check'} />
        </StyledIcon>
        {t('sidebar.myAccount')}
      </UserNavItem>
      <UserNavItem
        to={`/calendar/month/${currentDay.format('YYYY-MM-DD')}`}
        className={isCalendarActive ? 'active' : ''}
        onClick={handleCloseModalMenu}
      >
        <StyledIcon>
          <use href={sprite + '#icon-nav-calendar'} />
        </StyledIcon>
        {t('sidebar.calendar')}
      </UserNavItem>
      <UserNavItem to="/statistics" onClick={handleCloseModalMenu}>
        <StyledIconChart>
          <use href={sprite + '#icon-nav-chart'} />
        </StyledIconChart>
        {t('sidebar.statistics')}
      </UserNavItem>
    </UserNavWrap>
  );
};

UserNav.propTypes = {
  closeModalMenu: PropTypes.func.isRequired,
};

export default UserNav;
