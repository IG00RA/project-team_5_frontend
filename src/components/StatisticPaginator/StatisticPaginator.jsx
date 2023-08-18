import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import // BtnNext,
// BtnPrev,
// PaginatorWrapper,
// Period,
'./StatisticPaginator.styled';
import { forwardRef, useState } from 'react';
import { DatePickerWrapper, Period } from './StatisticPaginator.styled';

const StatisticPaginator = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Period onClick={onClick} ref={ref}>
      {value}
    </Period>
  ));

  return (
    <DatePickerWrapper>
      <DatePicker
        dateFormat="dd MMM yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
      />
    </DatePickerWrapper>
  );
};

export default StatisticPaginator;

// export default function StatisticPaginator({
//   selectedDate,
//   onDateChange,
//   typeOfPeriod,
// }) {
//   const formattedPeriod =
//     typeOfPeriod === 'month'
//       ? selectedDate.format('MMMM YYYY')
//       : selectedDate.format('D MMMM YYYY');
//   const prevHandler = () => {
//     if (typeOfPeriod === 'month') {
//       onDateChange(prev => prev.clone().subtract(1, 'month'));
//     } else if (typeOfPeriod === 'day') {
//       onDateChange(prev => prev.clone().subtract(1, 'day'));
//     }
//   };
//   const nextHandler = () => {
//     if (typeOfPeriod === 'month') {
//       onDateChange(prev => prev.clone().add(1, 'month'));
//     } else if (typeOfPeriod === 'day') {
//       onDateChange(prev => prev.clone().add(1, 'day'));
//     }
//   };
//   return (
//     <PaginatorWrapper>
//       <Period>{formattedPeriod}</Period>
//       <div>
//         <BtnPrev onClick={prevHandler}>&lt;</BtnPrev>
//         <BtnNext onClick={nextHandler}>&gt;</BtnNext>
//       </div>
//     </PaginatorWrapper>
//   );
// }
