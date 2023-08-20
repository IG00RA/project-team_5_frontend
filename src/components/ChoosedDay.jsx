import { useOutletContext } from "react-router";
import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { selectFilteredTasksByDate, selectTasks } from "redux/tasks/tasksSelectors";
import { selectDate } from "redux/date/selectors";
import { updateDate } from "redux/date/slice";

export default function ChoosedDay() {
  const { currentDay } = useParams();
  const [setChangePeriod] = useOutletContext();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const date = useSelector(selectDate);
  const filteredTask = selectFilteredTasksByDate(tasks, date);

  useEffect(() => {
    dispatch(getAllTasks());
    setChangePeriod('day');
    dispatch(updateDate(currentDay));

    return () => setChangePeriod('month');
  }, [dispatch, setChangePeriod, currentDay]);

  return (
    <div>
      <DayCalendarHead />
      <TasksColumnsList tasks={filteredTask} />
    </div>
  );
};