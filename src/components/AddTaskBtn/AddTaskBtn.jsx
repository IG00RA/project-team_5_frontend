import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Btn, Icon } from "./AddTaskBtn.styled";

export const AddTaskBtn = () => {
  return (
    <Btn type="button">
      <Icon>
        <use href={sprite + '#icon-plus'}></use>
      </Icon>
      Add task</Btn>
  );
};