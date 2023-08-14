import moment from 'moment';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [selectedDay, setSelectedDay] = useState(moment());

  const prevMonthHandler = () => {
    setSelectedDay(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setSelectedDay(prev => prev.clone().add(1, 'month'));
  };

  return (
    <>
      <CalendarToolbar
        selectedDay={selectedDay}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
      />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={[selectedDay]} />
      </Suspense>
    </>
  );
}
