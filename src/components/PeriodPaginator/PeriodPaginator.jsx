import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';

export default function PeriodPaginator({
  currentMonth,
  prevMonthHandler,
  nextMonthHandler,
}) {
  return (
    <PaginatorWrapper>
      <Period>{currentMonth.format('MMMM YYYY')}</Period>
      <div>
        <BtnPrev onClick={prevMonthHandler}>&lt;</BtnPrev>
        <BtnNext onClick={nextMonthHandler}>&gt;</BtnNext>
      </div>
    </PaginatorWrapper>
  );
}
