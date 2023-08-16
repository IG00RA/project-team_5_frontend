import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'To Do',
    byDay: 40,
    byMonth: 84,
  },
  {
    name: 'In Progress',
    byDay: 30,
    byMonth: 13,
  },
  {
    name: 'Done',
    byDay: 60,
    byMonth: 98,
  },
];

export default function StatisticsChart({
  selectedDate,
  setSelectedDate,
  filteredTasksByDate,
}) {
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
