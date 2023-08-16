import { useDispatch } from 'react-redux';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Wrapper, Icon } from './TaskToolbar.styled';
import { deleteTask } from 'redux/tasks/tasksOperations';

export const TaskToolbar = ({id}) => {
  const dispatch = useDispatch();

  const handlerDeleteTask = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <Wrapper>
      <button type='button'>
        <Icon>
          <use href={sprite + '#icon-icon-exit'}></use>
        </Icon>
      </button>
      <button type='button'>
        <Icon>
          <use href={sprite + '#icon-pencil'}></use>
        </Icon>
      </button>
      <button onClick={() => {handlerDeleteTask(id)}} type='button'>
        <Icon>
          <use href={sprite + '#icon-trash-box'}></use>
        </Icon>
      </button>
    </Wrapper>
  );
};