import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useLocation, useParams } from 'react-router-dom';
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
  MotivationText,
  LetGoSpan,
} from './Header.styled';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';

const Header = ({ isModalMenuOpen, openMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { currentDay } = useParams();
  const pageCalendarDay = currentPath.startsWith('/calendar/day');
  const tasksDay = useSelector(selectTasks);
  const haveTask = () => {
    const tasksForToday = tasksDay.filter(task => task.date === currentDay);
    if (tasksForToday.length > 0) {
      const tasksInProgress = tasksDay.find(
        task => task.category === 'to-do' || task.category === 'in-progress'
      );

      return tasksInProgress;
    }
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar')) {
    title = 'Calendar';
  } else if (currentPath.startsWith('/statistics')) {
    title = 'Statistics';
  } else {
    title = '';
  }

  return (
    <>
      {/* <Wrap>
        <MotivationImg src={gooseMotivation} alt="goose" />
        <div>
          <Title>{title}</Title>

          <p><span>Let go </span>of the past and focus on the present!</p>
        </div> */}

      <Wrap>
        {pageCalendarDay && haveTask() && (
          <MotivationImg src={gooseMotivation} alt="goose" />
        )}
        <div>
          <Title>{title}</Title>
          {pageCalendarDay && haveTask() && (
            <MotivationText>
              <LetGoSpan>Let go </LetGoSpan>of the past and focus on the
              present!
            </MotivationText>
          )}
        </div>

        <MenuIcon onClick={openMenu} isOpen={isModalMenuOpen}>
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
    </>
  );
};

export default Header;
