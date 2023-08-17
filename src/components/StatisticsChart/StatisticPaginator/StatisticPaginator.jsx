import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
} from '../../PeriodPaginator/PeriodPaginator.styled';

export default function StatisticPaginator({
  selectedDate,
  onDateChange,
  typeOfPeriod,
}) {
  const formattedPeriod =
    typeOfPeriod === 'month'
      ? selectedDate.format('MMMM YYYY')
      : selectedDate.format('D MMMM YYYY');
  const prevHandler = () => {
    if (typeOfPeriod === 'month') {
      onDateChange(prev => prev.clone().subtract(1, 'month'));
    } else if (typeOfPeriod === 'day') {
      onDateChange(prev => prev.clone().subtract(1, 'day'));
    }
  };
  const nextHandler = () => {
    if (typeOfPeriod === 'month') {
      onDateChange(prev => prev.clone().add(1, 'month'));
    } else if (typeOfPeriod === 'day') {
      onDateChange(prev => prev.clone().add(1, 'day'));
    }
  };
  return (
    <PaginatorWrapper>
      <Period>{formattedPeriod}</Period>
      <div>
        <BtnPrev onClick={prevHandler}>&lt;</BtnPrev>
        <BtnNext onClick={nextHandler}>&gt;</BtnNext>
      </div>
    </PaginatorWrapper>
  );
}
