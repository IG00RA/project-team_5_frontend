import { TasksColumn } from "../TasksColumn/TasksColumn";

const columnsList = ['To do', 'In progress', 'Done'];

export const TasksColumnsList = () => {

  const getTasksColection = (TasksColumnName) => {
  // функция которая возвращает таски нужной группы, использует фильтр
  };

  return (
    <ul>
      {columnsList.map(item =>
        <TasksColumn key={item} title={item} tasksColection={getTasksColection(item)}></TasksColumn>)}
    </ul>
  );
};