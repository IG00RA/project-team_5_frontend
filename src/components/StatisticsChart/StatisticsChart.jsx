import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  BarChart,
  ResponsiveContainer,
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
      byDay: Math.ceil(toDoByDayPercent),
      byMonth: Math.ceil(toDoByMonthPercent),
    },
    {
      name: 'In Progress',
      byDay: Math.ceil(inProgressByDayPercent),
      byMonth: Math.ceil(inProgressByMonthPercent),
    },
    {
      name: 'Done',
      byDay: Math.ceil(doneByDayPercent),
      byMonth: Math.ceil(doneByMonthPercent),
    },
  ];

  // const sizes = {
  //   mobile: {
  //     width: 335,
  //   },
  //   laptop: {
  //     width: 640,
  //   },
  //   desctop: {
  //     width: 860,
  //   },
  // };

  // const currentWidth = window.innerWidth;
  // const viewport =
  //   currentWidth < 768 ? 'mobile' : currentWidth < 1440 ? 'laptop' : 'desctop';

  const percentages = [0, 20, 40, 60, 80, 100];
  // const customFormatter = value => `${value}%`;
  const customFormatter = value => (!value ? '' : `${value}%`);

  return (
    <>
      <ResponsiveContainer width="100%" height={440}>
        <BarChart
          width={780}
          height={440}
          data={data}
          barGap={8}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="paint0_linear_10525_1738"
              x1="11.4074"
              y1="246"
              x2="11.4074"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD2DD" />
              <stop offset="0.96875" stopColor="#FFD2DD" />
            </linearGradient>
            <linearGradient
              id="paint0_linear_10525_1741"
              x1="11.4074"
              y1="246"
              x2="11.4074"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E85F3" />
              <stop offset="1" stopColor="#3E85F3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={{ stroke: 'transparent' }}
            dataKey="name"
            tickLine={false}
            stroke="transparent"
            tick={props => (
              <text
                x={props.x}
                y={props.y}
                dy={16}
                textAnchor="middle"
                fill="#343434"
                fontFamily="Poppins"
                fontSize={14}
                fontWeight={400}
              >
                {props.payload.value}
              </text>
            )}
          />
          <YAxis
            // tickCount={6}
            ticks={percentages}
            axisLine={{ stroke: 'transparent' }}
            tickLine={{ stroke: 'transparent' }}
            // tick={{ dx: 32 }}
            // tick={{ dy: -2 }}
            tickSize={32}
          />
          <Bar
            dataKey="byDay"
            fill="url(#paint0_linear_10525_1738)"
            radius={[0, 0, 7, 7]}
            barSize={22}
          >
            <LabelList
              dataKey="byDay"
              position="top"
              offset={8}
              fill="black"
              formatter={customFormatter}
            />
          </Bar>
          <Bar
            dataKey="byMonth"
            fill="url(#paint0_linear_10525_1741)"
            barSize={22}
            radius={[0, 0, 7, 7]}
          >
            <LabelList
              dataKey="byMonth"
              position={'top'}
              fill="#343434"
              fontFamily="Poppins"
              fontSize={16}
              // fontWeight={500}
              formatter={customFormatter}
              isAnimationActive={false}
            />
          </Bar>
          <CartesianGrid
            // x={125}
            stroke="#E3F3FF"
            vertical={false}
            // width={500}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
