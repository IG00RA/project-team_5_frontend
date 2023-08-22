import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { Img, Item, ItemWrapper, Text, TextWrapper, Title, UserWrapper } from "./TaskColumnCard.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";

export const TaskColumnCard = ({ task, openModal, ColumnTitle, provided }) => {
  const { avatarURL } = useSelector(selectUser);

  return (
    <Item {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      <Title>{task.title}</Title>
      <ItemWrapper>
        <UserWrapper>
          <Img src={avatarURL} alt="" />
          <TextWrapper $priority={task.priority}><Text>{task.priority}</Text></TextWrapper>
        </UserWrapper>
        <TaskToolbar openModal={openModal} task={task} ColumnTitle={ColumnTitle} />
      </ItemWrapper>
    </Item>
  );
};