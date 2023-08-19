import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ReferenceLine,
} from 'recharts';
import {
  StyledBarChart,
  Wrapper,
  StyledLegend,
  Text,
} from './StatisticsChart.styled';
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

  const percentages = [0, 20, 40, 60, 80, 100];

  return (
    <Wrapper>
      <Text>Tasks</Text>
      <StyledBarChart
        width={780}
        height={440}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid fill="transparent" horizontal={false} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          domain={['dataMin-10', 0]}
          tickCount={7}
          ticks={percentages}
          // tick={{ dx: 32 }}
          tickSize={32}
        />

        <Tooltip cursor={{ fill: 'transparent' }} />
        <StyledLegend verticalAlign="top" />

        <Bar
          dataKey="byDay"
          fill="#FFD2DD"
          radius={[0, 0, 10, 10]}
          // barSize={27}
        >
          <LabelList dataKey="byDay" position={'top'} />
        </Bar>

        <Bar
          dataKey="byMonth"
          fill="#3E85F3"
          // barSize={27}
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

// YAxis;
// tickCount = { 6} - кількість позначок на вісі
// ticks = { percentages } - найменування позначок на шкалі
// tickSize={32} - визначає довжину позначок на вісі
