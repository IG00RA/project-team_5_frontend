import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredTasksByDateStat,
  selectTasks,
  selectFilteredTasksByMonth,
} from 'redux/tasks/tasksSelectors';
import { getAllTasks } from 'redux/tasks/tasksOperations';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import StatisticPaginator from 'components/StatisticPaginator/StatisticPaginator';
import { StatisticsWrapper, ChartWrapper, Text } from './Statistics.styled';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

export default function Statistics() {
  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(moment());

  const selectedDateFormat = selectedDate.format('YYYY-MM-DD');

  const filteredTasksByDate = selectFilteredTasksByDateStat(
    tasks,
    selectedDateFormat
  );

  const filteredTasksByMonth = selectFilteredTasksByMonth(
    tasks,
    selectedDateFormat
  );

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, selectedDate]);

  return (
    <StatisticsWrapper>
      <StatisticPaginator
        selectedDate={selectedDateFormat}
        setSelectedDate={setSelectedDate}
      />
      <ChartWrapper>
        <Text>{t('statistics.tasks')}</Text>
        <StatisticsChart
          filteredTasksByDate={filteredTasksByDate}
          filteredTasksByMonth={filteredTasksByMonth}
        />
      </ChartWrapper>
    </StatisticsWrapper>
  );
}
