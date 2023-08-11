import { WeekDaysWrapper, WeekendDays } from './CalendarWeekDays.styled';

const CalendarWeekDays = () => {
  return (
    <WeekDaysWrapper>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <WeekendDays>Sat</WeekendDays>
      <WeekendDays>Sun</WeekendDays>
    </WeekDaysWrapper>
  );
};

export default CalendarWeekDays;
