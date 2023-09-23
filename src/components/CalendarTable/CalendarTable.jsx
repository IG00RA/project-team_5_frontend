import moment from 'moment';

import {
  Cell,
  CurrentDay,
  Day,
  Grid,
  RowInCell,
  ShowDay,
  TaskItem,
  TasksList,
} from './CalendarTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useEffect } from 'react';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import { selectDate } from 'redux/date/selectors';

const TOTAL_CELLS = 42;

const CalendarTable = ({ startDay }) => {
  const date = useSelector(selectDate);

  const day = startDay.clone().subtract(1, 'day');
  const dayCellsInCalendar = [...Array(TOTAL_CELLS)]?.map(() =>
    day.add(1, 'day').clone()
  );

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => moment(date).isSame(day, 'month');

  const tasks = useSelector(selectTasks);

  const setDayTask = dayItem => {
    return tasks
      ?.filter(
        task =>
          task?.date >= dayItem.format('YYYY-MM-DD') &&
          task?.date <= dayItem.clone().endOf('day').format('YYYY-MM-DD')
      )
      .map(task => (
        <li key={task._id}>
          <TaskItem $priority={task.priority}>{task.title}</TaskItem>
        </li>
      ));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <Grid>
      {dayCellsInCalendar?.map(dayItem => (
        <Cell
          key={dayItem.unix()}
          $isSelectedMonth={isSelectedMonth(dayItem)}
          to={
            isSelectedMonth(dayItem)
              ? `/calendar/day/${dayItem.format('YYYY-MM-DD')}`
              : ''
          }
        >
          <RowInCell>
            <ShowDay>
              <Day $isNotCurrentDay $isSelectedMonth={isSelectedMonth(dayItem)}>
                {isCurrentDay(dayItem) ? (
                  <CurrentDay>{dayItem.format('D')}</CurrentDay>
                ) : (
                  dayItem.format('D')
                )}
              </Day>
            </ShowDay>

            <TasksList>
              {isSelectedMonth(dayItem) ? setDayTask(dayItem) : ''}
            </TasksList>
          </RowInCell>
        </Cell>
      ))}
    </Grid>
  );
};

export default CalendarTable;
