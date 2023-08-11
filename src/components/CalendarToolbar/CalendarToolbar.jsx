import {
  BtnDay,
  BtnMonth,
  BtnNext,
  BtnPrev,
  CalendarToolBarWrapper,
  Month,
  MonthNavWrapper,
} from './CalendarToolbar.styled';

const CalendarToolbar = ({
  currentMonth,
  prevMonthHandler,
  nextMonthHandler,
}) => {
  return (
    <CalendarToolBarWrapper>
      <MonthNavWrapper>
        <Month>{currentMonth.format('MMMM YYYY')}</Month>
        <div>
          <BtnPrev onClick={prevMonthHandler}>&lt;</BtnPrev>
          <BtnNext onClick={nextMonthHandler}>&gt;</BtnNext>
        </div>
      </MonthNavWrapper>
      <div>
        <BtnMonth>Month</BtnMonth>
        <BtnDay>Day</BtnDay>
      </div>
    </CalendarToolBarWrapper>
  );
};

export default CalendarToolbar;
