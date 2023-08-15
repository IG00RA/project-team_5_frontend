import moment from 'moment';
import axios from 'axios';
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
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTasks } from 'redux/tasks/tasksSelectors';
import { useState } from 'react';
// import { getAllTasks } from 'redux/tasks/tasksOperations';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDczNThkMDA5YWQ2OTEwN2EzZDNkNSIsImlhdCI6MTY5MjAwODgwOCwiZXhwIjoxNjkyMDkxNjA4fQ.NHUku1fFRQllx9EiHj9H7Yhv1-bzvq8hhtyesn5AH8E';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const TOTAL_DAYS = 35;

const CalendarTable = ({ startDay, selectedDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(TOTAL_DAYS)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => selectedDay.isSame(day, 'month');

  const [
    tasks,
    // , setTasks
  ] = useState([]);

  // const startDateQuery = moment().clone().startOf('month');
  // // console.log(startDateQuery);
  // const endDateQuery = moment().clone().endOf('month');
  // // console.log(endDateQuery);

  // useEffect(() => {
  //   (async () => {
  //     const params = {
  //       date: moment().format('X'),
  //     };
  //     const { data } = await axios(
  //       `https://project-team-5-backend.onrender.com/api/tasks?date_gte=${startDateQuery}&date_lte=${endDateQuery}`,
  //       { params }
  //     );
  //     setTasks([...data]);
  //     // console.log(data);
  //   })();
  // }, [selectedDay]);

  // const taskDate = tasks.map(item => {
  //   return item.date;
  // });
  // console.log(taskDate);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllTasks());
  // }, [dispatch]);

  return (
    <GridWrapper>
      {daysArray.map(dayItem => (
        <CellWrapper
          key={dayItem.unix()}
          to={`/calendar/day/${dayItem.format('YYYY:MM:DD')}`}
        >
          <RowInCell>
            <ShowDayWrapper>
              <DayWrapper $isSelectedMonth={isSelectedMonth(dayItem)}>
                {isCurrentDay(dayItem) ? (
                  <CurrentDay>{dayItem.format('D')}</CurrentDay>
                ) : (
                  dayItem.format('D')
                )}
              </DayWrapper>
            </ShowDayWrapper>
            <TasksListWrapper>
              {tasks
                .filter(
                  task =>
                    task.date >= dayItem.format() &&
                    task.date <= dayItem.clone().endOf('day').format()
                )
                .map(event => (
                  <li key={event.createdAt}>
                    <TaskItemWrapper>{event.title}</TaskItemWrapper>
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
