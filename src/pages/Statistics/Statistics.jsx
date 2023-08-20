import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredTasksByDate,
  selectTasks,
  selectFilteredTasksByMonth,
} from 'redux/tasks/tasksSelectors';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import StatisticPaginator from 'components/StatisticPaginator/StatisticPaginator';
import { StatisticsWrapper, ChartWrapper, Text } from './Statistics.styled';
import moment from 'moment';

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
        selectedDate={selectedDateFormat}
        typeOfPeriod={'day'}
        onDateChange={handleDateChange}
        setSelectedDate={setSelectedDate}
      />
      <ChartWrapper>
        <Text>Tasks</Text>
        <StatisticsChart
          selectedDate={selectedDateFormat}
          setSelectedDate={setSelectedDate}
          filteredTasksByDate={filteredTasksByDate}
          filteredTasksByMonth={filteredTasksByMonth}
        />
      </ChartWrapper>
    </StatisticsWrapper>
  );
}
