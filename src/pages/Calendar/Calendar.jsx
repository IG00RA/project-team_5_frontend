import moment from 'moment';
import { useState } from 'react';
import CalendarToolbar from '../../components/CalendarToolbar/CalendarToolbar';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
import CalendarWeekDays from '../../components/CalendarWeekDays/CalendarWeekDays';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });

  const [currentMonth, setCurrentMonth] = useState(moment());

  const startDay = currentMonth.clone().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  console.log(calendar);
  // window.moment = moment;

  const prevMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().add(1, 'month'));
  };

  return (
    <div>
      <CalendarToolbar
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        currentMonth={currentMonth}
      />
      <CalendarWeekDays startDay={startDay} />
      <CalendarGrid startDay={startDay} />
    </div>
  );
}
