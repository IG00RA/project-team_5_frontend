import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { List } from "./ColumnTasksList.styled";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export const ColumnTasksList = ({ tasksColection, openModal, ColumnTitle }) => {
  const [dragTasks, setDragTask] = useState(tasksColection);

  useEffect(() => { 
    setDragTask(tasksColection);
  }, [tasksColection]);

  const handleOnDragEnd = (res) => {
    if (!res.destination) return;
    const items = [...dragTasks];
    const [reorderedTasks] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderedTasks);
    setDragTask(items);
  };
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='DnD'>
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {dragTasks?.map((task, index) => (
              <Draggable key={task?._id} draggableId={task?._id} index={index}>
                {(provided) => (
                  <TaskColumnCard provided={provided} task={task} openModal={openModal} ColumnTitle={ColumnTitle} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};