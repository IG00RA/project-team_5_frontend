import PropTypes from 'prop-types';
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
                  task: {
                    category: normalizedStringCategory(btn),
                    date: task.date,
                    end: task.end,
                    priority: task.priority,
                    start: task.start,
                    title: task.title,
                  },
                  id: task?._id,
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

TaskToolbar.propTypes = {
  ColumnTitle: PropTypes.string.isRequired,
  task: PropTypes.shape().isRequired,
  openModal: PropTypes.func.isRequired,
};
