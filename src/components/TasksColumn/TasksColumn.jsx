import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { ColumnTasksList } from "../ColumnTasksList/ColumnTasksList";

export const TasksColumn = ({ title, tasksColection }) => {
  return (
    <li>
      <ColumnHeadBar title={title} />
      {tasksColection && <ColumnTasksList tasksColection={tasksColection} />}
      <AddTaskBtn />
    </li>
  );
};