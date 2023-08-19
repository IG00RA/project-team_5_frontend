import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsChart from '../components/StatisticsChart/StatisticsChart';
import {
  selectFilteredTasksByDate,
  selectTasks,
  selectFilteredTasksByMonth,
} from 'redux/tasks/tasksSelectors';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import moment from 'moment';
import StatisticPaginator from 'components/StatisticPaginator/StatisticPaginator';
import { StatisticsWrapper } from './Statistics/Statistics.styled';

export default function Statistics() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(moment());
  const handleDateChange = newDate => {
    setSelectedDate(newDate);
  };

  const selectedDateFormat = selectedDate.format('YYYY-MM-DD');

  const filteredTasksByDate = selectFilteredTasksByDate(
    tasks,
    selectedDateFormat
  );

  const filteredTasksByMonth = selectFilteredTasksByMonth(
    tasks,
    selectedDateFormat
  );

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, selectedDate]);

  return (
    <StatisticsWrapper>
      <StatisticPaginator
        selectedDate={selectedDate}
        typeOfPeriod={'day'}
        onDateChange={handleDateChange}
      />
      {/* <div style={{ marginLeft: '500px' }}>
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
      </div> */}
      <StatisticsChart
        selectedDate={selectedDateFormat}
        setSelectedDate={setSelectedDate}
        filteredTasksByDate={filteredTasksByDate}
        filteredTasksByMonth={filteredTasksByMonth}
      />
    </StatisticsWrapper>
  );
}
