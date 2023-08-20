import moment from 'moment';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });
  
  const [changePeriod, setChangePeriod] = useState('month');

  return (
    <>
      <CalendarToolbar
        changePeriod={changePeriod}
      />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={[setChangePeriod]} />
      </Suspense>
    </>
  );
};