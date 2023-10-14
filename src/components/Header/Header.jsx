import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTasksByDate } from 'redux/tasks/tasksSelectors';
import { useLocation } from 'react-router-dom';
import FeedbackButton from '../Buttons/FeedbackButton/FeedbackButton';
import { UserInfo } from '../UserInfo/UserInfo';
import svgSprite from '../../images/svg-sprite/symbol-defs.svg';
import gooseMotivation from '../../images/svg/motivation-goose.svg';
import {
  AccentText,
  MenuIcon,
  MotivationImg,
  MotivationText,
  Title,
  UserWrap,
  Wrap,
} from './Header.styled';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
import { useTranslation } from 'react-i18next';

const Header = ({ isModalMenuOpen, openMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;
  const pageCalendarDay = currentPath.startsWith('/calendar/day');

  const fileredTask = useSelector(selectFilteredTasksByDate);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const haveTask = () => {
    if (fileredTask?.length > 0) {
      return fileredTask?.find(
        task => task?.category === 'to-do' || task?.category === 'in-progress'
      );
    }
  };

  let title = '';
  const { t } = useTranslation();

  if (currentPath.startsWith('/account')) {
    title = t('userProfile.title');
  } else if (currentPath.startsWith('/calendar')) {
    title = t('calendar.title');
  } else if (currentPath.startsWith('/statistics')) {
    title = t('statistics.title');
  } else {
    title = '';
  }

  return (
    <Wrap>
      {pageCalendarDay && haveTask() && (
        <MotivationImg src={gooseMotivation} alt="goose" />
      )}
      <div>
        <Title>{title}</Title>
        {pageCalendarDay && haveTask() && (
          <MotivationText>
            <AccentText>{t('calendar.accentText')} </AccentText>
            {t('calendar.motivationText')}
          </MotivationText>
        )}
      </div>

      <MenuIcon onClick={openMenu} open={isModalMenuOpen}>
        <use href={svgSprite + `#icon-menu`} />
      </MenuIcon>
      <UserWrap>
        <FeedbackButton onClick={openModal} />
        <UserInfo />
        <AddFeedbackModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          handleClose={closeModal}
        />
      </UserWrap>
    </Wrap>
  );
};

export default Header;
