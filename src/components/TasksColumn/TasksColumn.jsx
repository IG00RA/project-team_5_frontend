import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { ColumnTasksList } from "../ColumnTasksList/ColumnTasksList";
import { Item } from "./TasksColumn.styled";

export const TasksColumn = ({ title, tasksColection }) => {

  return (
    <Item>
      <ColumnHeadBar title={title} />
      {tasksColection?.length !== 0 && <ColumnTasksList tasksColection={tasksColection} />}
      <AddTaskBtn />
    </Item>
  );
};