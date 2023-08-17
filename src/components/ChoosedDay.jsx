import { useOutletContext } from "react-router";
import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { selectFilteredTasksByDate, selectTasks } from "redux/tasks/tasksSelectors";
import moment from "moment";

export default function ChoosedDay() {
  const { currentDay } = useParams();
  const [, setPeriod, updatedDate, setUpdatedDate, setSelectedDay] = useOutletContext();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const formatUpdatedDate = updatedDate.format('YYYY-MM-DD');
  const filteredTask = selectFilteredTasksByDate(tasks, formatUpdatedDate);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, updatedDate, tasks]);

  useEffect(() => {
    setPeriod(true);
    setUpdatedDate(moment(new Date(currentDay.split('-'))));

    return () => { setPeriod(false); setSelectedDay(moment()) };

  }, [setPeriod, currentDay, setUpdatedDate, setSelectedDay ]);

  return (
    <div>
      <DayCalendarHead currentDay={currentDay} updatedDate={formatUpdatedDate} setUpdatedDate={setUpdatedDate} />
      <TasksColumnsList tasks={filteredTask} />
    </div>
  );
};