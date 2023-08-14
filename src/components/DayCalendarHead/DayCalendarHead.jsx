import moment from 'moment';
import { NumberDay, DayCalendarWrapper, DayCalendarBtn } from './DayCalendarHead.styled';
import { useState } from 'react';

export const DayCalendarHead = ({ currentDay }) => {
  const [updatedDate, setUpdatedDate] = useState(currentDay);

  const correctDate = new Date(currentDay.split(':'));
  const startOfWeek = moment(correctDate).startOf('isoWeek');
  const daysOfWeek = [...Array(7)].map((_, index) => moment(startOfWeek).add(index, 'days'));

  return (
    <DayCalendarWrapper>
      {daysOfWeek.map((day) => (
        <DayCalendarBtn onClick={() => setUpdatedDate(day.format('YYYY:MM:DD'))} type='button' key={day}>
          {day.format('ddd')}
          <NumberDay currentday={updatedDate} day={day.format('YYYY:MM:DD')}>{day.format('D')}</NumberDay>
        </DayCalendarBtn>
      ))}
    </DayCalendarWrapper>
  );
};