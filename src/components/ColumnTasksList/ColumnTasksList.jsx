import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { List } from "./ColumnTasksList.styled";

export const ColumnTasksList = ({ tasksColection, openModal, ColumnTitle }) => {
  
  return (
    <List>
      {tasksColection?.map(task => (
        <TaskColumnCard key={task._id} task={task} openModal={openModal} ColumnTitle={ColumnTitle} />
      ))}
    </List>
  );
};