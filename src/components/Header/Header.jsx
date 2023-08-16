import { useLocation } from 'react-router-dom';
import FeedbackButton from '../Buttons/FeedbackButton/FeedbackButton';
import { UserInfo } from '../UserInfo/UserInfo';
import svgSprite from '../../images/svg-sprite/symbol-defs.svg';
import gooseMotivation from '../../images/svg/motivation-goose.svg';
import {
  MenuIcon,
  MotivationImg,
  Title,
  UserWrap,
  Wrap,
} from './Header.styled';

export const Header = ({ openMenu }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // const { currentDay } = useParams();
  // const pageCalendarDay = currentPath.startsWith('/calendar/day');
  // const tasks = useSelector();
  // const haveTask = () => {
  //   const tasksForToday = tasks.filter(task => task.date === currentDay);
  //   if (tasksForToday.length > 0) {
  //     const tasksInProgress = tasksForToday[0].tasks.find(
  //       task => task.category === 'toDo' || task.category === 'inProgress');
  //     return tasksInProgress
  //   };
  // };

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
      <Wrap>
        <MotivationImg src={gooseMotivation} alt="goose" />
        <div>
          <Title>{title}</Title>
          <p>Let go of the past and focus on the present!</p>
        </div>

        {/* <Wrap>{pageCalendarDay && haveTask() && (<MotivationImg src={gooseMotivation} alt="goose" />)}
        <div>
          <Title>{title}</Title>
          {pageCalendarDay && haveTask() && (<p>Let go of the past and focus on the present!</p>)}
        </div>  */}

        <MenuIcon onClick={openMenu}>
            <use href={svgSprite + `#icon-menu`} />
        </MenuIcon>

        <UserWrap>
          <FeedbackButton />
          <UserInfo />
        </UserWrap>
      </Wrap>
    </>
  );
};

export default Header;
