import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";


export default function ChoosedDay() {
  const { currentDay } = useParams();

  return (
    <>
      <DayCalendarHead currentDay={currentDay} />
    </>
  );
};