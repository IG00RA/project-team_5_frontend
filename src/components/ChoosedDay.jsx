import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { selectTasks } from "redux/tasks/tasksSelectors";
import moment from "moment";

export default function ChoosedDay() {
  const { currentDay } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [updatedDate, setUpdatedDate] = useState(currentDay);
  const [filteredTasksByDate, setFilteredTasksByDate] = useState([]);

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch]);

  useEffect(() => {
    const filterTasks = () => {
      return tasks?.filter(task => moment(task.date).format("YYYY:MM:DD") === updatedDate)
    };
    setFilteredTasksByDate(filterTasks());
  }, [updatedDate, tasks]);

  return (
    <div>
      <DayCalendarHead currentDay={currentDay} updatedDate={updatedDate} setUpdatedDate={setUpdatedDate} />
      <TasksColumnsList tasks={filteredTasksByDate} />
    </div>
  );
};