import ModalContainer from "components/Modal/ModalConatiner";
import { TaskForm } from "components/TaskForm/TaskForm";

export const TaskModal = ({ task, isModalOpen, closeModal }) => {

  return (
    <ModalContainer isOpen={isModalOpen} onRequestClose={closeModal} >
      <TaskForm task={task} closeModal={closeModal} />
    </ModalContainer>
  );
};