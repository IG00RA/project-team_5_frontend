import {
  Icon,
  PaginatorBtn,
  PaginatorWrapper,
  Period,
} from './PeriodPaginator.styled';
import sprite from '../../images/svg-sprite/symbol-defs.svg';

export default function PeriodPaginator({
  isChoosedDay,
  selectedDay,
  updatedDate,
  setSelectedDay,
  setUpdatedDate,
}) {
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
      <Period>
        {isChoosedDay
          ? updatedDate.format('DD MMM YYYY')
          : selectedDay.format('MMMM YYYY')}
      </Period>
      <div>
        <PaginatorBtn
          $isPrevBtn
          disabled={isChoosedDay && checkDaysOfWeek === 'Mon'}
          onClick={prevMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-left'}></use>
          </Icon>
        </PaginatorBtn>
        <PaginatorBtn
          disabled={isChoosedDay && checkDaysOfWeek === 'Sun'}
          onClick={nextMonthHandler}
        >
          <Icon>
            <use href={sprite + '#icon-chevron-right'}></use>
          </Icon>
        </PaginatorBtn>
      </div>
    </PaginatorWrapper>
  );
}
