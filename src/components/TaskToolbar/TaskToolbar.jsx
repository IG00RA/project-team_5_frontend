import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { Wrapper, Icon, CategoryBtn, WrapperPopUp, PopUpBtn } from './TaskToolbar.styled';
import { deleteTask } from 'redux/tasks/tasksOperations';

const columnsList = ['To do', 'In progress', 'Done'];

export const TaskToolbar = ({ openModal, task, ColumnTitle }) => {

  const buttonsList = columnsList.filter(btn => btn !== ColumnTitle);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CategoryBtn type='button'>
        <Icon>
          <use href={sprite + '#icon-icon-exit'}></use>
        </Icon>
      </CategoryBtn>

      <WrapperPopUp >
        {buttonsList.map(btn => (
          <PopUpBtn type="button">{btn}</PopUpBtn>
        ))}
      </WrapperPopUp>

      <button type='button' onClick={() => openModal(task)}>
        <Icon>
          <use href={sprite + '#icon-pencil'}></use>
        </Icon>
      </button>
      <button onClick={() => dispatch(deleteTask(task._id))} type='button'>
        <Icon>
          <use href={sprite + '#icon-trash-box'}></use>
        </Icon>
      </button>
    </Wrapper>
  );
};