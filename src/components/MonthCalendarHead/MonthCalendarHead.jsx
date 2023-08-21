import moment from 'moment';
import { WeekDaysWrapper, WeekDay } from './MonthCalendarHead.styled';

const MonthCalendarHead = ({ startDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysOfWeek = [...Array(7)].map(() => day.add(1, 'day').clone());

  const currentWidth = window.innerWidth;
  const viewport =
    currentWidth < 768 ? 'mobile' : currentWidth < 1440 ? 'laptop' : 'desctop';

  const setFormat = idx => {
    return viewport === 'mobile'
      ? moment()
          .day(idx + 1)
          .format('dd')[0]
      : moment()
          .day(idx + 1)
          .format('ddd');
  };

  return (
    <WeekDaysWrapper>
      {daysOfWeek.map((dayItem, idx) => (
        <li key={dayItem.unix()}>
          <WeekDay $isWeekendDay={dayItem.day() === 6 || dayItem.day() === 0}>
            {setFormat(idx)}
          </WeekDay>
        </li>
      ))}
    </WeekDaysWrapper>
  );
};

export default MonthCalendarHead;

// Зробити відображення формату дня тижня залежно від адаптиву .format('dd')[0] або .format('ddd')
