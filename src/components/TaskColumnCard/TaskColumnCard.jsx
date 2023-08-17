import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { Img, Item, ItemWrapper, Text, TextWrapper, Title, UserWrapper } from "./TaskColumnCard.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";
<<<<<<< HEAD

export const TaskColumnCard = ({ task }) => {
  const { avatarURL } = useSelector(selectUser);
  
=======

export const TaskColumnCard = ({ task, openModal }) => {
  const { avatarURL } = useSelector(selectUser);

>>>>>>> dev
  return (
    <Item>
      <Title>{task.title}</Title>
      <ItemWrapper>
        <UserWrapper>
          <Img src={avatarURL} alt="" />
          <TextWrapper priority={task.priority}><Text>{task.priority}</Text></TextWrapper>
        </UserWrapper>
        <TaskToolbar id={task._id} openModal={openModal} task={task} />
      </ItemWrapper>
    </Item>
  );
};