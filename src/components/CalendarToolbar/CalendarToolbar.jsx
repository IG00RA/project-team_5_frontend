import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolBarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = ({
  selectedDay,
  prevMonthHandler,
  nextMonthHandler,
}) => {
  return (
    <CalendarToolBarWrapper>
      <PeriodPaginator
        selectedDay={selectedDay}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
      />
      <PeriodTypeSelect />
    </CalendarToolBarWrapper>
  );
};

export default CalendarToolbar;
