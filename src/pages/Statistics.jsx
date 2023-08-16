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

export default function Statistics() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD')
  );
  console.log(selectedDate);
  const filteredTasksByDate = selectFilteredTasksByDate(tasks, selectedDate);

  const filteredTaskByMonth = selectFilteredTasksByMonth(tasks, selectedDate);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, selectedDate]);

  console.log(tasks);
  console.log(filteredTasksByDate);
  console.log(filteredTaskByMonth);
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
      />
    </div>
  );
}
