import { TaskModal } from "components/TaskModal/TaskModal";
import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { ColumnTasksList } from "../ColumnTasksList/ColumnTasksList";
import { Item } from "./TasksColumn.styled";
import { useState } from "react";

export const TasksColumn = ({ ColumnTitle, tasksColection }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState(null);

  const openModal = (task = null) => { setIsModalOpen(true); setTask(task) };

  const closeModal = () => { setIsModalOpen(false) };

  return (
    <>
      <Item>
        <ColumnHeadBar ColumnTitle={ColumnTitle} openModal={openModal} />
        {tasksColection?.length !== 0 && <ColumnTasksList openModal={openModal} tasksColection={tasksColection} ColumnTitle={ColumnTitle} />}
        <AddTaskBtn openModal={openModal} />
      </Item>
      <TaskModal ColumnTitle={ColumnTitle} task={task} isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};