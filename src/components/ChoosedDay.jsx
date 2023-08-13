import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";


export default function ChoosedDay() {
  const { currentDay } = useParams();

  return (
    <>
      <DayCalendarHead currentDay={currentDay} />
      <TasksColumnsList />
    </>
  );
};