
import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { selectFilteredTasksByDate, selectTasks } from "redux/tasks/tasksSelectors";

export default function ChoosedDay() {
  const { currentDay } = useParams();

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [updatedDate, setUpdatedDate] = useState(currentDay);
  const filteredTask = selectFilteredTasksByDate(tasks, updatedDate);

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch, updatedDate]);

  return (
    <div>
      <DayCalendarHead currentDay={currentDay} updatedDate={updatedDate} setUpdatedDate={setUpdatedDate} />
      <TasksColumnsList tasks={filteredTask} />
    </div>
  );
}
