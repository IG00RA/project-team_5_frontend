import {
  // BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ReferenceLine,
} from 'recharts';
import { StyledBarChart, Wrapper } from './StatisticsChart.styled';
export default function StatisticsChart({
  selectedDate,
  setSelectedDate,
  filteredTasksByDate,
  filteredTasksByMonth,
}) {
  const allTasksByDay = filteredTasksByDate.length;
  const allTasksByMonth = filteredTasksByMonth.length;
  const toDoByDayPercent =
    (filteredTasksByDate?.filter(task => task.category === 'to-do').length /
      allTasksByDay) *
    100;
  const inProgressByDayPercent =
    (filteredTasksByDate?.filter(task => task.category === 'in-progress')
      .length /
      allTasksByDay) *
    100;
  const doneByDayPercent =
    (filteredTasksByDate.filter(task => task.category === 'done').length /
      allTasksByDay) *
    100;

  const toDoByMonthPercent =
    (filteredTasksByDate?.filter(task => task.category === 'to-do').length /
      allTasksByMonth) *
    100;
  const inProgressByMonthPercent =
    (filteredTasksByMonth?.filter(task => task.category === 'in-progress')
      .length /
      allTasksByMonth) *
    100;
  const doneByMonthPercent =
    (filteredTasksByMonth.filter(task => task.category === 'done').length /
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

  const percentages = [0, 20, 40, 60, 80, 100];

  return (
    <Wrapper>
      <StyledBarChart
        width={780}
        height={440}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        title={'Tasks'}
      >
        <CartesianGrid
          strokeDasharray="3 1 2"
          fill="transparent"
          horizontal={false}
          vertical={false}
        ></CartesianGrid>
        <XAxis
          // axisLine="false"
          dataKey="name"
          // stroke="transparent"
        />
        <YAxis
          domain={['dataMin-10', 'dataMax + 10']}
          tickCount={32}
          ticks={percentages}
          // tick={{ dy: -16 }}
          tickSize={21}
        />

        <Tooltip cursor={{ fill: 'transparent' }} />
        <Legend verticalAlign="top" />

        <Bar
          dataKey="byDay"
          fill="#FFD2DD"
          background={{ fill: 'white' }}
          radius={[0, 0, 10, 10]}
          barSize={27}
        >
          <LabelList dataKey="byDay" position={'top'} />
        </Bar>

        <Bar
          dataKey="byMonth"
          fill="#3E85F3"
          barSize={27}
          width="20"
          radius={[0, 0, 10, 10]}
        >
          <LabelList dataKey="byMonth" position={'top'} fill="black" />
        </Bar>
        <ReferenceLine y={0} stroke="#E3F3FF" />
        <ReferenceLine y={20} stroke="#E3F3FF" x1="150" />
        <ReferenceLine y={40} stroke="#E3F3FF" />
        <ReferenceLine y={60} stroke="#E3F3FF" />
        <ReferenceLine y={80} stroke="#E3F3FF" />
        <ReferenceLine y={100} stroke="#E3F3FF" />
      </StyledBarChart>
    </Wrapper>
  );
}

// {"email":"ivan@gmail.com","password":"passwordIvan"}

// <StyledBarChart width={860} height={440} data={data}>
//   {/* <CartesianGrid vertical={false} /> */}
//   <XAxis dataKey="name" />
//   <YAxis tickCount={6} ticks={[0, 20, 40, 60, 80, 100]} />
//   <Tooltip />
//   <Legend
//     iconType="circle"
//     verticalAlign="top"
//     height={36}
//     // wrapperStyle={{ fontSize: '10px' }}
//   />
//   <Bar fill="#FFD2DD" background={{ fill: 'white' }} />
//   <Bar dataKey="byMonth" fill="#3E85F3" />
//   <ReferenceLine y={20} stroke="red" />
//   <ReferenceLine y={40} stroke="red" />
//   <ReferenceLine y={60} stroke="red" />
//   <ReferenceLine y={80} stroke="red" />
//   <ReferenceLine y={100} stroke="red" ifOverflow= />
// </StyledBarChart>
