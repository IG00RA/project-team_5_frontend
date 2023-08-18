import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function StatisticsChart({
  selectedDate,
  setSelectedDate,
  filteredTasksByDate,
  filteredTasksByMonth,
}) {
  const allTasksByDay = filteredTasksByDate.length;
  const allTasksByMonth = filteredTasksByMonth.length;
  const toDoByDayPercent =
    (filteredTasksByDate?.filter(task => task?.category === 'to-do').length /
      allTasksByDay) *
    100;
  const inProgressByDayPercent =
    (filteredTasksByDate?.filter(task => task?.category === 'in-progress')
      .length /
      allTasksByDay) *
    100;
  const doneByDayPercent =
    (filteredTasksByDate.filter(task => task?.category === 'done').length /
      allTasksByDay) *
    100;

  const toDoByMonthPercent =
    (filteredTasksByDate?.filter(task => task?.category === 'to-do').length /
      allTasksByMonth) *
    100;
  const inProgressByMonthPercent =
    (filteredTasksByMonth?.filter(task => task?.category === 'in-progress')
      .length /
      allTasksByMonth) *
    100;
  const doneByMonthPercent =
    (filteredTasksByMonth.filter(task => task?.category === 'done').length /
      allTasksByMonth) *
    100;

  const data = [
    {
      name: 'To Do',
      byDay: toDoByDayPercent,
      byMonth: toDoByMonthPercent,
    },
    {
      name: 'In Progress',
      byDay: inProgressByDayPercent,
      byMonth: inProgressByMonthPercent,
    },
    {
      name: 'Done',
      byDay: doneByDayPercent,
      byMonth: doneByMonthPercent,
    },
  ];

  return (
    <BarChart
      width={860}
      height={440}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickCount={6} ticks={[0, 20, 40, 60, 80, 100]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="byDay" fill="#FFD2DD" background={{ fill: 'white' }} />
      <Bar dataKey="byMonth" fill="#3E85F3" />
    </BarChart>
  );
}

// {"email":"ivan@gmail.com","password":"passwordIvan"}
