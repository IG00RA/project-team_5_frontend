import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';

export default function PeriodPaginator({
  period,
  selectedDay,
  setSelectedDay,
  setUpdatedDate,
}) {
  const checkDaysOfWeek = selectedDay.format('ddd');

  const prevMonthHandler = () => {
    if (!period) {
      setSelectedDay(prev => prev.clone().subtract(1, 'month'));
      return;
    }
    setSelectedDay(prev => prev.clone().subtract(1, 'day'));
    setUpdatedDate(prev => prev.clone().subtract(1, 'day'));
  };

  const nextMonthHandler = () => {
    if (!period) {
      setSelectedDay(prev => prev.clone().add(1, 'month'));
      return;
    }
    setSelectedDay(prev => prev.clone().add(1, 'day'));
    setUpdatedDate(prev => prev.clone().add(1, 'day'));
  };

  return (
    <PaginatorWrapper>
      <Period>
        {period
          ? selectedDay.format('DD MMM YYYY')
          : selectedDay.format('MMMM YYYY')}
      </Period>
      <div>
        <BtnPrev
          disabled={checkDaysOfWeek === 'Mon'}
          onClick={prevMonthHandler}
        >
          &lt;
        </BtnPrev>
        <BtnNext
          disabled={checkDaysOfWeek === 'Sun'}
          onClick={nextMonthHandler}
        >
          &gt;
        </BtnNext>
      </div>
    </PaginatorWrapper>
  );
}

// Замінити стрілки на СВГ у пагінаторі
