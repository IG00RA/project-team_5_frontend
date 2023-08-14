import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";

export const ColumnTasksList = ({tasksColection}) => {
  return (
    <ul>
      {tasksColection.map(task => (
        <TaskColumnCard key={task._id} task={task} />
      ))}
    </ul>
  );
};