import moment from 'moment';
import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [currentMonth, setCurrentMonth] = useState(moment());

  const prevMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().add(1, 'month'));
  };

  return (
    <>
      <CalendarToolbar
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        currentMonth={currentMonth}
      />
      <ul>
        <li>
          <NavLink to="month">Month</NavLink>
        </li>
        <li>
          <NavLink to="day">Day</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
