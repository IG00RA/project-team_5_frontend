import PropTypes from 'prop-types';
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { Img, Item, ItemWrapper, Text, TextWrapper, Title, UserWrapper } from "./TaskColumnCard.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";

export const TaskColumnCard = ({ task, openModal, ColumnTitle, provided }) => {
  const image = 'https://as2.ftcdn.net/v2/jpg/03/59/58/91/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg';

  const { avatarURL, userName } = useSelector(selectUser);

  return (
    <Item {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      <Title>{task.title}</Title>
      <ItemWrapper>
        <UserWrapper>
          <Img src={avatarURL ? avatarURL : image} alt={userName} />
          <TextWrapper $priority={task.priority}><Text>{task.priority}</Text></TextWrapper>
        </UserWrapper>
        <TaskToolbar openModal={openModal} task={task} ColumnTitle={ColumnTitle} />
      </ItemWrapper>
    </Item>
  );
};

TaskColumnCard.propTypes = {
  ColumnTitle: PropTypes.string.isRequired,
  task: PropTypes.shape().isRequired,
  openModal: PropTypes.func.isRequired,
};