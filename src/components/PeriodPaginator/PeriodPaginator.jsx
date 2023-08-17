import {
  BtnNext,
  BtnPrev,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';


export default function PeriodPaginator({ isChoosedDay, selectedDay, updatedDate, setSelectedDay, setUpdatedDate }) {
  const checkDaysOfWeek = updatedDate.format('ddd');


  const prevMonthHandler = () => {
    if (!isChoosedDay) {
      setSelectedDay(prev => prev.clone().subtract(1, 'month'));
      return;
    }
    setSelectedDay(prev => prev.clone().subtract(1, 'day'));
    setUpdatedDate(prev => prev.clone().subtract(1, 'day'));
  };

  const nextMonthHandler = () => {
    if (!isChoosedDay) {
      setSelectedDay(prev => prev.clone().add(1, 'month'));
      return;
    }
    setSelectedDay(prev => prev.clone().add(1, 'day'));
    setUpdatedDate(prev => prev.clone().add(1, 'day'));
  };

  return (
    <PaginatorWrapper>
      <Period>{isChoosedDay ? updatedDate.format('DD MMM YYYY') : selectedDay.format('MMMM YYYY')}</Period>
      <div>
        <BtnPrev disabled={isChoosedDay && checkDaysOfWeek === 'Mon'} onClick={prevMonthHandler}>&lt;</BtnPrev>
        <BtnNext disabled={isChoosedDay && checkDaysOfWeek === 'Sun'} onClick={nextMonthHandler}>&gt;</BtnNext>
      </div>
    </PaginatorWrapper>
  );
}

// Замінити стрілки на СВГ у пагінаторі
