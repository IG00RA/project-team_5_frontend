import moment from 'moment';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';

export default function ChoosedMonth() {
  const date = useSelector(selectDate);
  
  const startDay = moment(date).clone().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  return (
    <div>
      <MonthCalendarHead startDay={startDay} />
      <CalendarTable startDay={startDay} />
    </div>
  );
};