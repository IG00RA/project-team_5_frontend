import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolBarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = ({ isChoosedDay, selectedDay, updatedDate, setSelectedDay, setUpdatedDate }) => {
  
  return (
    <CalendarToolBarWrapper>
      <PeriodPaginator
        isChoosedDay={isChoosedDay}
        selectedDay={selectedDay}
        updatedDate={updatedDate}
        setSelectedDay={setSelectedDay}
        setUpdatedDate={setUpdatedDate}
      />
      <PeriodTypeSelect />
    </CalendarToolBarWrapper>
  );
};

export default CalendarToolbar;
