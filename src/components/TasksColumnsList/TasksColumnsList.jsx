import { TasksColumn } from "../TasksColumn/TasksColumn";
import { List } from "./TasksColumnsList.styled";

const columnsList = ['To do', 'In progress', 'Done'];

export const TasksColumnsList = ({ tasks }) => {
  
  const getTasksColection = (TasksColumnName) => {
    const normalizedStringCategory = TasksColumnName.split(' ').join('-').toLowerCase();

    return tasks.filter(task => task.category === normalizedStringCategory);
  };

  return (
    <List>
      {columnsList.map(item =>
        <TasksColumn key={item} title={item} tasksColection={getTasksColection(item)}></TasksColumn>)}
    </List>
  );
};