import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';

export default function PeriodPaginator({
  selectedDay,
  prevMonthHandler,
  nextMonthHandler,
}) {
  return (
    <PaginatorWrapper>
      <Period>{selectedDay.format('MMMM YYYY')}</Period>
      <div>
        <BtnPrev onClick={prevMonthHandler}>&lt;</BtnPrev>
        <BtnNext onClick={nextMonthHandler}>&gt;</BtnNext>
      </div>
    </PaginatorWrapper>
  );
}
