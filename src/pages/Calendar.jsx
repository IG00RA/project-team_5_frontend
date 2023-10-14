import moment from 'moment';
import 'moment/min/locales';
import CalendarToolbar from '../components/CalendarToolbar/CalendarToolbar';

import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Calendar() {
  const currentLang = i18next.language;
  moment.updateLocale(currentLang, { week: { dow: 1 } });

  const date = useSelector(selectDate);
  const [momentDate, setMomentDate] = useState(moment(date));
  const [changePeriod, setChangePeriod] = useState('month');
  const { t } = useTranslation();

  return (
    <>
      <CalendarToolbar
        changePeriod={changePeriod}
        momentDate={momentDate}
        setMomentDate={setMomentDate}
      />
      <Suspense fallback={<div>{t('calendar.loading')}</div>}>
        <Outlet context={[setChangePeriod, setMomentDate]} />
      </Suspense>
    </>
  );
}
