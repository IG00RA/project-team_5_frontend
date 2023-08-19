import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { Img, Item, ItemWrapper, Text, TextWrapper, Title, UserWrapper } from "./TaskColumnCard.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";

export const TaskColumnCard = ({ task, openModal, ColumnTitle }) => {
  const { avatarURL } = useSelector(selectUser);

  return (
    <Item>
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