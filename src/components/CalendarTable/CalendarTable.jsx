import moment from 'moment';
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
} from './CalendarTable.styled';

const CalendarTable = ({ startDay, selectedDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => selectedDay.isSame(day, 'month');

  return (
    <GridWrapper>
      {daysArray.map(dayItem => (
        <CellWrapper
          key={dayItem.unix()}
          to={`/calendar/day/${dayItem.format('YYYY:MM:DD')}`}
        >
          <RowInCell>
            <DayWrapper $isSelectedMonth={isSelectedMonth(dayItem)}>
              {isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format('D')}</CurrentDay>
              ) : (
                dayItem.format('D')
              )}
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarTable;
