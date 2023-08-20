import moment from 'moment';
import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';

export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });

  const date = useSelector(selectDate);
  const [momentDate, setMomentDate] = useState(moment(date));
  const [changePeriod, setChangePeriod] = useState('month');

  return (
    <>
      <CalendarToolbar changePeriod={changePeriod} momentDate={momentDate} setMomentDate={setMomentDate} />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={[setChangePeriod, setMomentDate]} />
      </Suspense>
    </>
  );
};