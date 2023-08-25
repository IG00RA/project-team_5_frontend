import PropTypes from 'prop-types';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Btn, Icon } from "./AddTaskBtn.styled";

export const AddTaskBtn = ({openModal}) => {
  return (
    <Btn type="button" onClick={openModal}>
      <Icon>
        <use href={sprite + '#icon-plus'}></use>
      </Icon>
      Add task</Btn>
  );
};

AddTaskBtn.propTypes = {
  openModal: PropTypes.func.isRequired,
};