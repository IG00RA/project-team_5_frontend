import moment from 'moment';
import { WeekDaysWrapper, WeekDay } from './MonthCalendarHead.styled';

const MonthCalendarHead = ({ startDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysOfWeek = [...Array(7)].map(() => day.add(1, 'day').clone());

  return (
    <WeekDaysWrapper>
      {daysOfWeek.map((dayItem, idx) => (
        <li key={dayItem.unix()}>
          <WeekDay $isWeekendDay={dayItem.day() === 6 || dayItem.day() === 0}>
            {moment()
              .day(idx + 1)
              .format('ddd')}
          </WeekDay>
        </li>
      ))}
    </WeekDaysWrapper>
  );
};

export default MonthCalendarHead;
