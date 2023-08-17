import ModalContainer from "components/Modal/ModalConatiner";
import { TaskForm } from "components/TaskForm/TaskForm";

export const TaskModal = ({ task, isModalOpen, closeModal, ColumnTitle }) => {

  return (
    <ModalContainer isOpen={isModalOpen} onRequestClose={closeModal} >
      <TaskForm ColumnTitle={ColumnTitle} task={task} closeModal={closeModal} />
    </ModalContainer>
  );
};