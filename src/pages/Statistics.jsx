// import PeriodPaginator from '../components/PeriodPaginator/PeriodPaginator';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsChart from '../components/StatisticsChart/StatisticsChart';
import {
  selectFilteredTasksByDate,
  selectTasks,
  selectFilteredTasksByMonth,
} from 'redux/tasks/tasksSelectors';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import moment from 'moment';
// import { useParams } from 'react-router';

export default function Statistics() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  // const { currentDay } = useParams();

  const [selectedDate, setSelectedDate] = useState(
    moment().subtract(1, 'days').format('YYYY-MM-DD')
  );

  console.log(selectedDate);

  const filteredTasksByDate = selectFilteredTasksByDate(tasks, selectedDate);

  const filteredTasksByMonth = selectFilteredTasksByMonth(tasks, selectedDate);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, selectedDate]);

  // const prevMonthHandler = () => {
  //   setSelectedDate(prev => prev.clone().subtract(1, 'day'));
  // };

  // const nextMonthHandler = () => {
  //   setSelectedDate(prev => prev.clone().add(1, 'day'));
  // };

  console.log(tasks);
  console.log(filteredTasksByDate);
  console.log(filteredTasksByMonth);
  return (
    <div>
      <p>Statistics Page</p>
      {/* <PeriodPaginator ({selectedDay, prevMonthHandler ,nextMonthHandler}) /> */}
      <div style={{ marginLeft: '500px' }}>
        <ul style={{ display: 'flex', gap: '20px' }}>
          <li style={{ display: 'flex' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FFD2DD',
              }}
            ></div>
            <p>By Day</p>
          </li>
          <li style={{ display: 'flex' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#3E85F3',
              }}
            ></div>
            <p>By Month</p>
          </li>
        </ul>
      </div>
      <StatisticsChart
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filteredTasksByDate={filteredTasksByDate}
        filteredTasksByMonth={filteredTasksByMonth}
      />
    </div>
  );
}
