import moment from 'moment';
import { useOutletContext } from 'react-router-dom';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';

export default function ChoosedMonth() {
  const [selectedDay] = useOutletContext();

  const startDay = selectedDay.clone().startOf('month').startOf('week');
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
      <CalendarTable startDay={startDay} selectedDay={selectedDay} />
    </div>
  );
}
