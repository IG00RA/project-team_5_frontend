import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  BarChart,
  ResponsiveContainer,
} from 'recharts';

import { selectTheme } from 'redux/user/selectors';
import { darkTheme, lightTheme } from 'utils/theme';
export default function StatisticsChart({
  selectedDate,
  setSelectedDate,
  filteredTasksByDate,
  filteredTasksByMonth,
}) {
  const allTasksByDay = filteredTasksByDate.length;
  console.log(allTasksByDay);

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
  const maxByDayOffset =
    Math.max(toDoByDayPercent, inProgressByDayPercent, doneByDayPercent) /
      100 || 0;

  const maxByMonthOffset =
    Math.max(toDoByMonthPercent, inProgressByMonthPercent, doneByMonthPercent) /
      100 || 0;

  const data = useMemo(
    () => [
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
    ],
    [
      toDoByMonthPercent,
      inProgressByMonthPercent,
      doneByMonthPercent,
      toDoByDayPercent,
      inProgressByDayPercent,
      doneByDayPercent,
    ]
  );

  // const data = [
  //   {
  //     name: 'To Do',
  //     byDay: Math.ceil(toDoByDayPercent),
  //     byMonth: Math.ceil(toDoByMonthPercent),
  //   },
  //   {
  //     name: 'In Progress',
  //     byDay: Math.ceil(inProgressByDayPercent),
  //     byMonth: Math.ceil(inProgressByMonthPercent),
  //   },
  //   {
  //     name: 'Done',
  //     byDay: Math.ceil(doneByDayPercent),
  //     byMonth: Math.ceil(doneByMonthPercent),
  //   },
  // ];

  const theme = useSelector(selectTheme);
  const themeSwitch = theme === 'light' ? lightTheme : darkTheme;

  const colors = {
    category: themeSwitch.colors.statisticsPage.mainText,
    line: themeSwitch.colors.statisticsPage.colorLine,
  };

  const sizes = {
    mobile: {
      gap: 8,
      fontSizeCategory: 12,
      lineHeight: 1.33,
    },
    laptop: {
      gap: 14,
      fontSizeCategory: 14,
      lineHeight: 1.5,
    },
    desctop: {
      gap: 14,
      fontSizeCategory: 14,
      lineHeight: 1.5,
    },
  };

  const currentWidth = window.innerWidth;
  const viewport =
    currentWidth < 768 ? 'mobile' : currentWidth < 1440 ? 'laptop' : 'desctop';

  const percentages = [0, 20, 40, 60, 80, 100];

  const customFormatter = value => (!value ? '' : `${value}%`);

  console.log(colors.line);

  return (
    <>
      <ResponsiveContainer width="100%" minHeight={440}>
        <BarChart
          width={780}
          height={440}
          minHeight={440}
          data={data}
          barGap={sizes[viewport].gap}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="paint0_linear_10525_1738"
              x1="11.4074"
              y1="410"
              x2="11.4074"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD2DD" />
              <stop
                offset={maxByDayOffset}
                stopColor="#FFD2DD"
                stopOpacity="0.1"
              />
            </linearGradient>
            <linearGradient
              id="paint0_linear_10525_1741"
              x1="11.4074"
              y1="410"
              x2="11.4074"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E85F3" />
              <stop
                offset={maxByMonthOffset}
                stopColor="#3E85F3"
                stopOpacity="0.1"
              />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={colors.line} vertical={false} />
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
                fill={colors.category}
                fontFamily="Poppins"
                fontSize={sizes[viewport].fontSizeCategory}
                fontWeight={400}
                style={{ lineHeight: sizes[viewport].lineHeight }}
              >
                {props.payload.value}
              </text>
            )}
          />
          <YAxis
            tickCount={6}
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
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
