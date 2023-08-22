import moment from 'moment';
import PropTypes from 'prop-types';
import {
  NumberDay,
  DayCalendarWrapper,
  DayCalendarBtn,
} from './DayCalendarHead.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { updateDate } from 'redux/date/slice';

export const DayCalendarHead = ({ setMomentDate }) => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  const startOfWeek = moment(date).startOf('isoWeek');
  const daysOfWeek = [...Array(7)].map((_, index) =>
    moment(startOfWeek).add(index, 'days')
  );

  const currentWidth = window.innerWidth;
  const viewport =
    currentWidth < 768 ? 'mobile' : currentWidth < 1440 ? 'laptop' : 'desktop';

  const handlerDateClick = day => {
    dispatch(updateDate(day.format('YYYY-MM-DD')));
    setMomentDate(day);
  };

  return (
    <DayCalendarWrapper>
      {daysOfWeek.map(day => (
        <DayCalendarBtn
          onClick={() => handlerDateClick(day)}
          type="button"
          key={day}
        >
          {viewport === 'mobile' ? day.format('dd')[0] : day.format('ddd')}
          <NumberDay $currentday={date} $day={day.format('YYYY-MM-DD')}>
            {day.format('D')}
          </NumberDay>
        </DayCalendarBtn>
      ))}
    </DayCalendarWrapper>
  );
};

DayCalendarHead.propTypes = {
  setMomentDate: PropTypes.func.isRequired,
};