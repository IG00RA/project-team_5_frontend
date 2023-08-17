import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { List } from "./ColumnTasksList.styled";
import { useEffect } from "react";

export const ColumnTasksList = ({ tasksColection, openModal }) => {
  
  useEffect(() => { }, [tasksColection]);

  return (
    <List>
      {tasksColection?.map(task => (
        <TaskColumnCard key={task._id} task={task} openModal={openModal} />
      ))}
    </List>
  );
};