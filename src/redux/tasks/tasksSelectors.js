import moment from 'moment';

export const selectFilteredTasksByDate = (tasks, date) => {
  return tasks?.filter(task => moment(task?.date).format('YYYY-MM-DD') === date);
};

export const selectFilteredTasksByMonth = (tasks, date) => {
  return tasks?.filter(
    task =>
      moment(task?.date).startOf('month').format('YYYY-MM-DD') <= date &&
      moment(task?.date).clone().endOf('month').format('YYYY-MM-DD') >= date
  );
};

export const selectTasks = state => state.tasks.tasks;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;
