import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  // ReferenceLine,
  BarChart,
} from 'recharts';
import {
  // StyledBarChart,
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
      <BarChart
        width={780}
        height={440}
        data={data}
        barGap={8}
        barCategoryGap={75}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid x={100} stroke="#E3F3FF" vertical={false} />
        <defs>
          <linearGradient
            id="paint0_linear_10533_2456"
            x1="11.4074"
            y1="147"
            x2="11.4074"
            y2="5.34366e-08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFD2DD" />
            <stop offset="0.96875" stop-color="#FFD2DD" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint0_linear_10533_2457"
            x1="11.4074"
            y1="246"
            x2="11.4074"
            y2="8.94245e-08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3E85F3" />
            <stop offset="1" stop-color="#3E85F3" stop-opacity="0" />
          </linearGradient>
        </defs>
        <XAxis
          // axisLine="false"
          dataKey="name"
          // stroke="transparent"
        />
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
          fill="url(#paint0_linear_10533_2456)"
          radius={[0, 0, 7, 7]}
          barSize={22}
        >
          <LabelList dataKey="byDay" position={'top'} />
        </Bar>

        <Bar
          dataKey="byMonth"
          fill="url(#paint0_linear_10533_2457)"
          barSize={22}
          radius={[0, 0, 7, 7]}
        >
          <LabelList dataKey="byMonth" position={'top'} fill="black" />
        </Bar>
        {/* <ReferenceLine y={0} stroke="#E3F3FF" />
        <ReferenceLine y={20} stroke="#E3F3FF" x1="150" />
        <ReferenceLine y={40} stroke="#E3F3FF" />
        <ReferenceLine y={60} stroke="#E3F3FF" />
        <ReferenceLine y={80} stroke="#E3F3FF" />
        <ReferenceLine y={100} stroke="#E3F3FF" /> */}
      </BarChart>
    </Wrapper>
  );
}

// {"email":"ivan@gmail.com","password":"passwordIvan"}

// YAxis;
// tickCount = { 6} - кількість позначок на вісі
// ticks = { percentages } - найменування позначок на шкалі
// tickSize={32} - визначає довжину позначок на вісі
