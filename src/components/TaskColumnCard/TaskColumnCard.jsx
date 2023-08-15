import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { Img, Item, ItemWrapper, Text, TextWrapper, Title, UserWrapper } from "./TaskColumnCard.styled";

export const TaskColumnCard = ({ task }) => {
  
  return (
    <Item>
      <Title>{task.title}</Title>
      <ItemWrapper>
        <UserWrapper>
          <Img src="https://sneg.top/uploads/posts/2023-06/1687806511_sneg-top-p-avatarka-zaglushka-pinterest-3.png" alt="" />
          <TextWrapper priority={task.priority}><Text>{task.priority}</Text></TextWrapper>
        </UserWrapper>
        <TaskToolbar />
      </ItemWrapper>
    </Item>
  );
};