import { useOutletContext } from "react-router";
import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { selectFilteredTasksByDate } from "redux/tasks/tasksSelectors";
import { updateDate } from "redux/date/slice";
import moment from "moment";

export default function ChoosedDay() {
  const { currentDay } = useParams();

  const [setChangePeriod, setMomentDate] = useOutletContext();
  
  const dispatch = useDispatch();
  
  const filteredTask = useSelector(selectFilteredTasksByDate);

  useEffect(() => {
    dispatch(getAllTasks());
    setChangePeriod('day');
    setMomentDate(moment(currentDay));
    dispatch(updateDate(currentDay));

    return () => setChangePeriod('month');
  }, [dispatch, setChangePeriod, setMomentDate, currentDay]);

  return (
    <div>
      <DayCalendarHead setMomentDate={setMomentDate} />
      <TasksColumnsList tasks={filteredTask} />
    </div>
  );
};