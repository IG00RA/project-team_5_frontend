import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolBarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = ({ changePeriod, momentDate, setMomentDate }) => {
  
  return (
    <CalendarToolBarWrapper>
      <PeriodPaginator changePeriod={changePeriod} momentDate={momentDate} setMomentDate={setMomentDate} />
      <PeriodTypeSelect />
    </CalendarToolBarWrapper>
  );
};

export default CalendarToolbar;
