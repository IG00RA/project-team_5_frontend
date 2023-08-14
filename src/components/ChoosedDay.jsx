import { useParams } from "react-router";
import { DayCalendarHead } from "./DayCalendarHead/DayCalendarHead";
import { TasksColumnsList } from "./TasksColumnsList/TasksColumnsList";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDczNThkMDA5YWQ2OTEwN2EzZDNkNSIsImlhdCI6MTY5MjAwODgwOCwiZXhwIjoxNjkyMDkxNjA4fQ.NHUku1fFRQllx9EiHj9H7Yhv1-bzvq8hhtyesn5AH8E";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export default function ChoosedDay() {
  const { currentDay } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios("https://project-team-5-backend.onrender.com/api/tasks");
      const filteredTasksByDate = data.filter(task => moment(task.date).format("YYYY:MM:DD") === currentDay);
      setTasks(filteredTasksByDate);
    })();
  }, [currentDay, setTasks]);

  return (
    <div>
      <DayCalendarHead currentDay={currentDay} />
      <TasksColumnsList tasks={tasks} />
    </div>
  );
};