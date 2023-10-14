import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import i18next from 'i18next';
import { WeekDaysWrapper, WeekDay } from './MonthCalendarHead.styled';

const MonthCalendarHead = () => {
  const date = useSelector(selectDate);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const currentWidth = window.innerWidth;
  const viewport =
    currentWidth < 768 ? 'mobile' : currentWidth < 1440 ? 'laptop' : 'desktop';

  const setFormat = idx => {
    return viewport === 'mobile'
      ? moment()
          .day(idx + 1)
          .format('dd')[0]
      : moment()
          .day(idx + 1)
          .format('ddd');
  };

  useEffect(() => {
    const startOfWeek = moment(date).startOf('isoWeek');
    const updatedDaysOfWeek = [...Array(7)].map((_, index) =>
      moment(startOfWeek).add(index, 'days')
    );
    setDaysOfWeek(updatedDaysOfWeek);
  }, [date]);

  useEffect(() => {
    const updateLanguage = () => {
      const startOfWeek = moment(date).startOf('isoWeek');
      const updatedDaysOfWeek = [...Array(7)].map((_, index) =>
        moment(startOfWeek).add(index, 'days')
      );
      setDaysOfWeek(updatedDaysOfWeek);
    };

    i18next.on('languageChanged', updateLanguage);
    return () => {
      i18next.off('languageChanged', updateLanguage);
    };
  }, [date]);

  return (
    <WeekDaysWrapper>
      {daysOfWeek.map((dayItem, idx) => (
        <li key={dayItem.unix()}>
          <WeekDay $isWeekendDay={dayItem.day() === 6 || dayItem.day() === 0}>
            {setFormat(idx)}
          </WeekDay>
        </li>
      ))}
    </WeekDaysWrapper>
  );
};

export default MonthCalendarHead;
