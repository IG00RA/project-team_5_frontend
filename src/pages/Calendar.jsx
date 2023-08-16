import moment from 'moment';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });
  
  const [selectedDay, setSelectedDay] = useState(moment());
  const [updatedDate, setUpdatedDate] = useState(selectedDay);
  const [isChoosedDay, setIsChoosedDay] = useState(false);

  return (
    <>
      <CalendarToolbar
        isChoosedDay={isChoosedDay}
        selectedDay={selectedDay}
        updatedDate={updatedDate}
        setSelectedDay={setSelectedDay}
        setUpdatedDate={setUpdatedDate}
      />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={[selectedDay, setIsChoosedDay, updatedDate, setUpdatedDate, setSelectedDay]} />
      </Suspense>
    </>
  );
};