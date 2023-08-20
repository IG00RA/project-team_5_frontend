import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import {
  selectFilteredTasksByDate,
  selectTasks,
  selectFilteredTasksByMonth,
} from 'redux/tasks/tasksSelectors';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import moment from 'moment';
import StatisticPaginator from 'components/StatisticPaginator/StatisticPaginator';
import { StatisticsWrapper } from './Statistics.styled';

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

      <StatisticsChart
        selectedDate={selectedDateFormat}
        setSelectedDate={setSelectedDate}
        filteredTasksByDate={filteredTasksByDate}
        filteredTasksByMonth={filteredTasksByMonth}
      />
    </StatisticsWrapper>
  );
}
