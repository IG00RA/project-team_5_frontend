import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import {
  Wrapper,
  Icon,
  CategoryBtn,
  WrapperPopUp,
  PopUpBtn,
  Button,
  IconPopUp,
} from './TaskToolbar.styled';
import { deleteTask, updateTask } from 'redux/tasks/tasksOperations';

const columnsList = ['To do', 'In progress', 'Done'];

export const TaskToolbar = ({ openModal, task, ColumnTitle }) => {
  const buttonsList = columnsList.filter(btn => btn !== ColumnTitle);

  const dispatch = useDispatch();

  const normalizedStringCategory = text => {
    return text?.split(' ').join('-').toLowerCase();
  };

  return (
    <Wrapper>
      <CategoryBtn type="button">
        <Icon>
          <use href={sprite + '#icon-icon-exit'}></use>
        </Icon>
      </CategoryBtn>

      <WrapperPopUp>
        {buttonsList.map(btn => (
          <PopUpBtn
            onClick={() =>
              dispatch(
                updateTask({
                  id: task._id,
                  task: { category: normalizedStringCategory(btn) },
                })
              )
            }
            key={btn}
            type="button"
          >
            <span>{btn}</span>
            <IconPopUp>
              <use href={sprite + '#icon-icon-exit'}></use>
            </IconPopUp>
          </PopUpBtn>
        ))}
      </WrapperPopUp>

      <Button type="button" onClick={() => openModal(task)}>
        <Icon>
          <use href={sprite + '#icon-pencil'}></use>
        </Icon>
      </Button>
      <Button onClick={() => dispatch(deleteTask(task._id))} type="button">
        <Icon>
          <use href={sprite + '#icon-trash-box'}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
