import moment from 'moment';

import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
  ShowDayWrapper,
  TaskItemWrapper,
  TasksListWrapper,
} from './CalendarTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useEffect } from 'react';
import { getAllTasks } from 'redux/tasks/tasksOperations';

const TOTAL_CELLS = 35;

const CalendarTable = ({ startDay, selectedDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysCellsInCalendar = [...Array(TOTAL_CELLS)].map(() =>
    day.add(1, 'day').clone()
  );

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => selectedDay.isSame(day, 'month');

  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <GridWrapper>
      {daysCellsInCalendar.map(dayItem => (
        <CellWrapper
          key={dayItem.unix()}
          to={`/calendar/day/${dayItem.format('YYYY-MM-DD')}`}
        >
          <RowInCell>
            <ShowDayWrapper>
              <DayWrapper
                $isNotCurrentDay
                $isSelectedMonth={isSelectedMonth(dayItem)}
              >
                {isCurrentDay(dayItem) ? (
                  <CurrentDay>{dayItem.format('D')}</CurrentDay>
                ) : (
                  dayItem.format('D')
                )}
              </DayWrapper>
            </ShowDayWrapper>
            <TasksListWrapper>
              {tasks?.filter(task => task?.date >= dayItem.format('YYYY-MM-DD') && task?.date <= dayItem.clone().endOf('day').format('YYYY-MM-DD'))
              .map(task => (
                  <li key={task._id}>
                    <TaskItemWrapper $priority={task.priority}>
                      {task.title}
                    </TaskItemWrapper>
                  </li>
                ))}
            </TasksListWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarTable;
