import PropTypes from 'prop-types';
import ModalContainer from "components/Modal/ModalConatiner";
import { TaskForm } from "components/TaskForm/TaskForm";

export const TaskModal = ({ task, isModalOpen, closeModal, ColumnTitle }) => {

  return (
    <ModalContainer isOpen={isModalOpen} onRequestClose={closeModal} >
      <TaskForm ColumnTitle={ColumnTitle} task={task} closeModal={closeModal} />
    </ModalContainer>
  );
};

TaskModal.propTypes = {
  ColumnTitle: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  task: PropTypes.shape(),
};