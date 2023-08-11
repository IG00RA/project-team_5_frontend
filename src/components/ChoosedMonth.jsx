import moment from 'moment';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';

export default function ChoosedMonth() {
  const currentMonth = moment();

  const startDay = currentMonth.clone().startOf('month').startOf('week');
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
}
