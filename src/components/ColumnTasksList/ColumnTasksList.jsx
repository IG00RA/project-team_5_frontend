import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { List } from "./ColumnTasksList.styled";

export const ColumnTasksList = ({tasksColection}) => {
  return (
    <List>
      {tasksColection.map(task => (
        <TaskColumnCard key={task._id} task={task} />
      ))}
    </List>
  );
};