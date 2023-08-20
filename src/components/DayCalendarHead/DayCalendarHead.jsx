import moment from 'moment';
import { NumberDay, DayCalendarWrapper, DayCalendarBtn } from './DayCalendarHead.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { updateDate } from 'redux/date/slice';

export const DayCalendarHead = () => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  // const momentDate = moment(date);

  const startOfWeek = moment(date).startOf('isoWeek');
  const daysOfWeek = [...Array(7)].map((_, index) => moment(startOfWeek).add(index, 'days'));

  return (
    <DayCalendarWrapper>
      {daysOfWeek.map((day) => (
        <DayCalendarBtn onClick={() => dispatch(updateDate(day.format('YYYY-MM-DD')))} type='button' key={day}>
          {day.format('ddd')}
          <NumberDay $currentday={date} $day={day.format('YYYY-MM-DD')}>{day.format('D')}</NumberDay>
        </DayCalendarBtn>
      ))}
    </DayCalendarWrapper>
  );
};